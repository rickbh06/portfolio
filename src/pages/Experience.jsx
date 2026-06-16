import portfolioData from '../data/portfolioData';
import ImageGallery from '../components/ImageGallery';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <div className="pt-24 pb-32">
      
      {/* Header */}
      <section className="max-w-content mx-auto px-6 mb-24 fade-up">
        <h1 className="font-display font-medium text-4xl sm:text-5xl text-ground mb-6 uppercase tracking-tight">
          Experience
        </h1>
        <p className="text-lg text-ground-60 max-w-2xl leading-relaxed">
          Research internship experience with the ICSP solid propulsion group.
        </p>
      </section>

      {/* Experience List */}
      <div className="max-w-content mx-auto px-6">
        {experience.map((exp, index) => (
          <article
            key={exp.id}
            id={`experience-${exp.id}`}
            className="scroll-mt-32 pb-24 mb-24 rule pt-12 fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Header */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-2">
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ground uppercase tracking-wide">
                  {exp.role}
                </h2>
                <span className="eyebrow text-ground-60 shrink-0">{exp.timeline}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-medium text-thrust">{exp.company}</span>
                <span className="text-field-300">|</span>
                <span className="text-sm text-ground-60">{exp.location}</span>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              <div className="lg:col-span-8">
                <div className="prose prose-lg text-ground-60 max-w-none mb-12">
                  <h3 className="eyebrow text-ground-60 mb-4 mt-2">Overview</h3>
                  <p className="text-xl text-ground leading-relaxed mb-8">
                    {exp.summary}
                  </p>
                  {exp.context && exp.context.length > 0 && (
                    <div className="space-y-6">
                      <h3 className="eyebrow text-ground-60 mb-4 mt-8">Details</h3>
                      {exp.context.map((note, i) => (
                        <p key={i} className="leading-relaxed">
                          {note}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Images */}
                {exp.images && exp.imageLabels && (
                  <div className="mt-16">
                    <ImageGallery images={exp.images} labels={exp.imageLabels} />
                  </div>
                )}
              </div>

              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <p className="eyebrow text-ground-60 mb-6">Key Responsibilities</p>
                  <ul className="space-y-5">
                    {exp.metrics.map((m, i) => (
                      <li key={i} className="text-base text-ground-60 leading-relaxed border-l-2 border-field-300 pl-4">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
