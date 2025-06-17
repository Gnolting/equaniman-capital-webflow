
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
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: 'linear-gradient(135deg, rgba(0, 71, 171, 0.9) 0%, rgba(0, 71, 171, 0.95) 100%)'
    },
    {
      icon: BookOpen,
      title: t('services.financial_planning'),
      description: t('services.financial_planning_desc'),
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: 'linear-gradient(135deg, rgba(138, 43, 226, 0.9) 0%, rgba(138, 43, 226, 0.95) 100%)'
    },
    {
      icon: Calendar,
      title: t('services.investment_management'),
      description: t('services.investment_management_desc'),
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: 'linear-gradient(135deg, rgba(218, 112, 214, 0.9) 0%, rgba(218, 112, 214, 0.95) 100%)'
    }
  ];

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
          </div>
        </div>

        {/* Services */}
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center"
              style={{
                background: 'linear-gradient(to right, #0047AB, #8A2BE2, #DA70D6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-square">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `${service.gradient}, url('${service.image}')`
                  }}
                />
                <CardContent className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center text-white">
                  <div className="bg-white/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4"
                      style={{
                        background: 'linear-gradient(to right, #0047AB, #8A2BE2, #DA70D6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'brightness(2)'
                      }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-100 text-sm leading-relaxed opacity-90">
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
