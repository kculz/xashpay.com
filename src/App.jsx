import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Earn from './pages/Earn';
import Coverage from './pages/Coverage';
import Contact from './pages/Contact';

// Import remaining legal pages just to not break existing references
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="min-h-screen flex flex-col font-sans bg-gray-50">
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/earn" element={<Earn />} />
            <Route path="/coverage" element={<Coverage />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Legal Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            
            {/* Redirect legacy offline/agents routes to home or keep them unlinked */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;