
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <img 
            src="/lovable-uploads/7f2e3dc3-4a29-41ef-ae6f-4efd30d9199c.png" 
            alt="Equaniman Capital Logo"
            className="h-32 md:h-40 lg:h-48 mx-auto mb-8 filter drop-shadow-2xl"
          />
        </div>
        
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed animate-fade-in text-amber-100">
          Asesoría financiera profesional que transforma su visión en realidad económica
        </p>
        
        <p className="text-lg md:text-xl mb-12 opacity-90 animate-fade-in text-slate-300 max-w-3xl mx-auto">
          Con sede en Buenos Aires, ofrecemos soluciones financieras estratégicas 
          para empresas y particulares que buscan maximizar su potencial económico
        </p>
        
        <Button 
          onClick={scrollToContact}
          className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-slate-900 text-lg px-8 py-4 rounded-lg font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 animate-scale-in border-0"
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
