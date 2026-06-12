export default function Header({ profile }) {
  const { name, title, subtitle, location, email, linkedin, citizenship, education } = profile;

  return (
    <header className="pb-12 mb-12 border-b border-slate-200">

      {/* Name row */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
          {name}
        </h1>
        <span className="text-xxs font-mono text-slate-400 mt-2.5 whitespace-nowrap">
          {citizenship}
        </span>
      </div>

      {/* Title + subtitle */}
      <p className="text-base text-slate-500 mb-1">{title}</p>
      <p className="text-sm text-slate-400 mb-8 max-w-xl leading-relaxed">{subtitle}</p>

      {/* Education credential block */}
      <div className="border border-slate-200 bg-white rounded-sm px-5 py-4 mb-7 max-w-md">
        <p className="text-xxs font-mono text-slate-400 uppercase tracking-widest mb-2.5">
          Education
        </p>
        <p className="text-sm font-medium text-slate-800 mb-0.5">{education.institution}</p>
        <p className="text-sm text-slate-500 mb-3">{education.degree}</p>
        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <span>GPA {education.gpa}</span>
          <span className="h-3 w-px bg-slate-200 inline-block" aria-hidden="true" />
          <span>{education.graduation}</span>
        </div>
      </div>

      {/* Contact row */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs text-slate-400">{location}</span>
        <span className="text-slate-300 text-xs" aria-hidden="true">·</span>
        <a
          href={`mailto:${email}`}
          className="text-xs text-slate-500 underline underline-offset-2 hover:text-slate-800 transition-colors duration-150"
        >
          {email}
        </a>
        <span className="text-slate-300 text-xs" aria-hidden="true">·</span>
        <a
          id="linkedin-cta"
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-800 border border-slate-300 rounded-sm px-3 py-1.5 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-150"
        >
          LinkedIn Profile
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      </div>

    </header>
  );
}
