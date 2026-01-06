import { motion } from 'framer-motion';
import { 
  Shield, 
  UserCheck, 
  Flag, 
  AlertTriangle, 
  FileText,
  DollarSign,
  Eye,
  Lock,
  CheckCircle,
  XCircle,
  Scale
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const AMLPolicy = () => {
  const requirements = [
    {
      icon: UserCheck,
      title: 'Customer Identification',
      color: '#1F6AE1',
      items: [
        'Valid government-issued ID (National ID or Passport)',
        'Proof of address (utility bill or bank statement)',
        'Business registration documents (for business accounts)',
        'Tax identification number',
        'Biometric verification for high-risk accounts'
      ]
    },
    {
      icon: Flag,
      title: 'Risk Assessment',
      color: '#0B3C5D',
      items: [
        'Customer risk profiling and categorization',
        'Transaction pattern monitoring and analysis',
        'Enhanced due diligence for high-risk customers',
        'Ongoing customer review and updates',
        'Periodic risk reassessment'
      ]
    },
    {
      icon: Shield,
      title: 'Reporting Obligations',
      color: '#F5B700',
      items: [
        'Suspicious activity reports (SAR) to FIU',
        'Large transaction reporting (above $10,000)',
        'Record keeping for minimum 7 years',
        'Regulatory compliance and audits',
        'Cooperation with law enforcement'
      ]
    }
  ];

  const prohibitedActivities = [
    {
      activity: 'Money Laundering',
      description: 'Transactions designed to conceal the origin of illegally obtained funds',
      severity: 'Critical',
      color: '#0B3C5D'
    },
    {
      activity: 'Terrorist Financing',
      description: 'Providing funds or financial support to terrorist organizations',
      severity: 'Critical',
      color: '#0B3C5D'
    },
    {
      activity: 'Structuring',
      description: 'Breaking large transactions into smaller ones to avoid reporting thresholds',
      severity: 'High',
      color: '#F5B700'
    },
    {
      activity: 'Identity Fraud',
      description: 'Use of false or stolen identities to open accounts or conduct transactions',
      severity: 'High',
      color: '#F5B700'
    },
    {
      activity: 'Shell Companies',
      description: 'Using fictitious businesses to hide beneficial ownership',
      severity: 'High',
      color: '#F5B700'
    },
    {
      activity: 'Sanctions Violations',
      description: 'Transactions with individuals or entities on sanctions lists',
      severity: 'Critical',
      color: '#0B3C5D'
    }
  ];

  const transactionLimits = [
    { 
      type: 'Basic Verification', 
      daily: '$500', 
      monthly: '$5,000',
      requirements: 'ID & Phone Verification'
    },
    { 
      type: 'Enhanced Verification', 
      daily: '$2,000', 
      monthly: '$20,000',
      requirements: 'ID, Address & Bank Account'
    },
    { 
      type: 'Business Accounts', 
      daily: '$5,000', 
      monthly: '$50,000',
      requirements: 'Full KYC & Business Registration'
    }
  ];

  const kycLevels = [
    {
      level: 'Level 1 - Basic',
      requirements: ['National ID or Passport', 'Phone number verification', 'Basic information'],
      limits: 'Up to $500 daily',
      color: '#F5B700'
    },
    {
      level: 'Level 2 - Standard',
      requirements: ['Proof of address', 'Bank account details', 'Source of funds declaration'],
      limits: 'Up to $2,000 daily',
      color: '#1F6AE1'
    },
    {
      level: 'Level 3 - Enhanced',
      requirements: ['Business registration', 'Tax certificates', 'Financial statements', 'Enhanced due diligence'],
      limits: 'Up to $5,000 daily',
      color: '#0B3C5D'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      <Helmet>
        <title>AML/KYC Policy - Xash</title>
        <meta 
          name="description" 
          content="Read Xash's comprehensive AML/KYC Policy outlining our commitment to anti-money laundering and know your customer compliance." 
        />  
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F7FA] to-[#0B3C5D]/20">
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
                AML/KYC Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
                Anti-Money Laundering & Know Your Customer compliance framework 
                to protect our platform and customers.
              </p>
              <p className="text-gray-500">
                Last updated: January 1, 2026
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policy Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5F7FA] rounded-xl p-8 border border-[#1F6AE1]/20"
          >
            <div className="flex items-start">
              <Scale className="text-[#1F6AE1] mr-4 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Policy Statement</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Xash Solutions is committed to preventing money laundering, terrorist financing, and other 
                  financial crimes. We comply with all applicable regulations including the Bank Use Promotion Act, 
                  Money Laundering and Proceeds of Crime Act, and international standards set by the Financial 
                  Action Task Force (FATF).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This policy applies to all customers, agents, partners, and employees of Xash Solutions. 
                  Compliance with this policy is mandatory and non-negotiable.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#F5F7FA] text-[#1F6AE1] rounded-full text-sm font-semibold mb-4 border border-[#1F6AE1]/20">
              Compliance Requirements
            </span>
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">AML/KYC Requirements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Essential procedures we follow to ensure compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div 
                  style={{ backgroundColor: req.color }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <req.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">{req.title}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#F5B700] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#F5F7FA] text-[#1F6AE1] rounded-full text-sm font-semibold mb-4 border border-[#1F6AE1]/20">
              Strictly Prohibited
            </span>
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Prohibited Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Activities that will result in immediate account suspension and reporting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {prohibitedActivities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start flex-1">
                    <XCircle 
                      style={{ color: item.color }}
                      className="mr-3 flex-shrink-0 mt-1" 
                      size={24} 
                    />
                    <div>
                      <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{item.activity}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <span 
                    style={{ 
                      backgroundColor: item.color,
                      color: 'white'
                    }}
                    className="px-3 py-1 rounded-full text-xs font-bold ml-4"
                  >
                    {item.severity}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-[#F5F7FA] rounded-xl p-6 border border-[#1F6AE1]/20"
          >
            <div className="flex items-start">
              <AlertTriangle className="text-[#1F6AE1] mr-4 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-[#1A1A1A] mb-2">Consequences of Violations</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Engaging in any prohibited activities will result in immediate account suspension, 
                  transaction reversal, reporting to relevant authorities (including FIU and law enforcement), 
                  and potential legal action. We have zero tolerance for financial crimes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Monitoring & Reporting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop" 
                alt="Monitoring Systems" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#1A1A1A]">
                Transaction Monitoring
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We employ sophisticated automated systems to monitor all transactions in real-time, 
                detecting suspicious patterns and potential compliance violations.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-start">
                    <Eye style={{ color: '#1F6AE1' }} className="mr-4 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] mb-2">Real-time Monitoring</h4>
                      <p className="text-gray-600 text-sm">
                        AI-powered systems analyze every transaction for suspicious patterns
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-start">
                    <Flag style={{ color: '#0B3C5D' }} className="mr-4 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] mb-2">Automated Alerts</h4>
                      <p className="text-gray-600 text-sm">
                        Instant notifications to compliance team for manual review
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-start">
                    <FileText style={{ color: '#F5B700' }} className="mr-4 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-[#1A1A1A] mb-2">Comprehensive Reporting</h4>
                      <p className="text-gray-600 text-sm">
                        Detailed records maintained for regulatory compliance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Officer Contact */}
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
              <Lock className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Report Suspicious Activity</h2>
              <p className="text-[#F5F7FA] leading-relaxed">
                For AML/KYC inquiries or to report suspicious activity, contact our Compliance Officer
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold mb-3">Compliance Officer</h3>
                <p className="text-[#F5F7FA] text-sm">compliance@xash.co.zw</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold mb-3">Hotline</h3>
                <p className="text-[#F5F7FA] text-sm">+263 123 456 789 (ext. 2)</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className="text-[#F5F7FA] text-sm">
                <strong>Confidentiality:</strong> All reports are confidential and protected by law. 
                Whistleblowers are protected from retaliation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AMLPolicy;