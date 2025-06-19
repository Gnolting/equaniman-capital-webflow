
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CompanyServices = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Users,
      title: t('services.business_advisory'),
      description: t('services.business_advisory_desc'),
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: BookOpen,
      title: t('services.financial_planning'),
      description: t('services.financial_planning_desc'),
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Calendar,
      title: t('services.investment_management'),
      description: t('services.investment_management_desc'),
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Company Story */}
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            {t('company.title')}
          </h2>
          <div className="max-w-4xl mx-auto prose text-gray-700 space-y-4 text-sm md:text-base">
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
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            {t('vision.title')}
          </h2>
          <div className="max-w-4xl mx-auto prose text-gray-700 space-y-4 text-sm md:text-base">
            <p>
              {t('vision.description1')}
            </p>
            <p>
              {t('vision.description2')}
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-square">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 71, 171, 0.8), rgba(138, 43, 226, 0.8), rgba(218, 112, 214, 0.8)), url('${service.image}')`
                  }}
                />
                <CardContent className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center text-white">
                  <div className="bg-gray-500/20 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-gray-300" />
                  </div>
                  <div 
                    className="text-lg font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
                  >
                    {service.title}
                  </div>
                  <p className="text-gray-200 text-xs leading-relaxed opacity-90">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyServices;
