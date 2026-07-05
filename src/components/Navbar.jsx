// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/#home', id: 'home' },
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Skills', href: '/#skills', id: 'skills' },
    { name: 'Experience', href: '/#experience', id: 'experience' },
    { name: 'Projects', href: '/#projects', id: 'projects' },
    { name: 'Education', href: '/#education', id: 'education' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        darkMode 
          ? scrolled 
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20' 
            : 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5'
          : scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/5 border-b border-gray-200/50' 
            : 'bg-white/80 backdrop-blur-md border-b border-gray-200/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* ✅ Logo with "Portfolio" */}
          <a 
            href="/#home" 
            className="group flex items-center gap-2 text-xl font-bold transition-all duration-300"
            onClick={closeMenu}
          >
            <span className="text-2xl">💼</span>
            <span className={`${
              darkMode 
                ? 'text-white group-hover:text-yellow-400' 
                : 'text-gray-900 group-hover:text-yellow-500'
            } transition-colors duration-300`}>
              Personal
            </span>
           <span className={`${
              darkMode 
                ? 'text-white group-hover:text-yellow-400' 
                : 'text-gray-900 group-hover:text-yellow-500'
            } transition-colors duration-300`}>
              Portfolio
            </span>
            {/* ✅ "Portfolio" added here */}
           
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? darkMode 
                      ? 'text-yellow-400 bg-yellow-400/10' 
                      : 'text-yellow-500 bg-yellow-400/10'
                    : darkMode 
                      ? 'text-gray-300 hover:text-yellow-400 hover:bg-white/5' 
                      : 'text-gray-700 hover:text-yellow-500 hover:bg-gray-100'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"></span>
                )}
              </a>
            ))}
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`ml-2 p-2.5 rounded-xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20 hover:scale-110' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-110'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-yellow-400/10 text-yellow-400' 
                  : 'bg-gray-100 text-gray-700'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
            
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-xl text-2xl transition-all duration-300 ${
                darkMode 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`py-4 space-y-1 border-t ${
            darkMode ? 'border-white/10' : 'border-gray-200'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? darkMode 
                      ? 'text-yellow-400 bg-yellow-400/10' 
                      : 'text-yellow-500 bg-yellow-400/10'
                    : darkMode 
                      ? 'text-gray-300 hover:text-yellow-400 hover:bg-white/5' 
                      : 'text-gray-700 hover:text-yellow-500 hover:bg-gray-50'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="ml-2 text-yellow-400">✦</span>
                )}
              </a>
            ))}
            
            <div className="flex gap-3 px-4 pt-4 mt-2 border-t border-gray-200/20">
              <a 
                href="https://github.com/deepakrathor0789-lab" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-xl transition-all duration-300 ${
                  darkMode 
                    ? 'text-gray-400 hover:text-yellow-400 hover:bg-white/5' 
                    : 'text-gray-500 hover:text-yellow-500 hover:bg-gray-100'
                }`}
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/deepak-rathore-282925366/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-xl transition-all duration-300 ${
                  darkMode 
                    ? 'text-gray-400 hover:text-yellow-400 hover:bg-white/5' 
                    : 'text-gray-500 hover:text-yellow-500 hover:bg-gray-100'
                }`}
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;