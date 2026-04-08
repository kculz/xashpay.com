import { ArrowRight, MessageCircle, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import PillBadge from '../components/ui/PillBadge';
import { STATS, SERVICES_DATA, WHY_CHOOSE_US, SUCCESS_STORIES, HOW_IT_WORKS } from '../../data/constants';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#0B3C5D] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <PillBadge variant="blue" className="bg-white/10 text-white border-white/20">
                12+ Countries
              </PillBadge>
              <PillBadge variant="blue" className="bg-white/10 text-white border-white/20">
                upto 10% Commission
              </PillBadge>
              <PillBadge variant="blue" className="bg-white/10 text-white border-white/20">
                Secure Payments
              </PillBadge>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Global Payments <br className="hidden lg:block"/> Made Simple
            </h1>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0">
              Buy or sell international airtime, data, electricity, and vouchers across multiple countries via WhatsApp. Join our global network of satisfied customers and earning resellers.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <a href="https://wa.me/27655971539?text=Hello" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full text-lg items-center gap-2 bg-[#F5B700] text-[#0B3C5D] hover:bg-yellow-400 border border-[#F5B700]">
                  <MessageCircle size={20} />
                  Start on WhatsApp
                </Button>
              </a>
              <Link to="/earn" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full text-lg items-center gap-2 border-white text-white hover:bg-white hover:text-[#0B3C5D]">
                  <Users size={20} />
                  Become a Reseller
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md relative z-10 mx-auto">
            <div className="bg-white rounded-[3rem] p-4 shadow-2xl relative">
              <div className="bg-gray-100 rounded-[2.5rem] overflow-hidden h-[600px] border-4 border-gray-100 flex flex-col">
                <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">X</div>
                    <div>
                      <div className="font-semibold text-lg leading-tight">XASH Bot</div>
                      <div className="text-xs opacity-80">Online</div>
                    </div>
                  </div>
                </div>
                {/* Scrollable Container */}
                <div className="flex-1 bg-[#ECE5DD] p-4 space-y-4 overflow-y-auto custom-scrollbar">
                  <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none max-w-[85%] ml-auto shadow-sm text-sm text-gray-800 relative">
                    <span className="block pr-8">Hi, I want to buy data</span>
                    <div className="text-[10px] text-gray-500 absolute bottom-1 right-2 w-full text-right">10:30 ✓✓</div>
                  </div>

                  <div className="bg-white p-3 rounded-lg rounded-tl-none max-w-[85%] shadow-sm text-sm text-gray-800 relative">
                    Hello! 👋 Welcome to XASH. I can help you purchase data bundles.<br/><br/>
                    Please select your network:<br/>
                    1️⃣ Econet<br/>
                    2️⃣ NetOne<br/>
                    3️⃣ Telecel
                    <div className="text-[10px] text-gray-400 absolute bottom-1 right-2">10:30</div>
                  </div>
                  
                  <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none max-w-[80%] ml-auto shadow-sm text-sm text-gray-800 relative">
                    <span className="block pr-8 font-mono">1</span>
                    <div className="text-[10px] text-gray-500 absolute bottom-1 right-2 w-full text-right">10:31 ✓✓</div>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg rounded-tl-none max-w-[85%] shadow-sm text-sm text-gray-800 relative">
                    Please enter the phone number you want to recharge (e.g. +26377...)
                    <div className="text-[10px] text-gray-400 mt-2 text-right">10:31</div>
                  </div>
                  
                  <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none max-w-[80%] ml-auto shadow-sm text-sm text-gray-800 relative">
                    <span className="block pr-8 font-mono">+263771234567</span>
                    <div className="text-[10px] text-gray-500 absolute bottom-1 right-2 w-full text-right">10:32 ✓✓</div>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg rounded-tl-none max-w-[85%] shadow-sm text-sm text-gray-800 relative">
                    ✅ Success! Econet 1.5GB Daily Data sent to +263771234567.<br/><br/>
                    Receipt: #XSH-88219<br/>
                    New Wallet Balance: $15.50
                    <div className="text-[10px] text-gray-400 text-right mt-1">10:32</div>
                  </div>
                </div>
                {/* Fake Input */}
                <div className="bg-gray-100 p-2 flex items-center gap-2">
                   <div className="flex-1 bg-white rounded-full py-2 px-4 text-sm text-gray-400">Message</div>
                   <div className="bg-[#075E54] w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg cursor-pointer">
                      <ArrowRight size={20} />
                   </div>
                </div>
              </div>
            </div>
            {/* Flags */}
            <div className="absolute -bottom-8 -right-8 flex gap-2 scale-150 animate-bounce delay-1000">🇿🇦 🇳🇬 🇰🇪 🇿🇼</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-gray-100 py-12 px-4 shadow-sm z-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-100">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <PillBadge variant="gold" className="mb-6">Our Services</PillBadge>
          <h2 className="text-4xl font-bold text-[#0B3C5D] mb-16">All Your Payment Needs</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 text-left">
            {SERVICES_DATA.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="p-8 group hover:-translate-y-2 transition-transform duration-300">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 font-medium mb-6 text-sm">{service.description}</p>
                  <Link to="/services" className="text-[#0B3C5D] font-bold flex items-center gap-2 group-hover:text-[#F5B700] transition-colors">
                    Get Started <ArrowRight size={18} />
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works / 4 steps */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <PillBadge variant="blue" className="mb-6">Simple Process</PillBadge>
             <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">How It Works</h2>
             <p className="text-xl text-gray-600">Get started in 4 simple steps and join our global network</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[45%] left-10 right-10 h-0.5 bg-gray-200 -z-10"></div>
            {HOW_IT_WORKS.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#0B3C5D] text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 font-medium px-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section className="bg-[#E6F0F9] py-24 px-4">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
              <PillBadge variant="blue" className="mb-6">Success Stories</PillBadge>
              <h2 className="text-4xl font-bold text-[#0B3C5D]">Trusted Globally</h2>
              <p className="text-xl text-[#0B3C5D]/80 mt-4">See what our global customers and agents are saying</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SUCCESS_STORIES.map((story, idx) => (
                <Card key={idx} className="p-8">
                  <div className="flex items-center gap-1 text-[#F5B700] mb-6">
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                  </div>
                  <p className="text-gray-700 italic text-lg mb-8">&quot;{story.quote}&quot;</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0B3C5D] text-white flex items-center justify-center rounded-full font-bold">
                      {story.initials}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{story.name}</div>
                      <div className="text-sm font-semibold text-gray-500">{story.role} • {story.location}</div>
                    </div>
                  </div>
                </Card>
              ))}
           </div>
         </div>
      </section>

      {/* Become a Reseller Banner */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-[#0B3C5D] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-50 mix-blend-screen pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F5B700] rounded-full filter blur-[100px] opacity-20 mix-blend-screen pointer-events-none"></div>
           
           <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Get upto 10% Commission</h2>
           <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto relative z-10">
             Save money, save time with XashPay. Be number 1 in your community—start selling foreign countries' virtual services and earn upto 10% commission on every airtime and data sale you make.
           </p>
           
           <Link to="/earn" className="relative z-10 block">
             <Button className="bg-[#F5B700] text-[#0B3C5D] hover:bg-yellow-400 px-10 py-4 text-xl">
               Become a Reseller Today
             </Button>
           </Link>
        </div>
      </section>
    </div>
  );
}