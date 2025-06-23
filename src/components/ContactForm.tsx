
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Sending contact form data:', formData);
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('Email sent successfully:', data);

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            {t('contact.title')}
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="shadow-lg animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                {t('contact.form_title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label 
                    htmlFor="name" 
                    className="text-white font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-2 py-1 rounded text-sm"
                  >
                    {t('contact.name_label')}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 text-sm"
                    placeholder={t('contact.name_placeholder')}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label 
                    htmlFor="email" 
                    className="text-white font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-2 py-1 rounded text-sm"
                  >
                    {t('contact.email_label')}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 text-sm"
                    placeholder={t('contact.email_placeholder')}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label 
                    htmlFor="message" 
                    className="text-white font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-2 py-1 rounded text-sm"
                  >
                    {t('contact.message_label')}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-2 min-h-[100px] text-sm"
                    placeholder={t('contact.message_placeholder')}
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full text-white py-2 text-base font-semibold transition-all duration-300"
                  style={{
                    background: 'linear-gradient(to right, #0047AB, #8A2BE2, #DA70D6)',
                    backgroundSize: '200% 100%',
                    transition: 'background-position 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundPosition = 'right center';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundPosition = 'left center';
                    }
                  }}
                >
                  {isSubmitting ? t('contact.sending') : t('contact.submit_button')}
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
