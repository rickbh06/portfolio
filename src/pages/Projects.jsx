import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolioData';
import ImageGallery from '../components/ImageGallery';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <div className="pt-24 pb-32">
      
      {/* Header */}
      <section className="max-w-content mx-auto px-6 mb-24 fade-up">
        <h1 className="font-display font-medium text-4xl sm:text-5xl text-ground mb-6 uppercase tracking-tight">
          Selected Projects
        </h1>
        <p className="text-lg text-ground-60 max-w-2xl leading-relaxed">
          Detailed case studies of engineering work, from conceptual fluid mechanics and CAD modeling to hands-on fabrication and hot-fire testing.
        </p>
      </section>

      {/* Projects List */}
      <div>
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
          <section 
            key={project.id} 
            className={`${isEven ? 'bg-field' : 'bg-field-100 border-y border-field-200'} transition-colors duration-300`}
          >
            <article
              id={project.id}
              className={`max-w-content mx-auto px-6 scroll-mt-16 py-20 fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="mb-12">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-4">
                  <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ground uppercase tracking-wide">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="eyebrow text-ground-60">{project.timeline}</span>
                    {project.status === 'active' && <span className="status-active">Active</span>}
                    {project.status === 'teaser' && <span className="status-dev">In Development</span>}
                    {project.status === 'complete' && <span className="status-done">Complete</span>}
                  </div>
                </div>
                <p className="eyebrow text-thrust">{project.role}</p>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Narrative (Left / Top) */}
                <div className="lg:col-span-8">
                  <div className="prose prose-lg text-ground-60 max-w-none mb-12">
                    <h3 className="eyebrow text-ground-60 mb-4 mt-2">Overview</h3>
                    <p className="text-xl text-ground leading-relaxed mb-8">
                      {project.summary}
                    </p>
                    {project.context && project.context.length > 0 && (
                      <div className="space-y-6">
                        <h3 className="eyebrow text-ground-60 mb-4 mt-8">Details</h3>
                        {project.context.map((note, i) => (
                          <p key={i} className="leading-relaxed">
                            {note}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Project Links */}
                    {project.links && project.links.length > 0 && (
                      <div className="mt-8 flex flex-wrap gap-4">
                        {project.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-accent font-medium flex items-center gap-2"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Gallery inline with narrative content */}
                  {project.images && project.images.length > 0 && (
                    <div className="mt-16">
                      <ImageGallery images={project.images} labels={project.imageLabels} />
                    </div>
                  )}
                </div>

                {/* Metrics Sidebar (Right) */}
                <div className="lg:col-span-4">
                  <div className="sticky top-32">
                    <p className="eyebrow text-ground-60 mb-6">Key Results</p>
                    <ul className="space-y-5">
                      {project.metrics.map((m, i) => (
                        <li key={i} className="text-base text-ground-60 leading-relaxed border-l-2 border-field-300 pl-4">
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </article>
          </section>
        )})}
      </div>
    </div>
  );
}
