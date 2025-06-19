
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
          backgroundImage: `linear-gradient(rgba(0, 71, 171, 0.75), rgba(138, 43, 226, 0.75), rgba(218, 112, 214, 0.75)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-6 animate-fade-in">
          <img 
            src="/lovable-uploads/3064952f-f6c9-41a3-b308-27c3484324d2.png" 
            alt="Equaniman Capital Logo"
            className="h-32 md:h-40 lg:h-48 xl:h-56 mx-auto mb-4 filter drop-shadow-lg brightness-0 invert"
          />
        </div>
        
        <p className="text-lg md:text-xl mb-6 font-light leading-relaxed animate-fade-in text-slate-200">
          {t('hero.subtitle')}
        </p>
        
        <p className="text-base md:text-lg mb-8 opacity-90 animate-fade-in text-slate-300 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        
        <Button 
          onClick={scrollToContact}
          className="text-white text-base px-6 py-3 rounded-lg font-semibold shadow-2xl hover:shadow-slate-500/25 transition-all duration-300 animate-scale-in border-0"
          style={{
            background: 'linear-gradient(to right, #0047AB, #8A2BE2, #DA70D6)',
            backgroundSize: '200% 100%',
            transition: 'background-position 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundPosition = 'right center';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundPosition = 'left center';
          }}
        >
          {t('hero.contact_button')}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-gray-400 opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;
