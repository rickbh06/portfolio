import ImageGallery from './ImageGallery';

export default function ExperienceCard({ experience, isLast }) {
  return (
    <article
      id={`experience-${experience.id}`}
      className={`py-8 ${!isLast ? 'border-b border-slate-100' : ''}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
        <h3 className="text-base font-semibold text-slate-900">{experience.role}</h3>
        <span className="text-xs font-mono text-slate-400 whitespace-nowrap shrink-0">
          {experience.timeline}
        </span>
      </div>

      {/* Company + location */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-xs font-mono text-slate-500">{experience.company}</span>
        <span className="h-3 w-px bg-slate-200 inline-block" aria-hidden="true" />
        <span className="text-xs font-mono text-slate-400">{experience.location}</span>
      </div>

      {/* Narrative summary */}
      <p className="text-sm text-slate-600 leading-relaxed mb-5 max-w-2xl">
        {experience.summary}
      </p>

      {/* Image gallery */}
      {experience.images && (
        <div className="mb-6">
          <ImageGallery images={experience.images} labels={experience.imageLabels} />
        </div>
      )}

      {/* Engineering context */}
      {experience.context && experience.context.length > 0 && (
        <div className="mb-5 border-l-2 border-slate-200 pl-4 space-y-2">
          {experience.context.map((note, i) => (
            <p key={i} className="text-xs text-slate-500 leading-relaxed">
              {note}
            </p>
          ))}
        </div>
      )}

      {/* Metric bullets */}
      <div>
        <p className="text-xxs font-mono text-slate-400 uppercase tracking-widest mb-2">
          Key Results
        </p>
        <ul className="space-y-1.5">
          {experience.metrics.map((m, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
              <span className="text-slate-300 select-none shrink-0 mt-px">—</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </div>

    </article>
  );
}
