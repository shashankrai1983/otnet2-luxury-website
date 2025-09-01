/*
 * Services Component - Showcase of OTNET's service offerings
 * Features elegant service cards with hover animations
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Eye, Database, Code, Cog } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Cog size={40} />,
      title: "Enterprise IT Solutions",
      description: "Comprehensive IT infrastructure and management solutions tailored for enterprise needs.",
      link: "/services/enterprise-it"
    },
    {
      icon: <Brain size={40} />,
      title: "AI Based Products",
      description: "Cutting-edge artificial intelligence products that drive innovation and efficiency.",
      link: "/services/ai-products"
    },
    {
      icon: <Eye size={40} />,
      title: "Vision AI Solutions",
      description: "Advanced computer vision and image recognition technologies for various applications.",
      link: "/services/vision-ai"
    },
    {
      icon: <Database size={40} />,
      title: "SAP Solutions",
      description: "Expert SAP implementation, customization, and support services.",
      link: "/services/sap-solutions"
    },
    {
      icon: <Code size={40} />,
      title: "Bespoke Software Development",
      description: "Custom software solutions designed specifically for your business requirements.",
      link: "/services/bespoke-software"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">Our Services</h2>
          <p className="text-xl text-forest/70 max-w-3xl mx-auto">
            We deliver comprehensive technology solutions that empower businesses 
            to thrive in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-forest/5 block group"
            >
              <div className="text-forest mb-6 flex justify-center">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-forest mb-4 text-center group-hover:text-forest/80 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-forest/70 text-center leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-6 text-center">
                <span className="text-forest font-medium group-hover:underline">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;