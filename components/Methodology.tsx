import React from 'react';
import { CheckCircle2, TrendingUp, Link2, BarChart3 } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const Methodology: React.FC = () => {
    const methodologyPoints = [
        {
            icon: CheckCircle2,
            title: "Base Técnica Sólida",
            description: "Otimização de Core Web Vitals, dados estruturados e arquitetura do site para garantir que o Google consiga rastrear e indexar corretamente todas as páginas."
        },
        {
            icon: TrendingUp,
            title: "Estratégia de Conteúdo",
            description: "Pesquisa profunda de palavras-chave e criação de conteúdo de qualidade que responde exatamente o que seu público está buscando."
        },
        {
            icon: Link2,
            title: "Construção de Autoridade",
            description: "Backlinks de qualidade de sites relevantes que aumentam a confiança do Google no seu domínio e melhoram seu posicionamento."
        },
        {
            icon: BarChart3,
            title: "Otimização Contínua",
            description: "Monitoramento constante de métricas, ajustes baseados em dados reais e adaptação às mudanças do algoritmo do Google."
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white border-y border-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
                            Por Que Funciona
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Nossa metodologia combina técnica, estratégia e consistência para resultados sustentáveis
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {methodologyPoints.map((point, index) => {
                        const Icon = point.icon;
                        return (
                            <FadeIn key={index} delay={index * 100}>
                                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary/30">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <Icon className="text-primary" size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-secondary mb-3 font-heading">
                                                {point.title}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

                <FadeIn delay={400}>
                    <div className="mt-12 max-w-3xl mx-auto">
                        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                            <p className="text-center text-slate-700 leading-relaxed">
                                <span className="font-bold text-secondary">Não fazemos promessas vazias.</span> Nosso trabalho é baseado em técnicas comprovadas, transparência total e foco em resultados reais. O SEO leva tempo, mas quando bem feito, os resultados são duradouros e escaláveis.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Methodology;
