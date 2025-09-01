/*
 * About Component - Company overview and value proposition
 * Features elegant content layout with professional imagery
 */

import React from 'react';
import { Award, Users, Zap, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description: "Delivering premium quality solutions that exceed expectations"
    },
    {
      icon: <Users size={32} />,
      title: "Expert Team",
      description: "Skilled professionals with deep industry knowledge"
    },
    {
      icon: <Zap size={32} />,
      title: "Innovation",
      description: "Cutting-edge technology solutions for modern challenges"
    },
    {
      icon: <Shield size={32} />,
      title: "Reliability",
      description: "Trusted partner for mission-critical business solutions"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8">
              Why Choose OTNET?
            </h2>
            
            <p className="text-xl text-forest/70 mb-8 leading-relaxed">
              We are a leading technology company specializing in enterprise-grade IT solutions. 
              Our commitment to innovation and excellence has made us a trusted partner for 
              businesses seeking to leverage technology for growth and efficiency.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-forest mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-2">{feature.title}</h3>
                    <p className="text-forest/60 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-forest/10 to-forest/5 rounded-3xl p-12 text-center">
              <div className="mb-8">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Technology Solutions"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              
              <h3 className="text-2xl font-semibold text-forest mb-4">
                Transforming Business Through Technology
              </h3>
              
              <p className="text-forest/70">
                Partner with us to unlock your business potential through innovative IT solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;