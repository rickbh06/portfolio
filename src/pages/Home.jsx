import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolioData';
import { useState } from 'react';

function ProjectCard({ project }) {
  const imgUrl = project.images && project.images[0];
  // Technical drawings (PNG/CAD) look better with contain; real photos use cover
  const isTechnical = imgUrl && (imgUrl.endsWith('.png') || imgUrl.includes('cad') || imgUrl.includes('render'));
  const fitStyle = isTechnical ? 'object-contain p-3' : 'object-cover';

  return (
    <Link to={`/projects#${project.id}`} className="block group">
      <div className="mb-6">
        <div className="img-frame aspect-[4/3] w-full" style={{ background: isTechnical ? '#1a1c20' : '#141518' }}>
          {imgUrl ? (
            imgUrl.endsWith('.mp4') ? (
              <video src={imgUrl} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            ) : (
              <img src={imgUrl} alt={project.title} loading="lazy" className={`w-full h-full ${fitStyle}`} />
            )
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3" style={{ background: '#0f1114' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              <span className="eyebrow text-white/25 tracking-widest">In Progress</span>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h3 className="font-display font-semibold text-xl text-ground group-hover:text-thrust transition-colors uppercase tracking-wide">
            {project.title}
          </h3>
          {project.status === 'teaser' && <span className="status-dev hidden sm:inline-block">Dev</span>}
        </div>
        <p className="text-base text-ground-60 mb-4 line-clamp-2 leading-relaxed">
          {project.summary}
        </p>
        <span className="link-accent text-sm">Read Report &rarr;</span>
      </div>
    </Link>
  );
}

export default function Home() {
  const { profile, projects } = portfolioData;
  const [imgHovered, setImgHovered] = useState(false);

  // Hero: L1 rocket teaser for dramatic first impression
  const l1Project = projects.find(p => p.id === 'l1hybrid');
  const teaserImg = '/images/projects/l1hybrid/rocket-teaser.jpg';

  // Featured projects grid below (TVC, EON, Biprop)
  const featuredIds = ['eon250', 'tvc', 'biprop20'];
  const featuredProjects = featuredIds.map(id => projects.find(p => p.id === id)).filter(Boolean);

  return (
    <div>
      {/* ─── Hero Zone (Dark) ─────────────────────────────── */}
      <section className="hero-zone min-h-screen relative flex flex-col pt-32 pb-16">
        <div className="max-w-content mx-auto px-6 w-full relative z-10 flex flex-col h-full flex-1 justify-center fade-up">
          
          <p className="eyebrow text-cloud-60 mb-6">
            Rick Bhattacharya / Mechanical Engineering
          </p>
          
          <h1 className="font-display font-medium text-5xl sm:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-[0.95] max-w-5xl mb-8">
            Building Rocket Engines & Flight Hardware.
          </h1>
          
          <p className="text-xl sm:text-2xl text-cloud-60 max-w-3xl leading-relaxed mb-12">
            Mechanical engineering student building liquid rocket engines, TVC systems, and flight avionics — mostly because I wanted to understand how they actually work.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/projects" className="text-white font-medium border-b border-white pb-1 hover:text-cloud-60 hover:border-cloud-60 transition-colors">
              View Work
            </Link>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-cloud-60 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>

        </div>

        {/* Full-bleed rocket teaser — clickable, links to Projects */}
        <Link
          to="/projects"
          className="block w-full mt-24 relative fade-up-2 group cursor-pointer"
          onMouseEnter={() => setImgHovered(true)}
          onMouseLeave={() => setImgHovered(false)}
          aria-label="View all projects"
        >
          {/* Dark gradient overlay — lightens slightly on hover */}
          <div
            className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500"
            style={{
              background: 'linear-gradient(to top, rgba(10,11,13,0.85) 0%, rgba(10,11,13,0.2) 50%, rgba(10,11,13,0.1) 100%)',
              opacity: imgHovered ? 0.7 : 1,
            }}
          />
          <img
            src={teaserImg}
            alt="High-power rocket in assembly"
            className="w-full h-[75vh] object-cover object-center border-y border-space-600 transition-transform duration-700"
            style={{ transform: imgHovered ? 'scale(1.015)' : 'scale(1)' }}
          />
          {/* Caption bottom-left */}
          <div className="absolute bottom-8 left-8 z-20">
            <p className="eyebrow text-cloud-60 mb-2 tracking-widest">Click to Explore</p>
            <p className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight">
              View All Projects
            </p>
          </div>
          {/* Arrow bottom-right */}
          <div
            className="absolute bottom-8 right-8 z-20 transition-transform duration-300"
            style={{ transform: imgHovered ? 'translate(4px, -4px)' : 'translate(0,0)' }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </div>
        </Link>
      </section>

      {/* ─── Content Zone (Light) ──────────────────────────── */}
      <section className="bg-field py-32">
        <div className="max-w-content mx-auto px-6">
          <div className="flex justify-between items-end mb-16 rule pt-8">
            <h2 className="font-display font-medium text-3xl text-ground uppercase tracking-wide">Selected Hardware</h2>
            <Link to="/projects" className="link-accent hidden sm:block">View All Projects &rarr;</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-16 sm:hidden">
            <Link to="/projects" className="link-accent block text-center">View All Projects &rarr;</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
