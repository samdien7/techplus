import React, { useState } from 'react';
import { Send } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Clear error if any
    setError('');
    
    // Simulate successful submission
    setSubmitted(true);
    
    // Clear input
    setEmail('');
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Story</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Subscribe to our weekly newsletter to get the top tech stories delivered straight to your inbox.
          </p>
          
          {submitted ? (
            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6">
              Thanks for subscribing! We've sent a confirmation to your email.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              {error && (
                <p className="text-red-600 dark:text-red-400 mb-2 text-sm text-left">{error}</p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
                >
                  Subscribe
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
              
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-left">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;