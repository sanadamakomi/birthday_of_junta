#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
md2story_v3.py (assets-aware)
-----------------------------
Convert a narrative Markdown into structured JSON for the AVG engine, with:
- Scenes / jumps / choices / commands (bgm/sfx/sprite)
- Dialog with single `sprite=` or multi `sprites=`
- Auto-collect assets (bg, bgm, sfx, sprites) using path templates

Syntax highlights:
  ## Scene: scene_id
  - BG: gate
  - BGM: calm

  [旁白] ……
  [Miki|sprite=miki:smile@0.7] 你好～
  [Junta|sprites=mc:neutral@0.3, miki:smile@0.7] 嗨
  [指令] sprites: clear
  [指令] SFX: bell
  [指令] BGM: fade happy 600 -> play calm
  -> next_scene
  [选择]
  - 去机房 -> scene_lab | set: {"blocker1":"+1"}
  - 去教室 -> scene_class
  - 选4号 -> scene_birthday_party_aoyagi | enabledIf: { "aoyagi": "== 2" }
  @if varX == 2 -> scene_special
  @else -> scene_fallback

Header (optional):
  # Title: My Game
  # StartScene: scene_id

CLI:
  python md2story_v3.py -i story.md -o story.json
  # path templates (default similar to prototype):
  --bg-tmpl "assets/bg/{key}.jpg"
  --bgm-tmpl "assets/bgm/{key}.mp3"
  --sfx-tmpl "assets/sfx/{key}.mp3"
  --sprite-tmpl "assets/sprites/{id}/{pose}.png"
  --no-assets  # do not auto-fill assets maps
