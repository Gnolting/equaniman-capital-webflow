
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 64, 175, 0.75)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/3064952f-f6c9-41a3-b308-27c3484324d2.png" 
            alt="Equaniman Capital Logo"
            className="h-40 md:h-52 lg:h-64 xl:h-72 mx-auto mb-6 filter drop-shadow-lg"
          />
        </div>
        
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed animate-fade-in text-yellow-100">
          {t('hero.subtitle')}
        </p>
        
        <p className="text-lg md:text-xl mb-12 opacity-90 animate-fade-in text-blue-100 max-w-3xl mx-auto">
          {t('hero.description')}
        </p>
        
        <Button 
          onClick={scrollToContact}
          className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-blue-900 text-lg px-8 py-4 rounded-lg font-semibold shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 animate-scale-in border-0"
        >
          {t('hero.contact_button')}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-yellow-400 opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;
