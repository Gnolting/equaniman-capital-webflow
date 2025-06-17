
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, Calendar, Brain, Target, Lightbulb } from 'lucide-react';
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

  const differentiators = [
    {
      icon: Users,
      title: t('company.differentiator_senior'),
      description: t('company.differentiator_senior_desc')
    },
    {
      icon: Target,
      title: t('company.differentiator_updated'),
      description: t('company.differentiator_updated_desc')
    },
    {
      icon: Brain,
      title: t('company.differentiator_ai'),
      description: t('company.differentiator_ai_desc')
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
            <p>
              {t('company.description4')}
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-16 animate-fade-in">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              {t('company.vision_title')}
            </h3>
            <div className="max-w-4xl mx-auto prose prose-lg text-gray-700 space-y-4">
              <p>
                {t('company.vision_description1')}
              </p>
              <p>
                {t('company.vision_description2')}
              </p>
            </div>
          </div>
        </div>

        {/* Differentiators Section */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('company.differentiators_title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-slate-100 p-3 rounded-full w-fit mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Purpose Section */}
        <div className="mb-16 animate-fade-in">
          <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg p-8 text-white text-center">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 text-gray-200" />
            <h3 className="text-3xl font-bold mb-6">
              {t('company.purpose_title')}
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg text-gray-200">
                {t('company.purpose_description1')}
              </p>
              <p className="text-lg text-gray-200">
                {t('company.purpose_description2')}
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-square">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.9)), url('${service.image}')`
                  }}
                />
                <CardContent className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center text-white">
                  <div className="bg-gray-500/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed opacity-90">
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
