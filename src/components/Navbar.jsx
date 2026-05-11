import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { personal } from '../data/portfolioData'

export default function Navbar() {
  const [open,      setOpen]      = useState(false)
  const [scrolled,  setScrolled]  = useState(false)
  const { pathname }              = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  const linkCls = ({ isActive }) =>
    `underline-teal text-sm font-bold tracking-wider uppercase transition-colors duration-200 ${
      isActive ? 'text-teal' : 'text-text-main hover:text-teal'
    }`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="section flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-2xl text-teal hover:opacity-80 transition-opacity"
        >
          GP<span className="text-gold">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { to: '/',         label: 'Home' },
            { to: '/projects', label: 'Projects' },
            { to: '/about',    label: 'About' },
            { to: '/contact',  label: 'Contact' },
          ].map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} className={linkCls}>
              {label}
            </NavLink>
          ))}

          <a
            href={`mailto:${personal.email}`}
            className="pill bg-teal text-bg-base hover:bg-teal-dim transition-colors duration-200 shadow-md"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden text-teal p-2 hover:bg-teal/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="glass-card mx-4 mt-2 mb-2 rounded-2xl p-6 flex flex-col gap-5">
          {[
            { to: '/',         label: 'Home' },
            { to: '/projects', label: 'Projects' },
            { to: '/about',    label: 'About' },
            { to: '/contact',  label: 'Contact' },
          ].map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} className={linkCls}>
              {label}
            </NavLink>
          ))}
          <a
            href={`mailto:${personal.email}`}
            className="pill bg-teal text-bg-base self-start hover:bg-teal-dim transition-colors"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  )
}
