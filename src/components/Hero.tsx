/*
 * Hero Component - Main landing section with video background and elegant introduction
 * Features luxury typography, video background, and call-to-action elements
 * Fixed: Uses consistent layout system eliminating black gap issues
 */

import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Video Background - perfectly coordinated with header */}
      <div className="video-container-full">
        {/* Desktop/Laptop video - new video for larger screens */}
        <iframe
          src="https://www.youtube.com/embed/7tT9gl8Dr5Q?autoplay=1&mute=1&loop=1&playlist=7tT9gl8Dr5Q&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1&start=0&end=0"
          className="video-bg-vertical hidden md:block"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          title="OTNET Background Video - Desktop"
        />
        
        {/* Mobile video - original video for mobile devices */}
        <iframe
          src="https://www.youtube.com/embed/rDXRlnVFlnY?autoplay=1&mute=1&loop=1&playlist=rDXRlnVFlnY&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1&start=0&end=0"
          className="video-bg-vertical block md:hidden"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          title="OTNET Background Video - Mobile"
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 z-1"></div>
        
        {/* Gradient overlay for luxury effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/20 via-transparent to-forest/30 z-1"></div>
      </div>

      {/* Content - properly coordinated with header height */}
      <div className="hero-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Enterprise IT
            <span className="block text-white/90">Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed drop-shadow-md">
            Transforming businesses through innovative technology solutions, 
            AI-powered products, and bespoke software development
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={scrollToServices}
              className="bg-white text-forest px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              Explore Our Services
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-forest transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToServices} className="text-white/80 hover:text-white transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;