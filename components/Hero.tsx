import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                <TrendingUp size={14} />
                Agência de Performance
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary leading-tight mb-6">
                Domine o Google com a <span className="text-primary relative inline-block">
                   Rei SEO
                   <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                     <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                   </svg>
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                Transforme a busca orgânica em seu melhor canal de aquisição e vendas. Estratégias de SEO técnico e de conteúdo que realmente funcionam.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="https://wa.me/5561995544295?text=Olá!%20Quero%20dominar%20o%20Google%20com%20a%20Rei%20SEO."
                  className="inline-flex justify-center items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 gap-2 group"
                >
                  Quero dominar o Google
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#planos"
                  className="inline-flex justify-center items-center px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:text-primary hover:border-primary font-semibold rounded-xl transition-all hover:shadow-md"
                >
                  Ver nossos planos
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-1/2 w-full max-w-lg lg:max-w-none relative">
            <FadeIn delay={400} direction="left">
               {/* Visual Element: Stylized Dashboard/Growth Graphic */}
               <div className="relative bg-white p-6 rounded-2xl shadow-2xl border border-slate-100">
                  {/* Mockup Header */}
                  <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-4 w-1/2 h-2 bg-slate-100 rounded-full"></div>
                  </div>
                  
                  {/* Chart Visual */}
                  <div className="space-y-4">
                    <div className="flex items-end justify-between h-48 gap-4 px-2">
                      <div className="w-1/6 bg-blue-100 rounded-t-lg h-[40%] animate-pulse"></div>
                      <div className="w-1/6 bg-blue-200 rounded-t-lg h-[60%]"></div>
                      <div className="w-1/6 bg-blue-300 rounded-t-lg h-[50%]"></div>
                      <div className="w-1/6 bg-blue-400 rounded-t-lg h-[75%]"></div>
                      <div className="w-1/6 bg-blue-500 rounded-t-lg h-[65%]"></div>
                      <div className="w-1/6 bg-primary rounded-t-lg h-[90%] shadow-lg shadow-blue-500/30 relative">
                         <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold py-1 px-2 rounded">
                            +128%
                         </div>
                      </div>
                    </div>
                    <div className="h-px bg-slate-100 w-full"></div>
                    <div className="flex justify-between text-xs text-slate-400 font-medium">
                        <span>Jan</span>
                        <span>Fev</span>
                        <span>Mar</span>
                        <span>Abr</span>
                        <span>Mai</span>
                        <span>Jun</span>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -right-6 top-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
                     <div className="bg-green-100 p-2 rounded-full">
                        <TrendingUp className="text-green-600 w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-xs text-slate-500 font-medium">Tráfego Orgânico</p>
                        <p className="text-lg font-bold text-secondary">24.5k</p>
                     </div>
                  </div>
               </div>
               
               {/* Background Decorative Blob behind image */}
               <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60"></div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;