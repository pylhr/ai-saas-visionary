
import React, { useEffect, useRef } from 'react';
import Layout from '../components/layout/Layout';
import { Code, Workflow, Bot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/home/CTA';

const services = [
  {
    icon: Code,
    title: 'Custom AI SaaS Development',
    description: 'Bespoke AI-powered platforms tailored to your business needs. From intelligent financial products to CRM systems, we build it all.',
    features: [
      'End-to-end SaaS platform development',
      'Scalable cloud infrastructure',
      'Intuitive user interfaces',
      'AI/ML integration for insights',
      'Secure data handling and processing'
    ],
    color: 'from-blue-50 to-blue-100 border-blue-200 hover:shadow-blue-100',
    iconColor: 'text-aquilonis-blue',
    buttonColor: 'button-primary'
  },
  {
    icon: Workflow,
    title: 'AI Automation & Workflow Optimization',
    description: 'Streamline and scale your operations by automating repetitive business processes with AI-driven workflows.',
    features: [
      'Process automation and optimization',
      'Document processing and analysis',
      'Legacy system integration',
      'Custom workflow design',
      'Efficiency analytics and reporting'
    ],
    color: 'from-purple-50 to-purple-100 border-purple-200 hover:shadow-purple-100',
    iconColor: 'text-purple-600',
    buttonColor: 'bg-purple-600 text-white rounded-full px-6 py-3 font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5'
  },
  {
    icon: Bot,
    title: 'AI Agent Development',
    description: 'Develop autonomous agents for customer service, sales assistance, and data handling with seamless AI integration.',
    features: [
      'Conversational AI agents',
      'Task-specific autonomous systems',
      'Multi-agent orchestration',
      'Human-in-the-loop oversight',
      'Continuous learning and improvement'
    ],
    color: 'from-orange-50 to-orange-100 border-orange-200 hover:shadow-orange-100',
    iconColor: 'text-aquilonis-orange',
    buttonColor: 'button-accent'
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const revealElements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-aquilonis-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">Tailored AI Solutions for Modern Businesses</h1>
            <p className="text-xl text-blue-100 mb-8 reveal">
              We deliver innovative AI products and automation to streamline operations and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white" ref={sectionRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`order-2 lg:order-${index % 2 === 0 ? 2 : 1}`}>
                  <div className={`rounded-2xl p-10 shadow-lg border bg-gradient-to-br ${service.color} transition-all duration-300 h-full ${index % 2 === 0 ? 'reveal-right' : 'reveal-left'}`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-white shadow mb-6 ${service.iconColor}`}>
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="mb-6 text-gray-600">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 mt-1 text-green-500">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className={service.buttonColor}>
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className={`order-1 lg:order-${index % 2 === 0 ? 1 : 2} ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <p className="mb-8">
                    Our expert team works closely with you to understand your unique business challenges and objectives. We then develop custom AI solutions that address your specific needs and deliver measurable results.
                  </p>
                  <Link to="/use-cases" className="inline-flex items-center font-medium text-aquilonis-blue hover:underline group">
                    View related use cases
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
};

export default Services;
