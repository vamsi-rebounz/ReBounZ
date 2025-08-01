import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Play, Zap, Sparkles, Rocket, Target } from 'lucide-react';
import SEO from './SEO';

const Hero = () => {
  useScrollAnimation();
  
  const features = [
    { icon: <Zap size={24} className="text-accent" />, text: 'Enterprise Power' },
    { icon: <Target size={24} className="text-primary" />, text: 'Small Business Focus' },
    { icon: <Sparkles size={24} className="text-secondary" />, text: 'Affordable Solutions' }
  ];
  
  return (
    <>
      <SEO 
        title="ReBounZ | Enterprise Software Made Accessible for Small Businesses"
        description="We bridge the gap between large tech companies and small enterprises by delivering powerful, affordable software solutions that help small businesses compete and grow."
        keywords="enterprise software, small business software, affordable software solutions, custom software development, web applications, mobile applications"
        section="Home"
      />
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 geometric-bg overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl floating-3d"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl floating-3d" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl pulse-3d"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 left-20 w-16 h-16 bg-primary/30 rounded-lg rotating-3d"></div>
        <div className="absolute bottom-32 right-20 w-12 h-12 bg-secondary/30 rounded-full floating-3d" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-accent/40 rounded-lg pulse-3d" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="fade-in text-center lg:text-left">
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full">
                  <Rocket size={20} className="text-primary" />
                  <span className="text-sm font-semibold text-primary">Bridging the Gap</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/10 to-primary/10 px-4 py-2 rounded-full animate-pulse">
                  <Target size={20} className="text-accent" />
                  <span className="text-sm font-semibold text-accent">First Client Success!</span>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                Enterprise Software
                <span className="gradient-text block">Made Accessible</span>
              </h1>
            </div>
            
            <p className="text-xl sm:text-2xl text-neutral-600 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We bridge the gap between large tech companies and small enterprises by delivering powerful, affordable software solutions that help small businesses compete and grow.
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  {feature.icon}
                  <span className="font-semibold text-neutral-700">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16">
              <a href="#services" className="btn btn-primary group">
                View Our Solutions
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="btn btn-outline group">
                <Play size={20} className="mr-2" />
                Our Story
              </a>
              <a href="#saamcars-success" className="btn btn-accent group">
                <Target size={20} className="mr-2" />
                Our First Success
              </a>
            </div>
            
            {/* Innovation Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">5</div>
                <div className="text-sm text-neutral-600 font-medium">Innovators</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-secondary mb-2">∞</div>
                <div className="text-sm text-neutral-600 font-medium">Possibilities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-accent mb-2">1</div>
                <div className="text-sm text-neutral-600 font-medium">Client Success</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - 3D Visual */}
          <div className="fade-in relative">
            <div className="relative">
              {/* Main 3D Card */}
              <div className="card-3d p-10 floating-3d relative">
                {/* Floating Tab */}
                <a href="#saamcars-success" className="absolute -top-4 -left-4 card-3d p-4 floating-3d z-20 cursor-pointer hover:scale-110 transition-transform duration-300" style={{animationDelay: '1.5s'}}>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <Target size={16} className="text-white" />
                    </div>
                    <div className="text-xs font-black text-neutral-900">PROVEN</div>
                    <div className="text-xs font-black text-accent">SUCCESS</div>
                    <div className="text-xs text-neutral-600 font-semibold mt-1">SaamCars LLC</div>
                    <div className="text-xs text-neutral-500">Live & Thriving</div>
                  </div>
                </a>
                <div className="gradient-bg rounded-3xl p-8 text-white mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black mb-4">Built for Small Enterprises</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      We're not just building software—we're crafting solutions that make enterprise-level technology accessible to small businesses.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full pulse-3d"></div>
                    <span className="text-neutral-700 font-semibold">Enterprise-grade solutions</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-secondary to-accent rounded-full pulse-3d" style={{animationDelay: '0.5s'}}></div>
                    <span className="text-neutral-700 font-semibold">Small business pricing</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-accent to-primary rounded-full pulse-3d" style={{animationDelay: '1s'}}></div>
                    <span className="text-neutral-700 font-semibold">Personalized support</span>
                  </div>
                </div>
              </div>
              
              {/* Floating 3D Elements */}
              <div className="absolute -top-6 -right-6 card-3d p-6 floating-3d" style={{animationDelay: '1s'}}>
                <div className="text-center">
                  <Sparkles size={24} className="text-primary mx-auto mb-2" />
                  <div className="text-2xl font-black text-primary">Bridge</div>
                  <div className="text-xs text-neutral-600 font-medium">The Gap</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 card-3d p-6 floating-3d" style={{animationDelay: '2s'}}>
                <div className="text-center">
                  <Rocket size={24} className="text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-black text-secondary">Small</div>
                  <div className="text-xs text-neutral-600 font-medium">Business</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-12 border-2 border-neutral-400 rounded-full flex justify-center pulse-3d">
          <div className="w-2 h-4 bg-gradient-to-b from-primary to-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;