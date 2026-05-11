import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { personal, skills, projects } from '../data/portfolioData'
import ProjectCard from '../components/ProjectCard'
import { useReveal } from '../hooks/useReveal'

const Sparkle = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" className={className} fill="currentColor">
    <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" />
  </svg>
)

function SkillCard({ skill }) {
  return (
    <div className="glass-card rounded-xl p-4 flex flex-col gap-3 hover:border-teal/30 transition-all duration-200 hover:-translate-y-0.5">
      <div className="flex items-center gap-3">
        <span
          className="w-9 h-9 rounded-lg flex items-center justify-center text-bg-base text-xs font-display font-bold flex-shrink-0"
          style={{ backgroundColor: skill.color }}
        >
          <img src={skill.icon} className="size-9"/>
        </span>
        <span className="text-text-main font-bold text-sm">{skill.name}</span>
      </div>
      <div className="w-full h-1.5 bg-bg-base rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal to-gold"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
    </div>
  )
}

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4)

  // Each ref goes directly on the element that has the "reveal" class
  const heroRef   = useReveal(0.05)
  const statsRef  = useReveal(0.1)
  const aboutRef  = useReveal(0.1)
  const skillsRef = useReveal(0.1)
  const projRef   = useReveal(0.1)
  const ctaRef    = useReveal(0.1)

  return (
    <div className="relative overflow-x-hidden">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 noise-overlay">
        <div className="blob w-[600px] h-[600px] bg-teal   top-0    left-1/4   -translate-x-1/2 -translate-y-1/4" />
        <div className="blob w-[500px] h-[500px] bg-gold   bottom-0 right-0    translate-x-1/4  translate-y-1/4" />
        <div className="blob w-[300px] h-[300px] bg-teal   bottom-0 left-0     -translate-x-1/4 translate-y-1/4" />

        <Sparkle size={28} className="absolute top-32 left-[8%]  text-teal opacity-60 animate-float" />
        <Sparkle size={16} className="absolute top-48 right-[12%] text-gold opacity-70 animate-float-slow" />
        <Sparkle size={20} className="absolute bottom-40 left-[15%] text-gold opacity-50 animate-float" />
        <Sparkle size={12} className="absolute bottom-56 right-[8%] text-teal opacity-60 animate-float-slow" />

        <div className="absolute top-1/3 right-[5%] w-64 h-64 rounded-full border border-teal/10 animate-spin-slow" />
        <div className="absolute top-1/3 right-[5%] w-48 h-48 rounded-full border border-teal/15 animate-spin-slow" style={{ animationDirection: 'reverse' }} />

        {/* ref goes directly on the reveal element */}
        <div className="section relative z-10 reveal" ref={heroRef}>
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Text */}
            <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
              <span className="pill bg-teal/10 text-teal border border-teal/30 self-center lg:self-start text-xs tracking-widest uppercase">
                Available for Projects
              </span>

              <h1 className="font-title text-5xl sm:text-6xl lg:text-7xl text-text-main leading-tight">
                HI, I'M{' '}
                <span className="text-teal relative">
                  GERIN
                  <span className="absolute -bottom-0 left-0 right-0 h-1 bg-gold rounded-full opacity-60" />
                </span>
                <br />
                <span className="text-teal">PENDRAS</span>
                <span className="text-teal">.</span>
              </h1>

              <p className="text-text-muted text-lg font-semibold tracking-wide">
                Graphic Designer &nbsp;·&nbsp; UI/UX Designer &nbsp;·&nbsp; Frontend Developer
              </p>

              <p className="text-text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
                Creating bold, vibrant identities and seamless digital experiences from the Philippines.
                Let's build something unforgettable together.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-2">
                <Link
                  to="/projects"
                  className="flex items-center gap-2 bg-teal text-bg-base font-bold px-7 py-3.5 rounded-full hover:bg-teal-light transition-colors shadow-lg glow-teal"
                >
                  View My Work <ArrowRight size={18} />
                </Link>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 border border-teal/40 text-teal font-bold px-7 py-3.5 rounded-full hover:bg-teal/10 transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Avatar */}
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 scale-110 rounded-full border-2 border-dashed border-teal/30 animate-spin-slow" />
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-teal/20 to-teal/40 flex items-center justify-center glow-teal animate-glow-pulse">
                <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-teal/40">
                  <img src={personal.avatar} alt={personal.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 glass-card rounded-xl px-3 py-2 animate-float shadow-lg">
                <div className="flex items-center gap-1.5 text-xs font-bold text-teal">
                  <Star size={12} className="text-gold" fill="currentColor" /> UI/UX Design
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-3 py-2 animate-float-slow shadow-lg">
                <div className="flex items-center gap-1.5 text-xs font-bold text-gold">
                  <Sparkle size={12} className="text-teal" /> Branding
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─────────────────────────────────────── */}
      <section className="py-10 border-y border-teal/10 bg-bg-card/50">
        <div className="section">
          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-8 text-center" ref={statsRef}>
            {[
              { value: '4+',   label: 'Years Experience' },
              { value: '50+',   label: 'Projects Delivered' },
              { value: '10+',  label: 'Happy Clients' },
              { value: '100%', label: 'Passion & Dedication' },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-display text-4xl text-teal">{stat.value}</span>
                <span className="text-text-muted text-sm font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ───────────────────────────────────── */}
      <section className="py-24 relative">
        <div className="blob w-96 h-96 bg-teal opacity-10 top-1/2 right-0 translate-x-1/2 -translate-y-1/2" />
        <div className="section">
          <div className="reveal flex flex-col lg:flex-row items-center gap-16" ref={aboutRef}>

            {/* Tool grid */}
            <div className="flex-shrink-0 grid grid-cols-2 gap-4 w-full max-w-xs">
              {[
                { abbr: 'Ps', name: 'Photoshop',  color: '#31a8ff' },
                { abbr: 'Ai', name: 'Illustrator',color: '#ff9a00' },
                { abbr: 'Fi', name: 'Figma',      color: '#f24e1e' },
                { abbr: 'Bl', name: 'Blender',    color: '#e87d0d' },
              ].map(tool => (
                <div
                  key={tool.name}
                  className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-2 aspect-square hover:border-teal/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="font-display text-2xl" style={{ color: tool.color }}>{tool.abbr}</span>
                  <span className="text-text-muted text-xs font-semibold text-center">{tool.name}</span>
                </div>
              ))}
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-teal rounded-full" />
                <span className="text-teal text-sm font-bold uppercase tracking-widest">About Me</span>
              </div>
              <h2 className="font-title text-4xl sm:text-5xl text-text-main">
                designing experiences that{' '}
                <span className="text-teal">resonate</span>.
              </h2>
              <p className="text-text-muted leading-relaxed">{personal.bio}</p>
              <div className="flex flex-wrap gap-3 mt-2">
                {['Graphic Design', 'UI/UX', 'Branding', 'Video Editing', 'Frontend Dev'].map(tag => (
                  <span key={tag} className="pill bg-teal/10 text-teal border border-teal/20 text-xs">{tag}</span>
                ))}
              </div>
              <Link
                to="/about"
                className="self-start flex items-center gap-2 text-teal font-bold hover:gap-3 transition-all"
              >
                More About Me <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ──────────────────────────────────────────── */}
      <section className="py-24 bg-bg-card/30">
        <div className="section">
          <div className="text-center mb-14">
            <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-3">Toolkit</span>
            <h2 className="font-title text-4xl sm:text-5xl text-text-main">
              software &amp; <span className="text-teal">skills</span>
            </h2>
          </div>
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4" ref={skillsRef}>
            {skills.map(skill => <SkillCard key={skill.name} skill={skill} />)}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ───────────────────────────────── */}
      <section className="py-24 outline-teal">
        <div className="section">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-14">
            <div>
              <span className="text-teal text-sm font-bold uppercase tracking-widest block mb-2">Selected Work</span>
              <h2 className="font-title text-4xl sm:text-5xl text-text-main">
                featured <span className="text-teal">projects</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="flex items-center gap-2 border border-teal/30 text-teal font-bold px-5 py-2.5 rounded-full hover:bg-teal/10 transition-colors flex-shrink-0"
            >
              All Projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-6" ref={projRef}>
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="blob w-[500px] h-[500px] bg-teal left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
        <div className="section relative z-10">
          <div className="reveal glass-card rounded-3xl p-10 sm:p-16 text-center flex flex-col items-center gap-6 glow-teal" ref={ctaRef}>
            <Sparkle size={32} className="text-gold animate-float" />
            <h2 className="font-title text-4xl sm:text-5xl text-text-main">
              let's create something{' '}
              <span className="text-teal">amazing</span>!
            </h2>
            <p className="text-text-muted max-w-lg leading-relaxed">
              Looking for a passionate designer who delivers bold, memorable results?
              I'd love to hear about your project.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 bg-teal text-bg-base font-bold px-8 py-4 rounded-full hover:bg-teal-light transition-colors shadow-lg text-lg"
            >
              Start a Conversation <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}