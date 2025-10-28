import React, { useEffect, useRef, useState } from 'react'

export default function DialogBox({ name, text, onNext, onPointerDown, onTypeDone, typingEnabled=true }) {
  const [shown, setShown] = useState(text || '')
  const timer = useRef(null)

  useEffect(() => {
    clearInterval(timer.current)
    if (!typingEnabled) {
      setShown(text || '')
      onTypeDone && onTypeDone()
      return
    }
    const full = text || ''
    setShown('')
    if (!full) {
      onTypeDone && onTypeDone()
      return
    }
    let i = 0
    const stepMs = 25
    timer.current = setInterval(() => {
      i += 1
      setShown(full.slice(0, i))
      if (i >= full.length) {
        clearInterval(timer.current)
        timer.current = null
        onTypeDone && onTypeDone()
      }
    }, stepMs)
    return () => clearInterval(timer.current)
  }, [text, typingEnabled]) // eslint-disable-line

  // 统一的“推进”逻辑：正在打字→先快进；否则→下一句
  const handleAdvance = (e) => {
    if (e) e.stopPropagation()
    const full = text || ''
    const typing = typingEnabled && shown !== full
    if (typing) {
      // 立即展示完整文本并结束打字
      clearInterval(timer.current)
      timer.current = null
      setShown(full)
      onTypeDone && onTypeDone()
    } else {
      onNext && onNext()
    }
  }

  return (
    <div className="dialog" onPointerDown={onPointerDown} onClick={handleAdvance}>
      <div className="dialog-inner">
        <div className="name">{name || '　'}</div>
        <div className="text">{shown}</div>
      </div>
      {/* 阻止冒泡，避免点按钮时既触发按钮也触发父容器的 onClick 导致“跳两句” */}
      <button className="next-btn" onClick={handleAdvance} onPointerDown={e => e.stopPropagation()} title="Next">▶</button>
    </div>
  )
}
