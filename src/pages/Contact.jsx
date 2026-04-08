import { Phone, Mail, MessageCircle, MapPin, Clock, Globe } from 'lucide-react';
import Card from '../components/ui/Card';
import PillBadge from '../components/ui/PillBadge';
import Button from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0B3C5D] text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center gap-4 mb-6">
            <PillBadge variant="blue" className="bg-white/10 text-white border-white/20">24/7 WhatsApp Support</PillBadge>
            <PillBadge variant="blue" className="bg-white/10 text-white border-white/20">Global Coverage</PillBadge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Global Support, Always Available
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Get instant help from our support team via WhatsApp, available 24/7 across 12+ countries. Whether you need assistance with payments or want to become a reseller, we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/27655971539?text=Hello" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="w-full bg-[#F5B700] text-[#0B3C5D] hover:bg-yellow-400 gap-2">
                 <MessageCircle size={20} /> Chat on WhatsApp Now
              </Button>
            </a>
            <a href="tel:+263779222722" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-[#0B3C5D] gap-2">
                 <Phone size={20} /> Call Our Team
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
           
           {/* Left Column: Contact Methods */}
           <div className="lg:col-span-2 space-y-8">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#0B3C5D] mb-4">Choose Your Preferred Contact Method</h2>
                <p className="text-gray-600 text-lg">Multiple channels available for fast and efficient global support.</p>
              </div>

              {/* WhatsApp Card */}
              <Card className="p-8 border-l-4 border-green-500 hover:-translate-y-1 transition-transform">
                 <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shrink-0">
                       <MessageCircle size={32} />
                    </div>
                    <div className="flex-1">
                       <h3 className="text-2xl font-bold text-gray-900 mb-2">WhatsApp Support</h3>
                       <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-4">Fastest response • 24/7 available</p>
                       <p className="text-gray-600 mb-6">Best for general inquiries, quick questions, service purchases, and instant support.</p>
                       <a href="https://wa.me/27655971539?text=Hello" target="_blank" rel="noopener noreferrer" className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors block">
                          <span className="text-xl font-bold text-gray-900">+27 65 597 1539</span>
                          <span className="text-sm font-bold text-[#0B3C5D] bg-white px-3 py-1 rounded-md shadow-sm">Chat Now</span>
                       </a>
                    </div>
                 </div>
              </Card>

              {/* Phone Card */}
              <Card className="p-8 border-l-4 border-[#F5B700] hover:-translate-y-1 transition-transform">
                 <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center shrink-0">
                       <Phone size={32} />
                    </div>
                    <div className="flex-1">
                       <h3 className="text-2xl font-bold text-gray-900 mb-2">Phone Support</h3>
                       <p className="text-sm font-semibold text-yellow-600 uppercase tracking-widest mb-4">Business hours • Professional support</p>
                       <p className="text-gray-600 mb-6">Best for complex inquiries, detailed discussions, and business partnerships.</p>
                       <a href="tel:+263779222722" className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors block">
                          <span className="text-xl font-bold text-gray-900">+263 779 222 722</span>
                          <span className="text-sm font-bold text-[#0B3C5D] bg-white px-3 py-1 rounded-md shadow-sm">Call Now</span>
                       </a>
                    </div>
                 </div>
              </Card>

              {/* Email Card */}
              <Card className="p-8 border-l-4 border-blue-500 hover:-translate-y-1 transition-transform">
                 <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                       <Mail size={32} />
                    </div>
                    <div className="flex-1">
                       <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Support</h3>
                       <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Detailed inquiries • Formal communication</p>
                       <p className="text-gray-600 mb-6">Best for documentation, formal requests, and detailed proposals.</p>
                       <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-center justify-between">
                          <span className="text-xl font-bold text-gray-900">info@xash.network</span>
                          <span className="text-sm font-bold text-[#0B3C5D] bg-white px-3 py-1 rounded-md shadow-sm">Send Email</span>
                       </div>
                    </div>
                 </div>
              </Card>
           </div>

           {/* Right Column: Teams and Hours */}
           <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                 <h3 className="text-xl font-bold text-[#0B3C5D] mb-6 flex items-center gap-2">
                    <Globe className="text-[#F5B700]" /> Contact Specific Teams
                 </h3>
                 <div className="space-y-6">
                    <div className="border-b border-gray-100 pb-4">
                       <div className="font-bold text-gray-900 mb-1">Customer Support</div>
                       <div className="text-sm text-gray-600 mb-2">Service inquiries & general questions</div>
                       <div className="text-sm font-semibold text-green-600">⚡ Within minutes response</div>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                       <div className="font-bold text-gray-900 mb-1">Reseller Support</div>
                       <div className="text-sm text-gray-600 mb-2">Applications & training</div>
                       <div className="text-sm font-semibold text-blue-600">⚡ Within 1 hour response</div>
                    </div>
                 </div>
              </div>

              <div className="bg-[#0B3C5D] text-white rounded-3xl p-8 shadow-lg">
                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Clock className="text-[#F5B700]" /> Business Hours (CAT)
                 </h3>
                 <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b border-white/10 pb-2">
                       <span className="font-semibold text-blue-100">Mon - Fri</span>
                       <span className="font-bold text-white">8:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-white/10 pb-2">
                       <span className="font-semibold text-blue-100">Saturday</span>
                       <span className="font-bold text-[#F5B700]">WhatsApp Only</span>
                    </li>
                    <li className="flex justify-between items-center">
                       <span className="font-semibold text-blue-100">Sunday</span>
                       <span className="font-bold text-[#F5B700]">Emergency Only</span>
                    </li>
                 </ul>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}