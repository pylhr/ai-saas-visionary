
import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-aquilonis-blue to-blue-700 text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step towards optimization, automation, and innovation with our AI solutions.
          </p>
          <Link to="/contact" className="button-accent px-8 py-4 text-lg">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
