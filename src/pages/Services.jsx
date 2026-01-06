import React from 'react';
import { BRAND } from '../utils/constants';
import { 
  MessageCircle, 
  Zap, 
  Tv, 
  Droplets, 
  Wifi, 
  Shield, 
  CreditCard,
  Building,
  Globe,
  FileText,
  Home,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Card from '../components/ui/Card';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import { Helmet } from 'react-helmet';

const Services = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Services' }
  ];

  const allServices = [
    {
      id: 'airtime',
      name: 'Airtime & Bundles',
      description: 'Instant airtime top-up for Econet, NetOne, and Telecel. Data bundles for all networks.',
      icon: MessageCircle,
      gradient: 'from-blue-500 to-blue-600',
      features: ['All networks supported', 'Instant delivery', 'No additional fees', '24/7 service'],
      cta: 'Buy Airtime Now'
    },
    {
      id: 'electricity',
      name: 'Electricity (ZESA)',
      description: 'Pay your ZESA prepaid and postpaid bills instantly via WhatsApp.',
      icon: Zap,
      gradient: 'from-yellow-500 to-yellow-600',
      features: ['Prepaid tokens', 'Postpaid bills', 'Instant tokens', 'Receipt provided'],
      cta: 'Pay Electricity'
    },
    {
      id: 'dstv',
      name: 'DSTV Subscription',
      description: 'Subscribe to all DSTV packages including Compact, Family, and Premium.',
      icon: Tv,
      gradient: 'from-purple-500 to-purple-600',
      features: ['All packages', 'MultiChoice GO', 'Easy upgrades', 'GOTV available'],
      cta: 'Subscribe Now'
    },
    {
      id: 'water',
      name: 'Water Bills',
      description: 'Pay municipal water bills for cities and towns across Zimbabwe.',
      icon: Droplets,
      gradient: 'from-cyan-500 to-cyan-600',
      features: ['Municipal bills', 'Instant payment', 'Multiple councils', 'E-receipt'],
      cta: 'Pay Water Bill'
    },
    // {
    //   id: 'data',
    //   name: 'Internet Data',
    //   description: 'Purchase internet data bundles for home and mobile usage.',
    //   icon: Wifi,
    //   gradient: 'from-green-500 to-green-600',
    //   features: ['Fiber data', 'Mobile data', 'WiFi bundles', 'Top-up data'],
    //   cta: 'Buy Data'
    // },
    // {
    //   id: 'tv-license',
    //   name: 'TV Licenses',
    //   description: 'Renew your ZBC TV license conveniently through our platform.',
    //   icon: Tv,
    //   gradient: 'from-red-500 to-red-600',
    //   features: ['Easy renewal', 'Digital receipt', 'Reminder service', 'Multi-year option'],
    //   cta: 'Renew License'
    // },
    // {
    //   id: 'insurance',
    //   name: 'Insurance Premiums',
    //   description: 'Pay your insurance premiums for various insurance providers.',
    //   icon: Shield,
    //   gradient: 'from-indigo-500 to-indigo-600',
    //   features: ['Life insurance', 'Vehicle insurance', 'Property insurance', 'Health insurance'],
    //   cta: 'Pay Premium'
    // },
    // {
    //   id: 'rates',
    //   name: 'Rates & Levies',
    //   description: 'Settle your municipal rates and levies payments.',
    //   icon: Building,
    //   gradient: 'from-orange-500 to-orange-600',
    //   features: ['Council rates', 'Property taxes', 'Business levies', 'Instant clearance'],
    //   cta: 'Pay Rates'
    // }
  ];

  const serviceCategories = [
    {
      name: 'Utilities',
      description: 'Essential utility bill payments',
      icon: Zap,
      count: 3
    },
    {
      name: 'Communications',
      description: 'Mobile and internet services',
      icon: MessageCircle,
      count: 2
    },
    {
      name: 'Entertainment',
      description: 'TV subscriptions and licenses',
      icon: Tv,
      count: 2
    },
    {
      name: 'Financial',
      description: 'Insurance and municipal payments',
      icon: CreditCard,
      count: 2
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] dark:bg-gray-900">
      <Helmet>
        <title>Services - Xash</title>
        <meta 
          name="description" 
          content="Explore Xash's comprehensive range of services including airtime top-up, electricity payments, DSTV subscriptions, and water bill payments. All accessible via WhatsApp." 
        />
       </Helmet>
      {/* Hero */}
      <PageHero
        title="Our Services"
        description="All your payment needs in one convenient platform. Access multiple services through WhatsApp."
        breadcrumbItems={breadcrumbItems}
        gradient="from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D]"
      />

      {/* Service Categories */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category) => (
            <Card key={category.name} hover variant="elevated" className="text-center">
              <div className={`w-14 h-14 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#1A1A1A] dark:text-white">{category.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{category.description}</p>
              {/* <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-[#1F6AE1] dark:text-blue-400 rounded-full text-xs font-semibold">
                {category.count} Services
              </span> */}
            </Card>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-[#1F6AE1] dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
            Available Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
            Choose Your Service
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse through our comprehensive list of services and make payments instantly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allServices.map((service) => (
            <Card key={service.id} hover className="h-full flex flex-col group">
              <div className="mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1A1A1A] dark:text-white">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="mb-6 flex-grow">
                <h4 className="font-semibold mb-3 text-[#1A1A1A] dark:text-white flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Features:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-[#1F6AE1] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

             <a
                href={`https://wa.me/${BRAND.contacts.whatsapp.replace(/\D/g, '')}?text=Hello,%20I%20want%20to%20purchase%20${encodeURIComponent(service.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-[#1F6AE1] hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl group-hover:scale-105"
              >
                Purchase Now
              </a>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
                Why Choose XASH Services?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Experience the convenience of modern digital payments
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1A1A1A] dark:text-white">Instant Processing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All transactions are processed immediately with instant confirmation
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1A1A1A] dark:text-white">Secure Payments</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bank-level security ensures your transactions are always protected
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1A1A1A] dark:text-white">24/7 Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our support team is available round the clock via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D] dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Need Help Choosing a Service?
            </h2>
            <p className="text-blue-100 dark:text-gray-300 mb-8 text-lg">
              Our WhatsApp support team is available 24/7 to help you select the right service and guide you through the process.
            </p>
            <Button
              href={`https://wa.me/${BRAND.contacts.support.replace(/\D/g, '')}`}
              variant="whatsapp"
              size="lg"
              icon={MessageCircle}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;