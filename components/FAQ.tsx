import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeIn from './ui/FadeIn';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Quanto tempo até eu ver resultados?",
        answer: "Normalmente, começamos a ver visitantes novos chegando em 2 a 3 meses. Mas o segredo é que quanto mais você espera, mais crescimento você ganha. Recomendamos mínimo 6 meses pra ver resultado de verdade."
    },
    {
        question: "Qual é a diferença entre os planos?",
        answer: "O START é pra quem quer consertar o site (uma só vez). O PLUS é pra quem quer crescimento mês a mês (melhor custo). O PRO é pro negócio que quer ficar à frente da concorrência, com tudo incluído."
    },
    {
        question: "Vocês trabalham com meu tipo de negócio?",
        answer: "Sim! Independente se você vende online, presta serviço, tem consultório, ou vende localmente. A gente adapta a estratégia pro seu negócio específico e pro que faz você ganhar dinheiro."
    },
    {
        question: "Como o Google fica sabendo que meu site é bom?",
        answer: "Quando sites de autoridade mencionam ou indicam você, o Google entende que você é confiável. É como uma recomendação. Quanto mais recomendações você tem, mais o Google confia em você e melhor você fica nos resultados."
    },
    {
        question: "Posso cancelar quando quiser?",
        answer: "Sim! Os planos mensais não têm contrato de fidelidade. Mas aviso: nos primeiros 3 meses os resultados são pequenos. Quem cancela cedo perde o potencial de ganhar muito mais depois."
    },
    {
        question: "Vocês garantem que vou ficar em primeiro lugar?",
        answer: "Ninguém pode garantir isso porque o Google muda o jogo constantemente. O que a gente garante é fazer o trabalho certo, mostrar tudo de forma clara e honesta, e usar estratégias que funcionam e já provaram resultado."
    },
    {
        question: "Como vocês trabalham comigo?",
        answer: "Primeiro a gente analisa seu site por inteiro. Depois decidimos as melhores palavras-chave pra você. Implementamos as melhorias, criamos conteúdo e construímos aquela autoridade que falei. Todo mês você recebe relatório simples pra acompanhar."
    },
    {
        question: "Preciso saber de tecnologia pra isso?",
        answer: "Não! A gente faz tudo. Você só precisa entender os resultados (mais visitantes, mais vendas). Explicamos tudo de forma simples e você acompanha pelo relatório mensal. Seu trabalho é focar no seu negócio."
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
                             Resolvemos as dúvidas mais comuns de quem está começando a crescer online
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
