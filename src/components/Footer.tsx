
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 border-t-4 border-yellow-600">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/3064952f-f6c9-41a3-b308-27c3484324d2.png" 
                alt="Equaniman Capital"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-blue-200 mb-4">
              {t('footer.description')}
            </p>
            <p className="text-blue-300 text-sm">
              © 2024 Equaniman Capital. {t('footer.rights')}.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">{t('footer.services_title')}</h4>
            <ul className="space-y-2 text-blue-200">
              <li className="hover:text-yellow-200 transition-colors cursor-pointer">{t('services.business_advisory')}</li>
              <li className="hover:text-yellow-200 transition-colors cursor-pointer">{t('services.financial_planning')}</li>
              <li className="hover:text-yellow-200 transition-colors cursor-pointer">{t('services.investment_management')}</li>
              <li className="hover:text-yellow-200 transition-colors cursor-pointer">Consultoría Estratégica</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">{t('footer.contact_title')}</h4>
            <div className="space-y-2 text-blue-200">
              <p className="hover:text-yellow-200 transition-colors">{t('footer.location')}</p>
              <p className="hover:text-yellow-200 transition-colors">{t('footer.email')}</p>
              <p className="hover:text-yellow-200 transition-colors">{t('footer.hours')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-300">
          <p>
            {t('footer.admin_note')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
