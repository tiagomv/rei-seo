import React from 'react';
import { Search, Sparkles, ShoppingCart, Settings, Link, TrendingUp, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import FadeIn from './ui/FadeIn';

const services: ServiceItem[] = [
  {
    icon: Search,
    title: "Seu Site Vendendo 24h (sem pagar anúncio)",
    description: "Fazemos seu site aparecer naturalmente no Google quando as pessoas procuram por você. Sem gastar com publicidade — é seu.",
    benefit: "Mais clientes achando você organicamente",
    isNew: true
  },
  {
    icon: Sparkles,
    title: "Apareça nos Assistentes de IA (ChatGPT, Gemini)",
    description: "Sua marca mencionada quando clientes fazem perguntas em ChatGPT, Gemini e outras IAs. Cada menção é uma oportunidade de venda.",
    benefit: "Encontrado mesmo em novas formas de busca",
    isNew: true
  },
  {
    icon: ShoppingCart,
    title: "Loja Online Visível e Pronta pra Vender",
    description: "Otimizamos sua loja inteira — desde como aparece no Google até velocidade e facilidade de compra. Tudo focado em conversão.",
    benefit: "Mais tráfego = mais vendas"
  },
  {
    icon: Settings,
    title: "Site Rápido, Seguro e Pronto pro Google",
    description: "Aceleramos seu site, corrigimos problemas técnicos invisíveis e deixamos tudo conforme o Google exige. Resultado: melhor posição.",
    benefit: "Ranking melhor, sem bloqueios técnicos"
  },
  {
    icon: Link,
    title: "Sua Marca Citada em Sites Importantes",
    description: "Conquistamos menções da sua marca em sites conceituados e relevantes. Quanto mais citado, mais autoridade você ganha no Google.",
    benefit: "Google confia mais em você"
  },
  {
    icon: TrendingUp,
    title: "Conteúdo que Traz Clientes de Verdade",
    description: "Criamos artigos, guias e materiais que as pessoas realmente procuram — focado em trazer clientes qualificados, não apenas visitas.",
    benefit: "Tráfego que converte em vendas"
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Como Conquistar Mais Clientes Sem Pagar Anúncio
            </h2>
            <p className="text-slate-600">
              Soluções simples e eficientes para sua empresa aparecer na frente dos seus clientes ideais.
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

                 {service.benefit && (
                   <p className="text-primary font-semibold text-sm mb-4 pb-4 border-b border-slate-100">
                     ✨ {service.benefit}
                   </p>
                 )}

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