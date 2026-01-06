import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Database, Users, Server, Cookie, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      color: '#1F6AE1',
      content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include:
      • Personal identification information (name, email, phone number)
      • Business information for agents and partners
      • Transaction history and usage data
      • Device and connection information`
    },
    {
      title: 'How We Use Your Information',
      icon: Users,
      color: '#0B3C5D',
      content: `We use the collected information to:
      • Provide, maintain, and improve our services
      • Process transactions and send confirmations
      • Send technical notices, updates, and security alerts
      • Respond to your comments and questions
      • Monitor and analyze trends, usage, and activities
      • Detect, investigate, and prevent fraudulent transactions`
    },
    {
      title: 'Information Sharing',
      icon: Shield,
      color: '#F5B700',
      content: `We do not sell your personal information. We may share information only:
      • With your consent
      • To comply with legal obligations
      • To protect the rights and property of Xash
      • With service providers who assist our operations
      • For business transfers (in case of merger or acquisition)`
    },
    {
      title: 'Data Security',
      icon: Lock,
      color: '#F5B700',
      content: `We implement appropriate technical and organizational security measures to protect your personal information. This includes encryption, access controls, regular security assessments, and employee training on data protection.`
    },
    {
      title: 'Your Rights',
      icon: Eye,
      color: '#1F6AE1',
      content: `Depending on your location, you may have rights including:
      • Access to your personal information
      • Correction of inaccurate data
      • Deletion of your data
      • Restriction of processing
      • Data portability
      • Objection to processing
      To exercise these rights, contact our Data Protection Officer.`
    },
    {
      title: 'Data Retention',
      icon: Server,
      color: '#0B3C5D',
      content: `We retain personal information for as long as necessary to fulfill the purposes for which it was collected, including for legal, accounting, or reporting requirements. Transaction records are kept for 7 years as required by financial regulations.`
    }
  ];

  return (
    <div className="pt-20 bg-white">
      <Helmet>
        <title>Privacy Policy - Xash</title>
        <meta 
          name="description" 
          content="Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information." 
        />  
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F5F7FA] rounded-2xl mb-6 shadow-lg border border-[#1F6AE1]/20">
                <Shield className="text-[#1F6AE1]" size={32} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1A1A1A]">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
                Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
              </p>
              <p className="text-gray-500">
                Last updated: January 1, 2026
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5F7FA] rounded-xl p-8 border border-[#1F6AE1]/20"
          >
            <div className="flex items-start">
              <FileText className="text-[#1F6AE1] mr-4 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">About This Policy</h3>
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Policy describes how Xash Solutions (Pvt) Ltd collects, uses, and discloses your personal 
                  information when you use our services. We are committed to protecting your privacy and ensuring the security 
                  of your personal data in compliance with Zimbabwe's data protection laws and international standards.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-start mb-6">
                  <div 
                    style={{ backgroundColor: section.color }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg"
                  >
                    <section.icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">{section.title}</h2>
                    <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <div className="flex items-start mb-6">
              <div 
                style={{ backgroundColor: '#F5B700' }}
                className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg"
              >
                <Cookie className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Cookies and Tracking</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to track activity on our service and hold certain 
                  information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
                </p>
                <div className="bg-[#F5F7FA] rounded-lg p-4">
                  <h4 className="font-bold text-[#1A1A1A] mb-2">Types of cookies we use:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F5B700] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Essential cookies:</strong> Required for the website to function properly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F5B700] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Performance cookies:</strong> Help us understand how visitors use our website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#F5B700] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Functional cookies:</strong> Remember your preferences and settings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-yellow-50 rounded-xl p-8 border border-yellow-200"
          >
            <div className="flex items-start">
              <AlertCircle className="text-yellow-600 mr-4 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Children's Privacy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our service is not intended for anyone under the age of 18. We do not knowingly collect personally 
                  identifiable information from children under 18. If you are a parent or guardian and you are aware 
                  that your child has provided us with personal data, please contact us immediately.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy 
              Policy are effective when they are posted on this page.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ backgroundColor: '#0B3C5D' }}
            className="rounded-xl shadow-2xl p-8 text-white"
          >
            <h2 className="text-3xl font-bold mb-6">Contact Us About Privacy</h2>
            <p className="text-[#F5F7FA] mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold mb-3">Data Protection Officer</h3>
                <p className="text-[#F5F7FA] text-sm">privacy@xash.co.zw</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold mb-3">Physical Address</h3>
                <p className="text-[#F5F7FA] text-sm">63 Embassy Building<br/>Mutare, Zimbabwe</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold mb-3">Phone</h3>
                <p className="text-[#F5F7FA] text-sm">+263 716 409 412</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold mb-3">Response Time</h3>
                <p className="text-[#F5F7FA] text-sm">Within 48 hours</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-[#F5F7FA] text-sm">
                You have the right to lodge a complaint with the Data Protection Authority if you believe 
                your privacy rights have been violated.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Policies */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Related Policies</h2>
            <p className="text-gray-600">Learn more about how we protect your data and ensure compliance</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F5F7FA] rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-all"
            >
              <FileText className="w-12 h-12 mx-auto mb-4 text-[#1F6AE1]" />
              <h3 className="font-bold text-[#1A1A1A] mb-2">Terms of Service</h3>
              <p className="text-gray-600 text-sm mb-4">Read our terms and conditions</p>
              <Link to="/terms-of-service">
                <button className="text-[#1F6AE1] font-medium text-sm hover:text-[#0B3C5D]">
                  View Policy →
                </button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#F5F7FA] rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-all"
            >
              <Cookie className="w-12 h-12 mx-auto mb-4 text-[#F5B700]" />
              <h3 className="font-bold text-[#1A1A1A] mb-2">Cookie Policy</h3>
              <p className="text-gray-600 text-sm mb-4">How we use cookies</p>
              <Link to="/cookie-policy">
                <button className="text-[#1F6AE1] font-medium text-sm hover:text-[#0B3C5D]">
                  View Policy →
                </button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F5F7FA] rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-all"
            >
              <Shield className="w-12 h-12 mx-auto mb-4 text-[#1F6AE1]" />
              <h3 className="font-bold text-[#1A1A1A] mb-2">Data Protection</h3>
              <p className="text-gray-600 text-sm mb-4">Our security measures</p>
              <Link to="/data-protection">
                <button className="text-[#1F6AE1] font-medium text-sm hover:text-[#0B3C5D]">
                  View Policy →
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;