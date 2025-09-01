/*
 * Contact Component - Professional contact information and form
 * Features elegant layout with company details and location
 */

import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">Get In Touch</h2>
          <p className="text-xl text-forest/70 max-w-3xl mx-auto">
            Ready to transform your business with our innovative solutions? 
            Let's discuss how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-forest mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-forest/10 p-3 rounded-full">
                  <Mail size={24} className="text-forest" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest mb-2">Email</h4>
                  <a 
                    href="mailto:Supriyo@otnet.in"
                    className="text-forest/70 hover:text-forest transition-colors"
                  >
                    Supriyo@otnet.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-forest/10 p-3 rounded-full">
                  <MapPin size={24} className="text-forest" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest mb-2">Address</h4>
                  <div className="text-forest/70">
                    <p>F-14, Ground Floor</p>
                    <p>Jangpura-Extension</p>
                    <p>New Delhi-110014</p>
                    <p>India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-forest/10">
              <h4 className="font-semibold text-forest mb-4">Business Hours</h4>
              <div className="text-forest/70 space-y-2">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-forest mb-8">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-forest font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-forest/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-forest font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-forest/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-forest font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-forest/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-colors"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-forest font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-forest/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-forest text-cream py-3 rounded-lg font-medium hover:bg-forest/90 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;