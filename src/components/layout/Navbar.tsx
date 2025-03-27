
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-aquilonis-blue">Aquilonis<span className="text-aquilonis-orange">AI</span></span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
              Services
            </Link>
            <Link to="/use-cases" className={`nav-link ${isActive('/use-cases') ? 'active' : ''}`}>
              Use Cases
            </Link>
            <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`}>
              Blog
            </Link>
            <Link to="/whitepapers" className={`nav-link ${isActive('/whitepapers') ? 'active' : ''}`}>
              Whitepapers
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="button-accent">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-aquilonis-blue" />
            ) : (
              <Menu className="h-6 w-6 text-aquilonis-blue" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-6 shadow-md rounded-b-xl animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/use-cases" 
                className={`nav-link ${isActive('/use-cases') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Use Cases
              </Link>
              <Link 
                to="/blog" 
                className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/whitepapers" 
                className={`nav-link ${isActive('/whitepapers') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Whitepapers
              </Link>
              <Link 
                to="/contact" 
                className="button-accent w-full text-center" 
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
