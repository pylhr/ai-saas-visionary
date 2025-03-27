
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
    <section className="py-24 tech-grid-bg relative overflow-hidden" ref={sectionRef}>
      {/* Decorative circles */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-aquilonis-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 reveal bg-clip-text text-transparent bg-gradient-to-r from-aquilonis-blue via-blue-600 to-blue-500">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto reveal">
            Our streamlined process ensures successful implementation of AI solutions for your business.
          </p>
        </div>

        <div className="relative z-10">
          {/* Steps timeline */}
          <div className="hidden md:block absolute top-1/2 left-[calc(16.67%-16px)] right-[calc(16.67%-16px)] h-1 bg-gradient-to-r from-blue-400/20 via-blue-500/50 to-blue-400/20 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="reveal" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative flex flex-col items-center">
                  {/* Step number */}
                  <div className="absolute top-0 -mt-12 opacity-10 text-8xl font-bold text-gray-500 dark:text-gray-400 select-none">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-8 relative z-10">
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute -inset-1 rounded-full opacity-70 blur-sm bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                      
                      {/* Icon container */}
                      <div className={`relative w-16 h-16 rounded-full flex items-center justify-center ${
                        index === 0 ? 'bg-gradient-to-br from-blue-500 to-aquilonis-blue' : 
                        index === 1 ? 'bg-gradient-to-br from-indigo-500 to-blue-600' : 
                        'bg-gradient-to-br from-blue-500 to-aquilonis-orange'
                      }`}>
                        <step.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <Card className="w-full h-full group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-aquilonis-blue dark:group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
