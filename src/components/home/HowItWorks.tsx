
import React, { useEffect, useRef } from 'react';
import { ClipboardList, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Consultation',
    description: 'We start with understanding your business needs and objectives, crafting a roadmap for your AI solution.'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Our expert team builds your custom AI solution, employing best practices and cutting-edge technologies.'
  },
  {
    icon: Rocket,
    title: 'Launch & Scale',
    description: 'We deploy your solution, provide training, and offer ongoing support to help you scale seamlessly.'
  }
];

const HowItWorks = () => {
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
    <section className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-title reveal">How It Works</h2>
        <p className="section-subtitle reveal">
          Our streamlined process ensures successful implementation of AI solutions for your business.
        </p>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center text-aquilonis-blue mb-6 border-4 border-white">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
