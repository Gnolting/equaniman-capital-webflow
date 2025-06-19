
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
    'hero.subtitle': 'Asesoría financiera profesional que transforma su visión en realidad económica',
    'hero.description': 'Con sede en Buenos Aires, ofrecemos soluciones financieras estratégicas para empresas y particulares que buscan maximizar su potencial económico',
    'hero.contact_button': 'Contactar a Marcelo Bosch',
    
    // Company Services
    'company.title': 'Nuestra Empresa',
    'company.description1': 'Equaniman Capital nace de la visión de Marcelo Bosch de democratizar el acceso a asesoría financiera de primer nivel en Argentina. Con más de una década de experiencia en el sector financiero, hemos construido una reputación sólida basada en la confianza, transparencia y resultados.',
    'company.description2': 'Nuestra sede en Buenos Aires nos posiciona estratégicamente para atender tanto el mercado local como regional, ofreciendo soluciones financieras innovadoras que se adaptan a las dinámicas económicas del mercado argentino e internacional.',
    'company.description3': 'En Equaniman Capital, creemos que cada cliente merece una estrategia financiera única y personalizada. Nuestro enfoque integral combina análisis técnico riguroso con un profundo entendimiento de los objetivos individuales de cada cliente.',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.business_advisory': 'Asesoría Empresarial',
    'services.business_advisory_desc': 'Consultoría estratégica para optimizar la estructura financiera de su empresa y maximizar la rentabilidad.',
    'services.financial_planning': 'Planificación Financiera',
    'services.financial_planning_desc': 'Desarrollo de planes financieros personalizados que se adapten a sus objetivos y horizonte de inversión.',
    'services.investment_management': 'Gestión de Inversiones',
    'services.investment_management_desc': 'Administración profesional de carteras de inversión con estrategias diversificadas y gestión de riesgos.',
    
    // Trusted Brands
    'brands.title': 'Marcas que Confían en Nosotros',
    'brands.subtitle': 'Empresas líderes en diversos sectores han confiado en Equaniman Capital para optimizar sus estrategias financieras y alcanzar sus objetivos de crecimiento.',
    
    // Contact
    'contact.title': 'Contacta con Nosotros',
    'contact.subtitle': '¿Listo para optimizar su estrategia financiera? Contáctenos hoy mismo para una consulta personalizada con Marcelo Bosch.',
    'contact.form_title': 'Envíanos un Mensaje',
    'contact.name_label': 'Nombre Completo',
    'contact.name_placeholder': 'Ingrese su nombre completo',
    'contact.email_label': 'Correo Electrónico',
    'contact.email_placeholder': 'su@email.com',
    'contact.message_label': 'Mensaje',
    'contact.message_placeholder': 'Cuéntenos sobre sus necesidades financieras...',
    'contact.submit_button': 'Enviar Mensaje',
    'contact.success_title': 'Mensaje enviado',
    'contact.success_description': 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
    
    // Footer
    'footer.description': 'Asesoría financiera profesional con sede en Buenos Aires, Argentina. Transformamos su visión en realidad económica.',
    'footer.rights': 'Todos los derechos reservados',
    'footer.services_title': 'Servicios',
    'footer.contact_title': 'Contacto',
    'footer.location': 'Buenos Aires, Argentina',
    'footer.email': 'contacto@equanimancapital.com',
    'footer.hours': 'Lun - Vie: 9:00 - 18:00',
    'footer.admin_note': 'Diseñado para ser compatible con integración backend via Convex. Panel administrativo disponible para gestión de contenido.'
  },
  en: {
    // Header
    'header.home': 'Home',
    'header.services': 'Services',
    'header.about': 'About',
    'header.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Comprehensive Financial Solutions',
    'hero.subtitle': 'Professional financial advisory that transforms your vision into economic reality',
    'hero.description': 'Based in Buenos Aires, we offer strategic financial solutions for companies and individuals seeking to maximize their economic potential',
    'hero.contact_button': 'Contact Marcelo Bosch',
    
    // Company Services
    'company.title': 'Our Company',
    'company.description1': 'Equaniman Capital was born from Marcelo Bosch\'s vision to democratize access to first-class financial advisory in Argentina. With over a decade of experience in the financial sector, we have built a solid reputation based on trust, transparency and results.',
    'company.description2': 'Our headquarters in Buenos Aires strategically positions us to serve both local and regional markets, offering innovative financial solutions that adapt to the economic dynamics of the Argentine and international market.',
    'company.description3': 'At Equaniman Capital, we believe that every client deserves a unique and personalized financial strategy. Our comprehensive approach combines rigorous technical analysis with a deep understanding of each client\'s individual objectives.',
    
    // Services
    'services.title': 'Our Services',
    'services.business_advisory': 'Business Advisory',
    'services.business_advisory_desc': 'Strategic consulting to optimize your company\'s financial structure and maximize profitability.',
    'services.financial_planning': 'Financial Planning',
    'services.financial_planning_desc': 'Development of personalized financial plans that adapt to your objectives and investment horizon.',
    'services.investment_management': 'Investment Management',
    'services.investment_management_desc': 'Professional management of investment portfolios with diversified strategies and risk management.',
    
    // Trusted Brands
    'brands.title': 'Brands That Trust Us',
    'brands.subtitle': 'Leading companies across various sectors have trusted Equaniman Capital to optimize their financial strategies and achieve their growth objectives.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to optimize your financial strategy? Contact us today for a personalized consultation with Marcelo Bosch.',
    'contact.form_title': 'Send Us a Message',
    'contact.name_label': 'Full Name',
    'contact.name_placeholder': 'Enter your full name',
    'contact.email_label': 'Email Address',
    'contact.email_placeholder': 'your@email.com',
    'contact.message_label': 'Message',
    'contact.message_placeholder': 'Tell us about your financial needs...',
    'contact.submit_button': 'Send Message',
    'contact.success_title': 'Message sent',
    'contact.success_description': 'Thank you for contacting us. We will get in touch with you soon.',
    
    // Footer
    'footer.description': 'Professional financial advisory based in Buenos Aires, Argentina. We transform your vision into economic reality.',
    'footer.rights': 'All rights reserved',
    'footer.services_title': 'Services',
    'footer.contact_title': 'Contact',
    'footer.location': 'Buenos Aires, Argentina',
    'footer.email': 'contact@equanimancapital.com',
    'footer.hours': 'Mon - Fri: 9:00 - 18:00',
    'footer.admin_note': 'Designed to be compatible with backend integration via Convex. Administrative panel available for content management.'
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
