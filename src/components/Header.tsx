/*
 * Header Component - Navigation bar with OTNET branding and services dropdown
 * Features smooth scroll navigation, responsive design, and elegant dropdown menu
 * Fixed: Uses consistent header height with CSS custom properties
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    { name: 'Enterprise IT Solutions', path: '/services/enterprise-it' },
    { name: 'AI Based Products', path: '/services/ai-products' },
    { name: 'Vision AI Solutions', path: '/services/vision-ai' },
    { name: 'SAP Solutions', path: '/services/sap-solutions' },
    { name: 'Bespoke Software Development', path: '/services/bespoke-software' }
  ];

  return (
    <header className="header-fixed bg-cream/95 backdrop-blur-sm border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-forest hover:text-forest/80 transition-colors">
              OTNET
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            {isHomePage ? (
              <>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-forest hover:text-forest/80 transition-colors duration-200"
                >
                  Home
                </button>
                
                <div 
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-forest hover:text-forest/80 transition-colors duration-200 flex items-center"
                  >
                    Services
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-forest/10 py-2 z-50">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="block px-4 py-3 text-forest hover:bg-forest/5 transition-colors duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-forest hover:text-forest/80 transition-colors duration-200"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-forest hover:text-forest/80 transition-colors duration-200"
                >
                  Contact
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/"
                  className="text-forest hover:text-forest/80 transition-colors duration-200"
                >
                  Home
                </Link>
                
                <div 
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link 
                    to="/#services"
                    className="text-forest hover:text-forest/80 transition-colors duration-200 flex items-center"
                  >
                    Services
                    <ChevronDown size={16} className="ml-1" />
                  </Link>
                  
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-forest/10 py-2 z-50">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="block px-4 py-3 text-forest hover:bg-forest/5 transition-colors duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <Link 
                  to="/#about"
                  className="text-forest hover:text-forest/80 transition-colors duration-200"
                >
                  About
                </Link>
                <Link 
                  to="/#contact"
                  className="text-forest hover:text-forest/80 transition-colors duration-200"
                >
                  Contact
                </Link>
              </>
            )}
          </nav>

          <button
            className="md:hidden text-forest"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-forest/10 bg-cream/95 backdrop-blur-sm absolute left-0 right-0 top-full">
            <nav className="flex flex-col space-y-4 px-4 sm:px-6 lg:px-8">
              {isHomePage ? (
                <>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-forest hover:text-forest/80 transition-colors duration-200 text-left"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-forest hover:text-forest/80 transition-colors duration-200 text-left"
                  >
                    Services
                  </button>
                  
                  <div className="pl-4 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block text-forest/70 hover:text-forest transition-colors duration-200 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-forest hover:text-forest/80 transition-colors duration-200 text-left"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-forest hover:text-forest/80 transition-colors duration-200 text-left"
                  >
                    Contact
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/"
                    className="text-forest hover:text-forest/80 transition-colors duration-200 text-left"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/#services"
                    className="text-forest hover:text-forest/80 transition-colors duration-200 text-left"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                  
                  <div className="pl-4 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block text-forest/70 hover:text-forest transition-colors duration-200 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  
                  <Link 
                    to="/#about"
                    className="text-forest hover:text-forest/80 transition-colors duration-200 text-left"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    to="/#contact"
                    className="text-forest hover:text-forest/80 transition-colors duration-200 text-left"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;