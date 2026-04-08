import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, MapPin, Mail, Phone, ShieldCheck, CheckCircle } from 'lucide-react';
import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#0B3C5D] text-white pt-20 pb-10 border-t border-blue-900/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Banner inside Footer */}
        <div className="bg-white/5 rounded-3xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Go Global?</h3>
            <p className="text-blue-200">Join thousands of agents and customers using XashPay for cross-border transactions.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://wa.me/27655971539?text=Hello" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#F5B700] text-[#0B3C5D] font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors flex items-center gap-2 shadow-lg">
                <MessageCircle size={20} /> Start on WhatsApp
              </button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img src={logo} alt="XashPay" className="h-10 w-auto" />
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mt-2">
              Global payments made simple. Buy or sell international airtime, data, electricity, and vouchers across multiple countries via WhatsApp.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold border border-white/20 text-[#F5B700]">
                12+ Countries
              </span>
            </div>
          </div>
          
          {/* Quick Links Col */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 font-medium">
               <li><Link to="/" className="text-blue-200 hover:text-[#F5B700] transition-colors flex items-center gap-2"><ArrowRight size={14}/> Home</Link></li>
               <li><Link to="/about" className="text-blue-200 hover:text-[#F5B700] transition-colors flex items-center gap-2"><ArrowRight size={14}/> About Us</Link></li>
               <li><Link to="/services" className="text-blue-200 hover:text-[#F5B700] transition-colors flex items-center gap-2"><ArrowRight size={14}/> Services</Link></li>
               <li><Link to="/earn" className="text-blue-200 hover:text-[#F5B700] transition-colors flex items-center gap-2"><ArrowRight size={14}/> Earn</Link></li>
               <li><Link to="/contact" className="text-blue-200 hover:text-[#F5B700] transition-colors flex items-center gap-2"><ArrowRight size={14}/> Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info Col */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4">
               <a href="https://wa.me/27655971539?text=Hello" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-blue-200 hover:text-white transition-colors cursor-pointer group">
                  <Phone size={20} className="text-[#F5B700] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-white">+27 65 597 1539</div>
                    <div className="text-sm">WhatsApp Support</div>
                  </div>
               </a>
               <li className="flex items-start gap-3 text-blue-200">
                  <Mail size={20} className="text-[#F5B700] mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-white">info@xash.network</div>
                    <div className="text-sm">General Inquiries</div>
                  </div>
               </li>
            </ul>
          </div>
          
          {/* Trust Col */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Trust & Security</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <ShieldCheck size={24} className="text-green-400" />
                <div>
                  <div className="font-semibold text-white text-sm">SSL Secured</div>
                  <div className="text-xs text-blue-200">Verified & Secure</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <CheckCircle size={24} className="text-[#F5B700]" />
                <div>
                  <div className="font-semibold text-white text-sm">24/7 Support</div>
                  <div className="text-xs text-blue-200">Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-300">
          <div>
            &copy; {new Date().getFullYear()} XashPay. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}