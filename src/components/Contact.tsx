import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, MessageSquare, Sparkles, Rocket, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: 'Our Location',
      details: 'Maryland Heights, Missouri, Saint Louis, United States',
      description: 'Innovation hub in the heart of America'
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: 'Call Us',
      details: '+1 (314) 498-9373',
      description: 'Let\'s discuss your vision'
    },
    {
      icon: <Mail size={24} className="text-primary" />,
      title: 'Email Us',
      details: 'admin@rebounz.org',
      description: 'We respond within 4 hours'
    }
  ];
  
  const inquiryTypes = [
    'Project Discussion',
    'Innovation Consultation',
    'Technology Partnership',
    'Product Development',
    'Strategic Planning',
    'General Inquiry',
    'Other'
  ];
  
  return (
    <section id="contact" className="section bg-neutral-50 geometric-bg">
      <div className="container">
        <div className="text-center mb-20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full">
              <Rocket size={20} className="text-primary" />
              <span className="text-sm font-semibold text-primary">Get Started</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent/10 to-primary/10 px-6 py-3 rounded-full animate-pulse">
              <Target size={20} className="text-accent" />
              <span className="text-sm font-semibold text-accent">Join Our Success Story</span>
            </div>
          </div>
          
          <h2 className="section-title fade-in">Let's Build Something Amazing</h2>
          <p className="section-subtitle fade-in">
            Ready to transform your vision into reality? Let's discuss how we can create innovative solutions that drive your business forward.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information */}
          <div className="lg:col-span-1 fade-in">
            <div className="card-3d p-10 h-full floating-3d">
              <div className="mb-10">
                <h3 className="text-3xl font-black text-neutral-900 mb-3">Get in Touch</h3>
                <p className="text-neutral-600 text-lg">Let's innovate together</p>
              </div>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-5">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-neutral-900 mb-2">{info.title}</h4>
                      <p className="text-neutral-700 font-semibold text-lg">{info.details}</p>
                      <p className="text-sm text-neutral-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-neutral-200">
                <div className="flex items-center space-x-4 mb-6">
                  <Clock size={24} className="text-primary" />
                  <h4 className="font-black text-neutral-900">Business Hours</h4>
                </div>
                <div className="space-y-3 text-neutral-600">
                  <p className="text-lg">Monday - Friday: 9:00 AM - 6:00 PM CST</p>
                  <p className="text-lg">Saturday - Sunday: Closed</p>
                  <p className="text-sm text-neutral-500">Emergency support available for active projects</p>
                </div>
              </div>

              {/* Innovation Highlight */}
              <div className="mt-8 p-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl border border-accent/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Sparkles size={24} className="text-accent" />
                  <h4 className="font-black text-neutral-900">Free Innovation Session</h4>
                </div>
                <p className="text-lg text-neutral-600">
                  Get a free 30-minute innovation session to explore possibilities and discuss your project vision.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 fade-in">
            <div className="card-3d p-10">
              <div className="flex items-center mb-10">
                <MessageSquare size={28} className="text-primary mr-4" />
                <div>
                  <h3 className="text-3xl font-black text-neutral-900">Start Your Project</h3>
                  <p className="text-neutral-600 text-lg">Tell us about your vision</p>
                </div>
              </div>
              
              {isSubmitted ? (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 p-8 rounded-3xl mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-black text-lg">Thank you for reaching out!</p>
                      <p className="text-sm">We'll get back to you within 4 hours with innovative ideas and next steps.</p>
                    </div>
                  </div>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-3">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-neutral-200 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-3">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-neutral-200 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 mb-3">
                    Project Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-neutral-200 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg"
                  >
                    <option value="" disabled>Select a project type</option>
                    {inquiryTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-3">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={8}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-neutral-200 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 resize-none text-lg"
                    placeholder="Tell us about your project vision, goals, timeline, and any specific requirements..."
                  ></textarea>
                </div>
                
                <a
                  href="mailto:admin@rebounz.org?subject=Project Inquiry from ReBounZ Website&body=Hello ReBounZ Team,%0D%0A%0D%0AI'm interested in discussing a project with your team.%0D%0A%0D%0APlease provide more information about your services and pricing.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]"
                  className="btn btn-primary w-full sm:w-auto flex items-center justify-center text-lg"
                >
                  <Send size={20} className="mr-3" />
                  Send Message
                </a>
              </form>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default Contact;