
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CompanyServices = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Company Story */}
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {t('company.title')}
          </h2>
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700 space-y-6">
            <p>
              {t('company.description1')}
            </p>
            <p>
              {t('company.description2')}
            </p>
            <p>
              {t('company.description3')}
            </p>
            <p>
              {t('company.description4')}
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {t('vision.title')}
          </h2>
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700 space-y-6">
            <p>
              {t('vision.description1')}
            </p>
            <p>
              {t('vision.description2')}
            </p>
          </div>
        </div>

        {/* Purpose */}
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {t('purpose.title')}
          </h2>
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700 space-y-6">
            <p>
              {t('purpose.description1')}
            </p>
            <p>
              {t('purpose.description2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyServices;
