
import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Aquilonis AI transformed our customer service operations with their autonomous AI agents. We've seen a 40% increase in efficiency.",
    author: "Jane Cooper",
    title: "CEO, TechCorp",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    quote: "Their custom SaaS solution helped us analyze customer data in ways we never thought possible. Truly revolutionary.",
    author: "Robert Johnson",
    title: "CTO, DataFlow",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    quote: "The workflow automation system built by Aquilonis reduced our processing time by 65%. Outstanding results!",
    author: "Sarah Williams",
    title: "Operations Director, InnovateCo",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  }
];

const Testimonials = () => {
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
    <section className="section-padding bg-aquilonis-blue text-white" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-title text-white reveal">What Our Clients Say</h2>
        <p className="section-subtitle text-blue-200 reveal">
          Hear about the impact our AI solutions have made for organizations like yours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 flex flex-col h-full reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="text-aquilonis-orange mb-4" size={32} />
              <p className="mb-8 flex-grow">{testimonial.quote}</p>
              <div className="flex items-center mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-blue-200 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
