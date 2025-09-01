/*
 * Footer Component - Clean footer with company branding
 * Features minimal design with copyright and navigation links
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">OTNET</h3>
            <p className="text-cream/80 leading-relaxed">
              Leading provider of enterprise IT solutions, AI products, and bespoke software development services.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-cream/80">
              <li>
                <Link 
                  to="/services/enterprise-it" 
                  className="hover:text-cream transition-colors duration-300"
                >
                  Enterprise IT Solutions
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/ai-products" 
                  className="hover:text-cream transition-colors duration-300"
                >
                  AI Based Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/vision-ai" 
                  className="hover:text-cream transition-colors duration-300"
                >
                  Vision AI Solutions
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/sap-solutions" 
                  className="hover:text-cream transition-colors duration-300"
                >
                  SAP Solutions
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/bespoke-software" 
                  className="hover:text-cream transition-colors duration-300"
                >
                  Bespoke Software Development
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-cream/80">
              <p>F-14, Ground Floor</p>
              <p>Jangpura-Extension</p>
              <p>New Delhi-110014, India</p>
              <p>Supriyo@otnet.in</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-12 pt-8 text-center">
          <p className="text-cream/60">
            © {currentYear} OTNET. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;