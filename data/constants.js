import { 
  Smartphone, Globe, Shield, Clock, Headset, 
  CheckCircle, Zap, Tv2, CreditCard, Ticket, Receipt, MapPin,
  TrendingUp, Users, MessageCircle
} from 'lucide-react';

export const STATS = [
  { value: '10,000+', label: 'Global Users' },
  { value: '12+', label: 'Countries Covered' },
  { value: '24/7', label: 'Support Available' },
  { value: 'upto 10%', label: 'Commission' }
];

export const SERVICES_DATA = [
  { 
    id: 'airtime-data',
    name: 'Airtime & Data', 
    icon: Smartphone, 
    color: 'bg-blue-600',
    description: 'Instantly top up any phone number across multiple countries.',
    features: [
      'Instant delivery within seconds',
      'All major networks supported globally',
      'Daily, weekly, and monthly bundles'
    ],
    availableIn: ['South Africa', 'Nigeria', 'Kenya', 'Zimbabwe', '+8 more']
  },
  { 
    id: 'electricity',
    name: 'Electricity', 
    icon: Zap, 
    color: 'bg-yellow-500',
    description: 'Instant electricity bill payments across multiple countries.',
    features: [
      'Instant token generation',
      'Prepaid and postpaid accounts',
      '24/7 availability'
    ],
    availableIn: ['South Africa', 'Kenya', 'Nigeria', 'Zimbabwe']
  },
  { 
    id: 'tv',
    name: 'TV Subscriptions', 
    icon: Tv2, 
    color: 'bg-indigo-600',
    description: 'Subscribe to DSTV, GOtv, and other TV packages globally.',
    features: [
      'All DSTV packages available',
      'GOtv subscriptions across Africa',
      'Easy package upgrades/downgrades'
    ],
    availableIn: ['South Africa', 'Nigeria', 'Kenya', 'Zimbabwe', 'Tanzania']
  },
  {
    id: 'bills',
    name: 'Bills Payment',
    icon: CreditCard,
    color: 'bg-[#0B3C5D]',
    description: 'DSTV, water bills, insurance, WiFi, school fees.',
    features: [
      'Municipal water bills',
      'Insurance payments',
      'School fees'
    ],
    availableIn: ['South Africa', 'Kenya', 'Nigeria', 'Uganda', 'Zimbabwe']
  },
  {
    id: 'vouchers',
    name: 'Vouchers',
    icon: Ticket,
    color: 'bg-green-600',
    description: 'Taura Airtime, WiFi, OTT, and other vouchers.',
    features: [
      'Taura Airtime vouchers',
      'WiFi vouchers',
      'OTT service vouchers'
    ],
    availableIn: ['South Africa', 'Kenya', 'Nigeria', 'Zimbabwe']
  }
];

export const COVERAGE_DATA = [
  {
    region: 'Southern Africa',
    description: 'Comprehensive coverage across Southern African nations',
    countries: [
      {
        name: 'Zimbabwe',
        primary: true,
        services: ['Airtime', 'Data', 'Electricity', 'TV', 'Water'],
        networks: ['Econet', 'NetOne', 'Telecel', '+2 more']
      },
      {
        name: 'South Africa',
        primary: false,
        services: ['Airtime', 'Data', 'TV'],
        networks: ['Vodacom', 'MTN', 'Cell C', '+2 more']
      },
      {
        name: 'Botswana',
        primary: false,
        services: ['Airtime', 'Data'],
        networks: ['Mascom', 'BTC', 'Orange']
      },
      {
        name: 'DR Congo',
        primary: false,
        services: ['Airtime', 'Data'],
        networks: ['Vodacom', 'Airtel', 'Orange', '+1 more']
      }
    ]
  },
  {
    region: 'East Africa',
    description: 'Growing presence in East African markets',
    countries: [
      {
        name: 'Kenya',
        primary: false,
        services: ['Airtime', 'Data'],
        networks: ['Safaricom', 'Airtel', 'Telkom']
      },
      {
        name: 'Tanzania',
        primary: false,
        services: ['Airtime', 'Data'],
        networks: ['Vodacom', 'Airtel', 'Tigo', '+1 more']
      },
      {
        name: 'Uganda',
        primary: false,
        services: ['Airtime', 'Data'],
        networks: ['MTN', 'Airtel', 'Uganda Telecom']
      },
      {
        name: 'Ethiopia',
        primary: false,
        services: ['Airtime', 'Data'],
        networks: ['Ethio Telecom', 'Safaricom Ethiopia']
      },
      {
        name: 'Somalia',
        primary: false,
        services: ['Airtime', 'Data'],
        networks: ['Hormuud', 'Golis', 'Somtel']
      }
    ]
  },
  {
    region: 'West Africa',
    description: 'Expanding services to West African countries',
    countries: [
      {
        name: 'Nigeria',
        primary: false,
        services: ['Airtime', 'Data', 'TV'],
        networks: ['MTN', 'Airtel', 'Glo', '+2 more']
      }
    ]
  },
  {
    region: 'South Asia',
    description: 'Serving South Asian markets',
    countries: [
      {
        name: 'India',
        primary: false,
        services: ['Airtime', 'Data'],
        networks: ['Jio', 'Airtel', 'Vodafone Idea', '+1 more']
      },
      {
        name: 'Pakistan',
        primary: false,
        services: ['Airtime', 'Data'],
        networks: ['Jazz', 'Telenor', 'Zong', '+1 more']
      }
    ]
  }
];

