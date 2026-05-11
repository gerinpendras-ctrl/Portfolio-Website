import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { personal, skills } from '../data/portfolioData'

// Decorative sparkle
const Sparkle = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" className={className} fill="currentColor">
    <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" />
  </svg>
)

export default function About() {
  return (
    <div className="relative overflow-x-hidden pt-28 pb-24">
      <div className="blob w-96 h-96 bg-teal top-0 left-0 -translate-x-1/3 -translate-y-1/3" />
      <div className="blob w-72 h-72 bg-gold bottom-48 right-0 translate-x-1/3" />

      <div className="section relative z-10">

        {/* ── Bio header ── */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-teal/30 glow-teal">
              <img src={personal.avatar} alt={personal.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 glass-card rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2 text-sm font-bold text-teal">
                <MapPin size={14} className="text-gold" />
                {personal.location}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6 flex-1">
            <span className="text-teal text-sm font-bold uppercase tracking-widest">About Me</span>
            <h1 className="font-display text-5xl sm:text-6xl text-text-main leading-tight">
              I'm <span className="text-teal">Gerin</span>{' '}
              <span className="text-gold">Pendras</span>.
            </h1>
            <p className="text-text-muted leading-relaxed text-lg">{personal.bio}</p>

            <p className="text-text-muted leading-relaxed">
              My work spans brand identity, UI/UX design, web development, video editing, and 3D visualization.
              I thrive at the intersection of bold creativity and functional design — creating work that not only
              looks amazing but also serves a clear purpose.
            </p>

            {/* Attribute pills */}
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                'Brand Identity', 'UI/UX Design', 'Web Design',
                'Video Editing', '3D Visualization', 'Social Media',
              ].map(tag => (
                <span key={tag} className="pill bg-teal/10 text-teal border border-teal/25 text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="self-start flex items-center gap-2 bg-teal text-bg-base font-bold px-6 py-3 rounded-full hover:bg-teal-dim transition-colors mt-2 shadow-lg"
            >
              Let's Work Together <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* ── Design philosophy ── */}
        <div className="mb-24">
          <div className="flex flex-col items-center gap-4 text-center mb-12">
            <span className="text-teal text-sm font-bold uppercase tracking-widest">Philosophy</span>
            <h2 className="font-display text-4xl sm:text-5xl text-text-main">
              How I <span className="text-gold">Work</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎨',
                title: 'Design with Purpose',
                  body:  "Every pixel should serve a reason. I obsess over the why before the what, ensuring every design decision advances the project's goal.",
              },
              {
                icon: '⚡',
                title: 'Bold & Distinctive',
                body:  'Mediocre design blends in. I chase the unexpected — the colour combination, the layout twist, the typographic choice that makes a design unforgettable.',
              },
              {
                icon: '🤝',
                title: 'Collaborate Deeply',
                body:  'Great work comes from great communication. I stay close to clients, listen hard, and iterate fast until the vision is perfectly realized.',
              },
            ].map(card => (
              <div
                key={card.title}
                className="glass-card rounded-2xl p-8 flex flex-col gap-4 hover:border-teal/40 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-4xl">{card.icon}</span>
                <h3 className="font-display text-xl text-teal">{card.title}</h3>
                <p className="text-text-muted leading-relaxed text-sm">{card.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Skills ── */}
        <div>
          <div className="flex flex-col items-center gap-4 text-center mb-12">
            <span className="text-teal text-sm font-bold uppercase tracking-widest">Toolkit</span>
            <h2 className="font-title text-4xl sm:text-5xl text-text-main">
              software &amp; <span className="text-teal">proficiency</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map(skill => (
              <div key={skill.name} className="glass-card rounded-xl p-5 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-bg-base text-sm font-display font-bold flex-shrink-0"
                    style={{ backgroundColor: skill.color }}
                  >
                    <img src={skill.icon} className="size-10" />
                  </span>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-text-main font-bold text-sm">{skill.name}</span>
                      <span className="text-teal text-xs font-bold">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-2 bg-bg-base rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-teal to-gold"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
