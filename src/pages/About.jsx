import { Heart, CheckCircle, Globe, HeadphonesIcon, TrendingUp } from 'lucide-react';
import Card from '../components/ui/Card';
import PillBadge from '../components/ui/PillBadge';

export default function About() {
  const differentiators = [
    "No app downloads required - works entirely on WhatsApp",
    "Works seamlessly across 12+ countries",
    "Earn while you spend with reseller accounts",
    "Instant 24/7 service delivery",
    "No technical skills required",
    "Work from anywhere in the world"
  ];

  return (
    <div className="pt-20">
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <PillBadge variant="blue" className="mb-6">About XashPay</PillBadge>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] mb-8 tracking-tight">
            Connecting the World Through WhatsApp Payments
          </h1>
          
          <div className="text-lg text-gray-600 space-y-6 text-left mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is XashPay?</h2>
            <p>
              XashPay is a WhatsApp-based global payment service connecting you to essential services across borders. Individuals and businesses can conveniently buy and sell virtual essentials including international airtime, data, electricity, and vouchers from multiple countries.
            </p>
            <p>
              We recognized that millions of people needed to send money and pay bills across borders, but traditional methods were complicated and expensive. Today, we connect users across 12+ countries through the platform they use every day - WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-[#0B3C5D] text-white text-left p-10 border-l-4 border-[#F5B700]">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Globe size={28} className="text-[#F5B700]" /> International Reach
              </h3>
              <p className="text-blue-100">
                Connect with services across multiple African and Asian countries instantly.
              </p>
            </Card>
            
            <Card className="bg-[#0B3C5D] text-white text-left p-10 border-l-4 border-green-400">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <TrendingUp size={28} className="text-green-400" /> Earn Commission
              </h3>
              <p className="text-blue-100">
                Become a reseller and earn upto 10% commission on every transaction you make.
              </p>
            </Card>
          </div>
          
          <div className="bg-gray-50 rounded-[3rem] p-12 text-center shadow-inner">
            <div className="w-20 h-20 bg-[#0B3C5D] text-[#F5B700] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Heart size={40} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We're Different</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're not just a payment platform - we're a thriving earning opportunity empowering entrepreneurs globally. Start your digital business with zero investment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
              {differentiators.map((diff, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span className="font-semibold text-gray-800 text-sm">{diff}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}