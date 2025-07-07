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
    },
    {
      icon: BookOpen,
      title: t('services.financial_planning'),
      description: t('services.financial_planning_desc'),
    },
    {
      icon: Calendar,
      title: t('services.investment_management'),
      description: t('services.investment_management_desc'),
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Interactive Company Information Tabs */}
        <div className="mb-16 animate-fade-in">
          <Tabs defaultValue="quienes-somos" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-12 bg-white border border-gray-200 rounded-lg p-1">
              <TabsTrigger 
                value="quienes-somos" 
                className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 data-[state=active]:text-blue-600 data-[state=active]:bg-blue-50 rounded-md transition-all duration-200 hover:text-gray-800"
              >
                <Users className="w-4 h-4" />
                <span>{t('tabs.who_we_are')}</span>
              </TabsTrigger>
              <TabsTrigger 
                value="vision" 
                className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 data-[state=active]:text-blue-600 data-[state=active]:bg-blue-50 rounded-md transition-all duration-200 hover:text-gray-800"
              >
                <Eye className="w-4 h-4" />
                <span>{t('tabs.vision')}</span>
              </TabsTrigger>
              <TabsTrigger 
                value="proposito" 
                className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 data-[state=active]:text-blue-600 data-[state=active]:bg-blue-50 rounded-md transition-all duration-200 hover:text-gray-800"
              >
                <MessageSquareMore className="w-4 h-4" />
                <span>{t('tabs.purpose')}</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="quienes-somos" className="mt-6">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-center">
                    {t('company.title')}
                  </h2>
                  <div className="max-w-4xl mx-auto prose text-gray-700 space-y-4 text-sm md:text-base">
                    <p>{t('company.description1')}</p>
                    <p>{t('company.description2')}</p>
                    <p>{t('company.description3')}</p>
                    <p>{t('company.description4')}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vision" className="mt-6">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-center">
                    {t('vision.title')}
                  </h2>
                  <div className="max-w-4xl mx-auto prose text-gray-700 space-y-4 text-sm md:text-base">
                    <p>{t('vision.description1')}</p>
                    <p>{t('vision.description2')}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="proposito" className="mt-6">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 text-center">
                    {t('purpose.title')}
                  </h2>
                  <div className="max-w-4xl mx-auto prose text-gray-700 space-y-4 text-sm md:text-base">
                    <p className="text-center font-medium text-lg mb-6">
                      {t('purpose.description1')}
                    </p>
                    <p className="text-center">
                      {t('purpose.description2')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Services */}
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-square bg-gradient-to-br from-blue-600 to-blue-800">
                <CardContent className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center text-white">
                  <div className="bg-white/20 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-lg font-bold mb-3 text-white">
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
