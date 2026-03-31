import React from 'react';
import FadeIn from './ui/FadeIn';

const Results: React.FC = () => {
  return (
    <section id="resultados" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Real Proof Section */}
        <FadeIn>
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
                Prova Real
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Capturas de tela autênticas mostrando o crescimento exponencial de tráfego orgânico em um projeto real.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Before Card */}
              <div className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-secondary/90 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg backdrop-blur-sm">
                    Antes
                  </span>
                </div>
                <div className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden border-2 border-slate-200 mb-4 bg-white">
                    <img
                      src="/antes.png"
                      alt="Tráfego orgânico antes - Novembro 2024"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-sm text-slate-500 font-medium">Novembro 2024</p>
                    <p className="text-4xl font-bold text-secondary">327</p>
                    <p className="text-slate-600">visitas orgânicas</p>
                  </div>
                </div>
              </div>

              {/* After Card */}
              <div className="group relative bg-gradient-to-br from-primary/5 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/20">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                    Depois
                  </span>
                </div>
                <div className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary/30 mb-4 bg-white">
                    <img
                      src="/depois.png"
                      alt="Tráfego orgânico depois - Abril 2025"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-sm text-primary font-medium">Abril 2025</p>
                    <p className="text-4xl font-bold text-primary">11.883</p>
                    <p className="text-slate-600">visitas orgânicas</p>
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <p className="text-lg font-bold text-primary">+3.533% de crescimento</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 px-8 py-4 rounded-full border border-primary/20">
                <span className="text-slate-600">De</span>
                <span className="font-bold text-2xl text-secondary">327</span>
                <span className="text-primary text-2xl">→</span>
                <span className="font-bold text-2xl text-primary">11.883</span>
                <span className="text-slate-600">visitas em 5 meses</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Results;