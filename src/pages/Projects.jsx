import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolioData';
import ImageGallery from '../components/ImageGallery';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <div className="pt-40 pb-32 bg-space min-h-screen">
      
      {/* Header */}
      <section className="max-w-content mx-auto px-6 mb-24 fade-up">
        <h1 className="font-display font-medium text-4xl sm:text-5xl text-cloud mb-6 tracking-tight uppercase">
          Selected Projects
        </h1>
        <p className="text-lg text-cloud-60 max-w-2xl leading-relaxed font-mono text-sm">
          Detailed case studies of engineering work, from conceptual fluid mechanics and CAD modeling to hands-on fabrication and hot-fire testing.
        </p>
      </section>

      {/* Projects List */}
      <div className="max-w-content mx-auto px-4 sm:px-6 space-y-32">
        {projects.map((project, index) => {
          return (
          <section 
            key={project.id} 
            className="fade-up pt-8 border-t border-space-600"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <article id={project.id} className="scroll-mt-32">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                
                {/* Left Side (Sticky Meta) */}
                <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                  <p className="font-mono text-thrust-bright uppercase tracking-widest text-xs mb-4">{project.timeline}</p>
                  <h2 className="font-display font-medium text-3xl sm:text-4xl text-cloud uppercase tracking-wide mb-2 leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-cloud-60 font-mono text-sm mb-6">{project.role}</p>
                  
                  <div className="flex flex-wrap items-center gap-3 mb-10">
                    {project.status === 'active' && <span className="font-mono text-xs text-space bg-cloud px-2 py-1 uppercase tracking-widest">Active</span>}
                    {project.status === 'teaser' && <span className="font-mono text-xs text-space bg-thrust-bright px-2 py-1 uppercase tracking-widest">In Dev</span>}
                    {project.status === 'complete' && <span className="font-mono text-xs text-cloud border border-cloud-60 px-2 py-1 uppercase tracking-widest">Complete</span>}
                  </div>

                  <div className="hidden lg:block border-t border-space-600 pt-8 mt-8">
                    <p className="font-mono text-xs text-cloud-60 uppercase tracking-widest mb-6">Key Metrics</p>
                    <ul className="space-y-4">
                      {project.metrics.map((m, i) => (
                        <li key={i} className="text-sm text-cloud-60 leading-relaxed font-mono pl-3 border-l border-thrust-bright">
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side (Narrative & Gallery) */}
                <div className="lg:col-span-8">
                  <div className="prose prose-lg prose-invert max-w-none">
                    <p className="text-xl text-cloud leading-relaxed mb-10">
                      {project.summary}
                    </p>
                    
                    {project.context && project.context.length > 0 && (
                      <div className="space-y-6 mb-12">
                        {project.context.map((note, i) => (
                          <p key={i} className="leading-relaxed text-cloud-60">
                            {note}
                          </p>
                        ))}
                      </div>
                    )}

                    {project.links && project.links.length > 0 && (
                      <div className="mb-12 flex flex-wrap gap-4">
                        {project.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-mono text-sm text-thrust-bright hover:text-white transition-colors border-b border-thrust-bright hover:border-white pb-1"
                          >
                            {link.label}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Mobile Metrics (shows here on small screens) */}
                  <div className="lg:hidden border-t border-space-600 pt-8 mt-12 mb-12">
                    <p className="font-mono text-xs text-cloud-60 uppercase tracking-widest mb-6">Key Metrics</p>
                    <ul className="space-y-4">
                      {project.metrics.map((m, i) => (
                        <li key={i} className="text-sm text-cloud-60 leading-relaxed font-mono pl-3 border-l border-thrust-bright">
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.images && project.images.length > 0 && (
                    <div className="mt-8">
                      <ImageGallery images={project.images} labels={project.imageLabels} />
                    </div>
                  )}
                </div>

              </div>
            </article>
          </section>
        )})}
      </div>
    </div>
  );
}
