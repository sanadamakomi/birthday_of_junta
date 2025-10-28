import React, { useMemo } from 'react'

export default function SpriteLayer({ sprites = [], resolveSpriteUrl }) {
  // Auto layout to avoid overlap and fill missing x
  const laidOut = useMemo(() => {
    const MIN_GAP = 0.18
    if (!sprites || sprites.length === 0) return []
    // Fill defaults: if only one, center; otherwise distribute 0.2~0.8
    let arr = sprites.map((s,i) => ({
      ...s,
      x: typeof s.x === 'number' ? s.x : (sprites.length === 1 ? 0.5 : (0.2 + (0.6 * i / Math.max(1, sprites.length - 1))))
    }))
    // Sort & enforce gap
    arr.sort((a,b) => (a.x ?? 0.5) - (b.x ?? 0.5))
    for (let i = 1; i < arr.length; i++) {
      const prev = arr[i-1]
      const cur = arr[i]
      if (cur.x - prev.x < MIN_GAP) {
        arr[i] = { ...cur, x: Math.min(0.95, prev.x + MIN_GAP) }
      }
    }
    // Clamp range
    arr = arr.map(s => ({ ...s, x: Math.max(0.05, Math.min(0.95, s.x)) }))
    // Restore original order
    const map = new Map(arr.map(a => [`${a.id}__${a.pose}`, a.x]))
    return sprites.map(s => ({ ...s, x: map.get(`${s.id}__${s.pose}`) ?? s.x ?? 0.5 }))
  }, [sprites])

  return (
    <div className="sprite-layer">
      {laidOut.map((s, i) => {
        const url = resolveSpriteUrl(s.id, s.pose)
        if (!url) return null
        const leftPct = Math.max(0, Math.min(1, s.x ?? 0.5)) * 100
        return (
          <img
            key={`${s.id}_${i}_${s.pose}`}
            className="sprite"
            src={url}
            style={{ left: `${leftPct}%` }}
            alt={`${s.id}-${s.pose}`}
          />
        )
      })}
    </div>
  )
}
