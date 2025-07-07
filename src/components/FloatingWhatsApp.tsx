
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/22890010544?text=Bonjour,%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20services%20de%20réparation%20moto", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+22890010544", "_self");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu étendu */}
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          scale: isOpen ? 1 : 0,
          y: isOpen ? 0 : 20
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="mb-4 bg-white rounded-2xl shadow-2xl p-4 min-w-[280px]"
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className="text-center mb-4">
          <h3 className="font-bold text-gray-900 mb-1">Contactez-nous !</h3>
          <p className="text-sm text-gray-600">Nous sommes là pour vous aider</p>
        </div>
        
        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-xl flex items-center gap-3 transition-colors font-medium"
          >
            <MessageCircle className="w-5 h-5" />
            <div className="text-left">
              <div className="text-sm font-semibold">WhatsApp</div>
              <div className="text-xs opacity-90">Chat instantané</div>
            </div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCall}
            className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-xl flex items-center gap-3 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <div className="text-left">
              <div className="text-sm font-semibold">Appeler</div>
              <div className="text-xs opacity-90">90 01 05 44</div>
            </div>
          </motion.button>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            Réponse rapide garantie • Service 7j/7
          </p>
        </div>
      </motion.div>

      {/* Bouton principal */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-2xl transition-colors relative"
        animate={{ 
          rotate: isOpen ? 45 : 0,
          backgroundColor: isOpen ? "#dc2626" : "#25D366"
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <MessageCircle className="w-8 h-8" />
        </motion.div>
        <motion.div
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <X className="w-8 h-8" />
        </motion.div>
        
        {/* Pulse animation */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-[#25D366] rounded-full"
        />
      </motion.button>
      
      {/* Badge de notification */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
      >
        !
      </motion.div>
    </div>
  );
};

export default FloatingWhatsApp;
