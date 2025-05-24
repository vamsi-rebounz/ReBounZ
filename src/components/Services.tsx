import React from 'react';
import { Code, Brain, Globe, BarChart, Database, MessageSquare, Settings, Phone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  useScrollAnimation();
  
  const services = [
    {
      icon: <Code size={32} className="text-primary" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business needs and challenges.'
    },
    {
      icon: <Brain size={32} className="text-primary" />,
      title: 'AI/ML Models',
      description: 'Custom machine learning solutions and AI models to automate processes and gain valuable insights.'
    },
    {
      icon: <Globe size={32} className="text-primary" />,
      title: 'Web Development',
      description: 'Dynamic and responsive websites that showcase your brand and engage your audience.'
    },
    {
      icon: <Phone size={32} className="text-primary" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional performance.'
    },
    {
      icon: <MessageSquare size={32} className="text-primary" />,
      title: 'AI Chatbot Solutions',
      description: 'Intelligent conversational AI systems that enhance customer service and automate interactions.'
    },
    {
      icon: <Database size={32} className="text-primary" />,
      title: 'Data Engineering',
      description: 'Robust data infrastructure and pipelines to support your AI and analytics needs.'
    },
    {
      icon: <BarChart size={32} className="text-primary" />,
      title: 'Data Analytics',
      description: 'Advanced analytics solutions that transform raw data into actionable business insights.'
    },
    {
      icon: <Settings size={32} className="text-primary" />,
      title: 'IT Consulting',
      description: 'Strategic guidance to help you leverage technology for business growth and innovation.'
    }
  ];
  
  return (
    <section id="services" className="section bg-neutral-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="section-title fade-in">Our Services</h2>
        <p className="section-subtitle fade-in px-4">
          We offer a comprehensive range of technology solutions to help your business thrive in today's digital landscape.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="fade-in bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="mb-4 p-2 sm:p-3 bg-blue-50 inline-block rounded-lg">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 fade-in px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8 md:p-12 text-white">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Ready to Transform Your Business?</h3>
              <p className="text-white/80 mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base">
                Our team of experts is ready to help you leverage technology to achieve your business goals. Let's discuss how we can work together.
              </p>
              <a href="#contact" className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-primary font-medium rounded-md hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;