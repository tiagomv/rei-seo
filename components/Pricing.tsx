import React from 'react';
import { Zap, Rocket, Crown, Check } from 'lucide-react';
import { PlanItem } from '../types';
import FadeIn from './ui/FadeIn';

const plans: PlanItem[] = [
  {
    name: "START",
    price: "800",
    period: "Uma só vez",
    focus: "Consertando o site",
    icon: Zap,
    features: [
      "Análise completa do seu site",
      "Acelerar o carregamento",
      "Corrigir problemas que assustam Google",
      "Melhorar títulos e descrições",
      "Relatório com tudo que foi feito"
    ],
    checkoutUrl: "https://mpago.li/1furv52",
  },
  {
    name: "PLUS",
    price: "1.500",
    period: "/mês",
    focus: "Crescendo mês a mês",
    icon: Rocket,
    isPopular: true,
    features: [
      "Tudo do START (no primeiro mês)",
      "Manutenção constante do site",
      "2 artigos novos otimizados por mês",
      "3 menções do seu site em lugares importantes",
      "Acompanhamento de como tá crescendo",
      "Relatório mensal super claro"
    ],
    checkoutUrl: "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=3432abd8884f41e7a628fc96254415df",
  },
  {
    name: "PRO",
    price: "2.500",
    period: "/mês",
    focus: "Dominando seu mercado",
    icon: Crown,
    features: [
      "Tudo do PLUS",
      "5 artigos novos otimizados por mês",
      "7 menções em sites de alta autoridade",
      "Planejamento de conteúdo avançado",
      "1 hora de consultoria direta comigo por mês",
      "Análise dos concorrentes a cada 3 meses"
    ],
    checkoutUrl: "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=126f2abbf67843098ccda260302069a6",
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="planos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Escolha seu plano
            </h2>
            <p className="text-slate-600">
              Soluções para cada etapa do seu crescimento
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={index * 150} className="h-full">
              <div
                className={`relative bg-white rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${plan.isPopular
                    ? 'shadow-2xl border-2 border-primary scale-105 z-10'
                    : 'shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1'
                  }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                    Mais Popular
                  </div>
                )}

                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${plan.isPopular ? 'bg-primary/10 text-primary' : 'bg-slate-50 text-slate-700'}`}>
                    <plan.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-1">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{plan.focus}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-medium text-slate-400">R$</span>
                    <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                    <span className="text-slate-400 text-sm">{plan.period}</span>
                  </div>
                </div>

                <div className="h-px w-full bg-slate-100 mb-6"></div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-semibold text-center transition-all ${plan.isPopular
                      ? 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-primary/30'
                      : 'border border-slate-200 text-secondary hover:border-primary hover:text-primary'
                    }`}
                >
                  Contratar {plan.name}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;