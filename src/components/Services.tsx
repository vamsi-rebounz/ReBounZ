import React from 'react';
import { Code, Globe, Database, Settings, Phone, ArrowRight, Zap, Shield, Users, Sparkles, Rocket, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  useScrollAnimation();
  
  const services = [
    {
      icon: <Code size={32} className="text-primary" />,
      title: 'Custom Software Development',
      description: 'Bespoke software solutions crafted with precision and innovation, designed to transform your business operations.',
      features: ['Scalable Architecture', 'Modern Tech Stack', 'Future-Proof Design'],
      color: 'from-primary to-secondary'
    },
    {
      icon: <Globe size={32} className="text-primary" />,
      title: 'Web Applications',
      description: 'Dynamic web solutions that deliver exceptional user experiences and powerful functionality.',
      features: ['Progressive Web Apps', 'Real-time Features', 'Cloud-Native'],
      color: 'from-accent to-primary'
    },
    {
      icon: <Phone size={32} className="text-primary" />,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile solutions that keep your business connected and accessible.',
      features: ['iOS & Android', 'Offline Capabilities', 'Push Notifications'],
      color: 'from-primary to-secondary'
    },
    {
      icon: <Database size={32} className="text-primary" />,
      title: 'Data Engineering',
      description: 'Robust data infrastructure and pipelines that turn raw information into actionable insights.',
      features: ['Data Processing', 'Analytics Solutions', 'Database Design'],
      color: 'from-accent to-primary'
    },
    {
      icon: <Settings size={32} className="text-primary" />,
      title: 'Technology Consulting',
      description: 'Strategic guidance to help you navigate the digital landscape and choose the right technology path.',
      features: ['Technology Assessment', 'Digital Transformation', 'Innovation Strategy'],
      color: 'from-secondary to-accent'
    }
  ];

  const highlights = [
    { icon: <Rocket size={24} className="text-accent" />, text: 'Innovation Driven' },
    { icon: <Sparkles size={24} className="text-primary" />, text: 'Creative Solutions' },
    { icon: <Zap size={24} className="text-secondary" />, text: 'Lightning Fast' }
  ];
  
  return (
    <section id="services" className="section bg-neutral-50 geometric-bg">
      <div className="container">
        <div className="text-center mb-20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full">
              <Sparkles size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary">Our Solutions</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/10 to-primary/10 px-6 py-3 rounded-full animate-pulse">
              <Target size={20} className="text-accent" />
              <span className="text-sm font-semibold text-accent">Proven with SaamCars</span>
            </div>
          </div>
          
          <h2 className="section-title fade-in">Innovative Solutions</h2>
          <p className="section-subtitle fade-in">
            We craft cutting-edge software solutions that combine innovation with practicality, 
            designed to transform how businesses operate in the digital age.
          </p>
          
          {/* Service Highlights */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                {highlight.icon}
                <span className="font-semibold text-neutral-700">{highlight.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Services Grid - Professional Layout */}
        <div className="space-y-12 mb-20">
          {/* Row 1: Custom Software Development (Featured) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="card-3d p-10 transition-all duration-700 group hover:-translate-y-3" style={{ transitionDelay: '0ms' }}>
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-6 bg-gradient-to-br ${services[0].color} rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
                    {services[0].icon}
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/10 to-primary/10 px-4 py-2 rounded-full">
                      <Target size={16} className="text-accent" />
                      <span className="text-xs font-bold text-accent">PROVEN</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-4 text-neutral-900 group-hover:text-primary transition-colors">
                  {services[0].title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
                  {services[0].description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {services[0].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${services[0].color} rounded-full pulse-3d`} style={{animationDelay: `${featureIndex * 0.2}s`}}></div>
                      <span className="text-sm text-neutral-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-neutral-100">
                  <a href="#contact" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group/link">
                    Learn More
                    <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Web Applications */}
            <div className="card-3d p-8 transition-all duration-700 group hover:-translate-y-3" style={{ transitionDelay: '150ms' }}>
              <div className={`mb-6 p-4 bg-gradient-to-br ${services[1].color} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500`}>
                {services[1].icon}
              </div>
              <h3 className="text-xl font-black mb-4 text-neutral-900 group-hover:text-primary transition-colors">
                {services[1].title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
                {services[1].description}
              </p>
              <div className="space-y-3 mb-6">
                {services[1].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${services[1].color} rounded-full pulse-3d`} style={{animationDelay: `${featureIndex * 0.2}s`}}></div>
                    <span className="text-sm text-neutral-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-neutral-100">
                <a href="#contact" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group/link">
                  Learn More
                  <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Row 2: Mobile, Data, Consulting */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(2).map((service, index) => (
              <div 
                key={index + 2} 
                className="card-3d p-8 transition-all duration-700 group hover:-translate-y-3"
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                              <div className={`mb-6 p-4 bg-gradient-to-br ${service.color} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-black mb-4 text-neutral-900 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full pulse-3d`} style={{animationDelay: `${featureIndex * 0.2}s`}}></div>
                      <span className="text-sm text-neutral-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-neutral-100">
                  <a href="#contact" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group/link">
                    Learn More
                    <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="fade-in">
          <div className="gradient-bg rounded-3xl shadow-3xl overflow-hidden">
            <div className="p-12 md:p-16 text-white relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <div className="mb-6">
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <Target size={20} className="text-white" />
                      <span className="text-sm font-bold text-white">PROVEN SUCCESS</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black mb-6">
                      Ready to Transform Your Business?
                    </h3>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      Let's build something extraordinary together. Our innovative solutions are designed to take your business to the next level, just like we did for SaamCars LLC.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <a href="#contact" className="btn bg-white text-primary hover:bg-neutral-100 font-black">
                      Start Your Journey
                    </a>
                                         <a href="#team" className="btn border-2 border-white text-white hover:bg-white hover:text-primary">
                      Meet Our Team
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                    <h4 className="text-2xl font-black mb-6">Why Choose Innovation?</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-white rounded-full pulse-3d"></div>
                        <span>Cutting-edge technology stack</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-white rounded-full pulse-3d" style={{animationDelay: '0.5s'}}></div>
                        <span>Scalable and future-proof solutions</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-white rounded-full pulse-3d" style={{animationDelay: '1s'}}></div>
                        <span>Innovation-driven development</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-white rounded-full pulse-3d" style={{animationDelay: '1.5s'}}></div>
                        <span>Transformative user experiences</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;