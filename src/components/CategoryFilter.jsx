export default function CategoryFilter({ categories, active, onChange }) {
  const all = ['All', ...categories]

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {all.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`
            pill text-sm font-bold transition-all duration-200
            ${active === cat
              ? 'bg-teal text-bg-base shadow-md scale-105'
              : 'bg-bg-card text-text-muted border border-teal/20 hover:border-teal/50 hover:text-teal'
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
