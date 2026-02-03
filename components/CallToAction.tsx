import React from 'react';
import { MessageCircle } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const CallToAction: React.FC = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-primary z-0"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Pronto para dominar o Google?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Fale com nossos especialistas e descubra como o SEO pode transformar seu negócio hoje mesmo.
          </p>

          <a 
            href="https://wa.me/5561995544295?text=Olá!%20Quero%20conhecer%20os%20serviços%20da%20Rei%20SEO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com especialista
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default CallToAction;