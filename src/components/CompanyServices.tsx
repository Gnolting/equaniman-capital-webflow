import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Users, BookOpen, Calendar, Target, Eye, Heart, Lightbulb, Award, TrendingUp } from 'lucide-react';
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

  const companyHighlights = [
    {
      icon: Target,
      title: "Misión",
      content: t('company.description1')
    },
    {
      icon: Award,
      title: "Experiencia",
      content: t('company.description2')
    },
    {
      icon: Heart,
      title: "Valores",
      content: t('company.description3')
    },
    {
      icon: TrendingUp,
      title: "Crecimiento",
      content: t('company.description4')
    }
  ];

  const visionPoints = [
    {
      icon: Eye,
      title: "Visión Global",
      content: t('vision.description1')
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      content: t('vision.description2')
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Company Story - Interactive Cards */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            {t('company.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {companyHighlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-transparent hover:border-l-blue-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {highlight.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision - Interactive Accordion */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            {t('vision.title')}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="multiple" className="space-y-4">
              {visionPoints.map((point, index) => (
                <AccordionItem 
                  key={index} 
                  value={`vision-${index}`}
                  className="border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-2 rounded-full">
                        <point.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-lg text-left">{point.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="pl-12">
                      <p className="text-gray-700 leading-relaxed">
                        {point.content}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            {/* Vision Summary Card */}
            <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Nuestra Visión en Acción
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Combinamos experiencia, innovación y valores sólidos para crear soluciones financieras que impulsen el crecimiento sostenible de nuestros clientes.
                </p>
              </CardContent>
            </Card>
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
