import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const pos = useRef({ curX: 0, curY: 0, mouseX: 0, mouseY: 0 })

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) {
      document.body.style.cursor = 'auto'
      document.querySelectorAll('*').forEach(el => { el.style.cursor = 'auto' })
      if (cursorRef.current) cursorRef.current.style.display = 'none'
      return
    }

    const cursor = cursorRef.current
    if (!cursor) return

    function onMove(e) {
      pos.current.mouseX = e.clientX
      pos.current.mouseY = e.clientY
    }

    function animate() {
      const p = pos.current
      p.curX += (p.mouseX - p.curX) * 0.25
      p.curY += (p.mouseY - p.curY) * 0.25
      cursor.style.left = p.curX + 'px'
      cursor.style.top = p.curY + 'px'
      requestAnimationFrame(animate)
    }

    function onEnter() { cursor.classList.add('cursor-hovered') }
    function onLeave() { cursor.classList.remove('cursor-hovered') }

    function bindInteractives() {
      const els = document.querySelectorAll('a, button, [data-hover], input, textarea, select')
      els.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    function onDocLeave() { cursor.style.opacity = '0' }
    function onDocEnter() { cursor.style.opacity = '1' }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onDocLeave)
    document.addEventListener('mouseenter', onDocEnter)
    requestAnimationFrame(animate)
    bindInteractives()

    const observer = new MutationObserver(bindInteractives)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onDocLeave)
      document.removeEventListener('mouseenter', onDocEnter)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] select-none hidden md:block"
      style={{
        top: 0,
        left: 0,
        fontFamily: "'Playfair Display', serif",
        fontStyle: 'italic',
        fontSize: '18px',
        color: '#3D2B1F',
        lineHeight: 1,
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.2s ease, transform 0.15s ease, color 0.15s ease',
        mixBlendMode: 'multiply',
      }}
    >
      f
      <style>{`
        .cursor-hovered {
          transform: translate(-50%, -50%) scale(1.6) !important;
          color: #D4A5A5 !important;
        }
      `}</style>
    </div>
  )
}
