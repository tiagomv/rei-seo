import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/5561995544295?text=Olá!%20Vim%20pelo%20site%20da%20Rei%20SEO."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border border-white/30 animate-ping"></div>
      <MessageCircle className="w-8 h-8 relative z-10" />
      <span className="absolute right-full mr-4 bg-white text-secondary px-3 py-1 rounded-lg text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale Conosco
      </span>
    </a>
  );
};

export default FloatingWhatsApp;