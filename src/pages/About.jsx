import { motion } from 'framer-motion'
import FadeInSection from '../components/FadeInSection'
import CTAButton from '../components/CTAButton'
import PageTransition from '../components/PageTransition'

const expo = [0.16, 1, 0.3, 1]

const stats = [
  { value: '100%', label: 'brands that refused to blend in' },
  { value: '4', label: 'service verticals' },
  { value: '1', label: 'team. full ownership.' },
  { value: '∞', label: 'creative range' },
]

const values = [
  { number: '01', title: 'Precision', text: "Every detail is deliberate. We sweat the kerning so you don't have to." },
  { number: '02', title: 'Clarity', text: 'Good design removes friction. We make complex ideas feel effortless.' },
  { number: '03', title: 'Partnership', text: 'We embed with your team. Your goals become our creative brief.' },
]

export default function About() {
  return (
    <PageTransition>
      {/* ─── HERO — split layout ─── */}
      <section className="min-h-[80vh] md:min-h-screen pt-20">
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] min-h-[80vh] md:min-h-screen">
          {/* Left — image placeholder */}
          <div className="relative aspect-[4/3] md:aspect-auto" style={{ backgroundColor: '#D4A5A5' }}>
            <span
              className="absolute bottom-8 left-8 text-[11px] font-200 tracking-[0.3em] uppercase hidden md:block"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              about
            </span>
          </div>

          {/* Right — text content */}
          <div className="flex items-center px-6 py-16 md:px-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: expo }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[11px] tracking-[0.3em] font-200 text-muted uppercase">about</span>
                <div className="w-8 h-px bg-blush" />
              </div>
              <h1 className="tracking-tight leading-tight" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
                <span className="font-200">Design with </span>
                <span className="accent-heading" style={{ color: '#3D2B1F' }}>conviction.</span>
              </h1>
              <p className="mt-8 text-[15px] font-light text-muted max-w-md leading-[1.9]">
                Forme was founded on a simple premise: brands deserve better creative partners. Not vendors — partners who understand that design is a business lever.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="border-t border-b border-greige" style={{ backgroundColor: '#FAF7F4' }}>
        <div className="page-container py-12">
          {/* Desktop: 4-column with vertical rules */}
          <div className="hidden md:grid grid-cols-4 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: expo }}
                className="flex flex-col items-center justify-center"
                style={i > 0 ? { borderLeft: '1px solid #E8E0D8' } : undefined}
              >
                <span className="accent-heading text-[52px] leading-none mb-3" style={{ color: '#3D2B1F' }}>
                  {stat.value}
                </span>
                <span className="text-[11px] tracking-[0.2em] uppercase font-200" style={{ color: '#6B4C3B' }}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
          {/* Mobile: 2x2 grid, no vertical rules */}
          <div className="grid grid-cols-2 gap-8 md:hidden text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: expo }}
              >
                <span className="accent-heading text-[40px] leading-none mb-2 block" style={{ color: '#3D2B1F' }}>
                  {stat.value}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-200 block" style={{ color: '#6B4C3B' }}>
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR APPROACH ─── */}
      <section className="py-16 md:py-28 px-6 md:px-20">
        <FadeInSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[11px] tracking-[0.3em] font-200 text-muted uppercase">our approach</span>
            <div className="w-8 h-px bg-blush" />
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="max-w-[800px] mx-auto text-center">
            <p
              className="accent-heading leading-[1.6] mx-auto"
              style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: '#1A1A1A', maxWidth: '800px' }}
            >
              We work at the intersection of strategy and aesthetics. Every project starts with understanding — your market, your audience, your ambition. From there, we build creative systems that are as functional as they are beautiful.
            </p>

            {/* Decorative line */}
            <svg width="40" height="2" className="mx-auto my-8">
              <line x1="0" y1="1" x2="40" y2="1" stroke="#D4A5A5" strokeWidth="1" />
            </svg>

            <p className="text-[15px] font-light text-muted leading-[1.9] max-w-[600px] mx-auto">
              No trend-chasing. No overdesigned decks. Just clear, considered work that moves the needle.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* ─── WHAT DRIVES US — dark editorial cards ─── */}
      <section className="bg-ink py-16 md:py-28 px-6 md:px-20">
        <div className="page-container">
          <FadeInSection>
            <p className="text-[11px] tracking-[0.3em] font-200 uppercase mb-16" style={{ color: 'rgba(255,255,255,0.4)' }}>
              what drives us
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: expo }}
                className="pt-10"
                style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
              >
                <span className="text-[11px] font-200 tracking-[0.3em] text-blush">
                  {item.number}
                </span>
                <h3 className="accent-heading text-[28px] text-white mt-4 mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] font-200 leading-[1.8]" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEET FORME ─── */}
      <section className="py-16 md:py-28 px-6 md:px-20">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
            {/* Left — text */}
            <FadeInSection>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[11px] tracking-[0.3em] font-200 text-muted uppercase">meet forme</span>
                <div className="w-8 h-px bg-blush" />
              </div>
              <h2 className="accent-heading tracking-tight leading-tight mb-8" style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: '#3D2B1F' }}>
                The studio behind the work.
              </h2>
              <p className="text-[15px] font-light text-muted leading-[1.9] max-w-lg">
                forme was built on a single belief — that great creative should be as strategic as it is beautiful. We are a full-service studio for brands that want more than content. They want a point of view.
              </p>
              <svg width="40" height="1" viewBox="0 0 40 1" className="mt-8">
                <line x1="0" y1="0.5" x2="40" y2="0.5" stroke="#D4A5A5" strokeWidth="1" />
              </svg>
            </FadeInSection>

            {/* Right — layered photo placeholders */}
            <FadeInSection delay={0.15}>
              {/* PHOTO SWAP: replace colored rects with actual photos */}
              <div className="relative" style={{ minHeight: '400px' }}>
                <div
                  className="relative z-10"
                  style={{ width: '60%', aspectRatio: '4/5', backgroundColor: '#C4B5A8' }}
                />
                <div
                  className="relative z-20"
                  style={{
                    width: '45%',
                    aspectRatio: '1/1',
                    backgroundColor: '#D4A5A5',
                    marginTop: '-60px',
                    marginLeft: 'auto',
                  }}
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-ink">
        <FadeInSection>
          <div className="page-container py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h2 className="accent-heading text-2xl md:text-4xl text-white tracking-tight">
              Ready to work together?
            </h2>
            <CTAButton to="/contact" variant="light" fullWidthMobile>Get in touch</CTAButton>
          </div>
        </FadeInSection>
      </section>
    </PageTransition>
  )
}
