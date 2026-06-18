import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import PrintView from './pages/PrintView';
import { useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const isPrint = location.pathname === '/print';

  const isHomePage = location.pathname === '/';
  const isProjectsPage = location.pathname === '/projects';
  const shouldPadTop = !isPrint && !isHomePage && !isProjectsPage;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {!isPrint && <Nav />}
      <main className={`flex-1 w-full ${shouldPadTop ? 'pt-16' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/print" element={<PrintView />} />
        </Routes>
      </main>
      {!isPrint && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}
