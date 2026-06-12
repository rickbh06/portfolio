import portfolioData from '../data/portfolioData';
import SkillsSection from '../components/SkillsSection';

export default function About() {
  const { profile, skills } = portfolioData;
  const email = `${profile.emailUser}@${profile.emailDomain}`;

  return (
    <div className="pt-24 pb-32">
      
      {/* Header */}
      <section className="max-w-content mx-auto px-6 mb-24 fade-up">
        <h1 className="font-display font-medium text-4xl sm:text-5xl text-ground mb-6 uppercase tracking-tight">
          Background
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 rule pt-12">
          
          {/* Headshot Column */}
          <div className="md:col-span-4">
            <div className="img-frame bg-field-200 mb-6 w-full aspect-[4/5]">
              <img
                src="/images/rick-headshot.png"
                alt="Rick Bhattacharya"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div
                className="w-full h-full flex flex-col items-center justify-center text-ground-40 font-mono text-xs p-6 text-center"
                style={{ display: 'none' }}
              >
                <span>Image Pending</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="eyebrow text-ground-60 mb-1">Location</p>
                <p className="text-sm text-ground font-medium">{profile.location}</p>
              </div>
              <div className="rule pt-4">
                <p className="eyebrow text-ground-60 mb-1">Status</p>
                <p className="text-sm text-thrust font-medium">Open to Opportunities</p>
              </div>
              <div className="rule pt-4">
                <a
                  href={`mailto:${email}`}
                  className="link-accent text-sm break-all"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>

          {/* Bio Column */}
          <div className="md:col-span-8">
            <h2 className="font-display font-semibold text-3xl text-ground mb-2 uppercase tracking-wide">{profile.name}</h2>
            <p className="eyebrow text-thrust mb-8">
              {profile.title}
            </p>
            
            <div className="prose prose-lg text-ground-60 max-w-none mb-16">
              <p className="text-xl text-ground leading-relaxed mb-6">
                {profile.statement}
              </p>
            </div>

            {/* Education block */}
            <div className="rule pt-8 mb-16">
              <p className="eyebrow text-ground-60 mb-6">Education</p>
              <div>
                <p className="font-display font-medium text-xl text-ground uppercase tracking-wide mb-1">
                  {profile.education.institution}
                </p>
                <p className="text-base text-ground-60 mb-4">{profile.education.degree}</p>
                <ul className="flex flex-wrap gap-x-8 gap-y-2">
                  <li className="text-sm text-ground-60"><span className="text-ground font-medium">GPA:</span> {profile.education.gpa}</li>
                  <li className="text-sm text-ground-60"><span className="text-ground font-medium">Class:</span> {profile.education.graduation}</li>
                  <li className="text-sm text-ground-60"><span className="text-ground font-medium">Status:</span> {profile.citizenship}</li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div className="rule pt-8">
              <p className="eyebrow text-ground-60 mb-8">Technical Proficiencies</p>
              <SkillsSection skills={skills} />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
