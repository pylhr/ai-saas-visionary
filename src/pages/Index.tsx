
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
