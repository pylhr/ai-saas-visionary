
import React, { useEffect, useRef } from 'react';
import { ClipboardList, Code, Rocket } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal bg-clip-text text-transparent bg-gradient-to-r from-aquilonis-blue to-blue-600">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto reveal">
            Our streamlined process ensures successful implementation of AI solutions for your business.
          </p>
        </div>

        <div className="relative">
          {/* Connection line with gradient */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-aquilonis-blue/20 via-aquilonis-blue/40 to-aquilonis-blue/20 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 relative z-10">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className={`reveal border-none shadow-lg overflow-hidden bg-white hover:shadow-xl transition-all duration-500 ${
                  index === 1 ? 'md:transform md:-translate-y-4' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${
                      index === 0 ? 'from-blue-500 to-aquilonis-blue' : 
                      index === 1 ? 'from-indigo-500 to-blue-600' : 
                      'from-aquilonis-orange to-amber-500'
                    } flex items-center justify-center text-white mb-6 transform hover:scale-105 transition-transform duration-300 shadow-md`}>
                      <step.icon size={32} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
