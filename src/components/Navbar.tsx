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
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex flex-col items-start">
          <span className="font-bold text-xl">
            <span className="text-primary">ReBoun</span>
            <span className="text-accent">Z</span>
          </span>
          <div className="flex items-center space-x-1 text-[10px] text-neutral-500 mt-0.5">
            <span>Ignite</span>
            <span>·</span>
            <span>Innovate</span>
            <span>·</span>
            <span>Inspire</span>
          </div>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-primary transition-colors ${
                isScrolled ? 'text-neutral-700' : 'text-neutral-800'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="btn btn-primary"
          >
            Get in Touch
          </a>
        </nav>
        
        <button 
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
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
        className={`md:hidden fixed top-[56px] left-0 right-0 bg-white/80 backdrop-blur-lg shadow-md transition-transform duration-300 transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="font-medium text-neutral-700 hover:text-primary transition-colors px-4"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={closeMenu}
            className="btn btn-primary mx-4"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;