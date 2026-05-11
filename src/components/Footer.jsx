import { Link } from 'react-router-dom'
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react'
import { personal } from '../data/portfolioData'

// Decorative star
const Star = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className} fill="currentColor">
    <path d="M8 0l2 5.5H16l-5 3.5 2 5.5-5-3.5L3 14.5l2-5.5L0 5.5h6z" />
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-bg-card border-t border-teal/10 mt-16">
      {/* Background blob */}
      <div className="blob w-96 h-96 bg-teal -bottom-48 left-1/2 -translate-x-1/2" />

      <div className="section relative z-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-display text-4xl text-teal">
              GP<span className="text-gold">.</span>
            </span>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              {personal.tagline}
            </p>
            <div className="flex gap-3 mt-2">
              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-teal/30 flex items-center justify-center text-teal hover:bg-teal hover:text-bg-base transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
              )}
              {personal.github && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-teal/30 flex items-center justify-center text-teal hover:bg-teal hover:text-bg-base transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github size={15} />
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-lg text-gold mb-5 flex items-center gap-2">
              <Star size={12} /> Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { to: '/',         label: 'Home' },
                { to: '/projects', label: 'Projects' },
                { to: '/about',    label: 'About' },
                { to: '/contact',  label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-text-muted hover:text-teal text-sm font-semibold transition-colors underline-teal"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg text-gold mb-5 flex items-center gap-2">
              <Star size={12} /> Get In Touch
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 text-text-muted hover:text-teal text-sm transition-colors"
                >
                  <Mail size={14} /> {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-center gap-2 text-text-muted hover:text-teal text-sm transition-colors"
                >
                  <Phone size={14} /> {personal.phone}
                </a>
              </li>
              {personal.linkedin && (
                <li>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-muted hover:text-teal text-sm transition-colors"
                  >
                    <ExternalLink size={14} /> LinkedIn Profile
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-teal/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="text-text-muted text-xs flex items-center gap-1">
            Designed &amp; Built with
            <Star size={10} className="text-gold" />
            by Gerin Pendras
          </p>
        </div>
      </div>
    </footer>
  )
}
