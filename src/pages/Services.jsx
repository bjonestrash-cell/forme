import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import FadeInSection from '../components/FadeInSection'
import CTAButton from '../components/CTAButton'
import PageTransition from '../components/PageTransition'

const expo = [0.16, 1, 0.3, 1]

const buckets = [
  {
    id: 'content-studio',
    number: '01',
    name: 'Content Studio',
    indexName: 'Content Studio',
    tagline: 'We make content that stops the scroll.',
    services: ['Content Creation', 'Short-Form Video', 'TikTok & Reels', 'Stories', 'Event Content'],
    color: '#2C2825',
    image: '/images/home/content-studio.jpg',
    layout: 'left',
  },
  {
    id: 'social-management',
    number: '02',
    name: 'Social Management',
    indexName: 'Social Management',
    tagline: 'Your brand, always on — always on-brand.',
    services: ['Social Media Management', 'Feed Curation', 'Scheduling', 'Community'],
    color: '#D4A5A5',
    image: '/images/home/social-management.jpg',
    layout: 'right',
  },
  {
    id: 'brand-website-development',
    number: '03',
    name: 'Brand & Website Development',
    indexName: 'Brand & Web Development',
    tagline: 'The visual language your brand deserves.',
    services: ['Branding', 'Web Design', 'Marketing Strategy'],
    color: '#3D3530',
    image: '/images/home/brand-website-development.png',
    layout: 'left',
  },
  {
    id: 'ai-technology',
    number: '04',
    name: 'AI & Technology',
    indexName: 'AI & Technology',
    tagline: 'The future of content infrastructure.',
    services: ['AI Content Creation', 'Claude Code Development', 'Workflow Automation'],
    color: '#C4B5A8',
    image: '/images/home/ai-technology.jpg',
    layout: 'right',
  },
]

