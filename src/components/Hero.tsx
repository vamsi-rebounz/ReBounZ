import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  useScrollAnimation();
  
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 md:w-96 h-60 md:h-96 rounded-full bg-primary opacity-5"></div>
        <div className="absolute top-20 -left-20 w-48 md:w-72 h-48 md:h-72 rounded-full bg-secondary opacity-5"></div>
        <div className="absolute -bottom-40 right-1/3 w-52 md:w-80 h-52 md:h-80 rounded-full bg-accent opacity-5"></div>
      </div>
      
      <div className="container relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="fade-in max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Innovating the Future with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              ReBoun<span className="text-accent">Z</span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 mb-8 sm:mb-10 max-w-3xl mx-auto">
            Transforming ideas into reality through cutting-edge technology solutions that drive business growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services" className="btn btn-primary w-full sm:w-auto min-w-[200px]">
              Explore Our Services
            </a>
            <a href="#about" className="btn btn-outline w-full sm:w-auto min-w-[200px]">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;