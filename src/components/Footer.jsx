import portfolioData from '../data/portfolioData';

export default function Footer() {
  const { profile } = portfolioData;
  const email = `${profile.emailUser}@${profile.emailDomain}`;

  return (
    <footer className="mt-24 pb-12">
      <div className="max-w-content mx-auto px-6">
        <div className="rule pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Brand */}
          <div>
            <p className="font-display font-medium text-ground tracking-wide uppercase text-sm">
              Rick Bhattacharya
            </p>
            <p className="text-xs text-ground-60 mt-1">
              Mechanical Engineering · Aerospace Propulsion
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${email}`}
              className="text-sm text-ground-60 hover:text-ground transition-colors"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ground-60 hover:text-ground transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-ground-40 font-mono">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
