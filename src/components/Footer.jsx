import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/work', label: 'work' },
  { to: '/services', label: 'services' },
  { to: '/about', label: 'about' },
  { to: '/contact', label: 'contact' },
]

export default function Footer() {
  return (
    <footer
      className="bg-cream"
      style={{ borderTop: '1px solid transparent', borderImage: 'linear-gradient(to right, #3D2B1F22, #D4A5A590, #3D2B1F22) 1' }}
    >
      <div className="page-container py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="text-sm tracking-[0.3em] font-200 no-underline" style={{ color: '#3D2B1F' }}>
          forme
        </Link>
        <div className="flex items-center gap-6 md:gap-8">
          {footerLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-[11px] tracking-[0.15em] font-200 text-muted hover:text-ink no-underline transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
        <p className="text-[11px] tracking-[0.1em] font-200 text-muted">
          &copy; 2025 Forme Studio
        </p>
      </div>
    </footer>
  )
}
