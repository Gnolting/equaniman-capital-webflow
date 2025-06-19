
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-800 text-white py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <img 
                src="/lovable-uploads/3064952f-f6c9-41a3-b308-27c3484324d2.png" 
                alt="Equaniman Capital"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-300 mb-3 text-sm">
              {t('footer.description')}
            </p>
            <p className="text-slate-400 text-xs">
              © 2024 Equaniman Capital. {t('footer.rights')}.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-gray-300">{t('footer.services_title')}</h4>
            <ul className="space-y-1 text-slate-300 text-sm">
              <li className="hover:text-gray-200 transition-colors cursor-pointer">{t('services.business_advisory')}</li>
              <li className="hover:text-gray-200 transition-colors cursor-pointer">{t('services.financial_planning')}</li>
              <li className="hover:text-gray-200 transition-colors cursor-pointer">{t('services.investment_management')}</li>
              <li className="hover:text-gray-200 transition-colors cursor-pointer">Consultoría Estratégica</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-gray-300">{t('footer.contact_title')}</h4>
            <div className="space-y-1 text-slate-300 text-sm">
              <p className="hover:text-gray-200 transition-colors">{t('footer.location')}</p>
              <p className="hover:text-gray-200 transition-colors">{t('footer.email')}</p>
              <p className="hover:text-gray-200 transition-colors">{t('footer.hours')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-6 pt-6 text-center text-slate-400 text-xs">
          <p>
            {t('footer.admin_note')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
