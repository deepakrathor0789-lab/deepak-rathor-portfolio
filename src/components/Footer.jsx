// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaArrowUp } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 px-6 border-t transition-colors duration-300 ${
      darkMode ? 'border-white/10 bg-[#0a0a0a]' : 'border-gray-200 bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        
        {/* ✅ Top Section - Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 pb-8 border-b border-gray-200/20">
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <a 
                    href={`/#${item.toLowerCase()}`} 
                    className={`text-sm transition-colors duration-150 ${
                      darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-500'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              More
            </h4>
            <ul className="space-y-2">
              {['Experience', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`/#${item.toLowerCase()}`} 
                    className={`text-sm transition-colors duration-150 ${
                      darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-500'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Social
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/deepakrathor0789-lab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors duration-150 flex items-center gap-2 ${
                    darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-500'
                  }`}
                >
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/deepak-rathore-282925366/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors duration-150 flex items-center gap-2 ${
                    darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-500'
                  }`}
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:deepakrathor0789@gmail.com" 
                  className={`text-sm transition-colors duration-150 flex items-center gap-2 ${
                    darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-500'
                  }`}
                >
                  <FaEnvelope /> Email
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Tech Stack
            </h4>
            <ul className="space-y-2">
              <li className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <span className="text-yellow-400">⚛</span> React.js
              </li>
              <li className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <span className="text-yellow-400">🎨</span> Tailwind CSS
              </li>
              <li className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <span className="text-yellow-400">⚡</span> Vite
              </li>
            </ul>
          </div>
        </div>

        {/* ✅ Bottom Section - Social Icons & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Icons - Bigger */}
          <div className="flex gap-6">
            <a 
              href="https://github.com/deepakrathor0789-lab" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-3 rounded-xl text-2xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-white/5 text-gray-400 hover:text-yellow-400 hover:bg-white/10 hover:scale-110' 
                  : 'bg-gray-100 text-gray-600 hover:text-yellow-500 hover:bg-gray-200 hover:scale-110'
              }`}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/deepak-rathore-282925366/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-3 rounded-xl text-2xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-white/5 text-gray-400 hover:text-yellow-400 hover:bg-white/10 hover:scale-110' 
                  : 'bg-gray-100 text-gray-600 hover:text-yellow-500 hover:bg-gray-200 hover:scale-110'
              }`}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:deepakrathor0789@gmail.com" 
              className={`p-3 rounded-xl text-2xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-white/5 text-gray-400 hover:text-yellow-400 hover:bg-white/10 hover:scale-110' 
                  : 'bg-gray-100 text-gray-600 hover:text-yellow-500 hover:bg-gray-200 hover:scale-110'
              }`}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className={`text-sm transition-colors duration-150 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              © 2025 <span className="text-yellow-400 font-medium">Deepak Rathore</span>
            </p>
            <p className={`text-xs mt-1 flex items-center justify-center md:justify-end gap-1 ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              Built with <FaHeart className="text-red-500 text-xs mx-0.5" /> using 
              <FaCode className="text-yellow-400 text-xs mx-0.5" /> React & Tailwind
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className={`p-3 rounded-xl text-xl transition-all duration-300 ${
              darkMode 
                ? 'bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20 hover:scale-110' 
                : 'bg-yellow-400/10 text-yellow-500 hover:bg-yellow-400/20 hover:scale-110'
            }`}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;