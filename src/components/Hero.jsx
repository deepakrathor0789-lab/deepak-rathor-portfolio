// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Typed from 'typed.js';
import ResumeButton from './ResumeButton';

const Hero = ({ darkMode }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['Java Developer', 'Spring Boot Expert', 'React Developer', 'Full Stack Developer'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });
      return () => typed.destroy();
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      <div className={`absolute inset-0 transition-colors duration-150 ${
        darkMode 
          ? 'bg-gradient-to-br from-yellow-500/10 via-transparent to-purple-500/10' 
          : 'bg-gradient-to-br from-yellow-200/30 via-blue-50/30 to-purple-200/30'
      }`}></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-4xl w-full"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block p-1 rounded-full mb-6 bg-gradient-to-r from-yellow-400 to-amber-500"
        >
          <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center text-4xl sm:text-5xl transition-colors duration-150 ${
            darkMode ? 'bg-[#0a0a0a]' : 'bg-white'
          }`}>
            👨‍💻
          </div>
        </motion.div>

        <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-4 transition-colors duration-150 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Deepak Rathore
        </h1>

        <div className="text-xl sm:text-2xl md:text-3xl mb-6 text-yellow-400 min-h-[40px]">
          <span ref={typedRef}></span>
        </div>

        <p className={`text-base sm:text-lg mb-8 max-w-2xl mx-auto px-4 transition-colors duration-150 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Building robust, scalable applications with Java, Spring Boot, and React
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
          <ResumeButton />
          <a
            href="/#projects"
            className={`px-6 sm:px-8 py-2.5 sm:py-3 font-semibold rounded-full border transition-colors duration-150 ${
              darkMode 
                ? 'glass text-white border-yellow-400/30 hover:border-yellow-400' 
                : 'bg-white/50 backdrop-blur-sm text-gray-800 border-yellow-400/50 hover:border-yellow-500 shadow-lg'
            }`}
          >
            View Projects
          </a>
        </div>

        <div className={`flex justify-center gap-6 mt-8 text-2xl transition-colors duration-150 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <a href="https://github.com/deepakrathor0789-lab" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-150">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/deepak-rathore-282925366/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-150">
            <FaLinkedin />
          </a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=deepakrathor0789@gmail.com&tf=cm" target = "_blank" className="hover:text-yellow-400 transition-colors duration-150">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;