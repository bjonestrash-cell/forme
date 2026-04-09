import { Link } from 'react-router-dom'

export default function CTAButton({ to, children, variant = 'dark', className = '', fullWidthMobile = false }) {
  const base = 'group inline-flex items-center justify-center gap-2 text-[11px] tracking-[0.2em] uppercase font-light px-10 py-3.5 no-underline transition-all duration-200 border'
  const mobileClass = fullWidthMobile ? 'w-full sm:w-auto' : ''
  const variants = {
    dark: 'border-ink text-ink hover:bg-ink hover:text-cream',
    light: 'text-white hover:text-white',
    filled: 'border-ink bg-ink text-cream hover:border-[#3D2B1F] hover:bg-[#3D2B1F]',
  }

  const lightStyle = variant === 'light' ? {
    borderColor: '#C4A99A',
    color: '#C4A99A',
  } : undefined

  const lightHoverClass = variant === 'light'
    ? 'hover:!bg-[#3D2B1F] hover:!border-[#3D2B1F] hover:!text-white'
    : ''

  return (
    <Link
      to={to}
      className={`${base} ${variants[variant]} ${lightHoverClass} ${mobileClass} ${className}`}
      style={lightStyle}
    >
      <span>{children}</span>
      <span className="inline-block w-0 overflow-hidden opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-200">
        &rarr;
      </span>
    </Link>
  )
}
