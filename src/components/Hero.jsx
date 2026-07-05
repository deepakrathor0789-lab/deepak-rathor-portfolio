// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Typed from 'typed.js';
import ResumeButton from './ResumeButton';

const Hero = ({ darkMode }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Make sure the element exists before initializing Typed
    if (typedRef.current) {
      const options = {
        strings: [
          'Java Developer',
          'Spring Boot Expert',
          'React Developer',
          'MySQL Specialist',
          'Full Stack Developer'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      };
      const typed = new Typed(typedRef.current, options);
      return () => typed.destroy();
    }
  }, []); // Empty dependency array

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background gradients */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        darkMode 
          ? 'bg-gradient-to-br from-yellow-500/10 via-transparent to-purple-500/10 animate-pulse' 
          : 'bg-gradient-to-br from-yellow-200/30 via-blue-50/30 to-purple-200/30'
      }`}></div>
      
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        darkMode 
          ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent' 
          : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300/10 via-blue-100/5 to-transparent'
      }`}></div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl"
      >
        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`inline-block p-1 rounded-full mb-6 ${
            darkMode ? 'glass' : 'bg-white/30 backdrop-blur-sm shadow-lg'
          }`}
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 p-1 mx-auto">
            <div className={`w-full h-full rounded-full flex items-center justify-center text-5xl ${
              darkMode ? 'bg-[#0a0a0a]' : 'bg-white'
            }`}>
              👨‍💻
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-5xl md:text-7xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Deepak Rathore
        </motion.h1>

        {/* Typed Text - Fixed with proper ref */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-3xl mb-6 text-yellow-400"
        >
          <span ref={typedRef} className="font-medium"></span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`text-lg mb-8 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Building robust, scalable applications with Java, Spring Boot, and React
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <ResumeButton />
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#projects"
            className={`px-8 py-3 font-semibold rounded-full border transition-all ${
              darkMode 
                ? 'glass text-white border-yellow-400/30 hover:border-yellow-400' 
                : 'bg-white/50 backdrop-blur-sm text-gray-800 border-yellow-400/50 hover:border-yellow-500 shadow-lg'
            }`}
          >
            View Projects
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className={`flex justify-center gap-6 mt-8 text-2xl ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          <motion.a 
            whileHover={{ scale: 1.2, color: '#fbbf24' }} 
            href="https://github.com/deepakrathor0789-lab" 
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${darkMode ? 'hover:text-yellow-400' : 'hover:text-yellow-600'}`}
          >
            <FaGithub />
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.2, color: '#fbbf24' }} 
            href="https://www.linkedin.com/in/deepak-rathore-282925366/" 
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${darkMode ? 'hover:text-yellow-400' : 'hover:text-yellow-600'}`}
          >
            <FaLinkedin />
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.2, color: '#fbbf24' }} 
            href="https://mail.google.com/mail/u/0/?fs=1&to=deepakrathor0789@gmail.com&tf=cm"
            target="_blank"
            className={`transition-colors ${darkMode ? 'hover:text-yellow-400' : 'hover:text-yellow-600'}`}
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;