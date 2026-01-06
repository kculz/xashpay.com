import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Shield, 
  Zap, 
  Lock, 
  Database,
  Cloud,
  CheckCircle,
  Copy,
  Key,
  Eye,
  EyeOff,
  ArrowRight,
  Smartphone,
  FileText,
  Layers,
  User,
  Wifi,
  Bolt,
  Sparkles,
  Book,
  Rocket
} from 'lucide-react';
import { useState } from 'react';

const Developers = () => {
  const [apiKey, setApiKey] = useState('xv_sk_live_**********');
  const [showKey, setShowKey] = useState(false);
  const [copiedEndpoint, setCopiedEndpoint] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(index);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const apiCategories = [
    {
      title: 'Authentication',
      icon: Key,
      color: '#1F6AE1',
      endpoints: [
        {
          method: 'POST',
          endpoint: '/api/v1/auth/register',
          description: 'Register a new user account',
          color: '#1F6AE1',
          sample: {
            "first_name": "John",
            "last_name": "Doe",
            "dob": "2000-01-01",
            "phone": "263775123456",
            "email": "john@example.com",
            "id_number": "71-123456X55"
          }
        },
        {
          method: 'POST',
          endpoint: '/api/v1/auth/set-password',
          description: 'Set password after registration',
          color: '#1F6AE1',
          sample: {
            "user_number": 123456,
            "password": "SecurePass123!",
            "password_confirmation": "SecurePass123!"
          }
        },
        {
          method: 'POST',
          endpoint: '/api/v1/auth/login',
          description: 'Authenticate and obtain access token',
          color: '#F5B700',
          sample: {
            "user_number": 123456,
            "password": "SecurePass123!"
          }
        },
        {
          method: 'POST',
          endpoint: '/api/v1/auth/logout',
          description: 'Logout and invalidate token',
          color: '#EF4444',
          sample: {}
        },
        {
          method: 'POST',
          endpoint: '/api/v1/auth/create-business',
          description: 'Create business profile',
          color: '#F5B700',
          sample: {
            "business_name": "Xash Technologies",
            "business_category": "IT",
            "address_line_1": "123 Main St",
            "city": "Mutare",
            "business_address_line_1": "456 Business Ave",
            "business_city": "Mutare"
          }
        },
        {
          method: 'GET',
          endpoint: '/api/v1/profile',
          description: 'Fetch user profile information',
          color: '#0B3C5D',
          sample: {}
        }
      ]
    },
    {
      title: 'Airtime',
      icon: Smartphone,
      color: '#F5B700',
      endpoints: [
        {
          method: 'GET',
          endpoint: '/api/v1/airtime/carriers',
          description: 'Get supported carriers',
          color: '#F5B700',
          sample: {}
        },
        {
          method: 'POST',
          endpoint: '/api/v1/airtime/direct',
          description: 'Purchase direct airtime',
          color: '#F5B700',
          sample: {
            "mobile_phone": "263775123456",
            "amount": 10,
            "currency": "USD"
          }
        },
        {
          method: 'GET',
          endpoint: '/api/v1/airtime/direct/{carrier}/values',
          description: 'Get voucher values for carrier',
          color: '#F5B700',
          sample: {}
        },
        {
          method: 'POST',
          endpoint: '/api/v1/airtime/direct/voucher/{carrier}',
          description: 'Purchase voucher airtime',
          color: '#F5B700',
          sample: {
            "amount": 10,
            "currency": "USD",
            "quantity": 2
          }
        }
      ]
    },
    {
      title: 'Bundles',
      icon: Layers,
      color: '#0B3C5D',
      endpoints: [
        {
          method: 'GET',
          endpoint: '/api/v1/bundles',
          description: 'Get available bundles',
          color: '#0B3C5D',
          sample: {
            "currency": "USD",
            "network": "Carrier1"
          }
        },
        {
          method: 'POST',
          endpoint: '/api/v1/bundles/buy/{bundle}',
          description: 'Purchase direct bundle',
          color: '#0B3C5D',
          sample: {
            "mobile_phone": "263775123456"
          }
        },
        {
          method: 'POST',
          endpoint: '/api/v1/bundles/voucher/buy/{bundle}',
          description: 'Purchase bundle vouchers',
          color: '#0B3C5D',
          sample: {
            "quantity": 2
          }
        }
      ]
    },
    {
      title: 'WiFi Vouchers',
      icon: Wifi,
      color: '#F5B700',
      endpoints: [
        {
          method: 'GET',
          endpoint: '/api/v1/wifi/vouchers',
          description: 'Get available WiFi bundles',
          color: '#F5B700',
          sample: {}
        },
        {
          method: 'POST',
          endpoint: '/api/v1/wifi/vouchers/buy',
          description: 'Purchase WiFi vouchers',
          color: '#F5B700',
          sample: {
            "amount": "10.00",
            "currency": "USD",
            "quantity": "2",
            "duration": 24,
            "data_limit": "1GB",
            "duration_in": "hours"
          }
        }
      ]
    },
    {
      title: 'Electricity',
      icon: Bolt,
      color: '#1F6AE1',
      endpoints: [
        {
          method: 'POST',
          endpoint: '/api/v1/electricity/check-account',
          description: 'Verify ZESA account',
          color: '#1F6AE1',
          sample: {
            "meter_number": "12345678",
            "currency": "ZIG"
          }
        },
        {
          method: 'POST',
          endpoint: '/api/v1/electricity/buy-tokens',
          description: 'Purchase ZESA tokens',
          color: '#1F6AE1',
          sample: {
            "meter_number": "12345678",
            "amount": 10,
            "currency": "ZIG"
          }
        }
      ]
    }
  ];

  const features = [
    {
      icon: Lock,
      title: 'Secure Authentication',
      description: 'Token-based authentication with Bearer tokens. All endpoints secured with HTTPS and OAuth 2.0 principles.',
      color: '#1F6AE1'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant delivery of airtime, bundles, and electricity tokens with immediate webhook notifications.',
      color: '#F5B700'
    },
    {
      icon: Layers,
      title: 'Comprehensive API',
      description: 'Full suite of vending services: airtime, data bundles, WiFi vouchers, and electricity tokens.',
      color: '#0B3C5D'
    },
    {
      icon: FileText,
      title: 'Detailed Documentation',
      description: 'Complete API reference with examples for all endpoints, available at docs.xash.co.zw.',
      color: '#F5B700'
    },
    {
      icon: Code2,
      title: 'RESTful Design',
      description: 'Clean REST API with JSON responses. Support for multiple programming languages and frameworks.',
      color: '#1F6AE1'
    },
    {
      icon: Database,
      title: 'Wallet & Commission System',
      description: 'Built-in wallet management with automatic commission calculation and profit tracking.',
      color: '#1F6AE1'
    }
  ];

  const baseURLs = [
    {
      environment: 'Live Server',
      url: 'https://staging.xash.co.zw/api/v1',
      color: '#F5B700'
    },
    {
      environment: 'Development Server',
      url: 'https://dev.xash.co.zw/api/v1',
      color: '#1F6AE1'
    }
  ];

  const codeExample = `// Example: Purchase Airtime
fetch('https://staging.xash.co.zw/api/v1/airtime/direct', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  },
  body: JSON.stringify({
    mobile_phone: '263775123456',
    amount: 10,
    currency: 'USD'
  })
})
.then(response => response.json())
.then(data => {
  console.log('Transaction successful:', data);
});`;

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
                <Code2 className="w-5 h-5 mr-2" />
                Xash Vend API
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight mb-6"
              >
                <span className="text-white">Build with</span>
                <br />
                <span className="text-[#F5B700]">Xash Vend API</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl"
              >
                Powerful, secure API for integrating diverse vending services into your applications. 
                Seamlessly handle mobile airtime, data bundles, WiFi vouchers, and electricity tokens.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4 mb-12"
              >
                {[
                  'RESTful API with JSON responses and Bearer token authentication',
                  'Comprehensive documentation at docs.xash.co.zw with code samples',
                  'Wallet management with automatic commission calculation',
                  'Webhook support for real-time transaction updates'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="text-[#F5B700] mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 183, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://docs.xash.co.zw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#F5B700] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-2xl"
                >
                  View Documentation
                  <Book className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
                </motion.a>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 transition-all hover:bg-white/20 flex items-center justify-center"
                >
                  <Terminal className="mr-2" size={24} />
                  Quick Start
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Code Example */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-[#1A1A1A] rounded-3xl shadow-2xl overflow-hidden border border-white/10">
                <div className="bg-[#2A2A2A] px-6 py-4 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Terminal className="mr-2" size={16} />
                    <span>example.js</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Sparkles className="text-[#F5B700] mr-3" size={20} />
                    <h3 className="text-lg font-bold text-white">Quick Start Example</h3>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto leading-relaxed">
                    <code>{codeExample}</code>
                  </pre>
                  <a 
                    href="https://docs.xash.co.zw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#F5B700] text-sm font-medium hover:text-[#F5B700]/80 transition-colors mt-6 inline-flex items-center group"
                  >
                    View full documentation at docs.xash.co.zw
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Base URLs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#F5F7FA] text-[#1F6AE1] text-sm font-semibold mb-6 border border-[#1F6AE1]/20">
              <Cloud className="w-4 h-4 mr-2" />
              API Endpoints
            </div>
            <h2 className="text-5xl font-black text-[#1A1A1A] mb-4">API Base URLs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Use these endpoints for your API calls</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {baseURLs.map((base, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:border-[#1F6AE1]/30 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <span 
                    style={{ backgroundColor: base.color }}
                    className="px-5 py-2 rounded-full text-white text-sm font-bold"
                  >
                    {base.environment}
                  </span>
                  <button
                    onClick={() => copyToClipboard(base.url, `base-${index}`)}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-[#F5F7FA] rounded-lg"
                  >
                    {copiedEndpoint === `base-${index}` ? (
                      <CheckCircle size={24} style={{ color: '#F5B700' }} />
                    ) : (
                      <Copy size={24} />
                    )}
                  </button>
                </div>
                <div className="bg-[#F5F7FA] rounded-xl p-4 border border-gray-200">
                  <code className="text-[#1A1A1A] font-mono text-sm break-all">{base.url}</code>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-white text-[#1F6AE1] text-sm font-semibold mb-6 border border-[#1F6AE1]/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Features
            </div>
            <h2 className="text-5xl font-black text-[#1A1A1A] mb-4">Why Choose Xash Vend API</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for seamless vending service integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
                  style={{ backgroundColor: feature.color }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform"
                >
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints by Category */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#F5F7FA] text-[#1F6AE1] text-sm font-semibold mb-6 border border-[#1F6AE1]/20">
              <Terminal className="w-4 h-4 mr-2" />
              API Reference
            </div>
            <h2 className="text-5xl font-black text-[#1A1A1A] mb-4">API Endpoints</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete suite of endpoints for all vending services
            </p>
          </motion.div>

          <div className="space-y-12">
            {apiCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100"
              >
                <div className="flex items-center mb-10">
                  <div 
                    style={{ backgroundColor: category.color }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
                  >
                    <category.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#1A1A1A]">{category.title}</h3>
                    <p className="text-gray-600 text-lg">Endpoints for {category.title.toLowerCase()} services</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <motion.div
                      key={endpointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: endpointIndex * 0.05 }}
                      className="bg-[#F5F7FA] rounded-2xl p-8 hover:shadow-lg transition-all border border-gray-200"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center mb-3 flex-wrap gap-3">
                            <span 
                              style={{ 
                                backgroundColor: endpoint.method === 'GET' ? '#F5B700' : 
                                              endpoint.method === 'POST' ? '#1F6AE1' : 
                                              endpoint.method === 'PUT' ? '#F5B700' : 
                                              endpoint.method === 'DELETE' ? '#EF4444' : endpoint.color,
                                color: 'white'
                              }}
                              className="px-4 py-2 rounded-full text-sm font-bold shadow-md"
                            >
                              {endpoint.method}
                            </span>
                            <code className="text-lg font-mono text-[#1A1A1A] break-all bg-white px-4 py-2 rounded-lg border border-gray-200">
                              {endpoint.endpoint}
                            </code>
                          </div>
                          <p className="text-gray-600 text-lg">{endpoint.description}</p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(endpoint.endpoint, `${categoryIndex}-${endpointIndex}`)}
                          className="ml-6 text-gray-400 hover:text-gray-600 flex-shrink-0 p-2 hover:bg-white rounded-lg transition-colors"
                        >
                          {copiedEndpoint === `${categoryIndex}-${endpointIndex}` ? (
                            <CheckCircle size={24} style={{ color: '#F5B700' }} />
                          ) : (
                            <Copy size={24} />
                          )}
                        </button>
                      </div>
                      {Object.keys(endpoint.sample).length > 0 && (
                        <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-gray-800">
                          <div className="text-sm text-gray-400 mb-3 font-semibold">Request body:</div>
                          <pre className="text-sm text-gray-300 overflow-x-auto leading-relaxed">
                            <code>{JSON.stringify(endpoint.sample, null, 2)}</code>
                          </pre>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-white text-[#F5B700] text-sm font-semibold mb-6 border border-[#F5B700]/20">
              <Lock className="w-4 h-4 mr-2" />
              Authentication
            </div>
            <h2 className="text-5xl font-black text-[#1A1A1A] mb-4">Authentication Setup</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Securely authenticate your API requests with Bearer tokens
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6 shadow-lg" style={{ backgroundColor: '#1F6AE1' }}>
                  <Key className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-[#1A1A1A]">Bearer Token Authentication</h3>
                  <p className="text-gray-600 text-lg">Secure your API calls</p>
                </div>
              </div>
              
              <div className="space-y-8">
                  <div>
              <h4 className="font-bold text-[#1A1A1A] mb-4 text-xl">Get Access Token</h4>
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-gray-800">
                <pre className="text-sm text-gray-300 overflow-x-auto leading-relaxed">
                  <code>{`POST /api/v1/auth/login{
"user_number": 123456,
"password": "your_password"
}`}</code>
</pre>
</div>
</div>
<div className="bg-gradient-to-r from-[#1F6AE1]/10 to-[#F5B700]/10 rounded-2xl p-6 border-2 border-[#1F6AE1]/20">
              <div className="flex items-start">
                <Shield className="text-[#1F6AE1] mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-base text-[#1A1A1A] font-bold mb-3">Important Security Notes:</p>
                  <ul className="text-base text-[#1A1A1A] space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#F5B700] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Tokens expire after 1 hour - implement token refresh logic</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#F5B700] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Never expose tokens in client-side code</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#F5B700] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>Use environment variables in production</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#F5B700] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>All API calls must use HTTPS</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  {/* Error Handling Section */}
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-black text-[#1A1A1A] mb-4">Error Handling</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Consistent error responses across all endpoints
        </p>
      </motion.div>
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1A1A1A] rounded-3xl p-10 shadow-2xl border border-gray-800"
        >
          <div className="text-[#F5B700] font-mono">
            <div className="mb-6">
              <span className="text-gray-400 text-base">// Error response format</span>
            </div>
            <pre className="overflow-x-auto text-base leading-relaxed">
              <code>{`{"success": false,
"message": "Error message",
"errors": {
"field1": [
"Error detail 1",
"Error detail 2"
],
"field2": [
"Error detail"
]
}
}`}</code>
</pre>
<div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className="bg-red-900/30 rounded-2xl p-6 border border-red-500/30">
                <div className="text-red-400 font-bold text-3xl mb-2">401</div>
                <div className="text-gray-300">Unauthorized</div>
              </div>
              <div className="bg-yellow-900/30 rounded-2xl p-6 border border-yellow-500/30">
                <div className="text-yellow-400 font-bold text-3xl mb-2">422</div>
                <div className="text-gray-300">Validation Failed</div>
              </div>
              <div className="bg-red-900/30 rounded-2xl p-6 border border-red-500/30">
                <div className="text-red-400 font-bold text-3xl mb-2">400</div>
                <div className="text-gray-300">Bad Request</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  {/* Documentation CTA - Full Width */}
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
          <Rocket size={40} className="text-white" />
        </div>
        
        <h2 className="text-5xl sm:text-6xl font-black mb-6 text-white leading-tight">
          Ready to Integrate?
        </h2>
        <p className="text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
          Access complete documentation, code samples, and dedicated developer support
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(245, 183, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="https://docs.xash.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#F5B700] text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all inline-flex items-center justify-center shadow-2xl"
          >
            View Full Documentation
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={28} />
          </motion.a>
        </div>
        
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-white/20">
          <div>
            <div className="text-[#F5B700] font-bold text-sm mb-2">Free sandbox access</div>
          </div>
          <div>
            <div className="text-[#F5B700] font-bold text-sm mb-2">Comprehensive documentation</div>
          </div>
          <div>
            <div className="text-[#F5B700] font-bold text-sm mb-2">24/7 developer support</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
</div>

);
};
export default Developers;