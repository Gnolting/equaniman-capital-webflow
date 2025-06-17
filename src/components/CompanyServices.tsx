
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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Company Story */}
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            {t('company.title')}
          </h2>
          <div className="max-w-4xl mx-auto prose prose-lg text-blue-800 space-y-6">
            <p>
              {t('company.description1')}
            </p>
            <p>
              {t('company.description2')}
            </p>
            <p>
              {t('company.description3')}
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-square border-yellow-200">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.9)), url('${service.image}')`
                  }}
                />
                <CardContent className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center text-white">
                  <div className="bg-yellow-500/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 border border-yellow-400/30">
                    <service.icon className="w-8 h-8 text-yellow-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-yellow-100">
                    {service.title}
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed opacity-90">
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
