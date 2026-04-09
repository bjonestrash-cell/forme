import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FadeInSection from '../components/FadeInSection'
import CTAButton from '../components/CTAButton'
import PageTransition from '../components/PageTransition'
import { clientsData } from '../data/clients'

const expo = [0.16, 1, 0.3, 1]

function SectionHeader({ number, label }) {
  return (
    <div className="flex items-center gap-4 mb-8 md:mb-10 px-0">
      <span className="text-[11px] tracking-[0.3em] font-200" style={{ color: '#6B4C3B' }}>{number}</span>
      <div className="w-8 h-px bg-blush" />
      <span className="text-[11px] tracking-[0.3em] font-200 text-muted uppercase">{label}</span>
    </div>
  )
}

function PortfolioCard({ color, caption, aspect = '1/1', to, children }) {
  const Wrapper = to ? Link : 'div'
  const wrapperProps = to ? { to, className: 'block no-underline' } : {}

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: expo }}
    >
      <Wrapper {...wrapperProps}>
        <div className="relative overflow-hidden group" style={{ aspectRatio: aspect }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: color,
              transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          />
          <div
            className="absolute inset-0 group-hover:scale-[1.02]"
            style={{ transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            {children}
          </div>
          {to && (
            <span className="absolute bottom-4 right-4 text-[11px] tracking-[0.15em] uppercase font-200 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              view work &rarr;
            </span>
          )}
        </div>
      </Wrapper>
      {caption && (
        <p className="text-[10px] md:text-[11px] tracking-[0.1em] uppercase font-200 text-muted mt-3">{caption}</p>
      )}
    </motion.div>
  )
}

function PlayIcon() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border border-white/85 flex items-center justify-center">
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
          <path d="M1 1L13 8L1 15V1Z" fill="white" fillOpacity="0.85" />
        </svg>
      </div>
    </div>
  )
}

const clientColors = ['#2C2825', '#D4A5A5', '#3D3530', '#C4B5A8', '#2C2825', '#E8E0D8']
const clientCaptions = ['Brand photography', 'Campaign content', 'Product shoot', 'Editorial', 'Lookbook', 'Lifestyle']

export default function Work() {
  return (
    <PageTransition>
      {/* ─── HERO ─── */}
      <section className="pt-24 md:pt-32 pb-12 relative overflow-hidden">
        <div className="page-container relative">
          <span
            className="absolute top-0 left-1/2 -translate-x-1/2 accent-heading leading-none pointer-events-none select-none"
            style={{ fontSize: 'clamp(80px, 20vw, 280px)', opacity: 0.04, color: '#3D2B1F' }}
          >
            work
          </span>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: expo }}
            className="relative"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[11px] tracking-[0.3em] font-200 text-muted uppercase">work</span>
              <div className="w-8 h-px bg-blush" />
            </div>
            <h1 className="accent-heading tracking-tight leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              What we've <span style={{ color: '#3D2B1F' }}>built.</span>
            </h1>
            <p className="mt-6 text-[15px] font-200 text-muted max-w-lg leading-[1.9]">
              A selection of recent work across content, social, brand, and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 1. PHOTOGRAPHY & CONTENT ─── */}
      <section className="section-padding">
        <div className="page-container">
          <FadeInSection>
            <SectionHeader number="01" label="photography & content" />
          </FadeInSection>
          {/* 2-col mobile, 3-col desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {clientsData.map((client, i) => (
              <PortfolioCard
                key={client.slug}
                color={clientColors[i] || clientColors[i % clientColors.length]}
                aspect="1/1"
                caption={clientCaptions[i] || client.name}
                to={`/clients/${client.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2. REELS & SHORT-FORM VIDEO ─── */}
      <section className="section-padding pt-0">
        <div className="page-container">
          <FadeInSection>
            <SectionHeader number="02" label="reels & short-form video" />
          </FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { color: '#1A1A1A', caption: 'TikTok' },
              { color: '#D4A5A5', caption: 'Instagram Reel' },
              { color: '#3D3530', caption: 'Brand Reel' },
              { color: '#C4B5A8', caption: 'Event Recap' },
            ].map((item) => (
              <PortfolioCard key={item.caption} color={item.color} aspect="9/16" caption={item.caption}>
                <PlayIcon />
              </PortfolioCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. STORIES & FEED CURATION ─── */}
      <section className="section-padding pt-0">
        <div className="page-container">
          <FadeInSection>
            <SectionHeader number="03" label="stories & feed curation" />
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection>
              <div className="flex gap-3">
                {['#D4A5A5', '#2C2825', '#C4B5A8'].map((c, i) => (
                  <div key={i} className="flex-1" style={{ aspectRatio: '9/16', backgroundColor: c }} />
                ))}
              </div>
              <p className="text-[11px] tracking-[0.1em] uppercase font-200 text-muted mt-3">Stories series</p>
            </FadeInSection>
            <FadeInSection delay={0.08}>
              <div className="grid grid-cols-3 gap-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square"
                    style={{ backgroundColor: i % 2 === 0 ? '#E8E0D8' : '#C4B5A8' }}
                  />
                ))}
              </div>
              <p className="text-[11px] tracking-[0.1em] uppercase font-200 text-muted mt-3">Feed curation</p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ─── 4. BRAND & WEB ─── */}
      <section className="section-padding pt-0">
        <div className="page-container">
          <FadeInSection>
            <SectionHeader number="04" label="brand & web" />
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PortfolioCard color="#2C2825" aspect="16/9" caption="Brand identity" />
            <PortfolioCard color="#D4A5A5" aspect="16/9" caption="Website design" />
          </div>
        </div>
      </section>

      {/* ─── 5. @CONTENTBYNAT ─── */}
      <section className="border-t border-b border-greige" style={{ backgroundColor: '#FAF7F4' }}>
        <div className="page-container section-padding">
          <FadeInSection>
            <SectionHeader number="05" label="@contentbynat" />
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <h2 className="accent-heading tracking-tight leading-tight mb-5" style={{ fontSize: 'clamp(28px, 5vw, 64px)' }}>
              @contentbynat
            </h2>
            <p className="text-[15px] font-200 text-muted max-w-lg leading-[1.9] mb-10">
              Natalie's personal content portfolio — brand collaborations, influencer creative, and on-camera work.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.12}>
            <a
              href="#"
              className="inline-block text-[11px] tracking-[0.2em] font-300 no-underline pb-1 mb-8 hover:opacity-70 transition-opacity duration-200"
              style={{ color: '#3D2B1F', borderBottom: '1px solid #3D2B1F' }}
            >
              @contentbynat
            </a>
          </FadeInSection>
          {/* 2-col mobile, 3-col desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { caption: 'Brand Collaboration', color: '#2C2825' },
              { caption: 'Lifestyle Content', color: '#D4A5A5' },
              { caption: 'Product Integration', color: '#3D3530' },
              { caption: 'Get Ready With Me', color: '#C4B5A8' },
              { caption: 'Brand Trip', color: '#2C2825' },
              { caption: 'Campaign Shoot', color: '#E8E0D8' },
            ].map((item) => (
              <PortfolioCard key={item.caption} color={item.color} aspect="1/1" caption={item.caption} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="bg-ink">
        <FadeInSection>
          <div className="page-container py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h2 className="accent-heading text-2xl md:text-4xl text-white tracking-tight">
              Your work could live here.
            </h2>
            <CTAButton to="/contact" variant="light" fullWidthMobile>Get in touch</CTAButton>
          </div>
        </FadeInSection>
      </section>
    </PageTransition>
  )
}
