import { motion } from 'framer-motion'

export default function ServiceCard({ number, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="border border-ink/[0.08] bg-greige/30 p-8 md:p-10"
    >
      {number && (
        <span className="text-xs text-muted tracking-widest">{number}</span>
      )}
      <h3 className="text-xl md:text-2xl font-light mt-4 mb-4 tracking-tight">
        {title}
      </h3>
      <p className="text-sm text-muted font-light leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
