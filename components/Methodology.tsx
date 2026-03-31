import React from 'react';
import { CheckCircle2, TrendingUp, Link2, BarChart3 } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const Methodology: React.FC = () => {
    const methodologyPoints = [
        {
            icon: CheckCircle2,
            title: "Site Rápido e Bem Organizado",
            description: "Aceleramos seu site, arrumamos tudo que tá errado tecnicamente e deixamos organizado pra Google entender perfeitamente e colocar nos resultados."
        },
        {
            icon: TrendingUp,
            title: "Conteúdo que Funciona",
            description: "Descrobimos exatamente o que seu cliente está procurando e criamos artigos, guias e materiais que respondem essas dúvidas e trazem visitantes."
        },
        {
            icon: Link2,
            title: "Sua Marca Crescendo em Autoridade",
            description: "Conseguimos menções do seu site em outros lugares importantes da internet. Isso faz o Google confiar mais em você e colocar você mais acima nos resultados."
        },
        {
            icon: BarChart3,
            title: "Acompanhamento e Melhorias",
            description: "Não deixamos quieto. Toda semana checamos o que tá funcionando, o que não tá, e fazemos ajustes pra crescer cada vez mais."
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
                            Como a gente faz você crescer online de forma consistente
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
                                <span className="font-bold text-secondary">Sem conversinha de vendedor.</span> A gente faz o trabalho honesto, mostra tudo transparente, e você vê crescendo pro seu bolso.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Methodology;