"""

import re, json, sys
from pathlib import Path

# -------- Regex --------
SCENE_HEADER_RE = re.compile(r'^\s*##\s*Scene:\s*(?P<name>[A-Za-z0-9_\-]+)\s*$')
META_BG_RE = re.compile(r'^\s*-\s*BG:\s*(?P<bg>[A-Za-z0-9_\-]+)\s*$')
META_BGM_RE = re.compile(r'^\s*-\s*BGM:\s*(?P<bgm>[A-Za-z0-9_\-]+)\s*$')
ARROW_GOTO_RE = re.compile(r'^\s*->\s*(?P<target>[A-Za-z0-9_\-]+)\s*$')
CHOICE_START_RE = re.compile(r'^\s*\[选择\]\s*$')
CHOICE_ITEM_RE = re.compile(r'^\s*-\s*(?P<text>.+?)\s*->\s*(?P<target>[A-Za-z0-9_\-]+)\s*(?:\|\s*set:\s*(?P<setjson>\{.*\}))?\s*$')
CHOICE_LOCK_RE = re.compile(r'^\s*-\s*(?P<text>.+?)\s*->\s*(?P<target>[A-Za-z0-9_\-]+)\s*(?:\|\s*enabledIf:\s*(?P<setjson>\{.*\}))?\s*$')
LINE_RE = re.compile(r'^\[(?P<speaker>[^\]|]+)(?:\|(?P<attrs>[^\]]+))?\]\s*(?P<text>.*)\s*$')

TITLE_RE = re.compile(r'^\s*#\s*Title:\s*(?P<title>.+)$')
START_RE = re.compile(r'^\s*#\s*StartScene:\s*(?P<start>[A-Za-z0-9_\-]+)\s*$')
IFLINE_RE = re.compile(r"^\s*@if\s+(.+?)\s*->\s*([A-Za-z0-9_]+)\s*$")
# ELSELINE_RE = re.compile(r"^\s*@else\s+->\s*(?P<target>[A-Za-z0-9_\-]+)\s*$")
# -------- Helpers --------

UI_DICT = {
    "startBg": "assets/ui/start-bg.jpg",
    "startPanelBg": "assets/ui/start-panel.png",
    "endBg": "assets/ui/end-bg.jpg",
    "endSceneId": "scene_ending"
}

def parse_attrs(attr_str: str):
    """
    Parse "key=value, key2=value2, ..." but allow commas inside a value,
    e.g. "sprites=mc:neutral@0.3,miki:smile@0.7, sfx=bell"
    The rule: only a comma followed by "<key>=" starts a new pair.
    """
    result = {}
    if not attr_str:
        return result
    s = attr_str.strip()
    i = 0
    n = len(s)
    while i < n:
        # Try to match "<key>="
        m = re.match(r'\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*', s[i:])
        if not m:
            # Fallback: bare token until next comma
            j = s.find(',', i)
            if j == -1:
                token = s[i:].strip()
                if token:
                    result[token] = "1"
                break
            else:
                token = s[i:j].strip()
                if token:
                    result[token] = "1"
                i = j + 1
                continue
        key = m.group(1)
        i += m.end()
        # Value goes until next ", <key>=" pattern or end
        start = i
        while True:
            comma = s.find(',', i)
            if comma == -1:
                val = s[start:].strip()
                i = n
                break
            # Check if a new key starts after this comma
            m2 = re.match(r'\s*([A-Za-z_][A-Za-z0-9_]*)\s*=', s[comma+1:])
            if m2:
                val = s[start:comma].strip()
                i = comma + 1
                break
            else:
                # This comma is part of the value; skip it
                i = comma + 1
                continue
        result[key] = val
    return result
    parts = []
    buf = ""
    depth = 0
    for ch in attr_str:
        if ch == ',' and depth == 0:
            parts.append(buf.strip()); buf = ""
        else:
            if ch in '([': depth += 1
            if ch in ')]': depth = max(0, depth-1)
            buf += ch
    if buf.strip():
        parts.append(buf.strip())
    for p in parts:
        if '=' in p:
            k, v = p.split('=', 1)
            result[k.strip()] = v.strip()
        else:
            result[p.strip()] = "1"
    return result

def parse_sprites_list(sval: str, collect=None):
    out = []
    if not sval:
        return out
    for item in [x.strip() for x in sval.split(',') if x.strip()]:
        sid = item
        pose = "neutral"
        x = 0.5
        if '@' in sid:
            sid, xpart = sid.split('@', 1)
            try: x = float(xpart.strip())
            except Exception: x = 0.5
        if ':' in sid:
            sid, pose = [t.strip() for t in sid.split(':', 1)]
        else:
            sid = sid.strip()
        out.append({"id": sid, "pose": pose, "x": x})
        if collect is not None and sid:
            collect.setdefault(sid, set()).add(pose)
    return out

def parse_cmd_from_text(text: str, bgm_keys: set, sfx_keys: set):
    text = text.strip()
    if text.lower().startswith("sprites:"):
        rest = text.split(":",1)[1].strip()
        if rest.lower().startswith("clear"):
            return {"type":"cmd","cmd":{"op":"sprite","action":"clear"}}
    if text.upper().startswith("SFX:"):
        name = text.split(":",1)[1].strip().split()[-1]
        if name: sfx_keys.add(name)
        return {"type":"cmd","cmd":{"op":"sfx","action":"play","name":name}}
    if text.upper().startswith("BGM:"):
        payload = text.split(":",1)[1].strip()
        if "->" in payload:
            left, right = [p.strip() for p in payload.split("->",1)]
            cmd = {"type":"cmd","cmd":{"op":"bgm","actions":[]}}  # composite
            if left.lower().startswith("fade"):
                parts = left.split()
                if len(parts)>=3:
                    _, nm, dur = parts[:3]
                    try: dur = int(dur)
                    except Exception: dur = 600
                    cmd["cmd"]["actions"].append({"type":"fade","name":nm,"durationMs":dur})
                    bgm_keys.add(nm)
            if right.lower().startswith("play"):
                parts = right.split()
                if len(parts)>=2:
                    _, nm2 = parts[:2]
                    cmd["cmd"]["actions"].append({"type":"play","name":nm2})
                    bgm_keys.add(nm2)
            return cmd
        else:
            parts = payload.split()
            if len(parts)>=1:
                action = parts[0].lower()
                name = parts[1] if len(parts)>1 else ""
                if name: bgm_keys.add(name)
                if action in ("play","stop","pause","resume","fade"):
                    obj = {"type":"cmd","cmd":{"op":"bgm","action":action}}
                    if name: obj["cmd"]["name"] = name
                    return obj
    return None

def md_line_to_json(speaker: str, attrs: dict, text: str, sprite_poses: dict, sfx_keys: set):
    # Command lines are handled elsewhere
    obj = {"type":"dialog",
           "speaker": "narrator" if speaker in ("旁白","旁白/narrator","narrator","Narrator", "ナレーション") else speaker,
           "text": text}
    if "sprites" in attrs and attrs["sprites"].strip():
        obj["resetSprites"] = True
        obj["sprites"] = parse_sprites_list(attrs["sprites"], collect=sprite_poses)
    if "sprite" in attrs:
        val = attrs.get("sprite","").strip()
        pose = attrs.get("pose","neutral").strip()
        try: x = float(attrs.get("x","0.5"))
        except Exception: x = 0.5
        if ":" in val or "@" in val:
            ps = parse_sprites_list(val, collect=sprite_poses)
            if ps: obj["sprite"] = ps[0]
        else:
            sid = val
            obj["sprite"] = {"id":sid,"pose":pose,"x":x}
            if sid: sprite_poses.setdefault(sid, set()).add(pose or "neutral")
    # Inline sfx on dialog attribute (e.g., sfx=click)
    if "sfx" in attrs and attrs["sfx"]:
        sfx_keys.add(attrs["sfx"])
        obj["sfx"] = attrs["sfx"]
    return obj

def parse_if_goto(line, variables):
    # @if var OP value -> scene_id
    line = re.sub("^\s+", "", line) 
    m = re.match(r"^@if\s+(.+?)\s*->\s*([A-Za-z0-9_]+)\s*$", line)
    if not m: return None
    cond, target = m.group(1).strip(), m.group(2).strip()
    m2 = re.match(r"^([A-Za-z_][A-Za-z0-9_]*)\s*(==|!=|>=|<=|>|<)\s*(.+)$", cond)
    if not m2: return None
    var, op, val = m2.groups()
    variables.add(var)
    val = val.strip()
    # Normalize booleans / numbers
    if val.lower() in ('true','false'):
        try_val = (val.lower()=='true')
        if op == '==':
            return {"type":"if","if": {var: try_val, "goto": target}}
        else:
            # fallback string encode
            return {"type":"if","if": {var: f"{op}{val}", "goto": target}}
    else:
        # try numeric
        try:
            num = int(val)
        except ValueError:
            try:
                num = float(val)
            except ValueError:
                num = val  # keep as string
        if isinstance(num,(int,float)):
            return {"type":"if","if": {var: f"{op}{num}", "goto": target}}
        else:
            return {"type":"if","if": {var: f"{op}{val}", "goto": target}}

def convert(md_text: str,
            bg_tmpl="assets/bg/{key}.jpg",
            bgm_tmpl="assets/bgm/{key}.mp3",
            sfx_tmpl="assets/sfx/{key}.mp3",
            sprite_tmpl="assets/sprites/{id}/{pose}.png",
            collect_assets=True):
    lines = md_text.splitlines()
    story = {
        "meta": {"title": "Untitled", "version": "3.1.0", "startScene": None, "ui": UI_DICT},
        "assets": {"bg": {}, "bgm": {}, "sfx": {}, "sprites": {}},
        "variables": {},
        "scenes": {}
    }

    current_scene = None
    pending_choice = None

    # collectors
    bg_keys, bgm_keys, sfx_keys = set(), set(), set()
    sprite_poses = {}
    variables = set()

    for raw in lines:
        s = raw.rstrip("\n")

        mtitle = TITLE_RE.match(s)
        if mtitle:
            story["meta"]["title"] = mtitle.group("title").strip(); continue
        mstart = START_RE.match(s)
        if mstart:
            story["meta"]["startScene"] = mstart.group("start"); continue

        mscene = SCENE_HEADER_RE.match(s)
        if mscene:
            name = mscene.group("name")
            current_scene = {"bg": None, "bgm": None, "lines": [], "next": None}
            story["scenes"][name] = current_scene
            if story["meta"]["startScene"] is None:
                story["meta"]["startScene"] = name
            pending_choice = None
            continue

        if current_scene is None:
            continue

        mbg = META_BG_RE.match(s)
        if mbg:
            current_scene["bg"] = mbg.group("bg"); bg_keys.add(current_scene["bg"]); continue
        mbgm = META_BGM_RE.match(s)
        if mbgm:
            current_scene["bgm"] = mbgm.group("bgm"); bgm_keys.add(current_scene["bgm"]); continue

        mgoto = ARROW_GOTO_RE.match(s)
        
        if mgoto:
            current_scene["next"] = mgoto.group("target"); continue
        
        # mgoto2 = ELSELINE_RE.match(s)
        # if mgoto2:
        #     current_scene["next"] = mgoto2.group("target"); continue

        if CHOICE_START_RE.match(s):
            pending_choice = {"type": "choice", "options": []}
            current_scene["lines"].append(pending_choice); continue

        mchoice = CHOICE_ITEM_RE.match(s)
        if mchoice and pending_choice is not None:
            opt = {"text": mchoice.group("text").strip(),
                   "goto": mchoice.group("target").strip()}
            setjson = mchoice.group("setjson")
            if setjson:
                try:
                    opt["set"] = json.loads(setjson)
                    for k in opt["set"].keys():
                        variables.add(k)
                except Exception:
                    pass
            pending_choice["options"].append(opt); continue

        mchoice2 = CHOICE_LOCK_RE.match(s)
        if mchoice2 and pending_choice is not None:
            opt = {"text": mchoice2.group("text").strip(),
                   "goto": mchoice2.group("target").strip()}
            setjson = mchoice2.group("setjson")
            if setjson:
                try:
                    opt["enabledIf"] = json.loads(setjson)
                    for k in opt["enabledIf"].keys():
                        variables.add(k)
                except Exception:
                    pass
            pending_choice["options"].append(opt); continue

        # Condition
        mif = IFLINE_RE.match(s)
        if mif is not None:
            obj = parse_if_goto(s, variables)
            if obj: 
                current_scene["lines"].append(obj)
            continue

        mline = LINE_RE.match(s.strip())
        if mline:
            speaker = mline.group("speaker").strip()
            attrs = parse_attrs(mline.group("attrs") or "")
            text = mline.group("text").rstrip()
            if speaker.strip() in ("指令","命令","Command","command"):
                cmd = parse_cmd_from_text(text, bgm_keys, sfx_keys)
                if cmd: current_scene["lines"].append(cmd)
            else:
                current_scene["lines"].append(md_line_to_json(speaker, attrs, text, sprite_poses, sfx_keys))
            continue

    # Build variables defaults
    story["variables"] = {v: 0 for v in sorted(variables)}

    # Assemble assets
    if collect_assets:
        story["assets"]["bg"] = {k: bg_tmpl.format(key=k) for k in sorted(bg_keys)}
        story["assets"]["bgm"] = {k: bgm_tmpl.format(key=k) for k in sorted(bgm_keys)}
        story["assets"]["sfx"] = {k: sfx_tmpl.format(key=k) for k in sorted(sfx_keys)}
        # sprites: id -> pose -> path
        sprites_map = {}
        for sid, poses in sprite_poses.items():
            sprites_map[sid] = {}
            for pose in sorted(poses):
                sprites_map[sid][pose] = sprite_tmpl.format(id=sid, pose=pose)
        story["assets"]["sprites"] = sprites_map
    else:
        story["assets"] = {"bg": {}, "bgm": {}, "sfx": {}, "sprites": {}}

    return story

def main():
    import argparse
    p = argparse.ArgumentParser(description="Convert story.md to story.json for AVG engine (assets-aware)")
    p.add_argument("-i", "--input", type=str, required=True, help="Input Markdown file")
    p.add_argument("-o", "--output", type=str, required=True, help="Output JSON file")
    p.add_argument("--bg-tmpl", default="assets/bg/{key}.jpg", help="BG path template")
    p.add_argument("--bgm-tmpl", default="assets/bgm/{key}.mp3", help="BGM path template")
    p.add_argument("--sfx-tmpl", default="assets/sfx/{key}.mp3", help="SFX path template")
    p.add_argument("--sprite-tmpl", default="assets/sprites/{id}/{pose}.webp", help="Sprite path template")
    p.add_argument("--no-assets", action="store_true", help="Do not auto-fill assets maps")
    args = p.parse_args()

    md = Path(args.input).read_text(encoding="utf-8")
    out = convert(md,
                  bg_tmpl=args.bg_tmpl,
                  bgm_tmpl=args.bgm_tmpl,
                  sfx_tmpl=args.sfx_tmpl,
                  sprite_tmpl=args.sprite_tmpl,
                  collect_assets=(not args.no_assets))
    Path(args.output).write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {args.output} with {len(out['scenes'])} scenes. StartScene={out['meta'].get('startScene')}")

if __name__ == "__main__":
    main()
