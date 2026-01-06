import { motion } from 'framer-motion';
import { Scale, FileText, AlertCircle, Shield, Users, DollarSign, XCircle, Clock, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const TermsOfService = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      color: '#0B3C5D',
      content: `By accessing or using Xash services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services. Your continued use of the service constitutes acceptance of these terms and any future modifications.`
    },
    {
      title: 'Service Description',
      icon: FileText,
      color: '#1F6AE1',
      content: `Xash provides digital payment and vending services including but not limited to:
      • Airtime and data bundle sales
      • Electricity token vending (ZESA)
      • POS device provision and support
      • API services for developers
      • Agent network management
      
      Services may be modified, suspended, or discontinued at our discretion with reasonable notice.`
    },
    {
      title: 'Account Registration',
      icon: Users,
      color: '#0B3C5D',
      content: `To use certain features, you must register for an account. You agree to:
      • Provide accurate and complete information
      • Maintain security of your account credentials
      • Notify us immediately of unauthorized access
      • Be responsible for all activities under your account
      • Not share your account with others
      
      We reserve the right to refuse service or terminate accounts that violate these terms.`
    },
    {
      title: 'Agent Responsibilities',
      icon: Shield,
      color: '#1F6AE1',
      content: `Agents using Xash POS devices agree to:
      • Use the device for authorized transactions only
      • Maintain sufficient float for operations
      • Comply with all applicable laws and regulations
      • Protect the device from loss or damage
      • Return the device upon termination of agreement
      • Pay applicable fees for lost or damaged devices
      • Maintain accurate transaction records
      • Participate in required training and updates`
    },
    {
      title: 'Fees and Commissions',
      icon: DollarSign,
      color: '#0B3C5D',
      content: `Commission rates are specified in separate agreements and may be updated with 30 days notice. Xash deducts commissions from transactions before settlement. All fees are in USD unless otherwise specified. Payment processing fees may apply for certain payment methods.`
    },
    {
      title: 'Prohibited Activities',
      icon: XCircle,
      color: '#F5B700',
      content: `Users must not engage in:
      • Fraudulent transactions or money laundering
      • Unauthorized access to systems or data
      • Violation of intellectual property rights
      • Harassment or illegal activities
      • Circumventing security measures
      • Manipulating transaction data
      • Sharing account credentials
      • Using services for illegal purposes`
    },
    {
      title: 'Limitation of Liability',
      icon: AlertCircle,
      color: '#F5B700',
      content: `Xash is not liable for:
      • Indirect, incidental, or consequential damages
      • Loss of profits or revenue
      • Business interruption or data loss
      • Third-party service failures
      • Network or system outages
      • Any damages beyond fees paid in last 6 months
      
      Our total liability is limited to the amount paid for services in the preceding six months.`
    },
    {
      title: 'Termination',
      icon: Clock,
      color: '#1F6AE1',
      content: `We may terminate or suspend access immediately for:
      • Violation of these terms
      • Fraudulent or suspicious activity
      • Legal requirements or court orders
      • Non-payment of fees or debts
      • Violation of applicable laws
      
      Upon termination, you must cease using services and return any equipment within 7 days.`
    }
  ];

  const importantNotices = [
    {
      title: 'Changes to Terms',
      description: 'We reserve the right to modify these terms at any time. Changes will be effective upon posting.',
      icon: FileText,
      color: '#0B3C5D'
    },
    {
      title: 'Governing Law',
      description: 'These terms are governed by the laws of Zimbabwe. Disputes shall be resolved in Mutare courts.',
      icon: Scale,
      color: '#1F6AE1'
    },
    {
      title: 'Severability',
      description: 'If any provision is found unenforceable, remaining provisions remain in full force.',
      icon: CheckCircle,
      color: '#F5B700'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      <Helmet>
        <title>Terms of Service - Xash</title>
        <meta 
          name="description" 
          content="Read the Terms of Service for Xash Solutions, outlining user responsibilities, prohibited activities, liability limitations, and termination policies." 
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
                <Scale className="text-[#1F6AE1]" size={32} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1A1A1A]">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
                Please read these terms carefully before using XASH services. 
                By using our services, you agree to these terms.
              </p>
              <p className="text-gray-500">
                Effective: January 1, 2026
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-white">
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
                <h3 className="text-xl font-bold text-yellow-900 mb-3">Important Legal Agreement</h3>
                <p className="text-yellow-800 leading-relaxed">
                  These terms constitute a legally binding agreement between you and Xash Solutions (Pvt) Ltd. 
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by 
                  these terms. If you do not agree to these terms, please do not use our services.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
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

      {/* Intellectual Property */}
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
                style={{ backgroundColor: '#0B3C5D' }}
                className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg"
              >
                <Shield className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All content, trademarks, logos, and data on our platform are owned by Xash Solutions (Pvt) Ltd 
                  or licensed to us. You may not copy, modify, distribute, sell, or lease any part of our services 
                  or included software, nor may you reverse engineer or attempt to extract the source code of that 
                  software.
                </p>
                <div className="bg-[#F5F7FA] rounded-lg p-4 border border-[#1F6AE1]/20">
                  <h4 className="font-bold text-[#1A1A1A] mb-2">Permitted Use:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#F5B700] mr-2 mt-1 flex-shrink-0" />
                      <span>Personal, non-commercial use of our services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#F5B700] mr-2 mt-1 flex-shrink-0" />
                      <span>Business use as authorized by your agreement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#F5B700] mr-2 mt-1 flex-shrink-0" />
                      <span>API integration as per developer documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Important Notices</h2>
            <p className="text-gray-600">Additional terms and conditions you should know</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {importantNotices.map((notice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F5F7FA] rounded-xl p-6 border border-gray-200"
              >
                <div 
                  style={{ backgroundColor: notice.color }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                >
                  <notice.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{notice.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{notice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Legal */}
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
              <Scale className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="text-[#F5F7FA] leading-relaxed">
                If you have any questions or concerns about these Terms of Service, please contact our legal team.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold mb-3">Legal Department</h3>
                <p className="text-[#F5F7FA] text-sm">legal@xash.co.zw</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold mb-3">Response Time</h3>
                <p className="text-[#F5F7FA] text-sm">Within 5 business days</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className="text-[#F5F7FA] text-sm">
                <strong>Governing Law:</strong> These terms are governed by the laws of Zimbabwe. 
                Any disputes shall be resolved in the courts of Mutare, Zimbabwe.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Acknowledgment */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5F7FA] rounded-xl p-8 border border-[#1F6AE1]/20 text-center"
          >
            <CheckCircle className="w-12 h-12 text-[#1F6AE1] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Acknowledgment</h3>
            <p className="text-gray-700 leading-relaxed">
              By using XASH services, you acknowledge that you have read these Terms of Service, 
              understood them, and agree to be bound by them. If you do not agree to these terms, 
              you must not use our services.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;