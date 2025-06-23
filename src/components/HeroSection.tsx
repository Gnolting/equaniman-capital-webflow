
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
      {/* Background Gradient - similar to uploaded image */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #a855f7 50%, #c084fc 75%, #e879f9 100%)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto py-8">
        {/* Logo - Enlarged significantly */}
        <div className="mb-4 animate-fade-in">
          <img 
            src="/lovable-uploads/34a4d844-24e9-4785-ae19-78e676e74c01.png" 
            alt="Equanima Capital Logo"
            className="h-48 md:h-56 lg:h-64 xl:h-72 mx-auto mb-3 filter drop-shadow-lg"
          />
        </div>
        
        <p className="text-base md:text-lg mb-6 opacity-90 animate-fade-in text-slate-300 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        
        <Button 
          onClick={scrollToContact}
          className="text-white text-base px-8 py-4 rounded-lg font-semibold shadow-2xl hover:shadow-slate-500/25 transition-all duration-300 animate-scale-in border-0"
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
