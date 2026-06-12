import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on mount to catch initial state
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [location]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Determine if we are over a dark hero or light content
  const isOverDarkHero = !scrolled;

  const textClass = isOverDarkHero ? 'text-cloud hover:text-white' : 'text-ground-60 hover:text-ground';
  const bgClass = isOverDarkHero ? 'bg-transparent border-transparent' : 'bg-field border-field-200 shadow-sm';

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`nav-root border-b ${bgClass}`}>
      <div className="max-w-content mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className={`font-display font-semibold tracking-wide text-lg ${
            isOverDarkHero ? 'text-white' : 'text-ground'
          }`}
        >
          RICK BHATTACHARYA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  isActive 
                    ? (isOverDarkHero ? 'text-white' : 'text-ground') 
                    : textClass
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="mailto:sbhatt23@charlotte.edu"
            className={`text-sm font-medium transition-colors ${
              isOverDarkHero 
                ? 'text-white border-b border-white hover:opacity-80' 
                : 'text-thrust border-b border-thrust hover:text-thrust-light hover:border-thrust-light'
            }`}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`sm:hidden transition-colors ${
            isOverDarkHero ? 'text-cloud' : 'text-ground-60'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen
              ? <path d="M18 6L6 18M6 6l12 12"/>
              : <path d="M3 12h18M3 6h18M3 18h18"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Always light for readability) */}
      {mobileOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-field border-b border-field-200 px-6 py-4 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => 
                  `text-base font-medium ${isActive ? 'text-ground' : 'text-ground-60'}`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="mailto:sbhatt23@charlotte.edu"
              className="text-base font-medium text-thrust w-fit"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
