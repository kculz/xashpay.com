import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/xash_logo.jpg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setSolutionsOpen(false);
    setLegalOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  const SolutionsDropdown = () => (
    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
      <Link
        to="/pos"
        className="block px-4 py-2 text-[#1A1A1A] hover:bg-[#F5F7FA] hover:text-[#1F6AE1]"
      >
        Xash POS
      </Link>
      <Link
        to="/developers"
        className="block px-4 py-2 text-[#1A1A1A] hover:bg-[#F5F7FA] hover:text-[#1F6AE1]"
      >
        Developers / API
      </Link>
    </div>
  );

  const LegalDropdown = () => (
    <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
      <Link
        to="/privacy-policy"
        className="block px-4 py-2 text-[#1A1A1A] hover:bg-[#F5F7FA] hover:text-[#1F6AE1]"
      >
        Privacy Policy
      </Link>
      <Link
        to="/terms-of-service"
        className="block px-4 py-2 text-[#1A1A1A] hover:bg-[#F5F7FA] hover:text-[#1F6AE1]"
      >
        Terms of Service
      </Link>
      <Link
        to="/aml-policy"
        className="block px-4 py-2 text-[#1A1A1A] hover:bg-[#F5F7FA] hover:text-[#1F6AE1]"
      >
        AML/KYC Policy
      </Link>
      <Link
        to="/data-protection"
        className="block px-4 py-2 text-[#1A1A1A] hover:bg-[#F5F7FA] hover:text-[#1F6AE1]"
      >
        Data Protection
      </Link>
      <Link
        to="/cookie-policy"
        className="block px-4 py-2 text-[#1A1A1A] hover:bg-[#F5F7FA] hover:text-[#1F6AE1]"
      >
        Cookie Policy
      </Link>
    </div>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Xash Logo"
              className="w-20  rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-[#1F6AE1]' : 'text-[#1A1A1A] hover:text-[#1F6AE1]'
              }`}
            >
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className={`flex items-center text-sm font-medium transition-colors ${
                  location.pathname.startsWith('/pos') || location.pathname.startsWith('/developers')
                    ? 'text-[#1F6AE1]'
                    : 'text-[#1A1A1A] hover:text-[#1F6AE1]'
                }`}
              >
                Solutions
                <ChevronDown className={`ml-1 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} size={16} />
              </button>
              {solutionsOpen && <SolutionsDropdown />}
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-[#1F6AE1]' : 'text-[#1A1A1A] hover:text-[#1F6AE1]'
              }`}
            >
              About Xash
            </Link>

            {/* Legal Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLegalOpen(!legalOpen)}
                className={`flex items-center text-sm font-medium transition-colors ${
                  location.pathname.includes('policy') || location.pathname.includes('terms')
                    ? 'text-[#1F6AE1]'
                    : 'text-[#1A1A1A] hover:text-[#1F6AE1]'
                }`}
              >
                Legal & Compliance
                <ChevronDown className={`ml-1 transition-transform ${legalOpen ? 'rotate-180' : ''}`} size={16} />
              </button>
              {legalOpen && <LegalDropdown />}
            </div>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1F6AE1] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#0B3C5D] transition-colors"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#F5F7FA] transition-colors"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-[#1A1A1A]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-[#1A1A1A]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/')
                    ? 'bg-[#1F6AE1] text-white'
                    : 'bg-[#F5F7FA] text-[#1A1A1A] hover:bg-[#F5F7FA]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="pl-4 space-y-2">
                <p className="text-sm font-semibold text-gray-500 mb-2">Solutions</p>
                <Link
                  to="/pos"
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive('/pos')
                      ? 'bg-[#1F6AE1] text-white'
                      : 'bg-[#F5F7FA] text-[#1A1A1A] hover:bg-[#F5F7FA]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Xash POS
                </Link>
                <Link
                  to="/developers"
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive('/developers')
                      ? 'bg-[#1F6AE1] text-white'
                      : 'bg-[#F5F7FA] text-[#1A1A1A] hover:bg-[#F5F7FA]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Developers / API
                </Link>
              </div>
              
              <Link
                to="/about"
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive('/about')
                    ? 'bg-[#1F6AE1] text-white'
                    : 'bg-[#F5F7FA] text-[#1A1A1A] hover:bg-[#F5F7FA]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Xash
              </Link>
              
              <div className="pl-4 space-y-2">
                <p className="text-sm font-semibold text-gray-500 mb-2">Legal & Compliance</p>
                <Link
                  to="/privacy-policy"
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive('/privacy-policy')
                      ? 'bg-[#1F6AE1] text-white'
                      : 'bg-[#F5F7FA] text-[#1A1A1A] hover:bg-[#F5F7FA]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive('/terms-of-service')
                      ? 'bg-[#1F6AE1] text-white'
                      : 'bg-[#F5F7FA] text-[#1A1A1A] hover:bg-[#F5F7FA]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terms of Service
                </Link>
                <Link
                  to="/aml-policy"
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive('/aml-policy')
                      ? 'bg-[#1F6AE1] text-white'
                      : 'bg-[#F5F7FA] text-[#1A1A1A] hover:bg-[#F5F7FA]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  AML/KYC Policy
                </Link>
                <Link
                  to="/data-protection"
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive('/data-protection')
                      ? 'bg-[#1F6AE1] text-white'
                      : 'bg-[#F5F7FA] text-[#1A1A1A] hover:bg-[#F5F7FA]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Data Protection
                </Link>
                <Link
                  to="/cookie-policy"
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive('/cookie-policy')
                      ? 'bg-[#1F6AE1] text-white'
                      : 'bg-[#F5F7FA] text-[#1A1A1A] hover:bg-[#F5F7FA]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cookie Policy
                </Link>
              </div>
              
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-[#1F6AE1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0B3C5D] transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;