import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background with overlay gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1500" 
          alt="Technology background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-gray-900/80 to-purple-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500 text-sm font-semibold mb-4">
            Technology News & Insights
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Stay Ahead with the Latest in Tech
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Your daily source for the most important tech news, in-depth analysis, and expert insights from around the globe.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/news" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-medium"
            >
              Explore Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-medium"
            >
              About TechPlus
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-14 -right-14 h-64 w-64 bg-gradient-to-tr from-blue-500/30 to-purple-600/30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;