import React from 'react';
import { Lightbulb, Users, Target, Shield, Award, TrendingUp, Rocket, Sparkles, Zap, Heart, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  useScrollAnimation();
  
  const values = [
    {
      icon: <Rocket size={32} className="text-primary" />,
      title: 'Bridge the Gap',
      description: 'We connect the power of enterprise software with the accessibility needs of small businesses.'
    },
    {
      icon: <Sparkles size={32} className="text-primary" />,
      title: 'Affordable Excellence',
      description: 'Delivering enterprise-grade solutions at prices that make sense for small enterprises.'
    },
    {
      icon: <Zap size={32} className="text-primary" />,
      title: 'Quick Implementation',
      description: 'We move fast to deliver solutions that small businesses can start using immediately.'
    },
    {
      icon: <Heart size={32} className="text-primary" />,
      title: 'Small Business Focus',
      description: 'We understand the unique challenges small enterprises face and design solutions specifically for them.'
    }
  ];

  const achievements = [
    { icon: <Award size={24} className="text-accent" />, text: 'First Client Success' },
    { icon: <TrendingUp size={24} className="text-accent" />, text: 'SaamCars Launch' },
    { icon: <Users size={24} className="text-accent" />, text: '5 Dedicated Founders' }
  ];
  
  return (
    <section id="about" className="section bg-white geometric-bg">
      <div className="container">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full mb-8">
            <Sparkles size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Our Mission</span>
          </div>
          
          <h2 className="section-title fade-in">
            Bridging the <span className="gradient-text">Technology Gap</span>
          </h2>
          <p className="section-subtitle fade-in">
            We're a team of five visionaries who saw a critical gap in the market. Small enterprises were being left behind by expensive enterprise software solutions, while large tech companies focused only on big corporations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="fade-in space-y-8">
            <div className="mb-8">
              <h3 className="text-4xl font-black text-neutral-900 mb-4">The Problem We Solve</h3>
              <p className="text-neutral-600 text-lg">Where enterprise power meets small business needs</p>
            </div>
            
            <p className="text-xl text-neutral-700 leading-relaxed">
              In a world where enterprise software was either too expensive or too complex for small businesses, we saw an opportunity to create something different. 
              Something that combines the power of enterprise solutions with the accessibility and affordability that small enterprises need.
            </p>
            
            <p className="text-xl text-neutral-700 leading-relaxed">
              We're not just building software—we're bridging the gap between large tech companies and small enterprises. 
              Every solution we create is designed to be powerful, affordable, and accessible to businesses of all sizes.
            </p>

            {/* Achievements */}
            <div className="flex flex-wrap gap-8 pt-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg">
                  {achievement.icon}
                  <span className="text-neutral-700 font-semibold">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="fade-in relative">
            <div className="card-3d p-10 relative overflow-hidden floating-3d">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-8 text-neutral-900">Our Mission</h3>
                <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                  To bridge the gap between large tech companies and small enterprises by delivering powerful, affordable software solutions that help small businesses compete and grow.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full pulse-3d"></div>
                    <span className="text-neutral-700 font-semibold">Enterprise-grade solutions</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-secondary to-accent rounded-full pulse-3d" style={{animationDelay: '0.5s'}}></div>
                    <span className="text-neutral-700 font-semibold">Small business pricing</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full pulse-3d" style={{animationDelay: '1s'}}></div>
                    <span className="text-neutral-700 font-semibold">Personalized support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="fade-in">
          <h3 className="text-4xl font-black mb-16 text-center text-neutral-900">Why We're Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="card-3d p-8 hover:shadow-3xl transition-all duration-700 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-8 p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl w-fit group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-black mb-4 text-neutral-900 group-hover:text-primary transition-colors">{value.title}</h4>
                <p className="text-neutral-600 leading-relaxed text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* SaamCars Project Showcase */}
        <div id="saamcars-success" className="fade-in mt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/10 to-primary/10 px-6 py-3 rounded-full mb-8">
              <Award size={20} className="text-accent" />
              <span className="text-sm font-semibold text-accent">Our First Success</span>
            </div>
            <h3 className="text-4xl font-black mb-6 text-neutral-900">SaamCars LLC - Vehicle Management System</h3>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our first client project that proves our vision works. A comprehensive vehicle inventory management system for a trusted car dealership.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <div className="card-3d p-10 relative overflow-hidden floating-3d">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full translate-y-16 -translate-x-16"></div>
                <div className="relative z-10">
                  <h4 className="text-3xl font-black mb-6 text-neutral-900">What We Built</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full pulse-3d"></div>
                      <span className="text-neutral-700 font-semibold">Full-featured vehicle showcase and management</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full pulse-3d" style={{animationDelay: '0.5s'}}></div>
                      <span className="text-neutral-700 font-semibold">Admin dashboard for inventory control</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-secondary to-accent rounded-full pulse-3d" style={{animationDelay: '1s'}}></div>
                      <span className="text-neutral-700 font-semibold">Secure backend with user authentication</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full pulse-3d" style={{animationDelay: '1.5s'}}></div>
                      <span className="text-neutral-700 font-semibold">Responsive design for mobile & desktop</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full pulse-3d" style={{animationDelay: '2s'}}></div>
                      <span className="text-neutral-700 font-semibold">Payment system integration (coming soon)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="fade-in space-y-8">
              <div>
                <h4 className="text-3xl font-black mb-4 text-neutral-900">The Result</h4>
                <p className="text-xl text-neutral-700 leading-relaxed">
                  SaamCars LLC now has a powerful, professional web application that showcases their vehicle inventory with enterprise-grade features, 
                  all delivered at a price point that makes sense for their business size.
                </p>
              </div>
              
              <div>
                <h4 className="text-3xl font-black mb-4 text-neutral-900">Technology Stack</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-semibold rounded-full">ReactJS</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-secondary/10 to-accent/10 text-secondary font-semibold rounded-full">PostgreSQL</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-accent/10 to-primary/10 text-accent font-semibold rounded-full">TypeScript</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-semibold rounded-full">Node.js</span>
                </div>
              </div>
              
              <div className="pt-6">
                <a 
                  href="https://www.saamcars.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center"
                >
                  <Globe size={20} className="mr-3" />
                  Visit SaamCars Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;