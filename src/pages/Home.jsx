import { motion } from 'framer-motion';
import { ArrowRight, Shield, Smartphone, Wallet, CheckCircle, TrendingUp, Star, Building, Target, Users, Phone, Zap, Wifi, Globe, Sparkles, BarChart3, Award } from 'lucide-react';
import { useState } from 'react';

const ImageWithSkeleton = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-2xl"></div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

const Home = () => {
  const FEATURES = [
    {
      icon: Smartphone,
      title: 'Free POS Device',
      description: 'Qualifying retail shops receive a Xash POS device at zero cost. Start selling immediately.',
      color: '#1F6AE1'
    },
    {
      icon: Wallet,
      title: 'One Unified Balance',
      description: 'Manage airtime, bundles, and ZESA from a single float. No need for separate devices.',
      color: '#0B3C5D'
    },
    {
      icon: TrendingUp,
      title: 'Earn Daily Commission',
      description: 'Earn competitive commission on every transaction. Payouts processed weekly.',
      color: '#F5B700'
    }
  ];

  const STATS = [
    { value: '500+', label: 'Active Agents', color: '#1F6AE1', icon: Users },
    { value: '$2K+', label: 'Monthly Volume', color: '#0B3C5D', icon: BarChart3 },
    { value: '5K+', label: 'Daily Transactions', color: '#F5B700', icon: TrendingUp },
    { value: '99.9%', label: 'System Uptime', color: '#1F6AE1', icon: Award }
  ];

  const WHY_CHOOSE_XASH = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Enterprise-grade encryption and security protocols protect every transaction',
      color: '#1F6AE1'
    },
    {
      icon: Smartphone,
      title: 'Real-time Processing',
      description: 'Instant transaction processing with immediate SMS confirmations',
      color: '#0B3C5D'
    },
    {
      icon: Users,
      title: 'Local Zimbabwe Support',
      description: 'Based in Mutare with dedicated technical support team ready to assist',
      color: '#F5B700'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Detailed reporting and analytics to monitor sales and earnings',
      color: '#1F6AE1'
    }
  ];

  const PARTNERS = [
    { name: 'Econet Wireless', type: 'Network Partner' },
    { name: 'NetOne', type: 'Network Partner' },
    { name: 'Telecel', type: 'Network Partner' },
    { name: 'ZETDC', type: 'Utility Partner' },
    { name: 'Reserve Bank', type: 'Regulatory' },
    { name: 'InnBucks', type: 'Payment Partner' },
  ];

  const PRODUCTS = [
    { 
      name: 'Airtime', 
      icon: Phone, 
      color: '#1F6AE1',
      description: 'Sell airtime for all major networks: Econet, NetOne, Telecel'
    },
    { 
      name: 'Data Bundles', 
      icon: Wifi, 
      color: '#0B3C5D',
      description: 'Econet data bundles for smartphones and devices'
    },
    { 
      name: 'ZETDC Tokens', 
      icon: Zap, 
      color: '#F5B700',
      description: 'Prepaid electricity tokens for ZESA customers'
    },
    { 
      name: 'Equal WiFi', 
      icon: Globe, 
      color: '#1F6AE1',
      description: 'High-speed WiFi connectivity solutions'
    }
  ];

  // Placeholder images - replace with actual imported images
  const heroImage = "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80";
  const businessImage = "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80";
  const shopOwnerImage = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80";

  return (
    <div className="pt-20 bg-white overflow-hidden">
      {/* Hero Section with Image */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-[#F5F7FA] to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1F6AE1]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F5B700]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-5 py-3 rounded-full bg-white border-2 border-[#1F6AE1]/30 text-[#1F6AE1] text-sm font-semibold mb-8 shadow-lg"
              >
                <Sparkles className="mr-2" size={18} />
                Zimbabwe's Trusted Fintech Partner
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6"
              >
                <span className="text-[#1A1A1A]">Digital</span>
                <br />
                <span className="text-[#1A1A1A]">Payments</span>
                <br />
                <span className="bg-gradient-to-r from-[#1F6AE1] to-[#0B3C5D] bg-clip-text text-transparent">
                  Made Simple
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl"
              >
                Xash provides retail-focused POS solutions that empower shops to sell airtime, 
                bundles, and ZESA tokens while earning commission on every transaction.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(31, 106, 225, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  style={{ backgroundColor: '#1F6AE1' }}
                  className="group text-white px-10 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-2xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#1F6AE1] px-10 py-5 rounded-xl font-bold text-lg border-2 border-[#1F6AE1] transition-all shadow-lg hover:bg-[#1F6AE1] hover:text-white"
                >
                  Explore Xash POS
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-6"
              >
                {[
                  { icon: Building, label: 'Zimbabwe-Based', color: '#1F6AE1' },
                  { icon: Shield, label: 'Secure & Compliant', color: '#F5B700' },
                  { icon: Target, label: 'Retail-Focused', color: '#0B3C5D' }
                ].map((badge, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-md">
                    <badge.icon style={{ color: badge.color }} size={20} />
                    <span className="text-sm font-semibold text-[#1A1A1A]">{badge.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image with Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithSkeleton
                  src={heroImage}
                  alt="POS System in use"
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">Today's Earnings</span>
                    <div className="flex items-center text-[#F5B700]">
                      <TrendingUp size={20} className="mr-1" />
                      <span className="text-sm font-semibold">+18%</span>
                    </div>
                  </div>
                  <div className="text-4xl font-black text-[#1A1A1A] mb-4">$45.20</div>
                  <div className="grid grid-cols-3 gap-3">
                    {STATS.slice(0, 3).map((stat, idx) => (
                      <div key={idx} className="bg-[#F5F7FA] rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-[#1A1A1A]">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-6 -right-6 bg-[#F5B700] text-white rounded-2xl px-6 py-4 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-black">500+</div>
                  <div className="text-xs font-semibold">Active Agents</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{ backgroundColor: '#0B3C5D' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Trusted by Retailers Across Zimbabwe</h2>
            <p className="text-[#F5F7FA] max-w-2xl mx-auto text-lg">
              Empowering small businesses with digital financial solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                  <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <div className="text-5xl font-black mb-2 text-white">
                    {stat.value}
                  </div>
                  <div className="text-[#F5F7FA] font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Sell - Cards on Dark Background */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-[#1A1A1A] mb-4">
              What You Can Sell
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diverse product range for maximum earning potential
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#1F6AE1] transition-all group shadow-lg hover:shadow-2xl"
              >
                <div 
                  style={{ backgroundColor: product.color }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-xl"
                >
                  <product.icon className="text-white" size={36} />
                </div>
                <h4 className="font-bold text-[#1A1A1A] text-xl mb-3 text-center">{product.name}</h4>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features with Image - Side by Side */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithSkeleton
                  src={businessImage}
                  alt="Local business using POS"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div style={{ backgroundColor: '#1F6AE1' }} className="w-12 h-12 rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#1A1A1A]">$2K+</div>
                    <div className="text-xs text-gray-600 font-medium">Monthly Volume</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black mb-6 text-[#1A1A1A]">Empowering Local Businesses</h2>
              <p className="text-gray-600 text-xl mb-8 leading-relaxed">
                Join thousands of shop owners across Zimbabwe who are earning extra income by providing 
                essential digital services to their communities.
              </p>
              
              <div className="space-y-6">
                {FEATURES.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
                  >
                    <div 
                      style={{ backgroundColor: feature.color }}
                      className="w-14 h-14 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 shadow-lg"
                    >
                      <feature.icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] text-lg mb-2">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Xash with Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-[#1A1A1A] mb-4">
              Why Choose Xash?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for the Zimbabwean market
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {WHY_CHOOSE_XASH.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-[#F5F7FA] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
                >
                  <div 
                    style={{ backgroundColor: item.color }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform"
                  >
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithSkeleton
                  src={shopOwnerImage}
                  alt="Shop owner with POS device"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              
              {/* Overlay Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 left-8 right-8 bg-gradient-to-r from-[#1F6AE1] to-[#0B3C5D] rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between text-white">
                  <div>
                    <div className="text-sm font-medium mb-1">System Uptime</div>
                    <div className="text-3xl font-black">99.9%</div>
                  </div>
                  <Award size={48} className="opacity-50" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-[#1A1A1A] mb-4">
              Trusted Partners
            </h2>
            <p className="text-xl text-gray-600">
              Working with leading network operators and utility providers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {PARTNERS.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1F6AE1] transition-all text-center shadow-md hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-[#F5F7FA] rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Building className="text-[#1F6AE1]" size={28} />
                </div>
                <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{partner.name}</h4>
                <p className="text-gray-500 text-xs">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#0B3C5D' }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1F6AE1] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F5B700] rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-28 h-28 bg-white/20 backdrop-blur-sm rounded-3xl mb-10"
          >
            <Star className="text-white" size={48} />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight"
          >
            Ready to Grow Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Join hundreds of retailers across Zimbabwe earning with Xash. Get your free POS device today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0B3C5D] px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl group"
            >
              Apply for Free POS
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={28} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-3 border-white text-white px-12 py-6 rounded-2xl font-black text-xl transition-all hover:bg-white/10"
            >
              Request a Demo
            </motion.button>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
            {[
              { icon: Building, label: 'Based in Mutare' },
              { icon: Shield, label: 'Zimbabwe-Registered' },
              { icon: Star, label: 'Fully Compliant' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <item.icon size={20} />
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;