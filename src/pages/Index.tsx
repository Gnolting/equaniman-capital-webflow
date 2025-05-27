
import React from 'react';
import HeroSection from '../components/HeroSection';
import CompanyServices from '../components/CompanyServices';
import TrustedBrands from '../components/TrustedBrands';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompanyServices />
      <TrustedBrands />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
