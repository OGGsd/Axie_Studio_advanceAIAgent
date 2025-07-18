import React from 'react';
import { Phone } from 'lucide-react';

interface CoverPageProps {
  onStartCall: () => void;
}

const CoverPage: React.FC<CoverPageProps> = ({ onStartCall }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex flex-col">
      {/* Header */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a 
              href="https://www.axiestudio.se" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://www.axiestudio.se/logo.jpg" 
                alt="Axie Studio" 
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg object-cover"
                loading="eager"
              />
              <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                Axie Studio
              </h1>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full max-w-2xl">
          {/* Hero Text */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              AI Röstassistent
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Prata direkt med vår AI-assistent för att boka tjänster, få information eller ställa frågor
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Säker anslutning</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Realtidssamtal</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>AI-driven</span>
              </div>
            </div>
          </div>

          {/* Call Button - Copy of VoiceOrb design */}
          <div className="relative mb-6 sm:mb-8 lg:mb-12">
            {/* Enhanced gradient orb */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] mx-auto rounded-full transition-all duration-500 will-change-transform bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-600 shadow-2xl relative overflow-hidden hover:scale-105 cursor-pointer group"
                 onClick={onStartCall}>
              <div className="absolute inset-3 sm:inset-4 lg:inset-6 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
              
              {/* Central button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 active:scale-95 transition-all duration-200 shadow-xl group-hover:scale-110 touch-manipulation will-change-transform">
                  <Phone size={window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 24 : 28} className="transition-transform" />
                </div>
              </div>

              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-white/20 animate-ping will-change-transform"></div>
              <div className="absolute inset-6 sm:inset-8 lg:inset-12 rounded-full border border-white/10 sm:border-2 animate-ping animation-delay-200 will-change-transform"></div>
            </div>

            {/* Status label */}
            <div className="absolute -bottom-12 sm:-bottom-16 lg:-bottom-20 left-1/2 transform -translate-x-1/2 w-full px-4">
              <div className="bg-black/80 backdrop-blur-sm text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm lg:text-base font-medium shadow-lg mx-auto max-w-fit">
                Tryck för att starta samtal
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone size={20} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Röstsamtal</h3>
              <p className="text-sm text-gray-600">Naturlig konversation med AI</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Realtid</h3>
              <p className="text-sm text-gray-600">Omedelbar respons och interaktion</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart AI</h3>
              <p className="text-sm text-gray-600">Avancerad språkförståelse</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 sm:p-6 lg:p-8 text-center">
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <span className="text-xs sm:text-sm">Powered by</span>
            <img 
              src="https://www.axiestudio.se/logo.jpg" 
              alt="Axie Studio" 
              className="w-3 h-3 sm:w-4 sm:h-4 rounded object-cover"
              loading="lazy"
            />
            <span className="text-xs sm:text-sm font-medium">Axie Studio AI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;