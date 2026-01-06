import { motion } from 'framer-motion';
import { ArrowRight, Shield, AlertCircle, CheckCircle2, DollarSign, Package, Smartphone, Zap, Wifi, Phone, CreditCard, Users, TrendingUp, Award, Sparkles, Clock, MapPin, Headphones } from 'lucide-react';
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

const XashPOS = () => {
  const COMMISSION_DATA = [
    { product: 'Econet USD Airtime', rate: '9.00%', color: '#1F6AE1' },
    { product: 'Econet USD Data', rate: '9.00%', color: '#1F6AE1' },
    { product: 'Netone USD Airtime', rate: '7.50%', color: '#0B3C5D' },
    { product: 'Telecel USD Airtime', rate: '7.00%', color: '#F5B700' },
    { product: 'ZESA USD', rate: '1.20%', color: '#F5B700' },
    { product: 'Equal WiFi', rate: '12.00%', color: '#1F6AE1' },
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
      name: 'ZESA Tokens', 
      icon: Zap, 
      color: '#F5B700',
      description: 'Prepaid electricity tokens for ZETDC customers'
    },
    { 
      name: 'Equal WiFi', 
      icon: Smartphone, 
      color: '#1F6AE1',
      description: 'High-speed WiFi connectivity solutions'
    }
  ];

  const HOW_IT_WORKS = [
    {
      step: 1,
      title: 'Apply for Device',
      description: 'Qualifying retail shops apply for a free Xash POS device with no upfront costs',
      color: '#1F6AE1'
    },
    {
      step: 2,
      title: 'Load Your Float',
      description: 'Use your own capital to load your wallet via bank transfer or agent',
      color: '#0B3C5D'
    },
    {
      step: 3,
      title: 'Sell & Earn Commission',
      description: 'Sell airtime, bundles, and ZESA. Earn commission on every sale automatically',
      color: '#F5B700'
    }
  ];

  const requirements = [
    'Registered retail shop in Zimbabwe',
    'Valid business registration documents',
    'Valid ID for business owner',
    'Physical shop address verification',
    'Bank account for commission payouts',
    'AML/KYC compliance verification',
  ];

  // Placeholder images - African market focus
  const posImage = "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80";
  const communityImage = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80";
  const localImage = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80";
  const shopImage = "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80";

  return (
    <div className="pt-20 bg-white overflow-hidden">
      {/* Hero Section - Full Width with Image Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithSkeleton
            src={posImage}
            alt="POS Device in Use"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B3C5D]/95 via-[#0B3C5D]/85 to-transparent"></div>
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
                <Sparkles className="mr-2" size={18} />
                Retail Solution
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight mb-6"
              >
                <span className="text-white">Xash</span>
                <br />
                <span className="text-[#F5B700]">POS</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/90 leading-relaxed mb-10 max-w-xl"
              >
                A retail-focused POS solution that empowers shops to sell digital products and earn commission on every transaction.
                Free device, one unified balance, and Zimbabwe-based support.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 183, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  style={{ backgroundColor: '#F5B700' }}
                  className="group text-white px-10 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-2xl"
                >
                  Apply for Free POS
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 transition-all hover:bg-white/20"
                >
                  Learn More
                </motion.button>
              </motion.div>

              {/* Key Benefits - Horizontal Cards */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { icon: Package, title: 'Free Device', desc: 'No upfront costs', color: '#1F6AE1' },
                  { icon: DollarSign, title: 'Earn Daily', desc: 'Commission on sales', color: '#F5B700' },
                  { icon: Shield, title: 'Secure', desc: 'Bank-grade security', color: '#0B3C5D' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm p-5 rounded-xl text-center border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <div 
                      style={{ backgroundColor: item.color }}
                      className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg"
                    >
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-sm mb-1 text-white">{item.title}</h3>
                    <p className="text-xs text-white/70">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">Commission Rates</h3>
                    <p className="text-gray-600 text-sm">Earn on every transaction</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#F5B700' }}>
                    <TrendingUp className="text-white" size={24} />
                  </div>
                </div>

                <div className="space-y-3">
                  {COMMISSION_DATA.slice(0, 4).map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-[#F5F7FA] rounded-xl"
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
                        <span className="font-medium text-[#1A1A1A] text-sm">{item.product}</span>
                      </div>
                      <span className="font-black text-lg" style={{ color: item.color }}>{item.rate}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-[#1F6AE1]/10 to-[#F5B700]/10 rounded-xl border border-[#1F6AE1]/20">
                  <div className="flex items-center text-sm text-gray-700">
                    <Award className="mr-2 text-[#F5B700]" size={20} />
                    <span className="font-semibold">Paid weekly to your wallet</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - Timeline with Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-[#1A1A1A] mb-4">How Xash POS Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple process to start earning</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {HOW_IT_WORKS.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    <div className="flex items-start bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#1F6AE1]/30">
                      <div 
                        style={{ backgroundColor: step.color }}
                        className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl mr-6 shadow-lg"
                      >
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-[#1A1A1A]">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Connecting Line */}
                    {index < HOW_IT_WORKS.length - 1 && (
                      <div className="absolute left-8 top-full h-6 w-0.5 bg-gradient-to-b from-gray-300 to-transparent ml-7"></div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8 p-6 bg-yellow-50 rounded-2xl border-2 border-yellow-200"
              >
                <div className="flex items-start">
                  <AlertCircle className="text-yellow-600 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-sm text-yellow-900 font-medium leading-relaxed">
                      <strong>Important:</strong> The POS device remains property of Xash. Shops use their own float to transact and earn commission on every sale.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image with Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithSkeleton
                  src={communityImage}
                  alt="Shop Transaction"
                  className="w-full h-[700px] object-cover"
                />
                
                {/* Floating Commission Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-600">Commission Structure</span>
                    <DollarSign className="text-[#F5B700]" size={24} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {COMMISSION_DATA.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="bg-[#F5F7FA] p-3 rounded-lg">
                        <div className="text-xs text-gray-600 mb-1">{item.product}</div>
                        <div className="text-2xl font-black" style={{ color: item.color }}>{item.rate}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Can Sell */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-[#1A1A1A] mb-4">What You Can Sell</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Diverse product range for maximum earning potential</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#1F6AE1] shadow-lg hover:shadow-2xl transition-all text-center group"
              >
                <div 
                  style={{ backgroundColor: product.color }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform"
                >
                  <product.icon className="text-white" size={36} />
                </div>
                <h4 className="font-bold text-[#1A1A1A] text-xl mb-3">{product.name}</h4>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Serve Your Community Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <ImageWithSkeleton 
              src={shopImage}
              alt="Shop Transaction" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover order-2 lg:order-1"
            />
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6 text-[#1A1A1A]">Serve Your Community</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Provide essential services to your customers while earning competitive commission on every transaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 style={{ color: '#F5B700' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Instant processing and confirmation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 style={{ color: '#F5B700' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">No separate devices or balances needed</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 style={{ color: '#F5B700' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">24/7 local support team</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commission Details - Full Width */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0B3C5D' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1F6AE1] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5B700] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-4">Complete Commission Structure</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Competitive rates on all products</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {COMMISSION_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div 
                    style={{ backgroundColor: item.color }}
                    className="w-3 h-3 rounded-full"
                  ></div>
                  <div 
                    style={{ backgroundColor: item.color }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <DollarSign className="text-white" size={24} />
                  </div>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{item.product}</h4>
                <div className="text-5xl font-black mb-2" style={{ color: item.color }}>{item.rate}</div>
                <p className="text-white/70 text-sm">Per transaction</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
              <CheckCircle2 className="text-[#F5B700] mr-3" size={20} />
              <span className="text-white font-medium">Commissions paid weekly to your Xash wallet. Rates subject to utility provider changes.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Device & Requirements - Side by Side */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Free Device */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] p-8 rounded-3xl text-white shadow-2xl h-full">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                    <Smartphone size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black">Free POS Device</h3>
                    <p className="text-white/80">No upfront costs</p>
                  </div>
                </div>

                <p className="text-white/90 leading-relaxed mb-8 text-lg">
                  Xash provides qualifying retail shops with a POS device at zero cost. The device connects to our secure platform 
                  and allows you to vend all products from one interface.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h4 className="font-bold text-xl mb-6 flex items-center">
                    <CheckCircle2 className="mr-2" size={24} />
                    Qualification Requirements
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {requirements.map((req, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start bg-white/10 p-3 rounded-lg"
                      >
                        <CheckCircle2 className="text-[#F5B700] mr-3 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm">{req}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* One Balance */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-gray-100">
                <div className="flex items-center mb-6">
                  <div 
                    style={{ backgroundColor: '#F5B700' }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                  >
                    <CreditCard size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#1A1A1A]">One Unified Balance</h3>
                    <p className="text-gray-600">Manage everything in one place</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  Manage all your transactions from a single prepaid wallet. No need for separate floats for different products.
                </p>
                
                <div className="bg-[#F5F7FA] p-6 rounded-2xl border border-gray-200">
                  <h4 className="font-bold text-[#1A1A1A] mb-4 text-lg">Wallet Management</h4>
                  <ul className="space-y-3">
                    {[
                      'Prepaid wallet balance for all transactions',
                      'Instant top-up via bank transfer or agent',
                      'Separate commission account for earnings',
                      'Weekly commission payouts',
                      'Transaction declined if insufficient balance'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="text-[#F5B700] mr-3 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                  <p className="text-sm text-yellow-900">
                    <strong>Note:</strong> No interest paid on wallet funds. Funds are held solely for transaction facilitation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Section with Image */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithSkeleton
                  src={localImage}
                  alt="Customer Support"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 left-8 right-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Based in</div>
                    <div className="text-2xl font-black text-[#1A1A1A] flex items-center">
                      <MapPin className="mr-2 text-[#F5B700]" size={24} />
                      Mutare
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">Support</div>
                    <div className="text-2xl font-black text-[#0B3C5D]">24/7</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-gray-100">
                <div className="flex items-center mb-6">
                  <div 
                    style={{ backgroundColor: '#0B3C5D' }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                  >
                    <Users size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#1A1A1A]">Local Zimbabwe Support</h3>
                    <p className="text-gray-600">We're here to help you succeed</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Based in Mutare with a dedicated technical support team ready to assist you. We understand the local market 
                  and provide support in local languages.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#F5F7FA] p-6 rounded-2xl border border-gray-200 hover:border-[#1F6AE1] transition-all">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#1F6AE1' }}>
                      <Headphones className="text-white" size={24} />
                    </div>
                    <h4 className="font-bold text-[#1A1A1A] mb-3 text-lg">Technical Support</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#F5B700] mr-2 mt-0.5 flex-shrink-0" size={14} />
                        Phone & email support
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#F5B700] mr-2 mt-0.5 flex-shrink-0" size={14} />
                        On-site assistance
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#F5B700] mr-2 mt-0.5 flex-shrink-0" size={14} />
                        Device troubleshooting
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#F5F7FA] p-6 rounded-2xl border border-gray-200 hover:border-[#F5B700] transition-all">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#F5B700' }}>
                      <Shield className="text-white" size={24} />
                    </div>
                    <h4 className="font-bold text-[#1A1A1A] mb-3 text-lg">Business Support</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#F5B700] mr-2 mt-0.5 flex-shrink-0" size={14} />
                        Setup guidance
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#F5B700] mr-2 mt-0.5 flex-shrink-0" size={14} />
                        AML/KYC compliance
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-[#F5B700] mr-2 mt-0.5 flex-shrink-0" size={14} />
                        Performance reports
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width with Background */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0B3C5D' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F5B700] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-black mb-6 text-white leading-tight">
              Apply for Your Free<br />POS Device
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Join hundreds of successful retail agents across Zimbabwe. Start earning commission on digital sales today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(245, 183, 0, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: '#F5B700' }}
                className="group text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all inline-flex items-center justify-center shadow-2xl"
              >
                Apply for Free POS
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={28} />
              </motion.button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-white/20">
              <div>
                <MapPin className="text-[#F5B700] mx-auto mb-2" size={32} />
                <div className="text-white font-bold text-sm">Based in Mutare</div>
              </div>
              <div>
                <Package className="text-[#F5B700] mx-auto mb-2" size={32} />
                <div className="text-white font-bold text-sm">Free Device</div>
              </div>
              <div>
                <Clock className="text-[#F5B700] mx-auto mb-2" size={32} />
                <div className="text-white font-bold text-sm">Weekly Payouts</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default XashPOS;