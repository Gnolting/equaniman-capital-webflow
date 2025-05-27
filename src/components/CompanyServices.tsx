
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, Calendar } from 'lucide-react';

const CompanyServices = () => {
  const services = [
    {
      icon: Users,
      title: "Asesoría Empresarial",
      description: "Consultoría estratégica para optimizar la estructura financiera de su empresa y maximizar la rentabilidad."
    },
    {
      icon: BookOpen,
      title: "Planificación Financiera",
      description: "Desarrollo de planes financieros personalizados que se adapten a sus objetivos y horizonte de inversión."
    },
    {
      icon: Calendar,
      title: "Gestión de Inversiones",
      description: "Administración profesional de carteras de inversión con estrategias diversificadas y gestión de riesgos."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Company Story */}
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Nuestra Empresa
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                Equaniman Capital nace de la visión de Marcelo Bosch de democratizar 
                el acceso a asesoría financiera de primer nivel en Argentina. Con más 
                de una década de experiencia en el sector financiero, hemos construido 
                una reputación sólida basada en la confianza, transparencia y resultados.
              </p>
              <p>
                Nuestra sede en Buenos Aires nos posiciona estratégicamente para 
                atender tanto el mercado local como regional, ofreciendo soluciones 
                financieras innovadoras que se adaptan a las dinámicas económicas 
                del mercado argentino e internacional.
              </p>
              <p>
                En Equaniman Capital, creemos que cada cliente merece una estrategia 
                financiera única y personalizada. Nuestro enfoque integral combina 
                análisis técnico riguroso con un profundo entendimiento de los 
                objetivos individuales de cada cliente.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Nuestros Servicios
            </h2>
            <div className="space-y-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-700">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyServices;
