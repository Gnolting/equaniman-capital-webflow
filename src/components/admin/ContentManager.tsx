
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Save, Edit, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContentManager = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState({
    heroTitle: 'EQUANIMAN CAPITAL',
    heroSubtitle: 'Asesoría financiera profesional que transforma su visión en realidad económica',
    heroDescription: 'Con sede en Buenos Aires, ofrecemos soluciones financieras estratégicas para empresas y particulares que buscan maximizar su potencial económico',
    companyTitle: 'Nuestra Empresa',
    companyDescription: 'Equaniman Capital nace de la visión de Marcelo Bosch de democratizar el acceso a asesoría financiera de primer nivel en Argentina.',
    contactTitle: 'Contacta con Nosotros',
    contactDescription: '¿Listo para optimizar su estrategia financiera? Contáctenos hoy mismo para una consulta personalizada con Marcelo Bosch.',
    email: 'contacto@equanimancapital.com',
    phone: '+54 11 1234-5678',
    address: 'Buenos Aires, Argentina'
  });

  const handleSave = () => {
    // Aquí se integraría con el backend
    console.log('Saving content:', content);
    toast({
      title: "Contenido guardado",
      description: "Los cambios se han guardado exitosamente.",
    });
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setContent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Gestión de Contenido</h1>
          <p className="text-slate-600">Edita el contenido de tu sitio web</p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? <Eye className="mr-2 h-4 w-4" /> : <Edit className="mr-2 h-4 w-4" />}
            {isEditing ? 'Vista previa' : 'Editar'}
          </Button>
          {isEditing && (
            <Button onClick={handleSave} className="bg-amber-600 hover:bg-amber-700">
              <Save className="mr-2 h-4 w-4" />
              Guardar cambios
            </Button>
          )}
        </div>
      </div>

      {/* Hero Section Content */}
      <Card>
        <CardHeader>
          <CardTitle>Sección Principal (Hero)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="heroTitle">Título Principal</Label>
            {isEditing ? (
              <Input
                id="heroTitle"
                value={content.heroTitle}
                onChange={(e) => handleInputChange('heroTitle', e.target.value)}
                className="mt-2"
              />
            ) : (
              <p className="mt-2 p-3 bg-slate-50 rounded">{content.heroTitle}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="heroSubtitle">Subtítulo</Label>
            {isEditing ? (
              <Textarea
                id="heroSubtitle"
                value={content.heroSubtitle}
                onChange={(e) => handleInputChange('heroSubtitle', e.target.value)}
                className="mt-2"
                rows={2}
              />
            ) : (
              <p className="mt-2 p-3 bg-slate-50 rounded">{content.heroSubtitle}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="heroDescription">Descripción</Label>
            {isEditing ? (
              <Textarea
                id="heroDescription"
                value={content.heroDescription}
                onChange={(e) => handleInputChange('heroDescription', e.target.value)}
                className="mt-2"
                rows={3}
              />
            ) : (
              <p className="mt-2 p-3 bg-slate-50 rounded">{content.heroDescription}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Company Section Content */}
      <Card>
        <CardHeader>
          <CardTitle>Sección de Empresa</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="companyTitle">Título de la sección</Label>
            {isEditing ? (
              <Input
                id="companyTitle"
                value={content.companyTitle}
                onChange={(e) => handleInputChange('companyTitle', e.target.value)}
                className="mt-2"
              />
            ) : (
              <p className="mt-2 p-3 bg-slate-50 rounded">{content.companyTitle}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="companyDescription">Descripción de la empresa</Label>
            {isEditing ? (
              <Textarea
                id="companyDescription"
                value={content.companyDescription}
                onChange={(e) => handleInputChange('companyDescription', e.target.value)}
                className="mt-2"
                rows={4}
              />
            ) : (
              <p className="mt-2 p-3 bg-slate-50 rounded">{content.companyDescription}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Información de Contacto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              {isEditing ? (
                <Input
                  id="email"
                  type="email"
                  value={content.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-2"
                />
              ) : (
                <p className="mt-2 p-3 bg-slate-50 rounded">{content.email}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="phone">Teléfono</Label>
              {isEditing ? (
                <Input
                  id="phone"
                  value={content.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-2"
                />
              ) : (
                <p className="mt-2 p-3 bg-slate-50 rounded">{content.phone}</p>
              )}
            </div>
          </div>
          
          <div>
            <Label htmlFor="address">Dirección</Label>
            {isEditing ? (
              <Input
                id="address"
                value={content.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="mt-2"
              />
            ) : (
              <p className="mt-2 p-3 bg-slate-50 rounded">{content.address}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentManager;