export const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Register on WhatsApp',
    description: 'Message us with your phone number to get started'
  },
  {
    step: '2',
    title: 'Complete Verification',
    description: 'Simple verification process for security'
  },
  {
    step: '3',
    title: 'Start Buying/Selling',
    description: 'Access services across multiple countries'
  },
  {
    step: '4',
    title: 'Earn Commission',
    description: 'Get upto 10% commission on every sale'
  }
];

export const SUCCESS_STORIES = [
  {
    quote: "Earning commissions has never been easier. I sell services across Africa from my phone!",
    name: "Sarah K.",
    role: "Reseller Agent",
    location: "Lagos, Nigeria",
    initials: "SK"
  },
  {
    quote: "XashPay transformed my business. I now serve customers in 5 different countries!",
    name: "Tendai M.",
    role: "Small Business Owner",
    location: "Harare, Zimbabwe",
    initials: "TM"
  },
  {
    quote: "I pay all my family bills back home in Kenya while living in the UK. Super convenient!",
    name: "James T.",
    role: "International Customer",
    location: "London, UK",
    initials: "JT"
  }
];

export const EARNING_ESTIMATES = [
  {
    service: "International Airtime",
    volume: "$100-500 daily",
    commission: "5-10%",
    frequency: "High Volume"
  },
  {
    service: "Electricity Bills",
    volume: "$200-1,000 weekly",
    commission: "5-10%",
    frequency: "Regular"
  },
  {
    service: "TV Subscriptions",
    volume: "$150-500 monthly",
    commission: "5-10%",
    frequency: "Subscription Based"
  },
  {
    service: "Data Bundles",
    volume: "$50-300 daily",
    commission: "5-10%",
    frequency: "Consistent"
  }
];

export const FAQ_DATA = [
  {
    question: "How does XashPay work?",
    answer: "XashPay is a WhatsApp-based payment service. Simply message us, register your number, and start buying or selling services across 12+ countries instantly."
  },
  {
    question: "What countries do you cover?",
    answer: "We cover 12+ countries including South Africa, Nigeria, Kenya, Zimbabwe, Ethiopia, Tanzania, Uganda, India, Pakistan, Botswana, DR Congo, and Somalia."
  },
  {
    question: "How do I become a reseller?",
    answer: "Message us on WhatsApp to register as a reseller. No investment required - you can start earning upto 10% commission immediately."
  },
  {
    question: "Is XashPay secure?",
    answer: "Yes, we use bank-level encryption and secure payment processing. All transactions are protected and monitored 24/7."
  },
  {
    question: "When do I get my commission?",
    answer: "Commissions are paid instantly after each successful transaction directly to your registered payment method."
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Access services across 12+ countries worldwide',
    color: 'bg-blue-600'
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Bank-level security for all transactions',
    color: 'bg-blue-600'
  },
  {
    icon: Receipt,
    title: 'Earn Commission',
    description: 'Upto 10% commission for resellers',
    color: 'bg-blue-600'
  },
  {
    icon: Headset,
    title: '24/7 Support',
    description: 'Instant WhatsApp support anytime',
    color: 'bg-blue-600'
  }
];

export const RESELLER_BENEFITS = [
  {
    title: 'Global Reach',
    description: 'Sell services in 12+ countries from your phone. Your market is the world.',
    highlight: '12+ Countries',
    icon: Globe
  },
  {
    title: 'High Commissions',
    description: 'Earn upto 10% commission on every transaction. The more you sell, the more you earn.',
    highlight: 'upto 10% Commission',
    icon: Receipt
  },
  {
    title: '24/7 Earning',
    description: 'Our WhatsApp system works round the clock. Earn money anytime, anywhere.',
    highlight: 'Always Active',
    icon: Clock
  },
  {
    title: 'No Risk',
    description: 'No upfront investment required. Start earning with zero financial risk.',
    highlight: 'Zero Investment',
    icon: Shield
  }
];