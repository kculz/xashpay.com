import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import XashPOS from './pages/XashPOS';
import Developers from './pages/Developers';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AMLPolicy from './pages/AMLPolicy';
import DataProtection from './pages/DataProtection';
import CookiePolicy from './pages/CookiePolicy';
import Agents from './pages/Agents';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]); // This triggers every time the path changes

  return null;
}

function App() {
  return (
    <Router>
      {/* Place it here once - it handles all route changes automatically */}
      <ScrollToTop /> 
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-brand-50/30">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pos" element={<XashPOS />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/aml-policy" element={<AMLPolicy />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;