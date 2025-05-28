
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Here you would typically send the data to your backend
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contacta con Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para optimizar su estrategia financiera? Contáctenos hoy mismo 
            para una consulta personalizada con Marcelo Bosch.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Envíanos un Mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Nombre Completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    placeholder="Ingrese su nombre completo"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Correo Electrónico
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    placeholder="su@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-2 min-h-[120px]"
                    placeholder="Cuéntenos sobre sus necesidades financieras..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-slate-600 hover:bg-slate-700 text-white py-3 text-lg font-semibold"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