function ServiceSection({ id, number, name, tagline, services, color, image, layout }) {
  const isLeft = layout === 'left'

  return (
    <section id={id} className="scroll-mt-28 relative" style={{ padding: '100px 0' }}>
      <div className={`grid grid-cols-1 md:grid-cols-[52fr_48fr] gap-10 md:gap-16 items-center ${!isLeft ? 'md:grid-flow-dense' : ''}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: expo }}
          className={!isLeft ? 'md:col-start-2' : ''}
        >
          {/* Number above name */}
          <p className="text-[11px] tracking-[0.3em] font-200 mb-2" style={{ color: '#6B4C3B' }}>{number}</p>
          <h2 className="accent-heading tracking-tight leading-tight" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            {name}
          </h2>
          <p className="mt-5 text-[15px] font-200 text-muted max-w-md leading-[1.9]">
            {tagline}
          </p>
          {/* Chips — inline-flex wrap, tighter padding/gap */}
          <div className="mt-8 inline-flex flex-wrap gap-1.5" style={{ alignSelf: 'flex-start' }}>
            {services.map((s) => (
              <span key={s} className="service-pill" style={{ padding: '5px 12px' }}>{s}</span>
            ))}
          </div>
        </motion.div>

        {/* Image placeholder — 48% width, aligned to far edge */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: expo }}
          className={`order-last md:order-none ${!isLeft ? 'md:col-start-1 md:row-start-1' : ''}`}
        >
          <div
            className="w-full aspect-[4/3] md:aspect-auto md:h-[500px] relative overflow-hidden"
            style={{
              backgroundColor: color,
              marginLeft: isLeft ? 'auto' : '0',
              marginRight: !isLeft ? 'auto' : '0',
            }}
          >
            {image && (
              <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Services() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [hash])

  return (
    <PageTransition>
      {/* ─── HERO ─── pb-10 = 40px */}
      <section className="pt-20 md:pt-32 pb-10">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: expo }}
          >
            <p className="text-[11px] tracking-[0.3em] font-200 text-muted mb-6">services</p>
            <h1 className="font-extralight tracking-tight leading-tight max-w-2xl" style={{ fontSize: 'clamp(40px, 10vw, 80px)' }}>
              What we <span className="accent-heading" style={{ color: '#3D2B1F' }}>build.</span>
            </h1>
            <p className="mt-6 text-[15px] font-200 text-muted max-w-xl leading-[1.9]">
              Full-scope creative services for brands that refuse to blend in. Strategy through execution, nothing outsourced.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICE INDEX ─── no duplicate "services" label */}
      <div className="page-container">
        <div className="flex flex-col" style={{ gap: '8px' }}>
          {buckets.map(({ id, number, indexName }) => (
            <a
              key={id}
              href={`#${id}`}
              className="group flex items-center gap-3 no-underline transition-colors duration-150"
            >
              <span className="text-[11px] font-200 tracking-[0.1em] text-muted group-hover:text-[#3D2B1F] transition-colors duration-150">{number}</span>
              <span className="text-[11px] tracking-[0.1em] uppercase text-muted font-200 group-hover:text-[#3D2B1F] transition-colors duration-150 whitespace-nowrap">{indexName}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ─── 80px gap then service sections ─── */}
      <div className="page-container" style={{ marginTop: '80px' }}>
        {buckets.map((bucket) => (
          <ServiceSection key={bucket.id} {...bucket} />
        ))}
      </div>

      {/* ─── 100px gap then packages ─── */}
      <section className="section-padding" style={{ marginTop: '100px' }}>
        <div className="page-container">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-blush" />
              <span className="text-[11px] tracking-[0.3em] font-300 text-muted uppercase">packages</span>
            </div>
            <h2 className="accent-heading tracking-tight leading-tight mb-5" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Simple pricing. Serious results.
            </h2>
            <p className="text-[15px] font-200 text-muted max-w-xl leading-[1.9] mb-14">
              Three ways to work with forme. All packages are monthly retainers. Custom scopes available on request.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'The Starter',
                price: '$1,500',
                bestFor: 'Brands just getting started with content and social',
                items: [
                  '12 pieces of content per month',
                  'Feed curation & scheduling',
                  '1 platform (Instagram or TikTok)',
                  'Monthly strategy call',
                  'Stories & captions',
                ],
                featured: false,
              },
              {
                name: 'The Studio',
                price: '$3,500',
                bestFor: 'Growing brands ready to scale creative output',
                items: [
                  '30 pieces of content per month',
                  'Short-form video (4 Reels or TikToks)',
                  '2 platforms managed',
                  'Feed curation, stories, community management',
                  'Bi-weekly strategy calls',
                  'AI-assisted content calendar',
                  'Monthly performance report',
                ],
                featured: true,
              },
              {
                name: 'The Full Build',
                price: '$6,500',
                bestFor: 'Brands that want everything — content, social, brand, and tech',
                items: [
                  'Unlimited content production',
                  'Full social management (all platforms)',
                  'Branding or web design project included',
                  'Short-form video (8+ Reels/TikToks/month)',
                  'AI content systems setup',
                  'Claude Code development (1 project/quarter)',
                  'Weekly strategy calls',
                  'Dedicated creative director',
                ],
                featured: false,
              },
            ].map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: expo }}
                className={`relative flex flex-col p-6 md:p-10 border bg-cream ${
                  pkg.featured ? 'border-blush' : 'border-[#E0D8D0]'
                }`}
                style={pkg.featured ? { boxShadow: '0 0 0 1px rgba(61, 43, 31, 0.08)' } : undefined}
              >
                {pkg.featured && (
                  <span
                    className="absolute top-4 right-4 text-[10px] tracking-[0.15em] uppercase font-300 text-white px-2.5 py-1"
                    style={{ backgroundColor: '#3D2B1F' }}
                  >
                    most popular
                  </span>
                )}
                <p className="text-[13px] tracking-[0.2em] uppercase font-light mb-4">{pkg.name}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="accent-heading leading-none text-[36px] md:text-[42px]" style={{ color: '#3D2B1F' }}>{pkg.price}</span>
                  <span className="text-[14px] font-200 text-muted">/mo</span>
                </div>
                <p className="text-[13px] font-200 italic text-muted border-b border-greige pb-4 mb-6">
                  {pkg.bestFor}
                </p>
                <ul className="flex flex-col gap-0 mb-8 flex-1">
                  {pkg.items.map((item) => (
                    <li key={item} className="text-[13px] font-300 text-[#4A4540] leading-[2]">
                      · {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`group flex items-center justify-center gap-2 w-full py-3.5 text-[11px] tracking-[0.2em] uppercase font-light no-underline transition-all duration-200 border ${
                    pkg.featured
                      ? 'bg-ink text-cream border-ink hover:bg-[#3D2B1F] hover:border-[#3D2B1F]'
                      : 'bg-transparent text-ink border-ink hover:bg-ink hover:text-cream'
                  }`}
                >
                  <span>Get started</span>
                  <span className="inline-block w-0 overflow-hidden opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-200">
                    &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <FadeInSection>
          <div className="page-container py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h2 className="accent-heading text-2xl md:text-3xl text-white tracking-tight">
              Have a project in mind?
            </h2>
            <CTAButton to="/contact" variant="light" fullWidthMobile>Get in touch</CTAButton>
          </div>
        </FadeInSection>
      </section>
    </PageTransition>
  )
}
