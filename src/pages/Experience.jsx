import portfolioData from '../data/portfolioData';
import ImageGallery from '../components/ImageGallery';

function ExperienceItem({ exp, index }) {
  return (
    <article
      id={`experience-${exp.id}`}
      className="scroll-mt-32 pb-24 mb-24 rule pt-12 fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="mb-12 flex flex-col sm:flex-row gap-6 items-start">
        {exp.logo && (
          <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white border border-field-200 rounded-xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] flex items-center justify-center p-2">
            <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
          </div>
        )}
        <div className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4 mb-2">
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
          {exp.images && exp.imageLabels && exp.images.length > 0 && (
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
  );
}

export default function Experience() {
  const { experience, leadership } = portfolioData;

  return (
    <div className="pt-24 pb-32">
      
      {/* Header */}
      <section className="max-w-content mx-auto px-6 mb-24 fade-up">
        <h1 className="font-display font-medium text-4xl sm:text-5xl text-ground mb-6 uppercase tracking-tight">
          Professional Experience
        </h1>
        <p className="text-lg text-ground-60 max-w-2xl leading-relaxed">
          Industry and academic engineering experience.
        </p>
      </section>

      {/* Experience List */}
      <div className="max-w-content mx-auto px-6">
        {experience.map((exp, index) => (
          <ExperienceItem key={exp.id} exp={exp} index={index} />
        ))}
      </div>

      {/* Leadership Header */}
      {leadership && leadership.length > 0 && (
        <>
          <section className="max-w-content mx-auto px-6 mb-16 mt-12 fade-up">
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-ground mb-4 uppercase tracking-tight">
              Leadership & Extracurriculars
            </h2>
            <p className="text-lg text-ground-60 max-w-2xl leading-relaxed">
              Hands-on engineering roles in rocketry clubs and propulsion labs.
            </p>
          </section>

          <div className="max-w-content mx-auto px-6">
            {leadership.map((exp, index) => (
              <ExperienceItem key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </>
      )}

    </div>
  );
}
