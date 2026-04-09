import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FadeInSection from '../components/FadeInSection'
import CTAButton from '../components/CTAButton'
import PageTransition from '../components/PageTransition'
import { clientsData } from '../data/clients'

const expo = [0.16, 1, 0.3, 1]

const placeholderColors = ['#2C2825', '#D4A5A5', '#3D3530', '#C4B5A8', '#2C2825', '#E8E0D8']

export default function ClientPage() {
  const { slug } = useParams()
  const clientIndex = clientsData.findIndex((c) => c.slug === slug)
  const client = clientsData[clientIndex]

  if (!client) {
    return (
      <PageTransition>
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <p className="accent-heading text-2xl md:text-3xl mb-6" style={{ color: '#3D2B1F' }}>
              this client page is coming soon.
            </p>
            <Link
              to="/work"
              className="text-[11px] tracking-[0.2em] uppercase font-200 text-muted no-underline hover:text-ink hover:underline underline-offset-4 transition-all duration-200"
            >
              &larr; back to work
            </Link>
          </div>
        </section>
      </PageTransition>
    )
  }

  const prevClient = clientIndex > 0 ? clientsData[clientIndex - 1] : null
  const nextClient = clientIndex < clientsData.length - 1 ? clientsData[clientIndex + 1] : null

  return (
    <PageTransition>
      {/* ─── HERO ─── */}
      <section className="pt-20 md:pt-32 pb-10 md:pb-12">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: expo }}
          >
            <Link
              to="/work"
              className="inline-block text-[11px] tracking-[0.2em] uppercase font-200 text-muted no-underline hover:text-ink transition-colors duration-200 mb-6 md:mb-8"
            >
              &larr; work
            </Link>

            <span
              className="inline-block text-[11px] tracking-[0.1em] uppercase font-200 px-3 py-1.5 mb-4 md:mb-6 ml-4"
              style={{ backgroundColor: '#D4A5A5', color: 'white' }}
            >
              {client.category}
            </span>

            <h1
              className="accent-heading tracking-tight leading-tight"
              style={{ fontSize: 'clamp(28px, 5vw, 64px)', color: '#3D2B1F' }}
            >
              {client.headline}
            </h1>

            <p className="mt-4 md:mt-6 text-[15px] font-light text-muted max-w-[600px] leading-[1.9]">
              {client.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── DELIVERABLES STRIP ─── */}
      <section className="border-t border-b border-greige" style={{ backgroundColor: '#FAF7F4' }}>
        <FadeInSection>
          <div className="page-container py-8 md:py-12">
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
              {client.deliverables.map((d) => (
                <div key={d.label}>
                  <p className="accent-heading text-[28px] md:text-[42px] leading-none mb-2 md:mb-3" style={{ color: '#3D2B1F' }}>
                    {d.value}
                  </p>
                  <p className="text-[9px] md:text-[11px] tracking-[0.2em] uppercase font-200" style={{ color: '#6B4C3B' }}>
                    {d.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ─── WORK SAMPLES ─── */}
      <section className="section-padding">
        <div className="page-container">
          <FadeInSection>
            <p className="text-[11px] tracking-[0.3em] font-200 text-muted uppercase mb-8">work samples</p>
          </FadeInSection>
          {/* IMAGE SWAP: add images array to clients.js to populate this grid */}
          {/* 2-col mobile, 3-col desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {client.images && client.images.length > 0 ? (
              client.images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, ease: expo }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img src={`/work/${client.slug}/${img}`} alt="" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              ))
            ) : (
              Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: expo }}
                >
                  <div
                    className="aspect-square border border-greige flex items-center justify-center"
                    style={{ backgroundColor: placeholderColors[i % placeholderColors.length] + '10' }}
                  >
                    <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-200 text-muted">coming soon</span>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      {client.testimonial && (
        <section className="py-12 md:py-0" style={{ backgroundColor: '#FAF7F4' }}>
          <div className="px-6 py-12 md:py-20" style={{ backgroundColor: '#FAF7F4' }}>
            <FadeInSection>
              <div className="page-container text-center">
                <span className="accent-heading block" style={{ fontSize: '60px', color: '#D4A5A5', lineHeight: 0, marginBottom: '24px' }}>
                  &ldquo;
                </span>
                <p
                  className="accent-heading mx-auto leading-[1.6]"
                  style={{ fontSize: 'clamp(18px, 3vw, 28px)', color: '#3D2B1F', maxWidth: '700px' }}
                >
                  {client.testimonial.quote}
                </p>
                <p className="mt-6 md:mt-8 text-[12px] tracking-[0.2em] uppercase font-200" style={{ color: '#6B4C3B' }}>
                  &mdash; {client.testimonial.author}, {client.testimonial.title}
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* ─── CLIENT NAVIGATION ─── */}
      <div className="page-container border-t border-greige">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 text-center sm:text-left">
          {prevClient ? (
            <Link
              to={`/clients/${prevClient.slug}`}
              className="text-[13px] font-200 text-muted no-underline hover:text-ink transition-colors duration-200"
            >
              &larr; {prevClient.name}
            </Link>
          ) : (
            <span />
          )}
          {nextClient ? (
            <Link
              to={`/clients/${nextClient.slug}`}
              className="text-[13px] font-200 text-muted no-underline hover:text-ink transition-colors duration-200"
            >
              {nextClient.name} &rarr;
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>

      {/* ─── CTA BANNER ─── */}
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
