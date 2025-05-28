
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CompanyServices from '../components/CompanyServices';
import TrustedBrands from '../components/TrustedBrands';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <CompanyServices />
        <TrustedBrands />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
