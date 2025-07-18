import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

interface CoverPageProps {
  onStartCall: () => void;
}

const CoverPage: React.FC<CoverPageProps> = ({ onStartCall }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col">
      {/* Header */}
      <motion.div 
        className="p-4 sm:p-6 lg:p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full max-w-2xl">
          {/* Hero Text */}
          <motion.div 
            className="mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight">
              AI Röstassistent
            </h2>
            <p className="text-xl sm:text-2xl text-gray-500 mb-8 sm:mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Naturlig konversation med AI
            </p>
          </motion.div>

          {/* Call Button - Copy of VoiceOrb design */}
          <motion.div 
            className="relative mb-12 sm:mb-16 lg:mb-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.4, 
              type: "spring", 
              stiffness: 100, 
              damping: 15 
            }}
          >
            {/* Enhanced gradient orb */}
            <motion.div 
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 shadow-2xl relative overflow-hidden cursor-pointer group"
              onClick={onStartCall}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-2 sm:inset-3 lg:inset-4 rounded-full bg-gradient-to-br from-white/10 to-transparent"></div>
              
              {/* Central button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Phone size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                </motion.div>
              </div>

              {/* Physics-based floating rings */}
              <motion.div 
                className="absolute inset-0 rounded-full border border-white/30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-full border border-white/20"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0, 0.2]
                }}
                transition={{ 
                  duration: 3,
                  delay: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Status label */}
            <motion.div 
              className="absolute -bottom-16 sm:-bottom-20 left-1/2 transform -translate-x-1/2 w-full px-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-light shadow-lg mx-auto max-w-fit">
                Tryck för att börja
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div 
        className="p-4 sm:p-6 lg:p-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <span className="text-xs sm:text-sm font-light">Powered by</span>
            <img 
              src="https://www.axiestudio.se/logo.jpg" 
              alt="Axie Studio" 
              className="w-3 h-3 sm:w-4 sm:h-4 rounded object-cover"
              loading="lazy"
            />
            <span className="text-xs sm:text-sm font-light">Axie Studio AI</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CoverPage;