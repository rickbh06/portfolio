import ImageGallery from './ImageGallery';

export default function ProjectCard({ project, isLast }) {
  return (
    <article
      id={`project-${project.id}`}
      className={`py-8 ${!isLast ? 'border-b border-paper-100' : ''}`}
    >
      {/* Header row: role badge + timeline */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
        <div className="flex items-baseline gap-2.5 flex-wrap">
          <h3 className="text-base font-semibold text-ink leading-snug">
            {project.title}
          </h3>
          <span className="text-xxs font-mono text-ink-lighter border border-paper-100 rounded-sm px-1.5 py-0.5 whitespace-nowrap">
            {project.role}
          </span>
        </div>
        <span className="text-xs font-mono text-ink-lighter whitespace-nowrap shrink-0">
          {project.timeline}
        </span>
      </div>

      {/* Narrative summary */}
      <p className="text-sm text-ink-light leading-relaxed mb-5 max-w-2xl">
        {project.summary}
      </p>

      {/* Image gallery — full width */}
      <div className="mb-6">
        <ImageGallery images={project.images} labels={project.imageLabels} />
      </div>

      {/* Engineering context — what the resume doesn't say */}
      {project.context && project.context.length > 0 && (
        <div className="mb-5 border-l-2 border-paper-100 pl-4 space-y-2">
          {project.context.map((note, i) => (
            <p key={i} className="text-xs text-ink-lighter leading-relaxed">
              {note}
            </p>
          ))}
        </div>
      )}

      {/* Metric bullets — subdued, supporting detail */}
      <div>
        <p className="text-xxs font-mono text-ink-lighter uppercase tracking-widest mb-2">
          Key Results
        </p>
        <ul className="space-y-1.5">
          {project.metrics.map((m, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-ink-light leading-relaxed">
              <span className="text-paper-100 select-none shrink-0 mt-px">—</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </div>

    </article>
  );
}
