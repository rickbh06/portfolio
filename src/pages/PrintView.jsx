import Home from './Home';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

export default function PrintView() {
  return (
    <div className="print-view bg-field min-h-screen text-ground">
      <style>{`
        * {
          animation: none !important;
          transition: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
        .sticky {
          position: static !important;
        }
        article {
          page-break-inside: avoid;
          margin-bottom: 40px;
        }
        .grid {
          display: block !important;
        }
        .lg\\:col-span-8, .lg\\:col-span-4, .md\\:col-span-4, .md\\:col-span-8 {
          width: 100% !important;
          margin-bottom: 24px;
        }
      `}</style>
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Interactive Portfolio: <a href="https://rickbhattacharya.vercel.app/" className="text-thrust underline">https://rickbhattacharya.vercel.app/</a></h1>
      </div>
      <div className="mb-16"><Home /></div>
      <div className="mb-16"><About /></div>
      <div className="mb-16"><Projects /></div>
      <div className="mb-16"><Experience /></div>
      <div className="mb-16"><Contact /></div>
    </div>
  );
}
