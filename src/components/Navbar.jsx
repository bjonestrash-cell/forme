import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const expo = [0.16, 1, 0.3, 1]

const navLinks = [
  { to: '/work', label: 'work' },
  { to: '/services', label: 'services', hasMega: true },
  { to: '/about', label: 'about' },
  { to: '/contact', label: 'contact' },
]

const megaColumns = [
  {
    name: 'Content Studio',
    anchor: 'content-studio',
    services: ['Content Creation', 'Short-Form Video', 'TikTok & Reels', 'Stories', 'Event Content'],
  },
  {
    name: 'Social Management',
    anchor: 'social-management',
    services: ['Social Media Management', 'Feed Curation', 'Scheduling', 'Community'],
  },
  {
    name: 'Brand & Website Development',
    anchor: 'brand-website-development',
    services: ['Branding', 'Web Design', 'Marketing Strategy'],
  },
  {
    name: 'AI & Technology',
    anchor: 'ai-technology',
    services: ['AI Content Creation', 'Claude Code Development', 'Workflow Automation'],
  },
]

function MobileAccordionColumn({ col, onNavigate }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div
        role="button"
        tabIndex={-1}
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between"
        style={{
          minHeight: '56px',
          padding: '0 24px',
          borderBottom: '1px solid #E8E0D8',
          background: open ? '#FAF7F4' : 'transparent',
          transition: 'background 0.2s ease',
        }}
      >
        <span className="text-[13px] tracking-[0.2em] uppercase font-light" style={{ color: '#3D2B1F' }}>
          {col.name}
        </span>
        <span
          className="font-200 leading-none select-none"
          style={{
            fontSize: '20px',
            color: '#6B4C3B',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            display: 'inline-block',
          }}
        >
          +
        </span>
      </div>
      <div
        style={{
          maxHeight: open ? '200px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          background: open ? '#FAF7F4' : 'transparent',
        }}
      >
        {col.services.map((s) => (
          <div
            key={s}
            role="button"
            tabIndex={-1}
            onClick={() => onNavigate(col.anchor)}
            style={{
              padding: '12px 24px 12px 40px',
              borderBottom: '1px solid rgba(232, 224, 216, 0.5)',
            }}
          >
            <span className="text-[12px] tracking-[0.15em] uppercase font-200" style={{ color: '#4A4540' }}>
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const megaTimeout = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  function handleMegaEnter() {
    clearTimeout(megaTimeout.current)
    setMegaOpen(true)
  }

  function handleMegaLeave() {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200)
  }

  function handleMegaItemClick(anchor) {
    setMegaOpen(false)
    setMobileOpen(false)
    navigate(`/services#${anchor}`)
  }

  function handleMobileNavClick() {
    setMobileOpen(false)
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-cream/[0.92] backdrop-blur-[12px]'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={scrolled ? { borderBottom: '1px solid rgba(61, 43, 31, 0.15)' } : undefined}
    >
      <div className="page-container flex items-center justify-between h-20">
        <Link
          to="/"
          className="font-200 tracking-[0.3em] text-sm no-underline relative z-[60]"
          style={{ color: '#3D2B1F' }}
        >
          forme
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ to, label, hasMega }) => (
            <div
              key={to}
              className="relative"
              onMouseEnter={hasMega ? handleMegaEnter : undefined}
              onMouseLeave={hasMega ? handleMegaLeave : undefined}
            >
              <Link
                to={to}
                onClick={() => setMegaOpen(false)}
                className={`text-[11px] tracking-[0.15em] font-200 no-underline transition-colors duration-200 pb-1 ${
                  isActive(to)
                    ? 'text-ink'
                    : 'text-muted hover:text-ink border-b border-transparent'
                }`}
                style={isActive(to) ? { borderBottom: '1px solid #3D2B1F' } : undefined}
              >
                {label}
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile toggle */}
        <div
          role="button"
          tabIndex={-1}
          className="lg:hidden p-2 relative z-[60]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              className="block w-5 h-px bg-ink origin-center"
              animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-px bg-ink"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.12 }}
            />
            <motion.span
              className="block w-5 h-px bg-ink origin-center"
              animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>
      </div>

      {/* Desktop mega dropdown */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="hidden lg:block absolute top-full left-0 w-full bg-cream border-b border-greige"
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleMegaLeave}
          >
            <div
              style={{
                maxWidth: '900px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                alignItems: 'start',
                gap: '40px',
                padding: '40px 60px',
              }}
            >
              {megaColumns.map((col) => (
                <div
                  key={col.anchor}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    minWidth: 0,
                    paddingTop: 0,
                    marginTop: 0,
                  }}
                >
                  <div
                    role="button"
                    tabIndex={-1}
                    onClick={() => handleMegaItemClick(col.anchor)}
                    className="group text-left"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    <p className="accent-heading text-base text-ink group-hover:text-blush transition-colors duration-200" style={{ margin: 0 }}>
                      {col.name}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {col.services.map((s) => (
                      <div
                        key={s}
                        role="button"
                        tabIndex={-1}
                        onClick={() => handleMegaItemClick(col.anchor)}
                        className="text-left text-[11px] tracking-[0.12em] uppercase font-200 text-muted hover:text-ink transition-colors duration-200 whitespace-nowrap"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden fixed inset-0 top-0 bg-cream z-50 overflow-y-auto"
          >
            <div className="h-20" />

            <div className="flex flex-col">
              {navLinks.map(({ to, label, hasMega }) => (
                <div key={to}>
                  <Link
                    to={to}
                    onClick={handleMobileNavClick}
                    className="flex items-center no-underline"
                    style={{
                      minHeight: '56px',
                      padding: '0 24px',
                      borderBottom: '1px solid #E8E0D8',
                    }}
                  >
                    <span
                      className="text-[13px] tracking-[0.25em] uppercase font-200"
                      style={{ color: isActive(to) ? '#1A1A1A' : '#3D2B1F' }}
                    >
                      {label}
                    </span>
                  </Link>
                  {hasMega && (
                    <div>
                      {megaColumns.map((col) => (
                        <MobileAccordionColumn
                          key={col.anchor}
                          col={col}
                          onNavigate={handleMegaItemClick}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
