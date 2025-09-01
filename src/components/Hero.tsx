/*
 * Hero Component - Main landing section with video background and elegant introduction
 * Features luxury typography, video background, and call-to-action elements
 * Fixed: Uses consistent layout system eliminating black gap issues
 */

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const desktopVideoRef = useRef<HTMLIFrameElement>(null);
  const mobileVideoRef = useRef<HTMLIFrameElement>(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Attempt to trigger video play after user interaction
    const handleUserInteraction = () => {
      if (!userInteracted) {
        setUserInteracted(true);
        
        // Force iframe reload to trigger autoplay
        [desktopVideoRef.current, mobileVideoRef.current].forEach(ref => {
          if (ref && ref.src) {
            const src = ref.src;
            ref.src = '';
            setTimeout(() => {
              if (ref) {
                ref.src = src;
              }
            }, 100);
          }
        });
        
        // Remove listeners after first interaction
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      }
    };

    document.addEventListener('click', handleUserInteraction, { passive: true });
    document.addEventListener('touchstart', handleUserInteraction, { passive: true });
    document.addEventListener('keydown', handleUserInteraction, { passive: true });

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [userInteracted]);

  return (
    <section id="home" className="hero-section">
      {/* Video Background - perfectly coordinated with header */}
      <div className="video-container-full">
        {/* Desktop/Laptop video - new video for larger screens */}
        <iframe
          ref={desktopVideoRef}
          src="https://www.youtube.com/embed/rDXRlnVFlnY?autoplay=1&mute=1&loop=1&playlist=rDXRlnVFlnY&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&origin=https://aesthetic-pavlova-a22a6a.netlify.app"
          className="video-bg-vertical hidden md:block"
          allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
          sandbox="allow-scripts allow-same-origin allow-presentation"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={false}
          loading="eager"
          title="OTNET Background Video - Desktop"
          onError={() => setVideoFailed(true)}
        />
        
        {/* Mobile video - original video for mobile devices */}
        <iframe
          ref={mobileVideoRef}
          src="https://www.youtube.com/embed/rDXRlnVFlnY?autoplay=1&mute=1&loop=1&playlist=rDXRlnVFlnY&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&origin=https://aesthetic-pavlova-a22a6a.netlify.app"
          className="video-bg-vertical block md:hidden"
          allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
          sandbox="allow-scripts allow-same-origin allow-presentation"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={false}
          loading="eager"
          title="OTNET Background Video - Mobile"
          onError={() => setVideoFailed(true)}
        />
        
        {/* Fallback background if video fails */}
        {videoFailed && (
          <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest/80 to-forest">
            <div className="absolute inset-0 opacity-20 bg-pattern"></div>
          </div>
        )}
        
        {/* User interaction hint for video */}
        {!userInteracted && !videoFailed && (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/60 text-sm animate-pulse z-10">
            Click anywhere to enable video
          </div>
        )}
        
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