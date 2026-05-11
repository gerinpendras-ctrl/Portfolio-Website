import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { id, title, client, year, categories, tags, coverImage, summary } = project

  // Alternating accent colours for category pills
  const pillColours = [
    'bg-teal/15 text-teal border border-teal/30',
    'bg-gold/15 text-gold border border-gold/30',
    'bg-purple-400/15 text-purple-300 border border-purple-400/30',
  ]

  return (
    <Link
      to={`/projects/${id}`}
      className="group relative flex flex-col glass-card rounded-2xl overflow-hidden hover:border-teal/40 hover:glow-teal transition-all duration-300 hover:-translate-y-1"
    >
      {/* Cover image */}
      <div className="relative overflow-hidden aspect-[16/9] bg-bg-base">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-bg-base/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="flex items-center gap-2 bg-teal text-bg-base font-bold px-5 py-2.5 rounded-full text-sm shadow-lg">
            View Project <ArrowUpRight size={16} />
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Category pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`pill text-[10px] ${pillColours[i % pillColours.length]}`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl text-text-main group-hover:text-teal transition-colors leading-tight">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-text-muted text-sm leading-relaxed line-clamp-2 flex-1">
          {summary}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-2 border-t border-teal/10">
          <span className="text-text-muted text-xs font-semibold">{year}</span>
          <span className="flex items-center gap-1 text-teal text-xs font-bold group-hover:gap-2 transition-all">
            View Details <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  )
}
