import { motion } from 'framer-motion';
import { 
  Lock, 
  Database, 
  EyeOff, 
  Server, 
  Shield,
  FileText,
  Key,
  UserCheck,
  AlertCircle,
  CheckCircle,
  Cloud,
  Smartphone,
  Clock
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const DataProtection = () => {
  const principles = [
    {
      icon: Lock,
      title: 'Lawful Processing',
      description: 'We process personal data only with valid legal basis and complete transparency.',
      color: '#1F6AE1'
    },
    {
      icon: Database,
      title: 'Purpose Limitation',
      description: 'Data collected for specific, explicit, and legitimate purposes only.',
      color: '#0B3C5D'
    },
    {
      icon: EyeOff,
      title: 'Data Minimization',
      description: 'Only collect data that is necessary for the intended purpose.',
      color: '#F5B700'
    },
    {
      icon: Server,
      title: 'Storage Limitation',
      description: 'Retain personal data only as long as necessary for its purpose.',
      color: '#F5B700'
    }
  ];

  const securityMeasures = [
    {
      category: 'Technical Safeguards',
      color: '#1F6AE1',
      icon: Shield,
      measures: [
        'End-to-end encryption for all transactions',
        'TLS/SSL encryption for data in transit',
        'AES-256 encryption for data at rest',
        'Multi-factor authentication (MFA)',
        'Regular security audits and penetration testing',
        'Intrusion detection and prevention systems'
      ]
    },
    {
      category: 'Organizational Measures',
      color: '#0B3C5D',
      icon: UserCheck,
      measures: [
        'Employee training on data protection',
        'Strict access controls and authentication',
        'Background checks for all staff',
        'Regular security awareness programs',
        'Incident response procedures',
        'Data protection impact assessments'
      ]
    },
    {
      category: 'Infrastructure Security',
      color: '#F5B700',
      icon: Cloud,
      measures: [
        'Secure data backup and recovery',
        'Redundant systems for high availability',
        'Physical security at data centers',
        'Network segmentation and firewalls',
        'Regular security updates and patches',
        'Disaster recovery planning'
      ]
    }
  ];

  const dataTypes = [
    {
      type: 'Personal Information',
      examples: ['Name', 'Email', 'Phone number', 'Address', 'Date of birth'],
      retention: '7 years after account closure',
      color: '#1F6AE1'
    },
    {
      type: 'Financial Data',
      examples: ['Transaction history', 'Account balances', 'Payment methods', 'Bank details'],
      retention: '7 years (regulatory requirement)',
      color: '#0B3C5D'
    },
    {
      type: 'Technical Data',
      examples: ['IP address', 'Device information', 'Browser type', 'Login logs'],
      retention: '2 years',
      color: '#F5B700'
    },
    {
      type: 'Business Data',
      examples: ['Business registration', 'Tax documents', 'KYC documents', 'Contracts'],
      retention: '10 years',
      color: '#F5B700'
    }
  ];

  const userRights = [
    {
      right: 'Right to Access',
      description: 'Request a copy of your personal data we hold',
      icon: FileText,
      color: '#1F6AE1'
    },
    {
      right: 'Right to Rectification',
      description: 'Request correction of inaccurate or incomplete data',
      icon: CheckCircle,
      color: '#0B3C5D'
    },
    {
      right: 'Right to Erasure',
      description: 'Request deletion of your personal data (subject to legal obligations)',
      icon: EyeOff,
      color: '#F5B700'
    },
    {
      right: 'Right to Portability',
      description: 'Receive your data in a structured, machine-readable format',
      icon: Database,
      color: '#F5B700'
    },
    {
      right: 'Right to Object',
      description: 'Object to processing of your personal data in certain circumstances',
      icon: Shield,
      color: '#1F6AE1'
    },
    {
      right: 'Right to Restriction',
      description: 'Request restriction of processing under certain conditions',
      icon: Lock,
      color: '#0B3C5D'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      <Helmet>
        <title>Data Protection - Xash</title>
        <meta 
          name="description" 
          content="Learn about Xash's Data Protection practices, including how we safeguard your personal information and comply with data protection regulations." 
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
                <Lock className="text-[#1F6AE1]" size={32} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1A1A1A]">
                Data Protection
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
                How we protect your personal information and ensure compliance with data protection regulations.
              </p>
              <p className="text-gray-500">
                Last updated: January 1, 2026
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5F7FA] rounded-xl p-8 border border-[#1F6AE1]/20"
          >
            <div className="flex items-start">
              <Shield className="text-[#1F6AE1] mr-4 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Our Commitment</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Xash Solutions is committed to protecting your personal data in compliance with the Data Protection 
                  Act of Zimbabwe and international standards including GDPR principles. We implement comprehensive 
                  technical and organizational measures to ensure the security, confidentiality, and integrity of 
                  your personal information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This policy outlines our practices for collecting, using, storing, and protecting your personal 
                  data, as well as your rights regarding your information.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Protection Principles */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#F5F7FA] text-[#1F6AE1] rounded-full text-sm font-semibold mb-4 border border-[#1F6AE1]/20">
              Core Principles
            </span>
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Data Protection Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The fundamental principles guiding our data protection practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all"
              >
                <div 
                  style={{ backgroundColor: principle.color }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <principle.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#F5F7FA] text-[#1F6AE1] rounded-full text-sm font-semibold mb-4 border border-[#1F6AE1]/20">
              Security Measures
            </span>
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">How We Protect Your Data</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive security measures to safeguard your information
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {securityMeasures.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200"
              >
                <div 
                  style={{ backgroundColor: category.color }}
                  className="p-6 text-white rounded-t-xl"
                >
                  <category.icon className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.measures.map((measure, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#F5B700] mr-2 mt-0.5 flex-shrink-0" />
                        {measure}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Types & Retention */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Data Types & Retention</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              What data we collect and how long we keep it
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataTypes.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
              >
                <div className="flex items-start mb-4">
                  <div 
                    style={{ backgroundColor: data.color }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg"
                  >
                    <Database className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{data.type}</h3>
                    <div className="bg-[#F5F7FA] rounded-lg p-3 mb-3">
                      <p className="text-xs font-semibold text-gray-500 mb-2">Examples:</p>
                      <div className="flex flex-wrap gap-2">
                        {data.examples.map((example, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-white px-2 py-1 rounded border border-gray-200 text-gray-600"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-gray-600"><strong>Retention:</strong> {data.retention}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop" 
                alt="Data Security" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#1A1A1A]">
                Enterprise-Grade Security
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We employ bank-level security measures to protect your data. Our infrastructure is designed 
                with multiple layers of security to ensure your information remains safe and confidential.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle style={{ color: '#F5B700' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">24/7 Monitoring</h4>
                    <p className="text-gray-600 text-sm">Continuous security monitoring and threat detection</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle style={{ color: '#0B3C5D' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">Regular Audits</h4>
                    <p className="text-gray-600 text-sm">Independent security audits and compliance checks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle style={{ color: '#1F6AE1' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">Incident Response</h4>
                    <p className="text-gray-600 text-sm">Rapid response team for security incidents</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#F5F7FA] text-[#1F6AE1] rounded-full text-sm font-semibold mb-4 border border-[#1F6AE1]/20">
              Your Rights
            </span>
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Data Subject Rights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              You have the following rights regarding your personal data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
              >
                <div 
                  style={{ backgroundColor: item.color }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                >
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{item.right}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Breach Response */}
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
                <AlertCircle className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Data Breach Response</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  In the unlikely event of a data breach, we have comprehensive procedures in place to respond 
                  quickly and effectively to protect your information.
                </p>
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                  <h4 className="font-bold text-yellow-900 mb-3">Our Protocol:</h4>
                  <ol className="space-y-2 text-yellow-800 text-sm">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">1.</span>
                      <span>Immediate containment and assessment of the breach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">2.</span>
                      <span>Notification to affected individuals within 72 hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">3.</span>
                      <span>Report to Data Protection Authority as required by law</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">4.</span>
                      <span>Implementation of corrective measures to prevent recurrence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">5.</span>
                      <span>Provision of support and guidance to affected individuals</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact DPO */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ backgroundColor: '#0B3C5D' }}
            className="rounded-xl shadow-2xl p-8 text-white"
          >
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Data Protection Officer</h2>
              <p className="text-[#F5F7FA] leading-relaxed">
                For any questions about data protection or to exercise your rights, contact our DPO
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold mb-3">Email</h3>
                <p className="text-[#F5F7FA] text-sm">dpo@xash.co.zw</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold mb-3">Phone</h3>
                <p className="text-[#F5F7FA] text-sm">+263 77 932 5039</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold mb-3">Response Time</h3>
                <p className="text-[#F5F7FA] text-sm">Within 30 days</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className="text-[#F5F7FA] text-sm">
                <strong>Note:</strong> You have the right to lodge a complaint with the Data Protection Authority 
                if you believe your rights have been violated.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataProtection;