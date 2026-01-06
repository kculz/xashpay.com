import { motion } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  ArrowRight,
  Shield,
  Star,
  ExternalLink,
  Calendar,
  Zap,
  Sparkles
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const MapSection = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const coordinates = { lat: -18.97244, lng: 32.66996 };

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([coordinates.lat, coordinates.lng], 18);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    const customIcon = L.divIcon({
      html: `
        <div class="relative">
          <div class="w-12 h-12 bg-[#1F6AE1] rounded-full border-4 border-white shadow-xl animate-pulse flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
            </svg>
          </div>
        </div>
      `,
      className: 'custom-marker',
      iconSize: [48, 60],
      iconAnchor: [24, 48],
    });

    markerRef.current = L.marker([coordinates.lat, coordinates.lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div class="p-2">
          <strong class="text-[#0B3C5D]">Xash Technologies</strong><br>
          <span class="text-gray-600">63 Embassy Building</span><br>
          <span class="text-gray-600">Mutare, Zimbabwe</span>
        </div>
      `);

    return () => {
      map.remove();
    };
  }, []);

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
      <div 
        ref={mapRef} 
        className="h-[500px] w-full relative"
        style={{ minHeight: '500px', zIndex: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F7FA] to-gray-100 flex items-center justify-center z-0">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#1F6AE1] mx-auto mb-4"></div>
            <p className="text-gray-600 font-semibold text-lg">Loading map...</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 border-t-2 border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mr-5 shadow-lg" style={{ backgroundColor: '#1F6AE1' }}>
              <MapPin className="text-white" size={32} />
            </div>
            <div>
              <h3 className="font-black text-2xl text-[#1A1A1A]">Xash Technologies</h3>
              <p className="text-gray-600 text-lg">63 Embassy Building, Mutare</p>
            </div>
          </div>
          
          <motion.button
            onClick={handleGetDirections}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(31, 106, 225, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: '#1F6AE1' }}
            className="flex items-center text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-[#0B3C5D] transition-all group"
          >
            <ExternalLink className="mr-2 group-hover:rotate-45 transition-transform" size={24} />
            Get Directions
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+263 716 409 412', '+263 773 123 456'],
      color: '#1F6AE1',
      description: 'Mon-Fri 8AM-5PM, Sat 9AM-1PM',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['support@xash.co.zw', 'sales@xash.co.zw'],
      color: '#0B3C5D',
      description: 'We reply within 24 hours',
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['63 Embassy Building', 'Mutare, Zimbabwe'],
      color: '#F5B700',
      description: 'Visit us Mon-Fri 8AM-5PM',
      action: 'Get Directions'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+263 716 409 412'],
      color: '#1F6AE1',
      description: '24/7 instant support',
      action: 'Chat Now'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 5:00 PM', status: 'open' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM', status: 'open' },
    { day: 'Sunday', hours: 'Closed', status: 'closed' },
    { day: 'Public Holidays', hours: 'Closed', status: 'closed' }
  ];

  const quickLinks = [
    { icon: Zap, label: 'Apply for Free POS', path: '/pos', color: '#1F6AE1' },
    { icon: Shield, label: 'Become an Agent', path: '/agent', color: '#0B3C5D' },
    { icon: Star, label: 'View Solutions', path: '/solutions', color: '#F5B700' }
  ];

  return (
    <div className="pt-20 bg-white overflow-hidden">
      {/* Hero Section - Full Width Gradient */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#F5B700] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#F5B700] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-5 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold mb-8"
              >
                <span className="flex h-2 w-2 rounded-full bg-white mr-2 animate-pulse"></span>
                We're Here to Help
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight mb-8"
              >
                <span className="text-white">Let's Connect</span>
                <br />
                <span className="text-[#F5B700]">& Grow Together</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl text-white/90 leading-relaxed mb-10 max-w-xl"
              >
                Your success is our priority. Reach out through any channel and experience 
                support that truly understands your business needs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-6"
              >
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Quick Response</p>
                    <p className="text-xs text-white/70">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Fully Compliant</p>
                    <p className="text-xs text-white/70">Zimbabwe Registered</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Contact Cards Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-gray-100 cursor-pointer transition-all hover:shadow-3xl group"
                    style={{
                      borderTopColor: hoveredCard === index ? info.color : undefined,
                      borderTopWidth: hoveredCard === index ? '4px' : '2px'
                    }}
                  >
                    <div 
                      style={{ backgroundColor: info.color }}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform"
                    >
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-black mb-2 text-[#1A1A1A]">{info.title}</h3>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-700 font-semibold">{detail}</p>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">{info.description}</p>
                    {hoveredCard === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 pt-4 border-t border-gray-100"
                      >
                        <button 
                          className="text-sm font-bold flex items-center group"
                          style={{ color: info.color }}
                        >
                          {info.action}
                          <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map and Office Hours Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#F5F7FA] text-[#1F6AE1] text-sm font-semibold mb-6 border border-[#1F6AE1]/20">
              <MapPin className="mr-2" size={16} />
              Our Location
            </div>
            <h2 className="text-5xl font-black mb-4 text-[#1A1A1A]">Visit Our Office</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Mutare, we're easy to find and always ready to welcome you
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Section - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <MapSection />
            </motion.div>

            {/* Office Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100"
            >
              <div className="flex items-center mb-8">
                <div 
                  style={{ backgroundColor: '#F5B700' }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-xl"
                >
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-[#1A1A1A]">Office Hours</h3>
                  <p className="text-sm text-gray-600">When we're available</p>
                </div>
              </div>

              <div className="space-y-4">
                {officeHours.map((schedule, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between py-4 px-5 rounded-xl bg-[#F5F7FA] hover:bg-gray-100 transition-all border border-gray-200"
                  >
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-4 ${
                        schedule.status === 'open' ? 'bg-green-500' : 'bg-red-500'
                      } shadow-lg`}></div>
                      <span className="font-semibold text-gray-700">{schedule.day}</span>
                    </div>
                    <span className={`font-black text-sm ${
                      schedule.status === 'open' ? 'text-[#0B3C5D]' : 'text-red-600'
                    }`}>
                      {schedule.hours}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#1F6AE1]/10 to-[#F5B700]/10 rounded-2xl border-2 border-[#1F6AE1]/20">
                <div className="flex items-start">
                  <MessageCircle className="text-[#1F6AE1] mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-[#1F6AE1] mb-1">Need urgent help?</p>
                    <p className="text-sm text-gray-700">WhatsApp us 24/7 for instant support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-white text-[#1F6AE1] text-sm font-semibold mb-6 border border-[#1F6AE1]/20">
              <Sparkles className="mr-2" size={16} />
              Quick Actions
            </div>
            <h2 className="text-5xl font-black mb-4 text-[#1A1A1A]">Get Started Today</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our services and start your journey with Xash
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-3xl shadow-xl p-10 border-2 border-gray-100 cursor-pointer group hover:shadow-2xl hover:border-[#1F6AE1]/30 transition-all"
              >
                <div 
                  style={{ backgroundColor: link.color }}
                  className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform"
                >
                  <link.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-[#1A1A1A]">{link.label}</h3>
                <p className="text-gray-600 mb-6 text-lg">Take the next step with our solutions</p>
                <div 
                  className="flex items-center font-bold group-hover:translate-x-2 transition-transform text-lg"
                  style={{ color: link.color }}
                >
                  Learn More
                  <ArrowRight className="ml-2" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0B3C5D' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#1F6AE1] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#F5B700] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 border border-white/30"
          >
            <Star className="text-white" size={48} />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-black mb-6 text-white leading-tight"
          >
            Ready to Transform<br />Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Join hundreds of businesses across Zimbabwe who trust Xash for their fintech needs. 
            Let's build something amazing together.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(245, 183, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F5B700] text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:bg-[#F5B700]/90 group"
            >
              Get Free POS Device
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={28} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all hover:bg-white/10 inline-flex items-center justify-center"
            >
              <Phone className="mr-2" size={24} />
              Call Us Now
            </motion.button>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="flex items-center">
              <MapPin className="mr-2" size={20} />
              <span className="font-medium">Based in Mutare</span>
            </div>
            <div className="flex items-center">
              <Shield className="mr-2" size={20} />
              <span className="font-medium">Zimbabwe Registered</span>
            </div>
            <div className="flex items-center">
              <Star className="mr-2" size={20} />
              <span className="font-medium">Fully Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leaflet CSS */}
      <style jsx global>{`
        .leaflet-container {
          font-family: inherit;
        }
        .leaflet-control-zoom {
          border: none !important;
          border-radius: 12px !important;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }
        .leaflet-control-zoom a {
          border-radius: 0 !important;
          border: none !important;
          background: white !important;
          color: #1F6AE1 !important;
          font-weight: bold;
          width: 40px !important;
          height: 40px !important;
          line-height: 40px !important;
        }
        .leaflet-control-zoom a:hover {
          background: #F5F7FA !important;
        }
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
      `}</style>
    </div>
  );
};

export default Contact;