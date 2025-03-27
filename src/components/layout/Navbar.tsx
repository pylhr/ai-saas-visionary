
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-aquilonis-orange blur-md opacity-75"></div>
              <span className="relative text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-aquilonis-blue to-blue-500">
                Aquilonis<span className="text-aquilonis-orange">AI</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/') 
                      ? 'text-aquilonis-blue bg-blue-50 dark:bg-blue-900/20 dark:text-blue-300' 
                      : 'text-gray-700 hover:text-aquilonis-blue hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-blue-900/20'
                  }`}>
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`text-sm ${
                    isActive('/services') ? 'text-aquilonis-blue' : 'text-gray-700 dark:text-gray-200'
                  }`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-aquilonis-blue/50 to-blue-700 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              All AI Services
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Explore our complete range of AI solutions for your business
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link
                          to="/services#custom-ai-saas"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Custom AI SaaS</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                            Tailor-made AI-powered software solutions
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services#ai-automation"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">AI Automation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                            Streamline workflows with intelligent automation
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services#ai-agents"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">AI Agent Development</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                            Build autonomous agents for your business needs
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/use-cases" className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/use-cases') 
                      ? 'text-aquilonis-blue bg-blue-50 dark:bg-blue-900/20 dark:text-blue-300' 
                      : 'text-gray-700 hover:text-aquilonis-blue hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-blue-900/20'
                  }`}>
                    Use Cases
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`text-sm ${
                    isActive('/blog') || isActive('/whitepapers') 
                      ? 'text-aquilonis-blue' 
                      : 'text-gray-700 dark:text-gray-200'
                  }`}>
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-3 p-4">
                      <li>
                        <Link
                          to="/blog"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Blog</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                            Insights and articles on AI technology
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/whitepapers"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Whitepapers</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                            Technical papers and in-depth reports
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-aquilonis-orange to-amber-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
              <button className="relative px-6 py-2.5 bg-white dark:bg-gray-900 rounded-full leading-none flex items-center">
                <span className="text-sm font-medium bg-gradient-to-r from-aquilonis-orange to-amber-500 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </button>
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
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-4 pt-2 pb-6 rounded-b-xl animate-in slide-in-from-top duration-300 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-md ${isActive('/') ? 'bg-blue-50 text-aquilonis-blue dark:bg-blue-900/20 dark:text-blue-300' : 'text-gray-700 dark:text-gray-200'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Services</div>
                <Link 
                  to="/services" 
                  className={`block px-4 py-2 pl-6 rounded-md ${isActive('/services') ? 'bg-blue-50 text-aquilonis-blue dark:bg-blue-900/20 dark:text-blue-300' : 'text-gray-700 dark:text-gray-200'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Services
                </Link>
                <Link 
                  to="/services#custom-ai-saas" 
                  className="block px-4 py-2 pl-6 rounded-md text-gray-600 dark:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Custom AI SaaS
                </Link>
                <Link 
                  to="/services#ai-automation" 
                  className="block px-4 py-2 pl-6 rounded-md text-gray-600 dark:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Automation
                </Link>
                <Link 
                  to="/services#ai-agents" 
                  className="block px-4 py-2 pl-6 rounded-md text-gray-600 dark:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Agent Development
                </Link>
              </div>
              
              <Link 
                to="/use-cases" 
                className={`px-4 py-2 rounded-md ${isActive('/use-cases') ? 'bg-blue-50 text-aquilonis-blue dark:bg-blue-900/20 dark:text-blue-300' : 'text-gray-700 dark:text-gray-200'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Use Cases
              </Link>
              
              <div className="space-y-2">
                <div className="px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Resources</div>
                <Link 
                  to="/blog" 
                  className={`block px-4 py-2 pl-6 rounded-md ${isActive('/blog') ? 'bg-blue-50 text-aquilonis-blue dark:bg-blue-900/20 dark:text-blue-300' : 'text-gray-700 dark:text-gray-200'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/whitepapers" 
                  className={`block px-4 py-2 pl-6 rounded-md ${isActive('/whitepapers') ? 'bg-blue-50 text-aquilonis-blue dark:bg-blue-900/20 dark:text-blue-300' : 'text-gray-700 dark:text-gray-200'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Whitepapers
                </Link>
              </div>
              
              <div className="pt-2">
                <Link 
                  to="/contact" 
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-aquilonis-orange to-amber-500 rounded-md text-white font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
