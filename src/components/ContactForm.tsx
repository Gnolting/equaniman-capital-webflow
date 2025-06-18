
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm = () => {
  const { t } = useLanguage();
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
      title: t('contact.success_title'),
      description: t('contact.success_description'),
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            {t('contact.title')}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg animate-fade-in border-pink-200 bg-white">
            <CardHeader className="bg-gradient-to-r from-pink-50 to-pink-100">
              <CardTitle className="text-2xl text-pink-600">
                {t('contact.form_title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-pink-700 font-medium">
                    {t('contact.name_label')}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                    placeholder={t('contact.name_placeholder')}
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-pink-700 font-medium">
                    {t('contact.email_label')}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                    placeholder={t('contact.email_placeholder')}
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-pink-700 font-medium">
                    {t('contact.message_label')}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-2 min-h-[120px] border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                    placeholder={t('contact.message_placeholder')}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-white py-3 text-lg font-semibold transition-all duration-300 bg-pink-500 hover:bg-pink-600"
                >
                  {t('contact.submit_button')}
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
