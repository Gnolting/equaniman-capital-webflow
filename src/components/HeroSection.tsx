
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
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(59, 130, 246, 0.6)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Equaniman Capital
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed animate-fade-in">
          Asesoría financiera profesional que transforma su visión en realidad económica
        </p>
        <p className="text-lg md:text-xl mb-12 opacity-90 animate-fade-in">
          Con sede en Buenos Aires, ofrecemos soluciones financieras estratégicas 
          para empresas y particulares que buscan maximizar su potencial económico
        </p>
        <Button 
          onClick={scrollToContact}
          className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
        >
          Contactar a Marcelo Bosch
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;
