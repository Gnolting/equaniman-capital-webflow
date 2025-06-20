
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TrustedBrands = () => {
  const { t } = useLanguage();
  
  const brands = [
    { name: "Adecoagro", logo: "/lovable-uploads/98f0b463-f89a-4168-abf2-e9899d269173.png" },
    { name: "MSU", logo: "/lovable-uploads/eb725f12-c330-4668-a817-33a1dc47fe9e.png" },
    { name: "Horatech", logo: "/lovable-uploads/c102a9d4-200c-413d-ba4d-cac5addc5691.png" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            {t('brands.title')}
          </h2>
        </div>

        <div className="flex justify-center items-center gap-12 md:gap-16 flex-wrap">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 animate-fade-in hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
