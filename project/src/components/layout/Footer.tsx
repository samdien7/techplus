import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Twitter, Facebook, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="h-7 w-7 text-blue-500" />
              <span className="text-xl font-bold text-white">
                TechPlus
              </span>
            </Link>
            <p className="mt-4 text-sm">
              Your daily dose of tech news, insights, and innovations from around the globe.
            </p>
            <div className="mt-6 flex space-x-4">
              <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="#" icon={<Facebook size={18} />} label="Facebook" />
              <SocialLink href="#" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/news" label="Tech News" />
              <FooterLink to="/for-you" label="For You" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/contact" label="Contact" />
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <FooterLink to="/news?category=ai" label="AI" />
              <FooterLink to="/news?category=gadgets" label="Gadgets" />
              <FooterLink to="/news?category=mobile" label="Mobile" />
              <FooterLink to="/news?category=startups" label="Startups" />
              <FooterLink to="/news?category=reviews" label="Reviews" />
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to get the latest tech news delivered to your inbox.
            </p>
            <form className="mt-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full text-gray-800 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md flex items-center"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} TechPlus. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Footer Link Component
const FooterLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  return (
    <li>
      <Link to={to} className="text-sm hover:text-blue-400 transition-colors">
        {label}
      </Link>
    </li>
  );
};

// Social Link Component
const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ 
  href, 
  icon,
  label
}) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="hover:text-blue-400 transition-colors"
    >
      {icon}
    </a>
  );
};

export default Footer;