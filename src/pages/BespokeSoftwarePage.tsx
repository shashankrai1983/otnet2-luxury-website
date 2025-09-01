/*
 * Bespoke Software Development Page - Custom software solutions
 * Features comprehensive overview of custom development capabilities
 */

import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const BespokeSoftwarePage = () => {
  const features = [
    "Custom Web Application Development",
    "Mobile App Development (iOS & Android)",
    "Desktop Application Solutions",
    "API Development and Integration",
    "Database Design and Optimization",
    "Cloud-Native Application Architecture",
    "Legacy System Modernization",
    "Third-Party System Integration"
  ];

  const benefits = [
    "Perfectly tailored to your business requirements",
    "Full ownership and control of your software",
    "Scalable architecture for future growth",
    "Seamless integration with existing systems",
    "Enhanced security and data protection",
    "Improved operational efficiency and productivity",
    "Competitive advantage through unique features",
    "Ongoing support and maintenance included"
  ];

  const technologies = [
    "React",
    "Node.js",
    "Python",
    "Java",
    ".NET",
    "Flutter",
    "React Native",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes"
  ];

  return (
    <ServicePageLayout
      title="Bespoke Software Development"
      subtitle="Custom software solutions designed specifically for your business"
      description="Get software that fits your business like a glove. Our bespoke development services create tailored solutions that address your unique challenges and drive your business forward with precision and innovation."
      heroImage="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
      features={features}
      benefits={benefits}
      technologies={technologies}
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-forest mb-12 text-center">Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-forest/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-forest">1</span>
              </div>
              <h3 className="text-xl font-semibold text-forest mb-4">Discovery</h3>
              <p className="text-forest/70">
                Understanding your business needs, goals, and technical requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-forest/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-forest">2</span>
              </div>
              <h3 className="text-xl font-semibold text-forest mb-4">Design</h3>
              <p className="text-forest/70">
                Creating detailed specifications, architecture, and user experience design
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-forest/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-forest">3</span>
              </div>
              <h3 className="text-xl font-semibold text-forest mb-4">Development</h3>
              <p className="text-forest/70">
                Agile development with regular updates and continuous feedback
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-forest/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-forest">4</span>
              </div>
              <h3 className="text-xl font-semibold text-forest mb-4">Deployment</h3>
              <p className="text-forest/70">
                Seamless deployment with training, support, and ongoing maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-forest mb-12 text-center">Solution Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-forest mb-6">Web Applications</h3>
              <ul className="space-y-3 text-forest/70">
                <li>• Progressive Web Apps (PWA)</li>
                <li>• E-commerce Platforms</li>
                <li>• Content Management Systems</li>
                <li>• Business Portals</li>
                <li>• SaaS Applications</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-forest mb-6">Mobile Applications</h3>
              <ul className="space-y-3 text-forest/70">
                <li>• Native iOS and Android Apps</li>
                <li>• Cross-Platform Solutions</li>
                <li>• Enterprise Mobile Apps</li>
                <li>• IoT Mobile Interfaces</li>
                <li>• Offline-Capable Applications</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-forest mb-6">Enterprise Systems</h3>
              <ul className="space-y-3 text-forest/70">
                <li>• ERP Solutions</li>
                <li>• CRM Systems</li>
                <li>• Workflow Management</li>
                <li>• Business Intelligence Tools</li>
                <li>• Integration Platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default BespokeSoftwarePage;