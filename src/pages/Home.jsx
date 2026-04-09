import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FadeInSection from '../components/FadeInSection'
import CTAButton from '../components/CTAButton'
import PageTransition from '../components/PageTransition'
import { clientsData } from '../data/clients'

const expo = [0.16, 1, 0.3, 1]
const stagger = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: expo },
})

const gridCards = [
  { number: '01', name: 'Content Studio', color: '#2C2825', anchor: 'content-studio' },
  { number: '02', name: 'Social Management', color: '#D4A5A5', anchor: 'social-management' },
  { number: '03', name: 'Brand & Website Development', color: '#3D3530', anchor: 'brand-website-development' },
  { number: '04', name: 'AI & Technology', color: '#C4B5A8', anchor: 'ai-technology' },
]

const featuredTestimonial = clientsData[0]

export default function Home() {
  return (
    <PageTransition>
      {/* ─── HERO ─── */}
      <section className="h-dvh flex flex-col items-center justify-center text-center relative">
        <div className="page-container">
          <motion.h1
            {...stagger(0.2)}
            className="accent-heading leading-none tracking-[-0.02em]"
            style={{ fontSize: 'clamp(48px, 12vw, 180px)' }}
          >
            FORME
          </motion.h1>
          <motion.p {...stagger(0.4)} className="mt-6 md:mt-8 text-[15px] font-200 text-muted max-w-[420px] mx-auto leading-[1.9]">
            Creative infrastructure for brands that take aesthetics seriously.
          </motion.p>
          <motion.div {...stagger(0.55)} className="mt-8 md:mt-10">
            <CTAButton to="/work" fullWidthMobile>See our work</CTAButton>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="w-px h-8 bg-ink/20 scroll-indicator-line" />
          <span className="text-[10px] tracking-[0.3em] uppercase font-200 text-muted">Scroll</span>
        </motion.div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {gridCards.map((card, i) => (
            <motion.div
              key={card.anchor}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: expo }}
            >
              <Link
                to={`/services#${card.anchor}`}
                className="block relative overflow-hidden group no-underline"
                style={{ aspectRatio: '1/1' }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: card.color,
                    transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                />
                <div className="absolute inset-0 group-hover:scale-[1.02]" style={{ transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <span className="absolute top-5 left-5 text-[11px] font-200 tracking-[0.3em] text-white/85">
                  {card.number}
                </span>
                <span
                  className="absolute bottom-5 left-5 md:bottom-6 md:left-6 font-light uppercase tracking-[0.1em] text-white max-w-[200px] leading-tight text-[20px] md:text-[clamp(18px,2.5vw,28px)]"
                >
                  {card.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="page-container">
          {gridCards.map((b) => (
            <Link
              key={b.anchor}
              to={`/services#${b.anchor}`}
              className="group flex items-center border-t border-ink/[0.08] py-5 no-underline"
            >
              <div className="w-0 group-hover:w-4 h-px bg-blush transition-all duration-200 mr-0 group-hover:mr-4" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-200 text-muted group-hover:text-ink transition-colors duration-200">
                {b.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── SECTION DIVIDER ─── */}
      <div className="mt-16">
        <hr className="border-0 border-t border-greige" />
      </div>

      {/* ─── CLIENT LOGO STRIP ─── */}
      <section className="border-b border-greige py-10">
        <FadeInSection>
          <p className="text-center text-[11px] tracking-[0.3em] font-200 uppercase mb-8" style={{ color: '#6B4C3B' }}>
            brands we've worked with
          </p>
          {/* Mobile: 2-col grid. Desktop: inline with vertical rules */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-0">
            {clientsData.map((client, i) => (
              <span key={client.slug} className="flex items-center">
                {i > 0 && <span className="w-px h-4 bg-greige mx-6" />}
                <Link
                  to={`/clients/${client.slug}`}
                  className="text-[13px] tracking-[0.2em] uppercase font-light no-underline hover:underline hover:underline-offset-4 hover:decoration-blush transition-all duration-200"
                  style={{ color: '#4A4540' }}
                >
                  {/* LOGO SWAP: replace <span> with <img grayscale → color on hover> here */}
                  {client.name}
                </Link>
              </span>
            ))}
          </div>
          <div className="sm:hidden grid grid-cols-2 gap-0">
            {clientsData.map((client) => (
              <Link
                key={client.slug}
                to={`/clients/${client.slug}`}
                className="flex items-center justify-center text-[12px] tracking-[0.15em] uppercase font-light no-underline border-b border-greige/50 transition-colors duration-200"
                style={{ color: '#4A4540', padding: '12px 16px' }}
              >
                {client.name}
              </Link>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* ─── PULL-QUOTE TESTIMONIAL ─── */}
      <section className="py-12 md:py-0" style={{ backgroundColor: '#FAF7F4', padding: undefined }}>
        <div className="px-6 py-12 md:py-20" style={{ backgroundColor: '#FAF7F4' }}>
          <FadeInSection>
            <div className="page-container text-center">
              <span className="accent-heading block" style={{ fontSize: '60px', color: '#D4A5A5', lineHeight: 0, marginBottom: '24px' }}>
                &ldquo;
              </span>
              <p
                className="accent-heading mx-auto leading-[1.6]"
                style={{ fontSize: 'clamp(18px, 4vw, 28px)', color: '#3D2B1F', maxWidth: '700px' }}
              >
                {featuredTestimonial.testimonial.quote}
              </p>
              <Link
                to={`/clients/${featuredTestimonial.slug}`}
                className="inline-block mt-6 md:mt-8 text-[12px] tracking-[0.2em] uppercase font-200 no-underline hover:underline hover:underline-offset-4 transition-all duration-200"
                style={{ color: '#6B4C3B' }}
              >
                &mdash; {featuredTestimonial.testimonial.author}, {featuredTestimonial.name}
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─── */}
      <section className="section-padding relative overflow-hidden">
        <div className="page-container">
          {/* Blush block hidden on mobile */}
          <div className="absolute top-16 left-8 w-[300px] h-[300px] bg-blush/20 -z-10 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-10 md:gap-24 items-start">
            <FadeInSection>
              <div className="flex items-start gap-6">
                <div className="hidden md:block w-px h-20 bg-ink/20 mt-2 shrink-0" />
                <h2 className="accent-heading tracking-tight leading-tight" style={{ fontSize: 'clamp(32px, 8vw, 60px)' }}>
                  Built different.
                </h2>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.1}>
              <div>
                <p className="text-[15px] font-200 text-muted leading-[1.9]">
                  forme is a full-service creative studio built for brands that refuse to blend in. We combine editorial taste with technical precision — strategy, content, social, branding, and technology under one roof. Nothing outsourced. Nothing generic.
                </p>
                <div className="mt-10">
                  <Link
                    to="/about"
                    className="text-[11px] tracking-[0.2em] uppercase font-light text-muted no-underline hover:text-ink hover:underline underline-offset-4 transition-all duration-200"
                  >
                    About us &rarr;
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ─── CONTACT BANNER ─── */}
      <section className="bg-ink">
        <FadeInSection>
          <div className="page-container py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h2 className="accent-heading text-2xl md:text-4xl text-white tracking-tight">
              Ready to build something?
            </h2>
            <CTAButton to="/contact" variant="light" fullWidthMobile>Get in touch</CTAButton>
          </div>
        </FadeInSection>
      </section>
    </PageTransition>
  )
}
