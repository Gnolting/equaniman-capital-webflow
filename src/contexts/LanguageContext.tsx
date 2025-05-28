
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    'header.home': 'Inicio',
    'header.services': 'Servicios',
    'header.about': 'Nosotros',
    'header.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Soluciones Financieras Integrales',
    'hero.subtitle': 'Maximizamos el valor de tu empresa con estrategias personalizadas',
    
    // Services
    'services.title': 'Nuestros Servicios',
    
    // Trusted Brands
    'brands.title': 'Marcas que Confían en Nosotros',
    'brands.subtitle': 'Empresas líderes en diversos sectores han confiado en Equaniman Capital para optimizar sus estrategias financieras y alcanzar sus objetivos de crecimiento.',
    
    // Contact
    'contact.title': 'Contáctanos',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados'
  },
  en: {
    // Header
    'header.home': 'Home',
    'header.services': 'Services',
    'header.about': 'About',
    'header.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Comprehensive Financial Solutions',
    'hero.subtitle': 'We maximize your company value with personalized strategies',
    
    // Services
    'services.title': 'Our Services',
    
    // Trusted Brands
    'brands.title': 'Brands That Trust Us',
    'brands.subtitle': 'Leading companies across various sectors have trusted Equaniman Capital to optimize their financial strategies and achieve their growth objectives.',
    
    // Contact
    'contact.title': 'Contact Us',
    
    // Footer
    'footer.rights': 'All rights reserved'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
