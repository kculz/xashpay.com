import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Globe, 
  Shield, 
  TrendingUp, 
  Award, 
  Heart,
  Zap,
  Clock,
  Building,
  CheckCircle,
  Star,
  Sparkles,
  ArrowRight,
  MapPin
} from 'lucide-react';
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

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Empower retail businesses across Zimbabwe with accessible fintech solutions',
      color: '#0B3C5D'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-grade security and compliance in every transaction',
      color: '#F5B700'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building solutions that work for local communities',
      color: '#1F6AE1'
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'Continuous innovation to drive financial inclusion',
      color: '#F5B700'
    }
  ];

  const milestones = [
    { 
      year: '2020', 
      event: 'Company Founded', 
      description: 'Started operations in Mutare',
      icon: Building
    },
    { 
      year: '2021', 
      event: 'First 100 Agents', 
      description: 'Onboarded 100 retail agents',
      icon: Users
    },
    { 
      year: '2022', 
      event: 'POS Launch', 
      description: 'Launched Xash POS system',
      icon: Zap
    },
    { 
      year: '2023', 
      event: 'API Platform', 
      description: 'Released developer API',
      icon: Globe
    },
    { 
      year: '2024', 
      event: 'National Expansion', 
      description: 'Covered all major cities',
      icon: Award
    }
  ];

  const stats = [
    { value: '500+', label: 'Active Agents', sublabel: 'Across Zimbabwe' },
    { value: '$2k+', label: 'Monthly Volume', sublabel: 'Processed' },
    { value: '24/7', label: 'Support', sublabel: 'Always Available' },
    { value: '99.9%', label: 'Uptime', sublabel: 'System Reliability' }
  ];

  const teamMembers = [
    { 
      name: 'Rodney Jesiman.', 
      role: 'CEO & Co-Founder', 
      bio: 'Fintech entrepreneur with 5+ years experience',
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQG-KKg8VB9d3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1651585358689?e=1769040000&v=beta&t=1OstlOcEqajOX6OV0ren-gNrhWmFT3qGuXTOkLDuIuU'
    },
    { 
      name: 'Joshua Munapo.', 
      role: 'CTO & Co-Founder', 
      bio: 'Software Engineer with 5+ years experience',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHFBK9wyLTTtA/profile-displayphoto-shrink_800_800/B56ZeO6V6hG0Ac-/0/1750449349774?e=1769040000&v=beta&t=FndFTrIP8J_Ht3lI3yghDKMkyDL7hwrP3B9K41rxIG0'
    }
  ];

  const principles = [
    {
      title: 'Transparency',
      description: 'We operate with complete transparency in all our dealings',
      icon: CheckCircle,
      color: '#0B3C5D'
    },
    {
      title: 'Innovation',
      description: 'Constantly improving our services to meet market needs',
      icon: Zap,
      color: '#1F6AE1'
    },
    {
      title: 'Reliability',
      description: 'Building trust through consistent and reliable service delivery',
      icon: Shield,
      color: '#F5B700'
    },
    {
      title: 'Customer First',
      description: 'Every decision is made with our customers in mind',
      icon: Heart,
      color: '#F5B700'
    }
  ];

  const aboutImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80";

  return (
    <div className="pt-20 bg-white overflow-hidden">
      {/* Hero Section - Full Width with Gradient */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F5B700] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#F5B700] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-5 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold mb-8"
              >
                <Sparkles className="mr-2" size={18} />
                About Us
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight mb-8"
              >
                <span className="text-white">Building the Future of</span>
                <br />
                <span className="text-[#F5B700]">Retail Finance</span>
                <br />
                <span className="text-white">in Zimbabwe</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12"
              >
                We're on a mission to make digital financial services accessible to every retail business, 
                one transaction at a time.
              </motion.p>

              {/* Stats Cards - Floating */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <div className="text-5xl font-black mb-2 text-[#F5B700]">{stat.value}</div>
                    <div className="text-lg font-bold text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-white/70">{stat.sublabel}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story - Enhanced with Image */}
      <section className="py-24 bg-white">
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
                  src={aboutImage}
                  alt="Office Building"
                  className="w-full h-[600px] object-cover"
                />
              </div>

              {/* Floating Info Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-100"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#1F6AE1' }}>
                      <Building className="text-white" size={24} />
                    </div>
                    <div className="text-3xl font-black text-[#1A1A1A]">2020</div>
                    <div className="text-sm text-gray-600">Year Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#0B3C5D' }}>
                      <Users className="text-white" size={24} />
                    </div>
                    <div className="text-3xl font-black text-[#1A1A1A]">5+</div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#F5F7FA] text-[#1F6AE1] text-sm font-semibold mb-6 border border-[#1F6AE1]/20">
                <Building className="mr-2" size={16} />
                Our Story
              </div>

              <h2 className="text-5xl font-black mb-8 text-[#1A1A1A]">From Mutare to<br />Nationwide Impact</h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Founded in Mutare, Zimbabwe, Xash was born from a simple idea: make digital financial 
                  services accessible to every retail business, no matter their size or location.
                </p>
                <p>
                  We started with a small team of developers and financial experts who saw the gap 
                  between traditional banking services and the needs of local shop owners.
                </p>
                <p>
                  Today, we serve hundreds of agents across the country, processing millions in 
                  transactions monthly while maintaining our commitment to security, reliability, 
                  and exceptional support.
                </p>
              </div>

              <div className="mt-8 flex items-center text-[#1F6AE1] font-semibold">
                <MapPin className="mr-2" size={20} />
                <span>Based in Mutare, Serving Zimbabwe</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Card Grid */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-white text-[#1F6AE1] text-sm font-semibold mb-6 border border-[#1F6AE1]/20">
              <Heart className="mr-2" size={16} />
              Our Values
            </div>
            <h2 className="text-5xl font-black mb-4 text-[#1A1A1A]">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-[#1F6AE1]/30 transition-all group"
              >
                <div 
                  style={{ backgroundColor: value.color }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform"
                >
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Modern Design */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#F5F7FA] text-[#1F6AE1] text-sm font-semibold mb-6 border border-[#1F6AE1]/20">
              <Award className="mr-2" size={16} />
              Our Journey
            </div>
            <h2 className="text-5xl font-black mb-4 text-[#1A1A1A]">Milestones & Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key moments in our growth story
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1F6AE1] via-[#F5B700] to-[#0B3C5D]"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-2xl bg-[#1F6AE1] border-4 border-white shadow-2xl z-10 items-center justify-center"
                  >
                    <milestone.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:border-[#1F6AE1]/30 transition-all">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                        <div 
                          style={{ backgroundColor: '#F5B700' }}
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg lg:hidden"
                        >
                          <milestone.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-4xl font-black text-[#1F6AE1]">{milestone.year}</div>
                      </div>
                      <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                        <div className="text-2xl font-bold text-[#1A1A1A] mb-3">{milestone.event}</div>
                        <p className="text-gray-600 text-lg leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles - Modern Cards */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-4 text-[#1A1A1A]">Our Guiding Principles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we operate and serve our customers every day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100 hover:border-[#1F6AE1]/30 text-center transition-all group"
              >
                <div 
                  style={{ backgroundColor: principle.color }}
                  className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform"
                >
                  <principle.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#F5F7FA] text-[#F5B700] text-sm font-semibold mb-6 border border-[#F5B700]/20">
              <Users className="mr-2" size={16} />
              Meet the Team
            </div>
            <h2 className="text-5xl font-black mb-4 text-[#1A1A1A]">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals driving our vision forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl border-2 border-gray-100 shadow-2xl overflow-hidden hover:shadow-3xl hover:border-[#1F6AE1]/30 transition-all group"
              >
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-black text-[#1A1A1A] mb-2">{member.name}</h3>
                  <div className="text-[#1F6AE1] font-bold text-lg mb-4">{member.role}</div>
                  <p className="text-gray-600 leading-relaxed text-lg">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0B3C5D' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#F5B700] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 border border-white/30">
              <Star size={40} className="text-white" />
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-black mb-6 text-white leading-tight">
              Join Our Journey
            </h2>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Be part of the movement transforming retail finance in Zimbabwe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(245, 183, 0, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-[#F5B700] text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all inline-flex items-center justify-center shadow-2xl"
              >
                Become an Agent
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={28} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;