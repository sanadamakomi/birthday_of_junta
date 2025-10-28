import React, { useEffect, useRef, useState } from 'react'
import useStoryEngine from './engine/useStoryEngine.js'
import DialogBox from './components/DialogBox.jsx'
import ChoiceBox from './components/ChoiceBox.jsx'
import SpriteLayer from './components/SpriteLayer.jsx'
import Modal from './components/Modal.jsx'
import GuideModal from './components/GuideModal'


const LANGS = [
  {
    code: 'ja',
    label: '日本語',
    startTip: '最初から',
    continueTip: '続きから',
    menuTip: 'メニュー',
    saveTip: 'セーブ (S)',
    loadTip: 'ロード (L)',
    saveTipFst: 'クイックセーブに保存',
    saveTipSec: '（現在のクイックセーブ・スロットは1つ。言語ごとに保存されます）',
    loadTipFst: 'クイックセーブを読み込む',
    loadTipSec: '利用可能なセーブはありません',
    choiceTip: '選択肢',
    autoOnTip: 'オート：ON',
    autoOffTip: 'オート：OFF',
    audioTip: '🔈 音声を有効にするには画面をタップしてください',
    guideTip: 'Tips',
    rotateTip:'横向表示がおすすめ', 
    rotateBtn:'横向＆全画面',
    feedbackTip: 'フィードバック',
    helpTip: 'ステージをタップ/クリック または ▶ で進む。A オート再生、S セーブ、L ロード、T Tips、Space/Enter/→ 進む'
  },
  { 
    code: 'zh', 
    label: '中文', 
    startTip: '从头开始', 
    continueTip: '继续游戏', 
    menuTip: '菜单', 
    saveTip: '存档 (S)', 
    loadTip: '读档 (L)', 
    saveTipFst: '保存到快速存档',
    saveTipSec: '（当前 1 个快速存档槽，按语言分开存储）',
    loadTipFst: '读取快速存档',
    loadTipSec: '没有可用的存档',
    choiceTip: '选项',
    autoOnTip: '自动：开', 
    autoOffTip: '自动：关',
    audioTip: '🔈 轻触页面以启用声音',
    guideTip: 'Tips',
    rotateTip:'横屏体验更佳', 
    rotateBtn:'横屏并全屏',
    feedbackTip: '问题反馈',
    helpTip: '点击/触摸舞台或 ▶ 继续；A 自动播放；S 存档；L 读档；T 攻略；空格//Enter/→ 前进'
  },
  {
    code: 'en',
    label: 'English',
    startTip: 'Start Over',
    continueTip: 'Continue',
    menuTip: 'Menu',
    saveTip: 'Save (S)',
    loadTip: 'Load (L)',
    saveTipFst: 'Save to Quick Save',
    saveTipSec: '(One quick-save slot per language.)',
    loadTipFst: 'Load Quick Save',
    loadTipSec: 'No save available',
    autoOnTip: 'Auto: ON',
    autoOffTip: 'Auto: OFF',
    choiceTip: 'Choose',
    audioTip: '🔈 Tap to enable audio',
    guideTip: 'Tips',
    rotateTip:'Best in landscape',
    rotateBtn:'Go landscape & fullscreen',
    feedbackTip: 'Feedback',
    helpTip: 'Tap/Click the stage or ▶ to continue. A: Auto Play, S: Save, L: Load, T: Tips, Space/Enter/→: Next'
  }
]

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('avg_lang') || 'ja')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [story, setStory] = useState(null)
  const stageRef = useRef(null)

  const [showStart, setShowStart] = useState(true)
  const [showSaveModal, setShowSaveModal] = useState(false)
  const [showLoadModal, setShowLoadModal] = useState(false)
  const [audioBlocked, setAudioBlocked] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // 谷歌问题表单
  const FEEDBACK_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScTLQ5DjJ-RMduCMjlG6KNYaHxJ0zH8ULhYWMccNKnFyUr6SQ/viewform?usp=header'
  // 点击菜单项时：
  function openFeedback() {
    window.open(FEEDBACK_URL, '_blank', 'noopener,noreferrer')
    setMenuOpen(false)
  }

  // 竖屏检测（手机上才提示）
  const [isPortrait, setIsPortrait] = useState(false)
  // 顶部：允许竖屏游玩
  const [allowPortrait, setAllowPortrait] = useState(() =>
    localStorage.getItem('avg_allow_portrait') === '1'
  )
  useEffect(() => {
    const mm = window.matchMedia('(orientation: portrait)')
    const update = () => setIsPortrait(mm.matches)
    update()
    mm.addEventListener?.('change', update)
    window.addEventListener('orientationchange', update)
    window.addEventListener('resize', update)
    return () => {
      mm.removeEventListener?.('change', update)
      window.removeEventListener('orientationchange', update)
      window.removeEventListener('resize', update)
  }
  }, [])

  // Android：用户手势后尝试全屏 + 横屏锁定（iOS 会静默失败，没关系）
  async function tryLockLandscape() {
    try {
      const el = document.documentElement // 或 stageRef.current
      if (!document.fullscreenElement && el.requestFullscreen) {
        await el.requestFullscreen()
      }
      if (screen.orientation?.lock) {
        await screen.orientation.lock('landscape')
      }
    } catch (e) {
      // iOS 或权限不足会报错，忽略即可
    }
  }  

  // App 组件里新增状态
  const [showGuide, setShowGuide] = useState(false)

  // 提取不同语言提示词
  // code -> 文案对象（含默认兜底）
  const LANGS_MAP = Object.fromEntries(
    LANGS.map(l => [l.code, l])
  )
  const LANG_TIP = LANGS_MAP[lang] || LANGS_MAP.ja

  useEffect(() => {
    setLoading(true)
    fetch(`${import.meta.env.BASE_URL}story.${lang}.json`)
      .then(r => r.json())
      .then(setStory)
      .catch(e => setError(String(e)))
      .finally(() => setLoading(false))
    localStorage.setItem('avg_lang', lang)
  }, [lang])

  const engine = useStoryEngine(story, lang)

  // 提取ui页面
  const ui = story?.meta?.ui || {}
  const startBg = ui.startBg
  const startPanelBg = ui.startPanelBg
  const endBg = ui.endBg
  const endSceneId = ui.endSceneId || 'scene_the_end'
  const { sceneId } = engine || {}
  // 是否结束
  const isEnd = sceneId === endSceneId

  useEffect(() => {
    function onKey(e) {
      const k = (e.key || '').toLowerCase()
      // T 键：打开/切换“攻略”弹窗（无论是否在游戏内）
      if (k === 't') {
        setShowGuide(v => !v)       // 再按一次可关闭；想只打开就用 setShowGuide(true)
        setMenuOpen(false)
        e.preventDefault()
        return
      }
      // ESC 关闭攻略（可选）
      if (k === 'escape') {
        setShowGuide(false)
        return
      }
      if (k === 's') setShowSaveModal(true)
      if (k === 'l') setShowLoadModal(true)
      if (k === 'a') engine?.toggleAuto()
      if (!showStart && (k === ' ' || k === 'enter' || k === 'return')) {
        if (!engine?.showingChoices) engine?.next()
      }
      if (!showStart && k === 'arrowright') engine?.next()
      if (!showStart && k === 'arrowleft') engine?.prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [engine, showStart])

  // entry bgm
  useEffect(() => {
    if (!story) return
    if (story?.meta?.entryBgm) {
      const ok = engine.tryPlayEntryBgm(story.meta.entryBgm)
      if (!ok) setAudioBlocked(true)
    }
  }, [story])

  // compute vpad for background contain
  const bgUrl = engine.bgUrl
  useEffect(() => {
    if (!bgUrl || !stageRef.current) {
      stageRef.current?.style?.setProperty('--vpad', '0px')
      return
    }
    const img = new Image()
    img.src = bgUrl
    const compute = () => {
      const stage = stageRef.current
      if (!stage) return
      const stageW = stage.clientWidth || window.innerWidth
      const stageH = stage.clientHeight || window.innerHeight
      const iw = img.naturalWidth
      const ih = img.naturalHeight
      if (!iw || !ih) { stage.style.setProperty('--vpad', '0px'); return }
      const stageAR = stageW / stageH
      const imgAR = iw / ih
      let vpad = 0
      if (stageAR < imgAR) {
        const imgRenderH = stageW / imgAR
        vpad = Math.max(0, (stageH - imgRenderH) / 2)
      } else {
        vpad = 0
      }
      stage.style.setProperty('--vpad', `${vpad}px`)
    }
    img.onload = compute
    const t = setTimeout(compute, 50)
    window.addEventListener('resize', compute)
    return () => { window.removeEventListener('resize', compute); clearTimeout(t) }
  }, [bgUrl])

  const hasSave = !!engine.peekSave()
  const startNew = () => { engine.startNew(); setShowStart(false) }
  const continueGame = () => {
    const sv_manual = engine.peekSaveManual();
    const sv = engine.peekSave();
    const manual = sv_manual ? true : false
    if (!manual && !sv) {
      alert(LANG_TIP.loadTipSec);
      return;
    }
    engine.continueFromSave(manual);
    setShowStart(false);
    setTimeout(() => {
      engine.unlockAudio?.();
      alert('Loaded successfully to scene: ' + sv.sceneId); // 反馈原场景ID
    }, 100);
  }

  const onStagePointer = () => {
    engine.unlockAudio().then((unlocked)=>{ if (unlocked) setAudioBlocked(false) }).catch(()=>{})
    if (!engine?.showingChoices && !showStart) engine?.next()
  }

  if (loading) return <div className="center">Loading…</div>
  if (error) return <div className="center error">{error}</div>
  if (!story) return <div className="center">No story</div>

  return (
    <div
      ref={stageRef}
      className="stage"
      style={{ backgroundImage: bgUrl ? `url(${bgUrl})` : 'none' }}
      onPointerDown={onStagePointer}
    >
      <div className="topbar" onPointerDown={(e)=>e.stopPropagation()}>
        <select value={lang} onChange={e=>setLang(e.target.value)} className="lang-switch">
          {LANGS.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
        </select>
        <button className="autoplay-btn" onClick={()=>engine.toggleAuto()}>
          {engine.autoPlay ? LANG_TIP.autoOnTip : LANG_TIP.autoOffTip}
        </button>
        <div className="menu">
          <button className="menu-btn" title={LANG_TIP.menuTip} onClick={()=>setMenuOpen(o=>!o)}>≡</button>
          <div className="menu-pop" style={{ display: menuOpen ? 'flex' : undefined, flexDirection: 'column' }}>
            <button onClick={()=>{setShowSaveModal(true); setMenuOpen(false);}}>{LANG_TIP.saveTip}</button>
            <button onClick={()=>{setShowLoadModal(true); setMenuOpen(false);}}>{LANG_TIP.loadTip}</button>
            <button onClick={()=>{ engine.restart(); setShowStart(true); setMenuOpen(false); }}>{LANG_TIP.startTip}</button>
            <button onClick={() =>{ setShowGuide(true); setMenuOpen(false);}}>{LANG_TIP.guideTip}</button>
            <button onClick={openFeedback}>{LANG_TIP.feedbackTip}</button>
          </div>
        </div>
      </div>

      {audioBlocked && (
        <div className="audio-tip" onPointerDown={(e)=>{ e.stopPropagation();
          engine.unlockAudio?.();
          tryLockLandscape();
        }}>
          {LANG_TIP.audioTip}
        </div>
      )}

      <SpriteLayer sprites={engine.currentSprites} resolveSpriteUrl={engine.resolveSpriteUrl} />

      {!showStart && (engine.showingChoices ? (
        <ChoiceBox choices={engine.currentChoices} onChoose={engine.choose} title={LANG_TIP.choiceTip} />
      ) : (
        <DialogBox
          name={engine.currentSpeaker}
          text={engine.currentText}
          onNext={engine.next}
          onPointerDown={(e)=>e.stopPropagation()}
          onTypeDone={engine.markTypewriterDone}
          typingEnabled={true}
        />
      ))}

      {showStart && (
        <div
          className="start-overlay"
          style={startBg ? { backgroundImage: `url(${startBg})` } : undefined}
          onPointerDown={(e)=>e.stopPropagation()}
        >
          <div 
            className="start-card"
            style={startPanelBg ? { backgroundImage: `url(${startPanelBg})` } : undefined}
          >
            <h1>{story?.meta?.title || 'Game'}</h1>
            {isPortrait && (
              <div className="start-rotate-hint">
                <span>{LANG_TIP.rotateTip || '横屏体验更佳'}</span>
                <button className="ghost" onClick={tryLockLandscape}>
                  {LANG_TIP.rotateBtn || '横屏并全屏'}
                </button>
              </div>
            )}
            <div className="start-lang-chips" onPointerDown={e=>e.stopPropagation()}>
              {LANGS.map(o => (
                <button
                  key={o.code}
                  type="button"
                  className={`start-lang-chip ${o.code===lang ? 'is-active' : ''}`}
                  onClick={() => { setLang(o.code); localStorage.setItem('avg_lang', o.code) }}
                  title={o.label}
                >
                  {o.label}
                </button>
              ))}
            </div>
            <div className="start-actions">
              <button className="primary" onClick={startNew}>{LANG_TIP.startTip}</button>
              <button className="secondary" onClick={continueGame} disabled={!hasSave}>{LANG_TIP.continueTip}</button>
            </div>
          </div>
        </div>
      )}

      {isEnd && (
        <div
          className="end-overlay"
          style={endBg ? { backgroundImage: `url(${endBg})` } : undefined}
          onPointerDown={(e)=>e.stopPropagation()}
        >
          <div className="end-actions">
            <button className="primary" onClick={() => { engine.restart(); setShowStart(true) }}>
              {LANG_TIP.startTip}
            </button>
          </div>
        </div>
      )}

      {/* {!showStart && isPortrait && (
        <div className="rotate-overlay" onPointerDown={(e)=>e.stopPropagation()}>
          <div className="rotate-box">
            <div className="icon">📱↻</div>
            <div className="msg">{LANG_TIP.rotateTip || '横屏体验更佳'}</div>
            <button className="primary" onClick={tryLockLandscape}>
              {LANG_TIP.rotateBtn || '横屏并全屏'}
            </button>
          </div>
        </div>
      )} */}

      <Modal open={showSaveModal} onClose={()=>setShowSaveModal(false)} title={LANG_TIP.saveTip}>
        <div className="modal-row">
          <button onClick={()=>{ engine.save(true); setShowSaveModal(false); }}>{LANG_TIP.saveTipFst}</button>
        </div>
        <div className="modal-desc">{LANG_TIP.saveTipSec}</div>
      </Modal>

      <Modal open={showLoadModal} onClose={()=>setShowLoadModal(false)} title={LANG_TIP.loadTip}>
        {hasSave ? (
          <div className="modal-row">
            <button onClick={()=>{ 
              engine.load(true); 
              setShowLoadModal(false); 
              setShowStart(false); 
              setTimeout(() => {
                const sv = engine.peekSaveManual(); // 重新检查
                if (sv) {
                  alert('Loaded to scene: ' + sv.sceneId);
                } else {
                  alert('Load failed!');
                }
              }, 100); 
              
            }}>{LANG_TIP.loadTipFst}</button>
          </div>
        ) : (
          <div className="modal-desc">{LANG_TIP.loadTipSec}</div>
        )}
      </Modal>

      <Modal open={showGuide} onClose={() => setShowGuide(false)} title={LANG_TIP.guideTip}>
        <GuideModal lang={lang} />
      </Modal>
      <div className="hud">
        <span>{LANG_TIP.helpTip}</span>
      </div>
    </div>
  )
}
