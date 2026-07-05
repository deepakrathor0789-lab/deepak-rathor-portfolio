import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 px-6 py-3 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'glass shadow-lg' 
            : 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200'
          : darkMode 
            ? 'bg-transparent' 
            : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className={`text-2xl font-bold ${
            darkMode ? 'text-gradient' : 'text-gray-900'
          }`}
        >
          Deepak Rathore<span className={darkMode ? 'text-white' : 'text-gray-700'}></span>
        </motion.h1>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={`#${link.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              className={`transition-colors ${
                darkMode 
                  ? 'hover:text-yellow-400 text-gray-300' 
                  : 'hover:text-yellow-600 text-gray-700'
              }`}
            >
              {link}
            </motion.a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all hover:scale-110 ${
              darkMode 
                ? 'glass' 
                : 'bg-gray-200 shadow-md'
            }`}
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 text-xl" />
            ) : (
              <FaMoon className="text-gray-700 text-xl" />
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode ? 'glass' : 'bg-gray-200 shadow-md'
            }`}
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 text-xl" />
            ) : (
              <FaMoon className="text-gray-700 text-xl" />
            )}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`text-2xl ${darkMode ? 'text-white' : 'text-gray-800'}`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden mt-4 p-4 rounded-lg flex flex-col space-y-4 ${
              darkMode ? 'glass' : 'bg-white/95 backdrop-blur-md shadow-lg border border-gray-200'
            }`}
          >
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`transition-colors ${
                  darkMode 
                    ? 'hover:text-yellow-400 text-gray-300' 
                    : 'hover:text-yellow-600 text-gray-700'
                }`}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;