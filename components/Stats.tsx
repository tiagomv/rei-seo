import React from 'react';
import AnimatedCounter from './ui/AnimatedCounter';
import FadeIn from './ui/FadeIn';

const Stats: React.FC = () => {
  const stats = [
    { label: "Atuando com desenvolvimento web", end: 2017, prefix: "Desde ", suffix: "", disableFormatting: true },
    { label: "Linhas de código otimizadas", end: 15000, prefix: "+", suffix: "" },
    { label: "Média de ganho em velocidade mobile", end: 300, prefix: "+", suffix: "%" },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 150} className="p-4">
              <div className="flex flex-col items-center">
                <AnimatedCounter
                  end={stat.end}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2500}
                  disableFormatting={stat.disableFormatting}
                />
                <p className="mt-2 text-slate-500 font-medium text-lg max-w-xs">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;