import { 
  Smartphone, Wifi, Zap, Wallet, TrendingUp, Shield,
  Phone, Globe, Clock, CheckCircle, Lock, Users,
  BarChart3, Headphones, Layers, Code2, Database,
  FileText, Settings, Sparkles, Building, Award, Target,
  Users as UsersIcon, Globe as GlobeIcon, CreditCard
} from 'lucide-react';

export const COMMISSION_DATA = [
  { product: 'Econet USD Airtime', rate: '9.00%', color: 'text-purple-600' },
  { product: 'Econet USD Data', rate: '9.00%', color: 'text-purple-600' },
  { product: 'Netone USD Airtime', rate: '7.50%', color: 'text-blue-600' },
  { product: 'Telecel USD Airtime', rate: '7.00%', color: 'text-green-600' },
  { product: 'ZESA USD', rate: '1.20%', color: 'text-orange-600' },
  { product: 'Equal WiFi', rate: '12.00%', color: 'text-indigo-600' },
];

export const FEATURES = [
  {
    icon: Smartphone,
    title: 'Free POS Device',
    description: 'Qualifying retail shops receive a Xash POS device at zero cost. Start selling immediately.',
    color: 'bg-purple-600'
  },
  {
    icon: Wallet,
    title: 'One Unified Balance',
    description: 'Manage airtime, bundles, and ZESA from a single float. No need for separate devices.',
    color: 'bg-blue-600'
  },
  {
    icon: TrendingUp,
    title: 'Earn Daily Commission',
    description: 'Earn competitive commission on every transaction. Payouts processed weekly.',
    color: 'bg-green-600'
  }
];

export const PRODUCTS = [
  { 
    name: 'Airtime', 
    icon: Phone, 
    color: 'bg-purple-600',
    description: 'Sell airtime for all major networks: Econet, NetOne, Telecel'
  },
  { 
    name: 'Data Bundles', 
    icon: Wifi, 
    color: 'bg-blue-600',
    description: 'Econet data bundles for smartphones and devices'
  },
  { 
    name: 'ZESA Tokens', 
    icon: Zap, 
    color: 'bg-orange-600',
    description: 'Prepaid electricity tokens for ZESA customers'
  },
  { 
    name: 'Equal WiFi', 
    icon: Globe, 
    color: 'bg-indigo-600',
    description: 'High-speed WiFi connectivity solutions'
  }
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Apply for Device',
    description: 'Qualifying retail shops apply for a free Xash POS device with no upfront costs',
    color: 'bg-purple-600'
  },
  {
    step: 2,
    title: 'Load Your Float',
    description: 'Use your own capital to load your wallet via bank transfer or agent',
    color: 'bg-purple-500'
  },
  {
    step: 3,
    title: 'Sell & Earn Commission',
    description: 'Sell airtime, bundles, and ZESA. Earn commission on every sale automatically',
    color: 'bg-green-600'
  }
];

export const WHY_CHOOSE_XASH = [
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Enterprise-grade encryption and security protocols protect every transaction',
    color: 'bg-purple-600'
  },
  {
    icon: Clock,
    title: 'Real-time Processing',
    description: 'Instant transaction processing with immediate SMS confirmations',
    color: 'bg-blue-600'
  },
  {
    icon: Headphones,
    title: 'Local Zimbabwe Support',
    description: 'Based in Mutare with dedicated technical support team ready to assist',
    color: 'bg-green-600'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Detailed reporting and analytics to monitor sales and earnings',
    color: 'bg-orange-600'
  }
];

export const API_FEATURES = [
  {
    icon: Lock,
    title: 'Secure API',
    description: 'Bank-grade encryption for all API transactions with OAuth 2.0',
    color: 'bg-purple-600'
  },
  {
    icon: Zap,
    title: 'Real-time Delivery',
    description: 'Instant delivery of tokens and PINs with webhook notifications',
    color: 'bg-blue-600'
  },
  {
    icon: Layers,
    title: 'Scalable Infrastructure',
    description: 'Built to handle high transaction volumes with 99.9% uptime',
    color: 'bg-green-600'
  },
  {
    icon: FileText,
    title: 'Comprehensive Docs',
    description: 'Detailed API documentation with code samples and SDKs',
    color: 'bg-orange-600'
  },
  {
    icon: Code2,
    title: 'Easy Integration',
    description: 'Simple REST API with support for multiple programming languages',
    color: 'bg-indigo-600'
  },
  {
    icon: Headphones,
    title: 'Developer Support',
    description: 'Dedicated technical support for integration assistance',
    color: 'bg-purple-600'
  }
];

export const STATS = [
  { value: '500+', label: 'Active Agents', color: 'text-purple-600' },
  { value: '$2M+', label: 'Monthly Volume', color: 'text-blue-600' },
  { value: '50K+', label: 'Daily Transactions', color: 'text-green-600' },
  { value: '99.9%', label: 'System Uptime', color: 'text-orange-600' }
];

export const PARTNERS = [
  { name: 'Econet Wireless', type: 'Network Partner', logoColor: 'text-red-600' },
  { name: 'NetOne', type: 'Network Partner', logoColor: 'text-blue-600' },
  { name: 'Telecel', type: 'Network Partner', logoColor: 'text-green-600' },
  { name: 'ZESA', type: 'Utility Partner', logoColor: 'text-yellow-600' },
  { name: 'Reserve Bank of Zimbabwe', type: 'Regulatory Compliance', logoColor: 'text-purple-600' },
  { name: 'InnBucks', type: 'Payment Partner', logoColor: 'text-indigo-600' },
];

export const COMPANY_INFO = {
  name: 'Xash Solutions (Private) Limited',
  address: '63 Embassy Building, Aerodrome Road, Mutare, Zimbabwe',
  email: 'info@xash.network',
  supportEmail: 'support@xash.network',
  phone: '+263 77 932 5039',
  registration: 'Private Limited Company registered in Zimbabwe',
  lastUpdated: '01 January 2026'
};

export const LEGAL_PAGES = [
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms-of-service', label: 'Terms of Service' },
  { path: '/aml-policy', label: 'AML/KYC Policy' },
  { path: '/data-protection', label: 'Data Protection' },
  { path: '/cookie-policy', label: 'Cookie Policy' },
];