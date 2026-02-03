import React from 'react';
import { Crown, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-primary" />
              <span className="text-xl font-heading font-bold text-white">Rei SEO</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 max-w-xs">
              Especialistas em SEO técnico e estratégico. Transformamos códigos e conteúdos em resultados de negócio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#servicos" className="hover:text-primary transition-colors text-sm">Serviços</a></li>
              <li><a href="#planos" className="hover:text-primary transition-colors text-sm">Planos e Preços</a></li>
              <li><a href="#resultados" className="hover:text-primary transition-colors text-sm">Resultados</a></li>
              <li><a href="#" className="hover:text-primary transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 Rei SEO. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;