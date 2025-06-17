
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-700 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/50f95b09-f301-4671-8f8c-89e730eb6460.png" 
                alt="Equaniman Capital"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 Equaniman Capital. {t('footer.rights')}.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">{t('footer.services_title')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-gray-200 transition-colors cursor-pointer">{t('services.business_advisory')}</li>
              <li className="hover:text-gray-200 transition-colors cursor-pointer">{t('services.financial_planning')}</li>
              <li className="hover:text-gray-200 transition-colors cursor-pointer">{t('services.investment_management')}</li>
              <li className="hover:text-gray-200 transition-colors cursor-pointer">Consultoría Estratégica</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-300">{t('footer.contact_title')}</h4>
            <div className="space-y-2 text-gray-300">
              <p className="hover:text-gray-200 transition-colors">{t('footer.location')}</p>
              <p className="hover:text-gray-200 transition-colors">{t('footer.email')}</p>
              <p className="hover:text-gray-200 transition-colors">{t('footer.hours')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>
            {t('footer.admin_note')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
