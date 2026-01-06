import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  DollarSign, 
  Smartphone,
  CheckCircle,
  MessageCircle,
  GraduationCap,
  ChartLine,
  UserCheck,
  Phone,
  MapPin,
  ArrowRight,
  Zap
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const Agents = () => {
  const stats = [
    { value: '200+', label: 'Active Agents', icon: Users, description: 'Across Zimbabwe' },
    { value: '$5K+', label: 'Monthly Commissions', icon: DollarSign, description: 'Paid to agents' },
    { value: '95%', label: 'Satisfaction Rate', icon: CheckCircle, description: 'Agent satisfaction' },
    { value: '24/7', label: 'Support Available', icon: Clock, description: 'Always here to help' }
  ];

  const benefits = [
    {
      title: 'Earn Commissions',
      description: 'Earn attractive commissions on every transaction you process',
      icon: DollarSign,
      color: '#10B981',
      features: ['5-12% commission rates', 'Weekly payments', 'Bonus opportunities']
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your queries and issues',
      icon: Clock,
      color: '#2563EB',
      features: ['WhatsApp support', 'Dedicated agent line', 'Technical assistance']
    },
    {
      title: 'Flexible Hours',
      description: 'Work anytime, anywhere through our WhatsApp platform',
      icon: Smartphone,
      color: '#7C3AED',
      features: ['No fixed hours', 'Work from anywhere', 'Mobile-friendly']
    },
    {
      title: 'Training Provided',
      description: 'Complete training and onboarding support included',
      icon: GraduationCap,
      color: '#F59E0B',
      features: ['Video tutorials', 'Live training sessions', 'Agent handbook']
    },
    {
      title: 'No Startup Cost',
      description: 'Start earning immediately with zero investment required',
      icon: TrendingUp,
      color: '#10B981',
      features: ['No registration fees', 'No equipment needed', 'Free marketing materials']
    },
    {
      title: 'Growth Opportunities',
      description: 'Scale your earnings as your customer base grows',
      icon: ChartLine,
      color: '#2563EB',
      features: ['Tiered commissions', 'Referral bonuses', 'Performance rewards']
    }
  ];

  const steps = [
    {
      step: 1,
      title: 'Register',
      description: 'Complete the registration process via WhatsApp or visit our office',
      icon: UserCheck
    },
    {
      step: 2,
      title: 'Get Trained',
      description: 'Attend our free training session (online or in-person)',
      icon: GraduationCap
    },
    {
      step: 3,
      title: 'Start Earning',
      description: 'Begin processing transactions and earning commissions immediately',
      icon: DollarSign
    },
    {
      step: 4,
      title: 'Grow Your Business',
      description: 'Expand your customer base and increase your earnings',
      icon: ChartLine
    }
  ];

  const commissionStructure = [
    { 
      service: 'Econet USD Airtime',
      rate: '9.00%', 
      example: '$9 on $100 sales',
      color: '#10B981'
    },
    { 
      service: 'Econet USD Data',
      rate: '9.00%', 
      example: '$9 on $100 sales',
      color: '#10B981'
    },
    { 
      service: 'NetOne USD Airtime',
      rate: '7.50%', 
      example: '$7.50 on $100 sales',
      color: '#2563EB'
    },
    { 
      service: 'Telecel USD Airtime',
      rate: '7.00%', 
      example: '$7 on $100 sales',
      color: '#7C3AED'
    },
    { 
      service: 'ZESA USD',
      rate: '1.20%', 
      example: '$1.20 on $100 sales',
      color: '#F59E0B'
    },
  ];

  return (
    <div className="pt-20 bg-white">
      <Helmet>
        <title>Become a XASH Agent - Earn Commissions with Zero Investment</title>
        <meta 
          name="description" 
          content="Join XASH as an agent and start earning commissions by providing essential services to your community. No startup costs, flexible hours, and 24/7 support." 
        />  
      </Helmet>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#7C3AED' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
                Become a XASH Agent
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Join our network of successful agents and earn commissions by providing essential services to your community. No startup costs, flexible hours, and 24/7 support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-700 px-8 py-4 rounded-lg font-bold shadow-xl inline-flex items-center justify-center"
                >
                  Register Now
                  <ArrowRight className="ml-2" size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ backgroundColor: '#10B981' }}
                  className="text-white px-8 py-4 rounded-lg font-bold inline-flex items-center justify-center"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Chat with Support
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop" 
                alt="Happy Agent" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div 
                  style={{ backgroundColor: '#7C3AED' }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-purple-600 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Why Join XASH?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Benefits of Being a XASH Agent
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Join thousands of successful agents building their businesses with XASH
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="mb-6">
                  <div 
                    style={{ backgroundColor: benefit.color }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-center">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-semibold mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              How to Become a XASH Agent
            </h2>
            <p className="text-gray-600 text-lg">
              Start your journey in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div 
                  style={{ backgroundColor: '#7C3AED' }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-semibold text-purple-600 mb-1">STEP {step.step}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop" 
                alt="Agent Success" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-yellow-50 text-yellow-600 rounded-full text-sm font-semibold mb-4">
                  Commission Structure
                </span>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Service Commission Rates
                </h2>
                <p className="text-gray-600 mb-6">
                  Earn competitive commissions on every transaction
                </p>
              </div>

              <div className="space-y-4">
                {commissionStructure.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div 
                          style={{ backgroundColor: item.color }}
                          className="w-2 h-2 rounded-full mr-3"
                        ></div>
                        <h3 className="text-lg font-bold text-gray-900">{item.service}</h3>
                      </div>
                      <div 
                        style={{ color: item.color }}
                        className="text-2xl font-bold"
                      >
                        {item.rate}
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm">{item.example}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agent Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Real People, Real Success</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Meet our agents who have transformed their income by joining the XASH network. 
                From students to shop owners, everyone can succeed with XASH.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle style={{ color: '#10B981' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900">Average Monthly Earnings: $650</h4>
                    <p className="text-gray-600 text-sm">Top agents earn $1,200+ monthly</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle style={{ color: '#2563EB' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900">Start Earning Within 24 Hours</h4>
                    <p className="text-gray-600 text-sm">Quick onboarding and training process</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle style={{ color: '#7C3AED' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900">No Investment Required</h4>
                    <p className="text-gray-600 text-sm">Zero registration fees or equipment costs</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&h=600&fit=crop" 
                alt="Successful Agents" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20" style={{ backgroundColor: '#7C3AED' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of successful agents building their businesses with XASH. 
            Zero investment, flexible hours, and unlimited earning potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#F59E0B' }}
              className="text-white px-8 py-4 rounded-lg font-bold inline-flex items-center justify-center shadow-xl"
            >
              Register Now
              <ArrowRight className="ml-2" size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: '#10B981' }}
              className="text-white px-8 py-4 rounded-lg font-bold inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2" size={20} />
              Ask Questions
            </motion.button>
          </div>
          <p className="text-purple-200 mt-6 text-sm">
            Registration takes less than 5 minutes • Start earning within 24 hours
          </p>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Phone className="w-6 h-6 text-white mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Call Us</h4>
              <p className="text-purple-100 text-sm">+263 716 409 412</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MapPin className="w-6 h-6 text-white mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2">Visit Office</h4>
              <p className="text-purple-100 text-sm">63 Embassy Building, Mutare</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agents;