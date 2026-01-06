import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { LEGAL_PAGES, COMPANY_INFO } from '../../../data/constants';
import logo from "../../assets/logo.png"

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/pos', label: 'Xash POS' },
    { path: '/developers', label: 'Developers' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-[#0B3C5D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Xash Logo"
                className="w-20  rounded-lg"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {COMPANY_INFO.name}. Modern fintech solutions for retail across Zimbabwe. 
              Secure, reliable, and commission-driven.
            </p>
            <div className="flex items-center text-sm text-gray-300">
              <Building className="mr-2" size={16} />
              <span>{COMPANY_INFO.registration}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-[#F5B700] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Compliance */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 text-white">
              Legal & Compliance
            </h3>
            <ul className="space-y-3">
              {LEGAL_PAGES.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-[#F5B700] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-gray-300">
                <MapPin className="mr-3 mt-0.5 flex-shrink-0 text-[#F5B700]" size={18} />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail className="mr-3 flex-shrink-0 text-[#F5B700]" size={18} />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center text-sm">
                <Mail className="mr-3 flex-shrink-0 text-[#F5B700]" size={18} />
                <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="text-gray-300 hover:text-white transition-colors">
                  {COMPANY_INFO.supportEmail}
                </a>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="mr-3 flex-shrink-0 text-[#F5B700]" size={18} />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-[#1F6AE1] pt-8 flex flex-col md:flex-row justify-between items-center text-sm"
        >
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;