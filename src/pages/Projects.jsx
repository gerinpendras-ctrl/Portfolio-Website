import { useState } from 'react'
import { projects, categories } from '../data/portfolioData'
import ProjectCard from '../components/ProjectCard'
import CategoryFilter from '../components/CategoryFilter'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter(p => p.categories.includes(activeCategory))

  return (
    <div className="relative overflow-x-hidden pt-28 pb-24">
      {/* Background decorations */}
      <div className="blob w-96 h-96 bg-teal top-0 right-0 translate-x-1/3 -translate-y-1/3" />
      <div className="blob w-72 h-72 bg-gold bottom-32 left-0 -translate-x-1/3" />

      <div className="section relative z-10">

        {/* Page header */}
        <div className="text-center flex flex-col items-center gap-4 mb-14">
          <span className="text-teal text-sm font-bold uppercase tracking-widest">My Work</span>
          <h1 className="font-title text-5xl sm:text-6xl text-text-main">
            all <span className="text-teal">projects</span>
          </h1>
          <p className="text-text-muted max-w-lg leading-relaxed">
            A curated collection of branding, UI/UX, and web design work spanning fintech,
            lifestyle, food &amp; beverage, and more.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-12">
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* Count */}
        <p className="text-text-muted text-sm font-semibold mb-6 text-center">
          Showing <span className="text-teal font-bold">{filtered.length}</span> project{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' && (
            <> in <span className="text-gold font-bold">{activeCategory}</span></>
          )}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-16 text-center">
            <p className="text-text-muted text-lg">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
