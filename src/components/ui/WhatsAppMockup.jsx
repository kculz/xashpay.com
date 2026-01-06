import React, { useState, useEffect } from 'react';
import { Phone, Video, MoreVertical, Paperclip, Camera, Mic, Send, CheckCheck, Smile } from 'lucide-react';

const WhatsAppMockup = () => {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    {
      id: 1,
      sender: 'user',
      text: 'Hi, I want to buy data',
      time: '10:30'
    },
    {
      id: 2,
      sender: 'bot',
      text: 'Hello! 👋 Welcome to XASH. I can help you purchase data bundles.\n\nPlease select your network:\n1️⃣ Econet\n2️⃣ NetOne\n3️⃣ Telecel',
      time: '10:30'
    },
    {
      id: 3,
      sender: 'user',
      text: '1',
      time: '10:31'
    },
    {
      id: 4,
      sender: 'bot',
      text: 'Great! Here are available Econet data bundles:\n\n📱 Daily Bundles:\n1. 50MB - $0.50\n2. 200MB - $1.00\n3. 500MB - $2.00\n\n📦 Weekly Bundles:\n4. 1GB - $5.00\n5. 2GB - $8.00\n\nReply with the number of your choice.',
      time: '10:31'
    },
    {
      id: 5,
      sender: 'user',
      text: '5',
      time: '10:32'
    },
    {
      id: 6,
      sender: 'bot',
      text: '✅ You selected: 2GB Weekly Bundle - $8.00\n\nPlease enter the phone number to receive the bundle:',
      time: '10:32'
    },
    {
      id: 7,
      sender: 'user',
      text: '+263 77 932 5039',
      time: '10:33'
    },
    {
      id: 8,
      sender: 'bot',
      text: '🎉 Success! Your 2GB bundle has been sent to +263 77 932 5039\n\n💰 Amount: $8.00\n📱 Network: Econet\n📦 Bundle: 2GB Weekly\n\nTransaction ID: XSH123456\n\nThank you for using XASH! 🙏',
      time: '10:33'
    }
  ];

  useEffect(() => {
    if (visibleMessages < messages.length) {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => prev + 1);
      }, 1200);
      return () => clearTimeout(typingTimer);
    }
  }, [visibleMessages, messages.length]);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Floating Elements */}
      <div className="absolute -top-8 -left-8 w-20 h-20 bg-green-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Phone Frame with Modern Design */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-[3.5rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
        {/* Phone Border Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[3.5rem] opacity-20 blur-xl"></div>
        
        {/* Inner Frame */}
        <div className="relative bg-black rounded-[3rem] p-2">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10 flex items-center justify-center">
            <div className="w-16 h-1.5 bg-gray-800 rounded-full"></div>
          </div>
          
          {/* Phone Screen with Glass Effect */}
          <div className="bg-gradient-to-b from-[#ECE5DD] to-[#D9D2CA] rounded-[2.5rem] overflow-hidden h-[620px] flex flex-col relative shadow-inner">
            {/* Screen Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            
            {/* WhatsApp Header with Glass Morphism */}
            <div className="relative bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white px-4 py-4 flex items-center justify-between backdrop-blur-sm shadow-lg z-20">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-11 h-11 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/30 animate-pulse">
                    <span className="text-white font-bold">X</span>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#075E54]"></div>
                </div>
                <div>
                  <div className="font-semibold">XASH Bot</div>
                  <div className="text-xs text-green-200 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                    Online
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-5">
                <Video className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer" />
                <Phone className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer" />
                <MoreVertical className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>

            {/* Chat Wallpaper */}
            <div className="absolute inset-0 top-16 opacity-5 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <pattern id="whatsapp-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="currentColor"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#whatsapp-pattern)"/>
              </svg>
            </div>

            {/* Chat Area with Smooth Scrolling */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 relative" style={{ scrollbarWidth: 'none' }}>
              {messages.slice(0, visibleMessages).map((message, index) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  style={{
                    animation: 'slideUp 0.4s ease-out',
                    animationFillMode: 'backwards',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 shadow-md relative transform hover:scale-105 transition-all ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-[#DCF8C6] to-[#D4F1BC] text-gray-800 rounded-tr-sm'
                        : 'bg-white text-gray-800 rounded-tl-sm'
                    }`}
                  >
                    {/* Message Tail */}
                    <div className={`absolute top-0 w-3 h-3 ${
                      message.sender === 'user' 
                        ? '-right-1 bg-gradient-to-br from-[#DCF8C6] to-[#D4F1BC]' 
                        : '-left-1 bg-white'
                    }`} style={{
                      clipPath: message.sender === 'user' 
                        ? 'polygon(100% 0, 0 0, 100% 100%)' 
                        : 'polygon(0 0, 100% 0, 0 100%)'
                    }}></div>
                    
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    <div className="flex items-center justify-end space-x-1 mt-1">
                      <span className="text-xs text-gray-500">{message.time}</span>
                      {message.sender === 'user' && (
                        <CheckCheck className="w-4 h-4 text-blue-500" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && visibleMessages < messages.length && messages[visibleMessages]?.sender === 'bot' && (
                <div className="flex justify-start animate-slideUp">
                  <div className="bg-white rounded-2xl rounded-tl-sm px-5 py-3 shadow-md">
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area with Modern Design */}
            <div className="bg-[#F0F0F0] px-3 py-3 flex items-center space-x-2 backdrop-blur-sm">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
                <Smile className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex-1 bg-white rounded-full px-4 py-3 flex items-center space-x-3 shadow-sm hover:shadow-md transition-shadow">
                <input
                  type="text"
                  placeholder="Message"
                  className="flex-1 outline-none text-sm bg-transparent text-gray-700 placeholder-gray-400"
                  disabled
                />
                <Paperclip className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors" />
                <Camera className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors" />
              </div>
              <button className="w-11 h-11 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Mic className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge with Animation */}
      <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-400 to-green-600 text-white px-5 py-2.5 rounded-full shadow-xl text-sm font-bold flex items-center space-x-2 animate-float">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <span>Live Demo</span>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppMockup;