import React from 'react';
import { Hash, Facebook, Twitter, Linkedin, Instagram, ArrowUp, Contact } from 'lucide-react';

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
    { name: 'Custom Software', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' }
  ];
  
  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' }
  ];
  
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Hash size={32} className="text-primary mr-2" />
              <span className="font-bold text-xl">
                <span className="text-primary">ReBoun</span>
                <span className="text-accent">Z</span>
              </span>
            </div>
            <p className="text-neutral-400 mb-6">
              Transforming ideas into reality through cutting-edge technology solutions.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  aria-label={link.label}
                  className="bg-neutral-800 hover:bg-primary text-neutral-400 hover:text-white p-2 rounded-full transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-neutral-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-400 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-neutral-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-400 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-neutral-700 pb-2">Newsletter</h3>
            <p className="text-neutral-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow p-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary bg-neutral-800 text-white"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark p-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} ReBounZ. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-neutral-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary-dark p-2 rounded-full shadow-md transition-colors focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="text-white" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;