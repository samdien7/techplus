import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Mail } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const handleSubscribe = () => {
    const element = document.querySelector('#newsletter');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#newsletter';
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              TechPlus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/news" label="Tech News" />
            <NavLink to="/for-you" label="For You" />
            <NavLink to="/about" label="About" />
            <NavLink to="/contact" label="Contact" />
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleSubscribe}
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Subscribe</span>
            </button>
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" />
            <MobileNavLink to="/news" label="Tech News" />
            <MobileNavLink to="/for-you" label="For You" />
            <MobileNavLink to="/about" label="About" />
            <MobileNavLink to="/contact" label="Contact" />
            <button
              onClick={handleSubscribe}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Subscribe</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

// Desktop NavLink
const NavLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
    (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={`text-base font-medium hover:text-blue-500 transition-colors ${
        isActive
          ? 'text-blue-500 dark:text-blue-400'
          : 'text-gray-800 dark:text-gray-200'
      }`}
    >
      {label}
    </Link>
  );
};

// Mobile NavLink
const MobileNavLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
    (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={`text-lg font-medium py-2 ${
        isActive
          ? 'text-blue-500 dark:text-blue-400'
          : 'text-gray-800 dark:text-gray-200'
      }`}
    >
      {label}
    </Link>
  );
};

export default Header;