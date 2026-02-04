import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeIn from './ui/FadeIn';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Quanto tempo leva para ver resultados com SEO?",
        answer: "Os primeiros resultados de SEO costumam aparecer entre 60 e 90 dias, com aumento de impressões, cliques e melhora gradual no posicionamento. Esse prazo é necessário para que o Google rastreie, indexe e valide as otimizações realizadas no site."
    },
    {
        question: "Qual a diferença entre os planos START, PLUS e PRO?",
        answer: "O plano START é ideal para quem precisa de uma otimização técnica inicial (pagamento único). O PLUS é para quem quer crescimento contínuo com conteúdo e backlinks mensais. O PRO oferece volume maior de conteúdo, backlinks premium e consultoria dedicada para dominar seu nicho."
    },
    {
        question: "Vocês trabalham com qualquer tipo de negócio?",
        answer: "Sim! Atendemos desde e-commerces, blogs, sites institucionais até profissionais liberais e prestadores de serviço. Cada estratégia é personalizada de acordo com o nicho e objetivos do cliente."
    },
    {
        question: "O que são backlinks e por que são importantes?",
        answer: "Backlinks são links de outros sites apontando para o seu. Eles funcionam como 'votos de confiança' para o Google, aumentando a autoridade do seu domínio. Quanto mais backlinks de qualidade você tiver, melhor será seu ranqueamento."
    },
    {
        question: "Posso cancelar o plano a qualquer momento?",
        answer: "Sim, nossos planos mensais (PLUS e PRO) não têm fidelidade. Você pode cancelar quando quiser. Recomendamos no mínimo 6 meses para resultados consistentes, mas a decisão é sempre sua."
    },
    {
        question: "Vocês garantem a primeira posição no Google?",
        answer: "Nenhuma agência séria pode garantir posições específicas, pois o Google muda seus algoritmos constantemente. O que garantimos é trabalho técnico de qualidade, transparência nos relatórios e estratégias comprovadas que aumentam suas chances de ranquear bem."
    },
    {
        question: "Como funciona o processo de trabalho?",
        answer: "Após a contratação, fazemos uma auditoria completa, definimos as palavras-chave estratégicas, implementamos as otimizações técnicas e criamos um cronograma de conteúdo e link building. Você recebe relatórios mensais com todas as métricas e evoluções."
    },
    {
        question: "Preciso ter conhecimento técnico para contratar?",
        answer: "Não! Cuidamos de tudo para você. Explicamos cada etapa de forma clara e você acompanha os resultados através de relatórios simples e objetivos. Nosso trabalho é fazer seu site crescer enquanto você foca no seu negócio."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
                            Perguntas Frequentes
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Tire suas dúvidas sobre SEO e nossos serviços
                        </p>
                    </FadeIn>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <FadeIn key={index} delay={index * 50}>
                            <div className="border border-slate-200 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-semibold text-secondary pr-8">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`flex-shrink-0 text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        size={20}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                        }`}
                                >
                                    <div className="px-6 pb-5 pt-2 text-slate-600 leading-relaxed bg-slate-50">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
