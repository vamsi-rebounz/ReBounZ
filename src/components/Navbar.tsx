import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-neutral-100 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="logo-container">
          <img 
            src="/icons/logo.jpeg" 
            alt="ReBounZ Logo" 
            className="logo-image"
          />
          <div className="flex flex-col">
            <span className="logo-text">
              <span className="text-primary">ReBoun</span>
              <span className="text-accent">Z</span>
            </span>
            <span className="logo-tagline">Ignite • Innovate • Inspire</span>
          </div>
        </a>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-primary transition-colors relative group ${
                isScrolled ? 'text-neutral-700' : 'text-neutral-800'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact"
            className="btn btn-primary"
          >
            Get Started
          </a>
        </nav>
        
        <button 
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={24} className="text-neutral-700" />
          ) : (
            <Menu size={24} className={`${isScrolled ? 'text-neutral-700' : 'text-neutral-800'}`} />
          )}
        </button>
      </div>
      
      <div 
        className={`lg:hidden fixed top-[72px] left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-b border-neutral-100 transition-transform duration-300 transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container py-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="font-medium text-neutral-700 hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-neutral-50"
            >
              {link.name}
            </a>
          ))}
          <div className="px-4 pt-2">
            <a 
              href="#contact"
              onClick={closeMenu}
              className="btn btn-primary w-full"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;