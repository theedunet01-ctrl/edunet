import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import towerBridgeHero from '@/assets/tower-bridge-hero.jpg';

const CinematicHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${towerBridgeHero})`,
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
        }}
      >
        {/* Gradient Overlays for cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-orange-500/10" />
        
        {/* Animated Golden Light Rays */}
        <div className="absolute top-0 right-1/4 w-96 h-96 opacity-30">
          <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 via-orange-400/10 to-transparent rounded-full animate-pulse" 
               style={{ animationDuration: '4s' }} />
        </div>
        
        {/* Water Reflection Shimmer Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-900/20 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"
               style={{ animationDuration: '3s', animationDelay: '1s' }} />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title with Cinematic Animation */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-wider drop-shadow-2xl">
              <span className="block">EDUNET</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                CONSULTANCY
              </span>
            </h1>
          </div>

          {/* Subtitle with Elegant Animation */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-lg font-light">
              We aim to establish a bond between millions of students, their dreams of 
              achieving successful careers, and our partner universities.
            </p>
          </div>

          {/* CTA Buttons with Staggered Animation */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" 
               style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl hover:bg-white/20 hover:scale-105 transform transition-all duration-300 border border-white/20 min-w-[250px] overflow-hidden"
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <Calendar className="mr-3 w-6 h-6" />
              Book Appointment
              
              {/* Hover Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>
          </div>

          {/* Floating Elements for Added Cinematic Feel */}
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" 
               style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
          <div className="absolute top-1/3 right-16 w-1 h-1 bg-yellow-400/50 rounded-full animate-pulse" 
               style={{ animationDuration: '3s', animationDelay: '1.2s' }} />
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-pulse" 
               style={{ animationDuration: '2.5s', animationDelay: '2s' }} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;