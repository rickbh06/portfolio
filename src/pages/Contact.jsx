import portfolioData from '../data/portfolioData';

export default function Contact() {
  const { profile } = portfolioData;
  // Reconstruct email at runtime — never stored as one string to deter bots
  const email = `${profile.emailUser}@${profile.emailDomain}`;

  return (
    <div className="pt-24 pb-32 min-h-[80vh] flex flex-col justify-center">
      
      <section className="max-w-content mx-auto px-6 w-full fade-up">
        <h1 className="font-display font-medium text-4xl sm:text-5xl text-ground mb-12 uppercase tracking-tight max-w-2xl">
          Let's work together.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 rule pt-12">
          
          <div className="space-y-12">
            <p className="text-xl text-ground-60 leading-relaxed max-w-md">
              I'm actively looking for internship and co-op opportunities — in propulsion, mechanical design, mechatronics, or anywhere I can contribute and learn. If you're working on something interesting and think I'd be a good fit, I'd genuinely like to hear from you.
            </p>

            <div>
              <p className="eyebrow text-ground-60 mb-2">Direct Email</p>
              <a 
                href={`mailto:${email}`} 
                className="font-display text-2xl sm:text-3xl text-ground hover:text-thrust transition-colors break-all tracking-wide"
              >
                {email}
              </a>
            </div>

            <div>
              <p className="eyebrow text-ground-60 mb-2">Network</p>
              <a 
                href={profile.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-display text-2xl sm:text-3xl text-ground hover:text-thrust transition-colors tracking-wide"
              >
                LinkedIn Profile &rarr;
              </a>
            </div>
          </div>

          <div>
            <div className="bg-field-100 p-8">
              <div className="mb-8">
                <p className="eyebrow text-ground-60 mb-2">Location</p>
                <p className="text-lg text-ground font-medium">{profile.location}</p>
                <p className="text-sm text-ground-60 mt-1">{profile.citizenship}</p>
              </div>
              
              <div className="rule pt-8 mb-8">
                <p className="eyebrow text-ground-60 mb-2">University</p>
                <p className="text-lg text-ground font-medium">UNC Charlotte</p>
                <p className="text-sm text-ground-60 mt-1">Mechanical Engineering</p>
                <p className="text-sm text-ground-60">GPA {profile.education.gpa}</p>
              </div>

              <div className="rule pt-8">
                <p className="eyebrow text-ground-60 mb-2">Focus Areas</p>
                <ul className="text-sm text-thrust font-medium space-y-2">
                  <li>Aerospace Propulsion</li>
                  <li>Mechanical Design</li>
                  <li>Mechatronics & Embedded Systems</li>
                  <li>Structural & Thermal Analysis</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
      
    </div>
  );
}
