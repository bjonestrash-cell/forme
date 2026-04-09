import { motion } from 'framer-motion'

export default function HeroSection({ eyebrow, heading, accentHeading, description, children }) {
  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p className="text-xs tracking-widest uppercase text-muted mb-6">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h1 className="text-4xl md:text-6xl font-extralight leading-tight tracking-tight">
              {heading}
              {accentHeading && (
                <>
                  {' '}
                  <span className="accent-heading text-blush">{accentHeading}</span>
                </>
              )}
            </h1>
          )}
          {description && (
            <p className="mt-8 text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  )
}
