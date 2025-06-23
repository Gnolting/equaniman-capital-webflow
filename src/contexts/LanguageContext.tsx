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
    'hero.description': 'Con sede en Buenos Aires, ofrecemos soluciones estructurales y financieras para empresas, organizaciones y negocios que buscan maximizar su potencial económico.',
    'hero.contact_button': 'Contactar a Marcelo Bosch',
    
    // Company Services
    'company.title': 'Quiénes Somos',
    'company.description1': 'Equánima Capital es una firma dedicada al asesoramiento empresarial estratégico en Argentina.',
    'company.description2': 'Nos redefinimos en 2024 para acompañar una nueva era global, donde la inteligencia artificial, junto a la experiencia e inteligencia emocional humana, se convierten en pilares de nuestro presente.',
    'company.description3': 'Integramos IE e IA para potenciar empresas, organizaciones y negocios que buscan crecer con sentido, precisión y coherencia.',
    'company.description4': 'Fusionamos inteligencia emocional, experiencia y tecnología al servicio de nuestros clientes y su evolución económica.',
    
    // Tabs
    'tabs.who_we_are': 'Quiénes Somos',
    'tabs.vision': 'Visión',
    'tabs.purpose': 'Nuestro Propósito',
    
    // Vision
    'vision.title': 'Visión',
    'vision.description1': 'Equánima Capital es una empresa de servicios empresariales en evolución constante, que incorpora lo mejor de la tecnología cuántica, la IA generativa, la intuición y la experiencia humana en la integración de economías, organizaciones y empresas alineadas con el crecimiento y la expansión económica.',
    'vision.description2': 'Creemos que las decisiones financieras y estratégicas se toman desde la claridad interior, la conexión con el presente y una visión clara del propósito individual y colectivo de cada organización.',
    
    // Purpose
    'purpose.title': 'Nuestro Propósito',
    'purpose.description1': 'Elevar la calidad de las decisiones humanas en el mundo económico.',
    'purpose.description2': 'Acompañar la creación de empresas, proyectos y estructuras prósperas, alineadas con la evolución global del planeta.',
    
    // Services
    'services.title': 'Nuestro Diferencial',
    'services.business_advisory': 'Experiencia Senior',
    'services.business_advisory_desc': 'Socios con décadas de trayectoria en estructuración, mercados financieros y negocios.',
    'services.financial_planning': 'Experiencia Actualizada',
    'services.financial_planning_desc': 'Asociados jóvenes con experiencia en tecnología, IA y negocios.',
    'services.investment_management': 'IA como co-creadora',
    'services.investment_management_desc': 'Usamos inteligencia artificial no como una herramienta más, sino como una inteligencia complementaria que amplifica nuestra visión y precisión.',
    'services.strategic_consulting': 'Consultoría Estratégica',
    
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
    'contact.sending': 'Enviando...',
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
    'hero.description': 'Based in Buenos Aires, we offer structural and financial solutions for companies, organizations and businesses seeking to maximize their economic potential',
    'hero.contact_button': 'Contact Marcelo Bosch',
    
    // Company Services
    'company.title': 'Who We Are',
    'company.description1': 'Equánima Capital is a firm dedicated to strategic business consulting in Argentina.',
    'company.description2': 'We redefined ourselves in 2024 to accompany a new global era, where artificial intelligence, together with human experience and emotional intelligence, become pillars of our present.',
    'company.description3': 'We integrate EI and AI to empower companies, organizations and businesses that seek to grow with meaning, precision and coherence.',
    'company.description4': 'We fuse emotional intelligence, experience and technology at the service of our clients and their economic evolution.',
    
    // Tabs
    'tabs.who_we_are': 'Who We Are',
    'tabs.vision': 'Vision',
    'tabs.purpose': 'Our Purpose',
    
    // Vision
    'vision.title': 'Vision',
    'vision.description1': 'Equánima Capital is a constantly evolving business services company that incorporates the best of quantum technology, generative AI, intuition and human experience in the integration of economies, organizations and companies aligned with growth and economic expansion.',
    'vision.description2': 'We believe that financial and strategic decisions are made from inner clarity, connection with the present and a clear vision of the individual and collective purpose of each organization.',
    
    // Purpose
    'purpose.title': 'Our Purpose',
    'purpose.description1': 'Elevate the quality of human decisions in the economic world.',
    'purpose.description2': 'Accompany the creation of companies, projects and structures that are prosperous and aligned with the global evolution of the planet.',
    
    // Services
    'services.title': 'Our Differentiator',
    'services.business_advisory': 'Senior Experience',
    'services.business_advisory_desc': 'Partners with decades of experience in structuring, financial markets and business.',
    'services.financial_planning': 'Updated Experience',
    'services.financial_planning_desc': 'Young associates with experience in technology, AI and business.',
    'services.investment_management': 'AI as co-creator',
    'services.investment_management_desc': 'We use artificial intelligence not as just another tool, but as a complementary intelligence that amplifies our vision and precision.',
    'services.strategic_consulting': 'Strategic Consulting',
    
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
    'contact.sending': 'Sending...',
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
