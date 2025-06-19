
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, BookOpen, Calendar, Eye, MessageSquareMore } from 'lucide-react';
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Minimalist Company Information Tabs */}
        <div className="mb-20 animate-fade-in">
          <Tabs defaultValue="quienes-somos" className="w-full">
            {/* Simple tab navigation */}
            <TabsList className="grid w-full grid-cols-3 mb-12 h-14 bg-gray-50 rounded-full p-1">
              <TabsTrigger 
                value="quienes-somos" 
                className="rounded-full text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4" />
                Quiénes Somos
              </TabsTrigger>
              <TabsTrigger 
                value="vision" 
                className="rounded-full text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                Visión
              </TabsTrigger>
              <TabsTrigger 
                value="proposito" 
                className="rounded-full text-sm font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquareMore className="w-4 h-4" />
                Propósito
              </TabsTrigger>
            </TabsList>

            {/* Clean content areas */}
            <TabsContent value="quienes-somos" className="mt-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-light mb-8 text-gray-900">
                  {t('company.title')}
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">{t('company.description1')}</p>
                  <p>{t('company.description2')}</p>
                  <p>{t('company.description3')}</p>
                  <p>{t('company.description4')}</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vision" className="mt-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-light mb-8 text-gray-900">
                  {t('vision.title')}
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">{t('vision.description1')}</p>
                  <p>{t('vision.description2')}</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="proposito" className="mt-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-light mb-8 text-gray-900">
                  Nuestro Propósito
                </h2>
                <div className="space-y-8">
                  <p className="text-xl font-light text-gray-800 leading-relaxed">
                    Elevar la calidad de las decisiones humanas en el mundo económico.
                  </p>
                  <div className="w-12 h-px bg-gray-300 mx-auto"></div>
                  <p className="text-gray-600 leading-relaxed">
                    Asistir en la creación de empresas, proyectos y estructuras prósperas y alineadas con la evolución global del planeta.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Minimalist Services Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-light text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <div className="w-12 h-px bg-gray-300 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group border-0 shadow-none hover:shadow-lg transition-all duration-500 bg-gray-50 hover:bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <service.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
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
