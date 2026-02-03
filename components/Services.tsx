import React from 'react';
import { Search, Sparkles, ShoppingCart, Settings, Link, TrendingUp, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import FadeIn from './ui/FadeIn';

const services: ServiceItem[] = [
  {
    icon: Search,
    title: "Consultoria SEO",
    description: "Conte com a expertise técnica em inovação e performance para transformar seu tráfego orgânico.",
    isNew: true
  },
  {
    icon: Sparkles,
    title: "Generative Engine Optimization",
    description: "Desenvolvemos estratégias de GEO que aumentam suas menções nas IAs (ChatGPT, Gemini) e geram mais resultados.",
    isNew: true
  },
  {
    icon: ShoppingCart,
    title: "E-commerce SEO",
    description: "Aumente a visibilidade de seu e-commerce com as estratégias de SEO validadas por grandes players."
  },
  {
    icon: Settings,
    title: "Implementação de SEO",
    description: "Implementação de SEO técnica e desenvolvimento web focado em marketing de performance e Core Web Vitals."
  },
  {
    icon: Link,
    title: "Link Building 4.0",
    description: "Conquistamos links em sites de autoridade por meio de assessoria de imprensa digital, aumentando relevância."
  },
  {
    icon: TrendingUp,
    title: "Growth Content",
    description: "Conteúdo orientado a crescimento, focado em escalar tráfego orgânico e conversões de forma consistente."
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Conheça nossos serviços
            </h2>
            <p className="text-slate-600">
              Estratégias completas e personalizadas para colocar o seu negócio no topo das buscas.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 h-full flex flex-col relative overflow-hidden">
                {service.isNew && (
                  <span className="absolute top-4 right-4 bg-blue-100 text-primary text-xs font-bold px-3 py-1 rounded-full">
                    NOVO
                  </span>
                )}
                
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <a href="#contato" className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Saiba Mais
                  <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;