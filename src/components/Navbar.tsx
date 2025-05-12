import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

interface NavItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

interface NavbarProps {
  title: string;
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ title, navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Shield size={24} />
            <span>{title}</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'text-cyan-400 font-medium'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
          
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-3 rounded-md transition-all ${
                    location.pathname === item.path
                      ? 'bg-gray-800 text-cyan-400 font-medium'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;