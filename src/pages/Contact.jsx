import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeInSection from '../components/FadeInSection'
import PageTransition from '../components/PageTransition'

const expo = [0.16, 1, 0.3, 1]

const serviceOptions = [
  'Content Studio',
  'Social Management',
  'Brand & Website Development',
  'AI & Technology',
  'Not sure yet',
]

const inputClasses =
  'w-full bg-transparent border-0 border-b border-greige pb-3 text-sm font-200 text-ink outline-none transition-colors duration-200 placeholder:text-muted/40 focus:border-[#3D2B1F]'

function Squiggle() {
  return (
    <svg width="140" height="10" viewBox="0 0 140 10" className="mt-2">
      <path d="M0 7 Q35 1 70 7 Q105 13 140 7" stroke="#3D2B1F" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    console.log('Form submitted:', data)
    setSubmitted(true)
  }

  return (
    <PageTransition>
      <section className="min-h-screen pt-24 md:pt-32 pb-20">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            {/* Left — Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: expo }}
              className="md:sticky md:top-32"
            >
              <p className="text-[11px] tracking-[0.3em] font-200 text-muted mb-6 uppercase">contact</p>
              <h1 className="accent-heading tracking-tight leading-[1.1]" style={{ fontSize: 'clamp(40px, 10vw, 100px)' }}>
                Let's <span style={{ color: '#3D2B1F' }}>build.</span>
              </h1>
              <Squiggle />
              <p className="mt-8 text-[15px] font-200 text-muted max-w-sm leading-[1.9]">
                Tell us about your brand. We'll tell you what's possible.
              </p>

              <div className="mt-14 hidden md:block">
                <p className="text-[11px] tracking-[0.3em] font-200 text-muted mb-4 uppercase">direct</p>
                <a href="mailto:hello@forme.studio" className="text-sm text-ink/70 no-underline font-200 hover:text-ink transition-colors duration-200">
                  hello@forme.studio
                </a>
                <div className="mt-10">
                  <p className="text-[11px] tracking-[0.3em] font-200 text-muted mb-4 uppercase">based in</p>
                  <p className="text-sm text-ink/70 font-200">Los Angeles, CA</p>
                  <p className="text-[11px] text-muted font-200 mt-1">Working globally.</p>
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <FadeInSection delay={0.1}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: expo }}
                    className="flex items-center justify-center min-h-[400px]"
                  >
                    <div className="text-center">
                      <p className="accent-heading text-3xl md:text-4xl text-blush">We'll be in touch.</p>
                      <p className="mt-4 text-sm text-muted font-200">Expect to hear from us within 24 hours.</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-8"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <label className="block text-[11px] tracking-[0.3em] font-200 text-muted mb-4 uppercase">Name</label>
                      <input type="text" name="name" required className={inputClasses} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.3em] font-200 text-muted mb-4 uppercase">Email</label>
                      <input type="email" name="email" required className={inputClasses} placeholder="you@company.com" />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.3em] font-200 text-muted mb-4 uppercase">Brand / Company</label>
                      <input type="text" name="company" className={inputClasses} placeholder="Your brand or company name" />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.3em] font-200 text-muted mb-4 uppercase">What are you looking for?</label>
                      <select
                        name="service"
                        required
                        defaultValue=""
                        className={`${inputClasses} appearance-none`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%236B6560' stroke-width='1.5'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 0 center',
                        }}
                      >
                        <option value="" disabled>Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.3em] font-200 text-muted mb-4 uppercase">Message</label>
                      <textarea name="message" rows={4} required className={`${inputClasses} resize-none`} placeholder="Tell us about your project" />
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-4 bg-ink text-cream text-[11px] tracking-[0.2em] uppercase py-5 border-none font-light transition-colors duration-200"
                      style={{ backgroundColor: '#1A1A1A' }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#3D2B1F' }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1A1A1A' }}
                    >
                      Send Message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </FadeInSection>

            {/* Mobile contact info */}
            <div className="md:hidden border-t border-greige pt-10">
              <p className="text-[11px] tracking-[0.3em] font-200 text-muted mb-4 uppercase">direct</p>
              <a href="mailto:hello@forme.studio" className="text-sm text-ink/70 no-underline font-200 hover:text-ink transition-colors duration-200">
                hello@forme.studio
              </a>
              <div className="mt-8">
                <p className="text-[11px] tracking-[0.3em] font-200 text-muted mb-4 uppercase">based in</p>
                <p className="text-sm text-ink/70 font-200">Los Angeles, CA</p>
                <p className="text-[11px] text-muted font-200 mt-1">Working globally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
