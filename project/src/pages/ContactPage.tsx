import React from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            We'd love to hear from you. Reach out with any questions, feedback, or collaboration inquiries.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfo />
          </div>
          
          {/* Map Section */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-md h-96">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0958100260517!2d-122.4027546!3d37.789355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580627d21d387%3A0x1cee3a17640f8d31!2sTransamerica%20Pyramid!5e0!3m2!1sen!2sus!4v1699548641076!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;