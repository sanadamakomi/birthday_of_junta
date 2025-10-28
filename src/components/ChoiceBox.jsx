
import React from 'react'

/**
 * Full-screen centered choice overlay.
 * Renders a modal-like box at the center of the screen with a semi-transparent backdrop.
 * Expected props:
 *  - choices: Array<{ text: string, ... }>
 *  - onChoose: (choice) => void
 */
export default function ChoiceBox({ choices = [], onChoose, title = '选项'  }) {
  const onOverlayPointerDown = (e) => {
    // Prevent stage clicks from advancing dialog while overlay is open
    e.stopPropagation()
  }

  return (
    <div className="choice-overlay" onPointerDown={onOverlayPointerDown}>
      <div className="choice-box" role="dialog" aria-labelledby="choice-title" aria-modal="true">
        <div id="choice-title" className="name">{title}</div>
        <div className="choices">
          {choices.map((c, i) => (
            <button
              key={i}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() =>  c.enabled && onChoose(c)}
              className={`choice ${c.enabled ? '' : 'choice--disabled'}`}
            >
              {c.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
