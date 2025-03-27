
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Code, Workflow, Bot } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom AI SaaS Development',
    description: 'Tailor-made AI-powered software solutions for business growth.',
    color: 'from-blue-50 to-blue-100 border-blue-200',
    iconColor: 'text-aquilonis-blue',
    link: '/services'
  },
  {
    icon: Workflow,
    title: 'AI Automation & Workflow',
    description: 'Automate repetitive tasks and optimize your operations with intelligent AI workflows.',
    color: 'from-purple-50 to-purple-100 border-purple-200',
    iconColor: 'text-purple-600',
    link: '/services'
  },
  {
    icon: Bot,
    title: 'AI Agent Development',
    description: 'Develop autonomous AI agents to handle customer interactions, data processing, and more.',
    color: 'from-orange-50 to-orange-100 border-orange-200',
    iconColor: 'text-aquilonis-orange',
    link: '/services'
  }
];

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = servicesRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="services" className="section-padding bg-white" ref={servicesRef}>
      <div className="container mx-auto">
        <h2 className="section-title reveal">Our Services</h2>
        <p className="section-subtitle reveal">
          Specialized AI solutions to transform your business and drive innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 staggered-fade-in">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 shadow-lg border bg-gradient-to-br ${service.color} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 reveal`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-white shadow mb-6 ${service.iconColor}`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="mb-6 text-gray-600">{service.description}</p>
              <Link 
                to={service.link}
                className="inline-flex items-center font-medium text-aquilonis-blue hover:underline"
              >
                Learn more
                <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 reveal">
          <Link to="/services" className="button-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
