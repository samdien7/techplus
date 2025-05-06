import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-blue-500 mr-3 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-lg mb-1">Office Address</h3>
            <p className="text-gray-600 dark:text-gray-400">
              123 Tech Avenue <br />
              San Francisco, CA 94105 <br />
              United States
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="h-6 w-6 text-blue-500 mr-3 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-lg mb-1">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">
              <a href="mailto:contact@techplus.com" className="hover:text-blue-500 transition-colors">
                contact@techplus.com
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              <a href="mailto:support@techplus.com" className="hover:text-blue-500 transition-colors">
                support@techplus.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="h-6 w-6 text-blue-500 mr-3 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-lg mb-1">Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">
              <a href="tel:+14155552671" className="hover:text-blue-500 transition-colors">
                +1 (415) 555-2671
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock className="h-6 w-6 text-blue-500 mr-3 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Monday - Friday: 9:00 AM - 6:00 PM <br />
              Saturday: 10:00 AM - 4:00 PM <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          <SocialLink href="#" label="Twitter" />
          <SocialLink href="#" label="Facebook" />
          <SocialLink href="#" label="LinkedIn" />
          <SocialLink href="#" label="Instagram" />
        </div>
      </div>
    </div>
  );
};

const SocialLink: React.FC<{ href: string; label: string }> = ({ href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md text-sm font-medium transition-colors"
    >
      {label}
    </a>
  );
};

export default ContactInfo;