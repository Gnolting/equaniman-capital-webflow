
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, Calendar } from 'lucide-react';

const CompanyServices = () => {
  const services = [
    {
      icon: Users,
      title: "Asesoría Empresarial",
      description: "Consultoría estratégica para optimizar la estructura financiera de su empresa y maximizar la rentabilidad.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: BookOpen,
      title: "Planificación Financiera",
      description: "Desarrollo de planes financieros personalizados que se adapten a sus objetivos y horizonte de inversión.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Calendar,
      title: "Gestión de Inversiones",
      description: "Administración profesional de carteras de inversión con estrategias diversificadas y gestión de riesgos.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Company Story */}
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Nuestra Empresa
          </h2>
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700 space-y-6">
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
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-square">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.9)), url('${service.image}')`
                  }}
                />
                <CardContent className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center text-white">
                  <div className="bg-amber-500/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-amber-400" />
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
