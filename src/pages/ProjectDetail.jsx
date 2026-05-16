import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, X } from 'lucide-react'
import { projects } from '../data/portfolioData'
import ReactMarkdown from 'react-markdown'

export default function ProjectDetail() {
  const { id }     = useParams()
  const navigate   = useNavigate()
  const project    = projects.find(p => p.id === id)
  const [lightbox, setLightbox] = useState(null) // index of open image

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 pt-24">
        <h2 className="font-display text-4xl text-teal">Project Not Found</h2>
        <Link to="/projects" className="flex items-center gap-2 text-text-muted hover:text-teal transition-colors">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    )
  }

  const {
    title, client, year, categories, tags,
    coverImage, images, description, scopeOfWork,
    liveUrl, caseStudyUrl,
  } = project

  // Prev / Next project navigation
  const currentIndex = projects.findIndex(p => p.id === id)
  const prevProject  = projects[currentIndex - 1]
  const nextProject  = projects[currentIndex + 1]

  const pillColours = [
    'bg-teal/15 text-teal border border-teal/30',
    'bg-gold/15 text-gold border border-gold/30',
    'bg-purple-400/15 text-purple-300 border border-purple-400/30',
  ]

  return (
    <div className="relative overflow-x-hidden pt-24 pb-24">
      {/* Background blobs */}
      <div className="blob w-96 h-96 bg-teal top-0 right-0 translate-x-1/3 -translate-y-1/2" />
      <div className="blob w-72 h-72 bg-gold bottom-48 left-0 -translate-x-1/3" />

      <div className="section relative z-10">

        {/* Back button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-text-muted hover:text-teal font-semibold mb-10 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* Cover image */}
        <div className="rounded-3xl overflow-hidden aspect-[21/9] bg-bg-card mb-12 cursor-zoom-in"
             onClick={() => setLightbox(0)}>
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-14">
          {/* Title + desc */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <span key={cat} className={`pill text-xs ${pillColours[i % pillColours.length]}`}>
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="font-title text-4xl sm:text-5xl text-text-main">{title}</h1>
            <p className="text-text-muted leading-relaxed text-lg whitespace-pre-line text-wrap"><ReactMarkdown>{description}</ReactMarkdown></p>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map(tag => (
                <span key={tag} className="pill bg-bg-card text-text-muted border border-teal/15 text-xs">
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            {(liveUrl || caseStudyUrl) && (
              <div className="flex gap-4 mt-2">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-teal text-bg-base font-bold px-5 py-2.5 rounded-full hover:bg-teal-dim transition-colors text-sm"
                  >
                    Live Project <ExternalLink size={14} />
                  </a>
                )}
                {caseStudyUrl && (
                  <a
                    href={caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-teal/40 text-teal font-bold px-5 py-2.5 rounded-full hover:bg-teal/10 transition-colors text-sm"
                  >
                    Case Study <ExternalLink size={14} />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Sidebar info */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-5 h-fit">
            <div>
              <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-1">Client</p>
              <p className="text-text-main font-bold">{client}</p>
            </div>
            <div className="h-px bg-teal/10" />
            <div>
              <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-1">Year</p>
              <p className="text-text-main font-bold">{year}</p>
            </div>
            <div className="h-px bg-teal/10" />
            <div>
              <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-3">Scope of Work</p>
              <ul className="flex flex-col gap-2">
                {scopeOfWork.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Image gallery */}
        {images.length > 1 && (
          <>
            <h2 className="font-title text-3xl text-text-main mb-6">
              project <span className="text-teal">gallery</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden aspect-video bg-bg-card cursor-zoom-in hover:opacity-90 transition-opacity"
                  onClick={() => setLightbox(idx)}
                >
                  <img src={src} alt={`${title} ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Prev / Next navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t border-teal/10">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className="glass-card rounded-xl p-4 flex items-center gap-3 hover:border-teal/40 transition-all group max-w-xs"
            >
              <ArrowLeft size={18} className="text-teal flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-text-muted text-xs font-bold uppercase tracking-wider">Previous</p>
                <p className="text-text-main font-bold text-sm">{prevProject.title}</p>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.id}`}
              className="glass-card rounded-xl p-4 flex items-center gap-3 hover:border-teal/40 transition-all group max-w-xs ml-auto text-right"
            >
              <div>
                <p className="text-text-muted text-xs font-bold uppercase tracking-wider">Next</p>
                <p className="text-text-main font-bold text-sm">{nextProject.title}</p>
              </div>
              <ArrowRight size={18} className="text-teal flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-bg-base/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full glass-card flex items-center justify-center text-teal hover:bg-teal hover:text-bg-base transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center text-teal hover:bg-teal hover:text-bg-base transition-colors disabled:opacity-30"
            onClick={e => { e.stopPropagation(); setLightbox(i => Math.max(0, i - 1)) }}
            disabled={lightbox === 0}
          >
            <ArrowLeft size={20} />
          </button>

          <img
            src={images[lightbox]}
            alt={`${title} ${lightbox + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center text-teal hover:bg-teal hover:text-bg-base transition-colors disabled:opacity-30"
            onClick={e => { e.stopPropagation(); setLightbox(i => Math.min(images.length - 1, i + 1)) }}
            disabled={lightbox === images.length - 1}
          >
            <ArrowRight size={20} />
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-muted text-sm font-semibold">
            {lightbox + 1} / {images.length}
          </p>
        </div>
      )}
    </div>
  )
}
