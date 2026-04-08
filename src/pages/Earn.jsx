import { MessageCircle, Star, Target, Globe, Zap, Users, CheckCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import PillBadge from '../components/ui/PillBadge';
import Button from '../components/ui/Button';
import { RESELLER_BENEFITS, HOW_IT_WORKS, EARNING_ESTIMATES, SUCCESS_STORIES } from '../../data/constants';

export default function Earn() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#0B3C5D] text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center gap-4 mb-8">
            <PillBadge variant="blue" className="bg-white/10 text-white border-white/20">Global Opportunity</PillBadge>
            <PillBadge variant="gold" className="bg-[#F5B700]/10 text-[#F5B700] border-[#F5B700]/30">Zero Investment</PillBadge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">
            Turn Your WhatsApp into a <br className="hidden md:block"/> Money-Making Machine
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Become a XashPay reseller and earn upto 10% commission selling international airtime, data, electricity, and vouchers across 12+ countries. No investment, no apps to download.
          </p>
          <a href="https://wa.me/27655971539?text=Hello" target="_blank" rel="noopener noreferrer">
            <Button className="text-lg px-8 py-4 gap-2 bg-[#F5B700] text-[#0B3C5D] hover:bg-yellow-400">
              <MessageCircle size={24} />
              Start Earning on WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Stats Divider */}
      <section className="bg-[#E6F0F9] border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           <div>
             <div className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-2">12+</div>
             <div className="text-gray-600 text-xs font-bold tracking-wide uppercase">Countries</div>
           </div>
           <div>
             <div className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-2">upto 10%</div>
             <div className="text-gray-600 text-xs font-bold tracking-wide uppercase">Commission Rate</div>
           </div>
           <div>
             <div className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-2">24/7</div>
             <div className="text-gray-600 text-xs font-bold tracking-wide uppercase">Support</div>
           </div>
           <div>
             <div className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-2">$0</div>
             <div className="text-gray-600 text-xs font-bold tracking-wide uppercase">Startup Cost</div>
           </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <PillBadge variant="blue" className="mb-6">Benefits</PillBadge>
            <h2 className="text-4xl font-bold text-[#0B3C5D]">Why Become a XashPay Reseller?</h2>
            <p className="text-gray-600 mt-4 text-lg">Join a global network of successful resellers earning money from anywhere</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {RESELLER_BENEFITS.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <Card key={idx} className="p-10 text-center border border-gray-100 hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 bg-[#0B3C5D] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 text-lg mb-6 h-16">
                    {benefit.description}
                  </p>
                  <div className="text-[#0B3C5D] font-bold bg-[#E6F0F9] py-2 px-4 rounded-full inline-block">
                    {benefit.highlight}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-24 px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <PillBadge variant="blue" className="mb-6">Simple Process</PillBadge>
             <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Start Earning in 4 Simple Steps</h2>
             <p className="text-xl text-gray-600">Your journey to financial freedom starts with a single WhatsApp message</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[45%] left-10 right-10 h-1 bg-[#E6F0F9] -z-10"></div>
            {HOW_IT_WORKS.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm text-center border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#F5B700] text-[#0B3C5D] text-xl font-bold rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 font-medium text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earning Estimates */}
      <section className="bg-white py-24 px-4">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
              <PillBadge variant="gold" className="mb-6 bg-yellow-50 text-yellow-700">Earning Estimates</PillBadge>
              <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Potential Earnings Overview</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">These are estimates based on typical reseller performance - your actual earnings may vary based on your sales volume and network size.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {EARNING_ESTIMATES.map((est, idx) => (
                <div key={idx} className="bg-[#0B3C5D] text-white rounded-3xl p-6 text-center border-t-4 border-[#F5B700]">
                   <h3 className="text-xl font-bold mb-6">{est.service}</h3>
                   <div className="space-y-4 text-sm font-medium">
                     <div className="bg-white/10 p-3 rounded-xl flex justify-between">
                       <span className="text-blue-200">Volume</span>
                       <span>{est.volume}</span>
                     </div>
                     <div className="bg-white/10 p-3 rounded-xl flex justify-between">
                       <span className="text-blue-200">Commission</span>
                       <span className="text-[#F5B700] font-bold">{est.commission}</span>
                     </div>
                     <div className="bg-white/10 p-3 rounded-xl flex justify-between">
                       <span className="text-blue-200">Frequency</span>
                       <span>{est.frequency}</span>
                     </div>
                   </div>
                </div>
              ))}
           </div>
         </div>
      </section>
      
      {/* Ready To Start CTA */}
      <section className="bg-[#E6F0F9] py-24 px-4 text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-6">Ready to Start Earning?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Join our global network of successful resellers. Start earning upto 10% commission today. No experience needed - just your WhatsApp account.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/27655971539?text=Hello" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#0B3C5D] text-white hover:bg-blue-900 border-none px-8 py-4 gap-2 shadow-lg w-full sm:w-auto">
                  <MessageCircle size={20} />
                  Start Earning on WhatsApp
                </Button>
              </a>
            </div>
            
            <div className="flex justify-center gap-8 mt-10 text-sm font-bold text-[#0B3C5D]">
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> No Fees</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> 24/7 Support</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> 12+ Countries</span>
            </div>
         </div>
      </section>
    </div>
  );
}
