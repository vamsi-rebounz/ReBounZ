import React from 'react';
import { Hash, Linkedin, Instagram, ArrowUp, Mail, Phone, MapPin, Rocket, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const servicesLinks = [
    { name: 'Custom Software Development', href: '#services' },
    { name: 'Web Applications', href: '#services' },
    { name: 'Mobile Applications', href: '#services' },
    { name: 'Data Engineering', href: '#services' },
    { name: 'Technology Consulting', href: '#services' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Vision', href: '#about' },
    { name: 'Innovation Session', href: '#contact' },
    { name: 'Technology Stack', href: '#services' },
    { name: 'Partnership', href: '#contact' }
  ];
  
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/rebounz-org/', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/re_bounz/', label: 'Instagram' }
  ];

  const contactInfo = [
    { icon: <MapPin size={16} />, text: 'Maryland Heights, Missouri, Saint Louis, United States' },
    { icon: <Phone size={16} />, text: '+1 (314) 498-9373' },
    { icon: <Mail size={16} />, text: 'admin@rebounz.org' }
  ];
  
  return (
    <footer className="bg-neutral-900 text-white geometric-bg">
      {/* Main Footer Content */}
      <div className="container pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Company Info - Takes up more space */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <Rocket size={32} className="text-primary" />
                <span className="font-black text-2xl">
                  <span className="text-primary">ReBoun</span>
                  <span className="text-accent">Z</span>
                </span>
              </div>
              <p className="text-sm text-neutral-400 font-medium">Innovation • Transformation • Future</p>
            </div>
            <p className="text-neutral-400 mb-8 leading-relaxed text-lg max-w-2xl">
              We're building the next generation of software solutions that bridge the gap between enterprise power and startup agility. 
              Innovation meets accessibility in every line of code we write.
            </p>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 text-neutral-400">
                  {info.icon}
                  <span className="text-sm">{info.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  aria-label={link.label}
                  className="bg-neutral-800 hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-neutral-400 hover:text-white p-3 rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-lg"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Links - Combined and organized */}
          <div className="lg:col-span-1">
            <h3 className="font-black text-xl mb-8 border-b border-neutral-700 pb-4">Navigation</h3>
            <div className="grid grid-cols-1 gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-neutral-300 mb-4">Pages</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-neutral-400 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block font-medium"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Services */}
              <div>
                <h4 className="font-semibold text-neutral-300 mb-4">Solutions</h4>
                <ul className="space-y-3">
                  {servicesLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-neutral-400 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block font-medium"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-neutral-500 text-lg">
                &copy; {new Date().getFullYear()} ReBounZ. All rights reserved.
              </p>
              <p className="text-neutral-600 text-sm mt-2">
                Building the future, one innovation at a time.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-8 text-sm text-neutral-500">
              <a href="#" className="hover:text-primary transition-all duration-300 font-medium">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-all duration-300 font-medium">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-all duration-300 font-medium">Cookie Policy</a>
              <a href="#" className="hover:text-primary transition-all duration-300 font-medium">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark p-4 rounded-2xl shadow-2xl transition-all duration-500 focus:outline-none hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;