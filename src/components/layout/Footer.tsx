
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-aquilonis-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Aquilonis<span className="text-aquilonis-orange">AI</span></h3>
            <p className="text-gray-300 mb-6">
              We build AI-powered SaaS solutions, automate workflows, and develop autonomous agents to scale your business.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:contact@aquilonisai.com"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-gray-300 hover:text-white transition-colors duration-300">Use Cases</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</Link>
              </li>
              <li>
                <Link to="/whitepapers" className="text-gray-300 hover:text-white transition-colors duration-300">Whitepapers</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">Custom AI SaaS</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">AI Automation</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">AI Agent Development</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">Email: contact@aquilonisai.com</p>
            <Link to="/contact" className="inline-block mt-4 py-2 px-6 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Aquilonis AI. All rights reserved.
          </p>
          <div className="flex space-x-4 items-center">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <button 
              onClick={scrollToTop}
              className="ml-6 text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUpCircle size={24} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
