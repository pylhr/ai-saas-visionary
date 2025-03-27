
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const elementsRef = useRef<HTMLDivElement>(null);

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

    const revealElements = elementsRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen pt-20 flex items-center bg-gradient-to-br from-aquilonis-blue/95 to-blue-500/90 animated-gradient"
      ref={elementsRef}
    >
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-[15%] w-80 h-80 bg-aquilonis-orange opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-[20%] w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-white staggered-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight reveal">
              Custom AI SaaS, Automation & Intelligent Agents
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl reveal">
              We build AI-powered SaaS solutions, automate workflows, and develop autonomous agents to scale your business.
            </p>
            <div className="flex flex-wrap gap-4 reveal">
              <Link to="/contact" className="button-accent button-hover-effect">
                Get Started
              </Link>
              <button 
                onClick={scrollToServices} 
                className="button-secondary text-white border-white/50 hover:bg-white/10"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end reveal-right">
            <div className="relative">
              <div className="w-full h-full absolute -right-3 -bottom-3 bg-aquilonis-orange/20 rounded-2xl"></div>
              <div className="glass-card bg-white/10 p-6 md:p-8 rounded-2xl w-full max-w-md backdrop-blur-md border border-white/30">
                <div className="mb-6 p-4 bg-white/10 rounded-xl">
                  <div className="h-4 w-3/4 bg-white/30 rounded-full mb-3"></div>
                  <div className="h-4 w-1/2 bg-white/20 rounded-full"></div>
                </div>
                <div className="mb-6 p-4 bg-white/10 rounded-xl">
                  <div className="h-4 w-5/6 bg-white/30 rounded-full mb-3"></div>
                  <div className="h-4 w-2/3 bg-white/20 rounded-full"></div>
                </div>
                <div className="p-4 bg-white/10 rounded-xl">
                  <div className="h-4 w-4/5 bg-white/30 rounded-full mb-3"></div>
                  <div className="h-4 w-1/3 bg-white/20 rounded-full"></div>
                </div>
                <div className="mt-6 ml-auto w-1/2">
                  <div className="h-10 bg-aquilonis-orange/70 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce-gentle">
          <button onClick={scrollToServices} aria-label="Scroll down">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
