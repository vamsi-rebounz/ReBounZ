import React from 'react';
import { Linkedin, Twitter, Mail, Contact, Award, Users, Star, Heart, Rocket, Sparkles, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import abhinavImage from '/public/images/abhinav.jpg';
import vamsiImage from '/public/images/vamsi.jpg';
import vamsiImage2 from '/public/images/vamsi2.jpg';
import mohanImage from '/public/images/mohan.jpg';
import nikithaImage from '/public/images/nikitha.jpg';
import charithaImage from '/public/images/charitha.jpg';

const Team = () => {
  useScrollAnimation();
  
  const teamMembers = [
    {
      name: 'Abhinav Batchu',
      role: 'CoFounder & CEO',
      image: abhinavImage,
      portfolio: 'https://abhinavbatchu.in/',
      bio: 'Visionary leader driving innovation and strategic growth with a passion for transforming ideas into reality.',
      social: {
        email: 'abhinav.batchu@rebounz.org',
        linkedin: 'https://www.linkedin.com/in/kedareswaraabhinav-batchu/'
      }
    },
    {
      name: 'Vamsi Cheruku',
      role: 'CoFounder & CTO', 
      image: vamsiImage2,
      portfolio: 'https://www.vamsicheruku.com/',
      bio: 'Technology architect crafting scalable solutions and pushing the boundaries of what\'s possible.',
      social: {
        linkedin: 'https://www.linkedin.com/in/vamsi-cheruku-05a19a1b4/',
        email: 'vamsi.cheruku@rebounz.org'
      }
    },
    {
      name: 'Krishna Bojanapalli',
      role: 'CoFounder, CMO & Product Manager',
      image: mohanImage,
      bio: 'Product strategist and marketing innovator focused on creating exceptional user experiences.',
      social: {
        linkedin: 'https://www.linkedin.com/in/mohan-jayaram-krishna-bojanapalli-945788203/',
        email: 'krishna.bojanapalli@rebounz.org'
      }
    },
    {
      name: 'Srivalli Nikitha',
      role: 'CoFounder & CFO',
      image: nikithaImage,
      bio: 'Financial strategist ensuring sustainable growth and strategic resource allocation for innovation.',
      social: {
        linkedin: 'https://www.linkedin.com/in/asrivallinikhitha/',
        email: 'nikitha.anantha@rebounz.org'
      }
    },
    {
      name: 'Charitha Bavirisetti',
      role: 'CoFounder & COO',
      image: charithaImage,
      bio: 'Operations expert optimizing processes and ensuring seamless delivery of innovative solutions.',
      social: {
        linkedin: 'https://www.linkedin.com/in/navya-charitha-bavirisetti-144a85203/',
        email: 'navyacharitha.bavirisetti@rebounz.org'
      }
    }
  ];

  const teamStats = [
    { icon: <Users size={24} className="text-primary" />, value: '5', label: 'Visionary Founders' },
    { icon: <Award size={24} className="text-accent" />, value: '1', label: 'Client Success' },
    { icon: <Star size={24} className="text-primary" />, value: '100%', label: 'Passion Driven' }
  ];
  
  return (
    <section id="team" className="section bg-white geometric-bg">
      <div className="container">
        <div className="text-center mb-20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full">
              <Heart size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary">Our Team</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/10 to-primary/10 px-6 py-3 rounded-full animate-pulse">
              <Target size={20} className="text-accent" />
              <span className="text-sm font-semibold text-accent">SaamCars Success Team</span>
            </div>
          </div>
          
          <h2 className="section-title fade-in">Meet the Visionaries</h2>
          <p className="section-subtitle fade-in">
            Five passionate innovators united by a common dream: to revolutionize how businesses think about and use technology.
          </p>
          
          {/* Team Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {teamStats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                {stat.icon}
                <div className="text-left">
                  <div className="font-black text-xl">{stat.value}</div>
                  <div className="text-sm font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="card-3d p-8 transition-all duration-700 group cursor-pointer"
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => member.portfolio && window.open(member.portfolio, '_blank', 'noopener,noreferrer')}
            >
              <div className="relative mb-8">
                <div className="relative overflow-hidden rounded-3xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-72 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-center space-x-4">
                        <a 
                          href={member.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-primary bg-neutral-800/60 p-3 rounded-2xl transition-all duration-300 hover:bg-white/20 hover:scale-110"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin size={20} />
                        </a>
                        <a 
                          href={`mailto:${member.social.email}`} 
                          className="text-white hover:text-primary bg-neutral-800/60 p-3 rounded-2xl transition-all duration-300 hover:bg-white/20 hover:scale-110"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Mail size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Role Badge */}
                <div className="absolute -bottom-4 left-6 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-2xl text-sm font-black shadow-xl">
                  {member.role}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-neutral-900 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  {member.bio}
                </p>
                

              </div>
            </div>
          ))}
        </div>
        
        <div className="fade-in">
          <div className="card-3d p-12 md:p-16 text-center relative overflow-hidden floating-3d">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full -translate-y-24 translate-x-24"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full translate-y-20 -translate-x-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <Rocket size={40} className="text-primary mr-4" />
                <div className="text-left">
                  <h3 className="text-4xl font-black mb-2 gradient-text">Ready to Innovate?</h3>
                  <p className="text-neutral-600 text-lg">Let's build the future together</p>
                </div>
              </div>
              
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                We're not just a team—we're a collective of dreamers, builders, and innovators. 
                Every project we take on is an opportunity to push boundaries and create something extraordinary.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="#contact" className="btn btn-primary">
                  Start a Project
                </a>
                <a href="mailto:admin@rebounz.org" className="btn border-2 border-white text-white hover:bg-white hover:text-primary">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
