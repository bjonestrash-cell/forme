import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const expo = [0.16, 1, 0.3, 1]

export default function IntroOverlay() {
  const [visible, setVisible] = useState(() => {
    return !sessionStorage.getItem('forme-intro-seen')
  })
  const [phase, setPhase] = useState(0) // 0 = wordmark in, 1 = hold, 2 = exit

  useEffect(() => {
    if (!visible) return
    document.body.style.overflow = 'hidden'

    // Phase 0: wordmark animates in (handled by framer-motion)
    // Phase 1: hold after wordmark settles
    const holdTimer = setTimeout(() => setPhase(1), 1200)
    // Phase 2: begin exit
    const exitTimer = setTimeout(() => {
      setPhase(2)
      sessionStorage.setItem('forme-intro-seen', '1')
    }, 2800)
    // Remove overlay after exit animation
    const removeTimer = setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
    }, 3800)

    return () => {
      clearTimeout(holdTimer)
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
      document.body.style.overflow = ''
    }
  }, [visible])

  if (!visible) return null

  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center"
      style={{ backgroundColor: '#1A1A1A' }}
      animate={phase === 2 ? { clipPath: 'inset(0 0 100% 0)' } : { clipPath: 'inset(0 0 0% 0)' }}
      transition={{ duration: 0.9, ease: expo }}
    >
      <div className="relative flex flex-col items-center">
        <motion.span
          className="accent-heading tracking-[-0.02em]"
          style={{ fontSize: 'clamp(52px, 14vw, 140px)', color: '#F8F5F0' }}
          initial={{ opacity: 0, y: 30 }}
          animate={phase < 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: phase === 0 ? 0.3 : 0, ease: expo }}
        >
          forme
        </motion.span>
        <motion.div
          className="h-px mt-8"
          style={{ backgroundColor: '#D4A5A5' }}
          initial={{ width: 0 }}
          animate={phase < 2 ? { width: 48 } : { width: 0 }}
          transition={{ duration: 0.6, delay: phase === 0 ? 0.8 : 0, ease: expo }}
        />
        <motion.p
          className="mt-6 text-[11px] tracking-[0.3em] uppercase font-200"
          style={{ color: 'rgba(248,245,240,0.4)' }}
          initial={{ opacity: 0 }}
          animate={phase >= 1 && phase < 2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: expo }}
        >
          creative studio
        </motion.p>
      </div>
    </motion.div>
  )
}
