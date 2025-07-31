import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-800 p-2 rounded-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AURA</span>
            </div>
            <p className="text-neutral-400 mb-4 max-w-md">
              Automated Road-Health Analysis system providing municipalities with 
              affordable, reliable, and actionable road infrastructure data through 
              AI-powered sensor fusion technology.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@aura-roads.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 (0) 000-000-0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/problem" className="hover:text-white transition-colors">The Problem</Link></li>
              <li><Link to="/solution" className="hover:text-white transition-colors">Our Solution</Link></li>
              <li><Link to="/why-aura" className="hover:text-white transition-colors">Why AURA?</Link></li>
              <li><Link to="/vision" className="hover:text-white transition-colors">Our Vision</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-neutral-400">
            © 2024 AURA Systems. All rights reserved. | Built for municipal authorities and public works departments.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;