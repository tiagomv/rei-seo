import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Results from './components/Results';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="font-sans text-secondary antialiased overflow-x-hidden selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Results />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;