import { useEffect, useMemo, useRef, useState } from 'react'

export default function useStoryEngine(story, lang='ja') {
  const saveId = story?.meta?.saveKey || story?.meta?.id || story?.meta?.title || 'story'
  const SAVE_KEY = `avg_save_${saveId}_${lang}`
  const SAVE_KEY_MANUAL = `avg_save_manual_${saveId}_${lang}`
  // 安全读写封装
  const safeGet = (k) => { try { return localStorage.getItem(k) } catch { return null } }
  const safeSet = (k, v) => { try { localStorage.setItem(k, v) } catch {} }

  const [sceneId, setSceneId] = useState(null)
  const [lineIndex, setLineIndex] = useState(0)
  const [vars, setVars] = useState({})
  const [showingChoices, setShowingChoices] = useState(false)
  const [currentChoices, setCurrentChoices] = useState([])
  const [currentSpeaker, setCurrentSpeaker] = useState('')
  const [currentText, setCurrentText] = useState('')
  const [currentSprites, setCurrentSprites] = useState([])

  const [autoPlay, setAutoPlay] = useState(false)
  const typeDoneRef = useRef(true)
  const autoTimer = useRef(null)
  const pendingSpriteClearRef = useRef(false)
  const sceneChangedRef = useRef(false)

  // 存档读档
  const [typeDoneTick, setTypeDoneTick] = useState(0)  // ← 新增

  // BGM
  const bgmRef = useRef({ audio: null, key: null, needsResume: false })
  const bgmFadeTimer = useRef(null)
  // 🔒 防竞态：每次 bgmPlay/tryPlayEntryBgm 递增，旧 promise 不得回写
  const bgmSeqRef = useRef(0)
  
  // init
  useEffect(() => {
    if (!story) return
    setSceneId(story.meta.startScene)
    setLineIndex(0)
    setVars({ ...(story.variables || {}) })
  }, [story])

  const scene = useMemo(() => story?.scenes?.[sceneId] || null, [story, sceneId])
  const line = useMemo(() => scene?.lines?.[lineIndex] || null, [scene, lineIndex])

  const bgUrl = useMemo(() => {
    if (!scene?.bg) return null
    const entry = story.assets?.bg?.[scene.bg]
    if (!entry) return null
    return typeof entry === 'string' ? entry : (entry['1x'] || entry['2x'] || null)
  }, [story, scene])

  function resolveSpriteUrl(id, pose) {
    const s = story.assets?.sprites || {}
    const combined = s[id]?.[pose] || s[`${id}_${pose}`]
    if (!combined) return null
    return typeof combined === 'string' ? combined : (combined['1x'] || combined['2x'] || null)
  }

  function t(value) {
    if (value == null) return ''
    if (typeof value === 'string') return value
    return value[lang] || value[story?.meta?.i18n?.default || 'ja'] || Object.values(value)[0] || ''
  }
  function nameOf(speaker) { return speaker === 'narrator' ? '' : speaker }

  function clearDialog() { setCurrentSpeaker(''); setCurrentText('') }
  function clearSprites() { setCurrentSprites([]) }

  // Save/Load
  function save(manual=false) {
    let saveIndex = lineIndex;
    let isSceneEnd = false;
    if (scene && saveIndex >= scene.lines.length) {
      saveIndex = scene.lines.length;
      isSceneEnd = true;
    }
    const data = {
      id: saveId, 
      lang,
      sceneId, 
      lineIndex: saveIndex, // 修正：使用 saveIndex, 
      vars,
      isSceneEnd, // 新增标志
      currentText, // 新增：保存显示状态
      currentSpeaker,
      currentSprites: [...currentSprites], // 深拷贝数组
      ts: Date.now()
    }
    safeSet(SAVE_KEY, JSON.stringify(data))
    if (manual) {
      safeSet(SAVE_KEY_MANUAL, JSON.stringify(data))
    }
    // console.log('Saved:', data); // 调试
  }

  function peekSave() {
    try {
      const raw = safeGet(SAVE_KEY)
      // console.log('peekSave:', raw)
      if (!raw) return null
      const sv = JSON.parse(raw)
      // 简单校验
      if (!sv || sv.id !== saveId || sv.lang !== lang) return null
      return sv
    } catch { return null }
  }

  function peekSaveManual() {
    try {
      const raw = safeGet(SAVE_KEY_MANUAL)
      // console.log('peekSaveManual:', raw)
      if (!raw) return null
      const sv = JSON.parse(raw)
      // 简单校验
      if (!sv || sv.id !== saveId || sv.lang !== lang) return null
      return sv
    } catch { return null }
  }

  function load(manual=false) {
    const sv = manual ? peekSaveManual(): peekSave()
    // console.log('load peekSave:', sv)

    if (!sv){
      // console.error('No valid save data');
      return false; // 返回 false 表示加载失败
    } 
    setSceneId(sv.sceneId)
    setLineIndex(sv.lineIndex)
    setVars(sv.vars || {})
    clearDialog()
    clearSprites()
    // 读档后，若该场景定义了BGM，补播一下（否则会静音）
    const target = story.scenes?.[sv.sceneId]
    if (target?.bgm) bgmPlay(target.bgm)
    // 新增：立即执行当前行渲染
    setTimeout(() => {
      if (!target) {
        // console.error('Invalid scene on load');
        return;
      }
      if (sv.lineIndex > target.lines.length) {
        // 安全回退，如果故事变化
        setLineIndex(target.lines.length);
      }
      if (sv.isSceneEnd) {
        // 恢复显示状态，不执行 exec（避免重复）
        setCurrentText(sv.currentText || '');
        setCurrentSpeaker(sv.currentSpeaker || '');
        setCurrentSprites(sv.currentSprites || []);
        if (autoPlay) {
          setTypeDoneTick(x => x + 1); // 触发自动 useEffect 检查 !line 并延迟跳
        }
      } else {
        execCurrentLine();
        if (autoPlay) {
          setTypeDoneTick(x => x + 1);
        }
      }
    }, 0);
  }
  function continueFromSave(manual=false) { 
    load(manual) 
    // 新增：如果当前行已执行但无文本，推进一行
    setTimeout(() => {
      if (!currentText && !showingChoices) next();
    }, 50);
  }
  function startNew() {
    clearDialog(); clearSprites()
    setSceneId(story.meta.startScene)
    setLineIndex(0)
    setVars({ ...(story.variables || {}) })
    const target = story.scenes?.[story.meta.startScene]
    if (target?.bgm) bgmPlay(target.bgm)
  }
  function restart() {
    localStorage.removeItem(SAVE_KEY)
    clearDialog(); clearSprites()
    startNew()
  }

  // ---------------- BGM (race-safe) ----------------
  function bgmStop() {
    if (bgmRef.current.audio) {
      try { bgmRef.current.audio.pause() } catch {}
      bgmRef.current.audio = null
      bgmRef.current.key = null
      bgmRef.current.needsResume = false
    }
  }

  function bgmPlay(key) {
    const url = story.assets?.bgm?.[key]
    if (!url) return true
    // 同曲恢复：直接播放现有音轨
    if (bgmRef.current.key === key && bgmRef.current.audio) {
      return bgmRef.current.audio.play().then(()=>{
        bgmRef.current.needsResume = false; return true
      }).catch(()=>{
        bgmRef.current.needsResume = true; return false
      })
    }
    if (bgmFadeTimer.current) { clearInterval(bgmFadeTimer.current); bgmFadeTimer.current = null }
    // 停掉旧曲，避免并行
    bgmStop()
    // 生成令牌，创建音轨，并在 play() 之前写入 ref，确保能被后续 bgmStop() 捕捉
    const seq = ++bgmSeqRef.current
    const audio = new Audio(url)
    audio.loop = true
    audio.volume = 1
    // 先写入引用，防止“未 resolve 前被第二次 bgmPlay 盖掉句柄”
    bgmRef.current = { audio, key, needsResume: true }
    return audio.play()
      .then(() => {
        // 仅当是当前令牌且同一实例时，才更新状态，防止旧 promise 回写
        if (bgmSeqRef.current === seq && bgmRef.current.audio === audio) {
          bgmRef.current.needsResume = false
        }
        return true
      })
      .catch(() => {
        if (bgmSeqRef.current === seq && bgmRef.current.audio === audio) {
          bgmRef.current.needsResume = true
        }
        return false
      })
  }

  function tryPlayEntryBgm(key) {
    const url = story.assets?.bgm?.[key]
    if (!url) return true
    if (bgmRef.current.audio) return true
    const seq = ++bgmSeqRef.current
    const audio = new Audio(url)
    audio.loop = true
    audio.volume = 1
    // 先写 ref 再播放
    bgmRef.current = { audio, key, needsResume: true }
    audio.play()
      .then(() => {
        if (bgmSeqRef.current === seq && bgmRef.current.audio === audio) {
          bgmRef.current.needsResume = false
        }
      })
      .catch(() => {
        if (bgmSeqRef.current === seq && bgmRef.current.audio === audio) {
          bgmRef.current.needsResume = true
        }
      })
    return !bgmRef.current.needsResume
  }

  function unlockAudio() {
    const a = bgmRef.current.audio
    if (a && bgmRef.current.needsResume) {
      return a.play().then(() => { bgmRef.current.needsResume = false; return true }).catch(()=>false)
    }
    return Promise.resolve(false)
  }

  function bgmFade(durationMs = 600) {
    const target = bgmRef.current.audio
    if (!target) return
    // cancel previous fade
    if (bgmFadeTimer.current) {
      clearInterval(bgmFadeTimer.current)
      bgmFadeTimer.current = null
    }
    const steps = Math.max(1, Math.floor(durationMs / 50))
    let n = 0
    try {
      target.volume = 1
    } catch {}

    const id = setInterval(() => {
      n += 1
      try {
        target.volume = Math.max(0, 1 - n / steps)
      } catch {}
      if (n >= steps) {
        clearInterval(id)
        if (bgmFadeTimer.current === id) bgmFadeTimer.current = null
        // Only stop if it's still the current audio; otherwise pause the old track silently
        if (bgmRef.current.audio === target) {
          bgmStop()
        } else {
          try {
            target.pause()
          } catch {}
        }
      }
    }, 50)
    bgmFadeTimer.current = id
  }

  // Vars / script utils
  function applySet(obj) {
    setVars(v => {
      const next = { ...v }
      Object.entries(obj || {}).forEach(([k, val]) => {
        if (typeof val === 'string' && /^[+-]\d+$/.test(val)) next[k] = (Number(next[k] || 0) + Number(val))
        else next[k] = val
      })
      return next
    })
  }

  function testIf(ifObj) {
    const entries = Object.entries(ifObj || {}).filter(([k]) => k !== 'goto')
    if (!entries.length) return null
    const [varName, comp] = entries[0]
    const goto = ifObj.goto
    const value = vars[varName] ?? 0
    if (typeof comp === 'boolean') return (Boolean(value) === comp) ? goto : null
    const m = String(comp).match(/^(==|!=|>=|<=|>|<)\s*(.+)$/)
    if (!m) return null
    const [, op, rhsRaw] = m
    const lhs = Number(value); const rhs = Number(rhsRaw)
    const ok = { '==': lhs == rhs, '!=': lhs != rhs, '>=': lhs >= rhs, '<=': lhs <= rhs, '>': lhs > rhs, '<': lhs < rhs }[op]
    return ok ? goto : null
  }

  function setOrUpdateSprite(sp, keepPrev = true) {
    if (!sp?.id) return
    setCurrentSprites(prev => {
      const arr = keepPrev ? [...prev] : []
      const i = arr.findIndex(s => s.id === sp.id)
      const x = typeof sp.x === 'number' ? sp.x : 0.5
      const pose = sp.pose || 'normal'
      const entry = { id: sp.id, pose, x }
      if (i >= 0) arr[i] = entry
      else arr.push(entry)
      return arr
    })
  }

  // 返回布尔：条件是否满足（用于选项的启用判断）
  function isCondMet(cond) {
    if (!cond) return true
    if (typeof cond === 'boolean') return cond
    const entries = Object.entries(cond || {}).filter(([k]) => k !== 'goto')
    if (!entries.length) return true
    const [varName, comp] = entries[0]
    const value = vars[varName] ?? 0
    if (typeof comp === 'boolean') return (Boolean(value) === comp)
    const m = String(comp).match(/^(==|!=|>=|<=|>|<)\s*(.+)$/)
    if (!m) return false
    const [, op, rhsRaw] = m
    const lhs = Number(value)
    const rhs = Number(rhsRaw)
    return { '==': lhs == rhs, '!=': lhs != rhs, '>=': lhs >= rhs, '<=': lhs <= rhs, '>': lhs > rhs, '<': lhs < rhs }[op]
  }

  function execCurrentLine() {
    const l = line
    if (!l) return false
    if (l.type === 'dialog') {
      if (pendingSpriteClearRef.current) { clearSprites(); pendingSpriteClearRef.current = false }
      const name = l.speaker === 'narrator' ? '' : nameOf(l.speaker)
      setCurrentSpeaker(name)
      setCurrentText(t(l.text))
      typeDoneRef.current = false
      if (l.resetSprites) clearSprites()
      if (l.sprite) setOrUpdateSprite(l.sprite, false)
      if (Array.isArray(l.sprites)) setCurrentSprites(l.sprites.map(sp => ({ id: sp.id, pose: sp.pose || 'normal', x: (typeof sp.x === 'number' ? sp.x : undefined) })))
      return true
    }
    if (l.type === 'cmd') {
      const { op, action, name, key, duration, list, actions } = l.cmd || {}
      if (op === 'bgm') {
        if (Array.isArray(actions) && actions.length) {
          let fadeMs = 0
          let playName = null
          for (const a of actions) {
            if (a.type === 'fade') fadeMs = a.durationMs || duration || 600
            if (a.type === 'play') playName = a.name || a.key
          }
          if (fadeMs) bgmFade(fadeMs)
          if (playName) bgmPlay(playName)
        }
        else {
          if (action === 'play') bgmPlay(key)
          else if (action === 'stop') bgmStop()
          else if (action === 'fade') bgmFade((duration && Number(duration)) || l.cmd?.durationMs || 600)
        }
      }
      if (op === "sfx" && action === 'play' && (name || key)) {
        const k = name || key
        const url = story.assets?.sfx?.[k]
        if (url) {
          const a = new Audio(typeof url === 'string' ? url : (url['1x'] || url['2x']))
          a.volume = 1
          a.play().catch(()=>{})
        }
      }
      if (op === 'sprite') {
        if (action === 'clear') { pendingSpriteClearRef.current = true; return true }
        if (action === 'set') ((list || l.cmd?.sprites) || []).forEach(sp => setOrUpdateSprite(sp))
      }
      return false
    }
    if (l.type === 'choice') {
      // setShowingChoices(true)
      // setCurrentChoices(((l.choice || l.options) || []).map(c => ({ ...c, text: t(c.text) })))
      // clearDialog() // avoid flashing the previous line
      // return true
      setShowingChoices(true)
      const raw = (l.choice || l.options || [])
      const listed = raw.map(c => {
        const enabled = isCondMet(c.enabledIf || c.if || c.when) // 优先使用 enabledIf
        return { ...c, text: t(c.text), enabled }
      })
      setCurrentChoices(listed)
      clearDialog()
      return true
    }
    if (l.type === 'if' && l.if) {
      const maybe = testIf(l.if)
      if (maybe) { gotoScene(maybe); return true }
      return false
    }
    return false
  }

  function gotoScene(id) {
    sceneChangedRef.current = true
    const target = story.scenes?.[id]
    if (!target) return
    if (target.bgm) bgmPlay(target.bgm)
    
    const prevBg = scene?.bg
    const nextBg = target?.bg
    const bgChanged = (nextBg !== prevBg)
    // 判断立绘集合是否一致（仅在背景相同情况下才比较）
    let spritesChanged = false
    if (!bgChanged) {
      const prevSprites = scene?.sprites || []
      const nextSprites = target?.sprites || []
      if (prevSprites.length !== nextSprites.length) {
        spritesChanged = true
      } else {
        for (let i = 0; i < prevSprites.length; i++) {
          const a = prevSprites[i]
          const b = nextSprites[i]
          if (a.id !== b.id || a.pose !== b.pose) {
            spritesChanged = true
            break
          }
        }
      }
    }
    setSceneId(id)
    setLineIndex(0)
    if (bgChanged || spritesChanged) {
      clearSprites()
    }
    clearDialog()
  }

  function next() {
    clearTimeout(autoTimer.current)
    if (!scene) return
    // 开始前先清除“本轮是否切场”的标志
    sceneChangedRef.current = false

    const executed = execCurrentLine()
    // 如果这一行导致了切场（例如 if 命中后 gotoScene），
    // 此时新场景已把 lineIndex 置为 0；不要再用旧场景推进索引！
    if (sceneChangedRef.current) { setTimeout(save, 0); return }

    const nextIndex = lineIndex + 1
    if (scene.lines && nextIndex <= scene.lines.length) {
      setLineIndex(nextIndex)
    } else {
      if (scene.next) gotoScene(scene.next)
    }
    setTimeout(save, 0)
  }

  function prev() {
    clearTimeout(autoTimer.current)
    if (!scene) return
    if (lineIndex > 0) setLineIndex(i => i - 1)
  }

  function choose(choice) {
    clearTimeout(autoTimer.current)
    if (!choice) return
    if (choice.enabled === false) return  // ← 新增：禁用项不可点击
    setShowingChoices(false)
    clearDialog()
    clearSprites()
    if (choice.set) applySet(choice.set)
    if (choice.goto) gotoScene(choice.goto)
    setTimeout(save, 0)
  }

  // Auto-advance over non-dialog lines (cmd/if) so that clearing sprites, scene switches,
  // and other commands happen immediately without an extra click.
  useEffect(() => {
    if (!scene || showingChoices) return
    const l = line
    if (!l) return
    if (l.type === 'cmd' || (l.type === 'if' && l.if)) {
      // Execute current line immediately and advance to the next one
      // This ensures actions like sprite clearing or bgm changes happen seamlessly
      next()
    }
  }, [sceneId, lineIndex, showingChoices])

  // Auto-play fixed delay
  useEffect(() => {
    clearTimeout(autoTimer.current)
    if (!autoPlay || showingChoices || !typeDoneRef.current) return;
    // 新增：处理空文本但有 line 的情况（例如加载后）
    if (!currentText && line) {
      next();
      return;
    }
    // 新增：处理场景结束（无 line，但有 next）
    if (!line && scene?.next) {
      next(); // 自动跳场景
      return;
    }
    if (!currentText) return;
    const FIXED = Number(story?.meta?.autoDelayMs) || 2000;
    // 动态延迟：基于文本长度
    const delay = Math.max(400, FIXED + (currentText.length * 50));
    autoTimer.current = setTimeout(() => next(), delay);
    return () => clearTimeout(autoTimer.current);
  }, [autoPlay, showingChoices, currentText, lineIndex, sceneId, typeDoneTick]);

  function toggleAuto() { setAutoPlay(a => !a) }
  function markTypewriterDone() { 
    typeDoneRef.current = true 
    setTypeDoneTick(x => x + 1)
  }

  return {
    sceneId,
    bgUrl,
    currentSprites,
    resolveSpriteUrl,
    currentSpeaker,
    currentText,
    showingChoices,
    currentChoices,
    next, prev, choose,
    save, load, peekSave, peekSaveManual,
    startNew, continueFromSave, restart,
    autoPlay, toggleAuto,
    unlockAudio, tryPlayEntryBgm,
    markTypewriterDone,
  }
}
