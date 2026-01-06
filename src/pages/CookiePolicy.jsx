import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Cookie, 
  Settings, 
  Shield, 
  Eye,
  BarChart,
  Target,
  CheckCircle,
  XCircle,
  Info,
  AlertCircle
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const CookiePolicy = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    performance: false,
    functional: false,
    marketing: false
  });

  const handleToggle = (type) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    setCookiePreferences({
      ...cookiePreferences,
      [type]: !cookiePreferences[type]
    });
  };

  const handleSavePreferences = () => {
    setCookiesAccepted(true);
    // In a real app, this would save to localStorage or backend
  };

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      icon: Shield,
      purpose: 'Required for basic site functionality and security',
      color: '#1F6AE1',
      necessary: true,
      examples: [
        'Authentication and session management',
        'Security tokens and CSRF protection',
        'Load balancing and server routing',
        'User preferences for essential features'
      ],
      retention: 'Session or up to 1 year'
    },
    {
      name: 'Performance Cookies',
      icon: BarChart,
      purpose: 'Help us understand how visitors use our site',
      color: '#0B3C5D',
      necessary: false,
      examples: [
        'Google Analytics for visitor statistics',
        'Page load time monitoring',
        'Error tracking and reporting',
        'Performance monitoring'
      ],
      retention: 'Up to 2 years'
    },
    {
      name: 'Functional Cookies',
      icon: Settings,
      purpose: 'Remember your preferences and settings',
      color: '#1F6AE1',
      necessary: false,
      examples: [
        'Language preferences',
        'Region and currency selection',
        'Display preferences (dark mode)',
        'Form auto-fill data'
      ],
      retention: 'Up to 1 year'
    },
    {
      name: 'Marketing Cookies',
      icon: Target,
      purpose: 'Used to deliver relevant advertisements',
      color: '#F5B700',
      necessary: false,
      examples: [
        'Retargeting and remarketing',
        'Conversion tracking',
        'Audience insights and segmentation',
        'A/B testing for marketing campaigns'
      ],
      retention: 'Up to 2 years'
    }
  ];

  const browsers = [
    {
      name: 'Google Chrome',
      instructions: 'Settings → Privacy and security → Cookies and other site data'
    },
    {
      name: 'Mozilla Firefox',
      instructions: 'Options → Privacy & Security → Cookies and Site Data'
    },
    {
      name: 'Safari',
      instructions: 'Preferences → Privacy → Cookies and website data'
    },
    {
      name: 'Microsoft Edge',
      instructions: 'Settings → Cookies and site permissions → Cookies and data stored'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      <Helmet>
        <title>Cookie Policy - Xash</title>
        <meta 
          name="description" 
          content="Learn about Xash's Cookie Policy, including the types of cookies we use, their purposes, and how you can manage your cookie preferences." 
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
                <Cookie className="text-[#1F6AE1]" size={32} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1A1A1A]">
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
                Learn how we use cookies and similar technologies to improve your experience on our platform.
              </p>
              <p className="text-gray-500">
                Last updated: January 1, 2026
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5F7FA] rounded-xl p-8 border border-[#1F6AE1]/20"
          >
            <div className="flex items-start">
              <Info className="text-[#1F6AE1] mr-4 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">What Are Cookies?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cookies are small text files stored on your device when you visit websites. They help websites 
                  remember information about your visit, which can make it easier to visit the site again and make 
                  the site more useful to you.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These files contain small amounts of data which may include an anonymous unique identifier. 
                  Cookies are sent to your browser from a website and stored on your device.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#F5F7FA] text-[#1F6AE1] rounded-full text-sm font-semibold mb-4 border border-[#1F6AE1]/20">
              Cookie Types
            </span>
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Types of Cookies We Use</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Understanding the different types of cookies and their purposes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <div 
                  style={{ backgroundColor: type.color }}
                  className="p-6 text-white flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <type.icon className="w-8 h-8 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold">{type.name}</h3>
                      <p className="text-sm opacity-90">{type.purpose}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    type.necessary 
                      ? 'bg-white/30' 
                      : 'bg-white/20'
                  }`}>
                    {type.necessary ? 'Required' : 'Optional'}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-[#1A1A1A] mb-3">Examples:</h4>
                  <ul className="space-y-2 mb-4">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#F5B700] mr-2 mt-0.5 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-[#F5F7FA] rounded-lg p-3 flex items-center">
                    <Eye className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-xs text-gray-600">
                      <strong>Retention:</strong> {type.retention}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Browser Controls */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Browser Controls</h2>
            <p className="text-gray-600 text-lg">
              How to manage cookies in popular browsers
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <p className="text-gray-600 leading-relaxed mb-6">
              Most web browsers allow you to control cookies through their settings. Here's how to manage 
              cookies in popular browsers:
            </p>
            <div className="space-y-4">
              {browsers.map((browser, index) => (
                <div 
                  key={index}
                  className="bg-[#F5F7FA] rounded-lg p-4 border border-gray-200"
                >
                  <h4 className="font-bold text-[#1A1A1A] mb-2">{browser.name}</h4>
                  <p className="text-sm text-gray-600">{browser.instructions}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <div className="flex items-start">
                <AlertCircle className="text-yellow-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Disabling cookies may affect your ability to use certain features 
                  of our website. Essential cookies are required for the site to function properly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Third-Party Cookies */}
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
                style={{ backgroundColor: '#1F6AE1' }}
                className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg"
              >
                <Eye className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Third-Party Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use third-party services that may place cookies on your device. These services help us 
                  analyze site usage, provide social media features, and deliver relevant advertisements.
                </p>
                <div className="bg-[#F5F7FA] rounded-lg p-4 border border-[#1F6AE1]/20">
                  <h4 className="font-bold text-[#1A1A1A] mb-3">Third-party services we use:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#1F6AE1] mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Google Analytics:</strong> For website analytics and performance tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#1F6AE1] mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Social Media Plugins:</strong> For social sharing functionality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#1F6AE1] mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Advertising Partners:</strong> For targeted advertising (if enabled)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updates to Policy */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Updates to This Cookie Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting 
              the new Cookie Policy on this page and updating the "Last updated" date at the top of this policy.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie 
              Policy are effective when they are posted on this page.
            </p>
            <div className="bg-[#F5F7FA] rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Last updated:</strong> January 1, 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ backgroundColor: '#0B3C5D' }}
            className="rounded-xl shadow-2xl p-8 text-white"
          >
            <div className="text-center mb-8">
              <Cookie className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Questions About Cookies?</h2>
              <p className="text-[#F5F7FA] leading-relaxed">
                If you have any questions about our use of cookies, please contact us
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold mb-3">Email</h3>
                <p className="text-[#F5F7FA] text-sm">privacy@xash.co.zw</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold mb-3">Phone</h3>
                <p className="text-[#F5F7FA] text-sm">+263 716 409 412</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className="text-[#F5F7FA] text-sm">
                We're committed to transparency and protecting your privacy. Contact us anytime 
                with questions or concerns about cookies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;