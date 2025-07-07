
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
    <section className="relative h-screen max-h-[800px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient - Updated to blue tones matching #557CFF */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #557CFF 0%, #4A6FE7 25%, #3E62D4 50%, #3255C1 75%, #2648AE 100%)'
        }}
      />
      
      {/* Optional background image overlay with blue filter - positioned lower */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("/lovable-uploads/bd1fa329-19bd-4864-bb04-d2f776fccda4.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
          filter: 'hue-rotate(200deg) saturate(1.5) brightness(0.8)',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto py-8">
        {/* Logo - Enlarged significantly */}
        <div className="mb-4 animate-fade-in">
          <img 
            src="/lovable-uploads/bd1fa329-19bd-4864-bb04-d2f776fccda4.png" 
            alt="Equanima Capital Logo"
            className="h-48 md:h-56 lg:h-64 xl:h-72 mx-auto mb-3 filter drop-shadow-lg"
          />
        </div>
        
        <p className="text-base md:text-lg mb-6 opacity-90 animate-fade-in text-blue-100 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        
        <Button 
          onClick={scrollToContact}
          className="text-white text-base px-8 py-4 rounded-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 animate-scale-in border-0"
          style={{
            background: 'linear-gradient(to right, #2648AE, #557CFF, #4A6FE7)',
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
        <ArrowDown className="w-5 h-5 text-blue-200 opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;
