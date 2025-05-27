
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.75)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/694dbf72-d4ec-4514-84e0-4c7675753a19.png" 
            alt="Equaniman Capital Logo"
            className="h-24 md:h-32 mx-auto mb-6 filter drop-shadow-lg"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in tracking-wide">
          <span className="text-amber-400">EQUANIMAN</span>
          <br />
          <span className="text-slate-200 font-light">CAPITAL</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed animate-fade-in text-slate-200">
          Asesoría financiera profesional que transforma su visión en realidad económica
        </p>
        
        <p className="text-lg md:text-xl mb-12 opacity-90 animate-fade-in text-slate-300 max-w-3xl mx-auto">
          Con sede en Buenos Aires, ofrecemos soluciones financieras estratégicas 
          para empresas y particulares que buscan maximizar su potencial económico
        </p>
        
        <Button 
          onClick={scrollToContact}
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 text-lg px-8 py-4 rounded-lg font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 animate-scale-in border-0"
        >
          Contactar a Marcelo Bosch
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-amber-400 opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;
