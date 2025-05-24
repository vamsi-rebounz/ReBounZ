import React from 'react';
import { Lightbulb, Users, Target, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  useScrollAnimation();
  
  const values = [
    {
      icon: <Lightbulb size={40} className="text-primary" />,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to create cutting-edge solutions.'
    },
    {
      icon: <Users size={40} className="text-primary" />,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their needs and deliver personalized solutions.'
    },
    {
      icon: <Target size={40} className="text-primary" />,
      title: 'Excellence',
      description: 'We are committed to delivering high-quality products and services that exceed expectations.'
    },
    {
      icon: <Shield size={40} className="text-primary" />,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical principles in all our business practices.'
    }
  ];
  
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-title fade-in">About <span className="text-primary">ReBoun<span className="text-accent">Z</span></span></h2>
        <p className="section-subtitle fade-in">
          We are a forward-thinking technology company dedicated to creating innovative solutions that empower businesses to thrive in the digital age.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-neutral-700 mb-6">
                ReBounZ began as the collective dream of five technologists who saw firsthand how off-the-shelf software and isolated AI tools often fell short of solving real business challenges. United by a passion for problem-solving and a commitment to transparency, we set out to build a company that would do things differently.  
            </p>
            <p className="text-neutral-700">
                From day one, we’ve championed an Agile, CRM-driven approach—keeping our clients deeply involved at every stage, adapting quickly to feedback, and fostering trust through open communication. Today, we’re proud to have grown into a nimble, full-service technology partner that crafts bespoke solutions, blending the best of human creativity and machine intelligence to deliver tangible, long-term value.
            </p>
          </div>
          
          <div className="fade-in relative overflow-hidden rounded-lg shadow-xl bg-gradient-to-br from-primary-light to-primary h-64 md:h-auto">
            <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                <p className="text-white/90">
                At ReBounZ, we empower organizations of all sizes to unlock their full potential with intuitively designed, powerful, and secure AI, cloud, and mobile solutions that transform technology from a mere tool into a strategic partner for smarter innovation and sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center fade-in">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="fade-in bg-neutral-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;