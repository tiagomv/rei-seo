import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight, MousePointer2 } from 'lucide-react';
import FadeIn from './ui/FadeIn';

// Component to simulate the Google Search Console Graph
const SeoResultChart: React.FC<{ type: 'before' | 'after' }> = ({ type }) => {
  const isAfter = type === 'after';
  
  return (
    <div className="w-full h-full bg-white relative font-sans select-none overflow-hidden flex flex-col">
        {/* Header Section simulating GSC */}
        <div className="p-4 md:p-6 border-b border-slate-100 bg-white z-10">
            <div className="text-lg md:text-xl text-slate-700 mb-4 font-medium">Tráfego</div>
            <div className="flex flex-wrap gap-4 text-xs md:text-sm text-slate-600">
                <div className="flex items-center gap-2 bg-slate-50 px-2 py-1 rounded">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-[#4285F4] rounded-[2px]"></div> 
                  Tráfego orgânico
                </div>
                <div className="flex items-center gap-2 opacity-50 px-2 py-1">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-[#FBBC04] rounded-[2px]"></div> 
                  Tráfego pago
                </div>
                <div className="flex items-center gap-2 opacity-50 px-2 py-1">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-[#0F9D58] rounded-[2px]"></div> 
                  Tráfego com marca
                </div>
            </div>
        </div>
        
        {/* Chart Area */}
        <div className="relative flex-grow w-full p-4 bg-white">
             {/* Grid Lines */}
             <div className="absolute inset-x-4 top-4 bottom-4 flex flex-col justify-between pointer-events-none">
                 <div className="w-full h-px bg-slate-100"></div>
                 <div className="w-full h-px bg-slate-100"></div>
                 <div className="w-full h-px bg-slate-100"></div>
                 <div className="w-full h-px bg-slate-100"></div>
                 <div className="w-full h-px bg-slate-100"></div>
             </div>

             {/* The Graph SVG */}
             <svg viewBox="0 0 1000 400" className="w-full h-full relative z-0" preserveAspectRatio="none">
                 <defs>
                    <linearGradient id={`blueGradient-${type}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4285F4" stopOpacity="0.25"/>
                        <stop offset="100%" stopColor="#4285F4" stopOpacity="0.05"/>
                    </linearGradient>
                 </defs>
                 
                 {/* Data Path */}
                 <path 
                    d={isAfter 
                        ? "M0,380 L100,378 L200,382 L300,375 L400,350 C450,340 500,300 550,220 C600,140 650,100 750,80 C800,70 850,20 900,10 L950,25 L1000,15 V400 H0 Z" 
                        : "M0,380 L100,382 L200,378 L300,381 L400,380 L500,379 L600,381 L700,380 L800,382 L900,380 L1000,381 V400 H0 Z"} 
                    fill={`url(#blueGradient-${type})`} 
                    stroke="none"
                 />
                 <path 
                    d={isAfter 
                         ? "M0,380 L100,378 L200,382 L300,375 L400,350 C450,340 500,300 550,220 C600,140 650,100 750,80 C800,70 850,20 900,10 L950,25 L1000,15" 
                         : "M0,380 L100,382 L200,378 L300,381 L400,380 L500,379 L600,381 L700,380 L800,382 L900,380 L1000,381"} 
                    fill="none" 
                    stroke="#4285F4" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                 />

                 {/* After Markers (Selection Dot) */}
                 {isAfter && (
                    <>
                        <circle cx="900" cy="10" r="6" fill="#4285F4" stroke="white" strokeWidth="2" />
                        <line x1="900" y1="10" x2="900" y2="400" stroke="#4285F4" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
                    </>
                 )}
                 
                 {/* Before Marker (Arrow pointing to flat line) */}
                 {!isAfter && (
                   <line x1="400" y1="300" x2="400" y2="370" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrowhead)" />
                 )}
                 <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#EF4444" />
                    </marker>
                 </defs>
             </svg>
             
             {/* Tooltip Overlay */}
             {isAfter && (
                 <div className="absolute top-[15%] right-[5%] md:right-[10%] bg-white p-4 rounded-lg shadow-xl border border-slate-200 text-sm animate-fade-in-up z-20 min-w-[200px]">
                     <div className="font-semibold text-slate-500 mb-2 border-b border-slate-100 pb-2">22 de março de 2025</div>
                     <div className="flex items-center gap-2 font-bold text-slate-700">
                         <div className="w-3 h-3 rounded-full bg-[#4285F4]"></div>
                         Tráfego orgânico
                         <span className="ml-auto text-lg">13.357</span>
                     </div>
                     <div className="flex items-center gap-2 text-slate-400 mt-2 text-xs">
                         <div className="w-3 h-3 rounded-full bg-[#FBBC04]"></div>
                         Tráfego pago
                         <span className="ml-auto">0</span>
                     </div>
                     <div className="flex items-center gap-2 text-slate-400 mt-1 text-xs">
                         <div className="w-3 h-3 rounded-full bg-[#0F9D58]"></div>
                         Tráfego com marca
                         <span className="ml-auto">0</span>
                     </div>
                 </div>
             )}
             
             {/* Annotations pointer on Before */}
             {!isAfter && (
                <div className="absolute left-[35%] top-[60%] -translate-y-full text-red-500 flex flex-col items-center animate-bounce">
                    <span className="text-xs font-bold bg-white px-2 py-1 rounded shadow-sm border border-red-100 mb-1">Sem estratégia</span>
                </div>
             )}
             
             {/* Annotations pointer on After */}
             {isAfter && (
                <div className="absolute left-[35%] bottom-[20%] text-primary flex flex-col items-center">
                    <span className="text-xs font-bold bg-white px-2 py-1 rounded shadow-sm border border-blue-100 mb-1 text-primary">Crescimento Exponencial</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M19 12l-7 7-7-7" transform="rotate(180 12 12)"/>
                    </svg>
                </div>
             )}
        </div>
    </div>
  );
}

const ComparisonSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMove = useCallback((event: React.MouseEvent | React.TouchEvent | React.ChangeEvent<HTMLInputElement>) => {
    // If it's the range input
    if ('target' in event && event.target instanceof HTMLInputElement) {
       setSliderPosition(Number(event.target.value));
       return;
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto aspect-[16/10] md:aspect-video rounded-2xl overflow-hidden shadow-2xl select-none group border border-slate-200">
      {/* After Component (Background) */}
      <div className="absolute top-0 left-0 w-full h-full">
         <SeoResultChart type="after" />
      </div>
      
      <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-md text-sm font-bold shadow-lg z-10 backdrop-blur-sm pointer-events-none">
        Depois
      </div>

      {/* Before Component (Clipped) */}
      <div 
        className="absolute top-0 left-0 h-full w-full overflow-hidden bg-slate-50 border-r border-white/50"
        style={{ width: `${sliderPosition}%` }}
      >
        {/* Inner container to prevent squashing */}
        <div className="absolute top-0 left-0 h-full" style={{ width: containerWidth || '100%' }}>
            <SeoResultChart type="before" />
        </div>
        
        <div className="absolute top-4 left-4 bg-secondary/80 text-white px-3 py-1 rounded-md text-sm font-bold shadow-lg backdrop-blur-sm pointer-events-none">
          Antes
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-primary hover:scale-110 transition-transform">
          <ChevronsLeftRight size={20} />
        </div>
      </div>

      {/* Invisible Range Input for accessibility and easier interaction */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleMove}
        className="absolute top-0 left-0 w-full h-full opacity-0 z-30 cursor-ew-resize"
        aria-label="Comparação de antes e depois"
      />
    </div>
  );
};

const Results: React.FC = () => {
  return (
    <section id="resultados" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Resultados Reais
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Veja o impacto visual e técnico de nossas otimizações em projetos reais. Transformamos gráficos estagnados em curvas de crescimento exponencial.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <ComparisonSlider />
          <div className="flex justify-center items-center gap-2 mt-6 text-sm text-slate-400 italic">
            <MousePointer2 size={14} />
            <p>Arraste o slider para comparar o tráfego orgânico</p>
          </div>
        </FadeIn>

        {/* Real Proof Section */}
        <FadeIn delay={400}>
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-3">
                Prova Real: Dados do Google Search Console
              </h3>
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