import React from 'react';
import { MessageCircle, MapPin, Phone, ArrowRight } from 'lucide-react';
import Button from './Button';
import { BRAND } from '../../utils/constants';

const AgentRegistrationCard = () => {
  return (
    <div className="relative max-w-md mx-auto">
      {/* Background Glow Effects */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Stacked Cards Effect */}
      <div className="relative">
        {/* Back Card */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-[2.5rem] transform rotate-6 scale-95 opacity-20"></div>
        
        {/* Middle Card */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-[2.5rem] transform rotate-3 scale-97 opacity-40"></div>
        
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D] rounded-[2.5rem] p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[2.5rem] pointer-events-none">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#F5B700]/20 rounded-full blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-white/20">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] bg-clip-text text-transparent">X</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              XASH Agent
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Join our network today
            </p>

            {/* Registration Options */}
            <div className="space-y-4 mb-8">
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${BRAND.contacts.whatsapp.replace(/\D/g, '')}?text=Hello,%20I%20want%20to%20become%20a%20XASH%20agent`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full bg-white hover:bg-green-50 rounded-2xl p-5 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 text-lg">Register via WhatsApp</div>
                      <div className="text-sm text-gray-600">Chat with us to get started</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                </div>
              </a>

              {/* Visit Office Button */}
              <a href="#" className="block w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl p-5 transition-all border border-white/20 cursor-pointer group">
                <div >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F5B700] to-yellow-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-white text-lg">Visit Our Office</div>
                        <div className="text-sm text-blue-100">Walk in for registration</div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-200 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </a>

            </div>

            {/* Contact Info */}
            <div className="border-t border-white/20 pt-6 space-y-3">
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">{BRAND.contacts.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{BRAND.contacts.address}</span>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#F5B700] to-yellow-600 text-white px-4 py-2 rounded-full shadow-xl text-xs font-bold flex items-center space-x-2 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span>Now Hiring</span>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-8">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          No startup costs • Flexible hours • 24/7 support
        </p>
      </div>
    </div>
  );
};

export default AgentRegistrationCard;