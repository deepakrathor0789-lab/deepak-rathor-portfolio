// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaCalendarAlt, FaEnvelope, FaUserGraduate } from 'react-icons/fa';

const About = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className={`py-24 px-6 relative ${
      darkMode ? 'bg-[#0a0a0a]' : 'bg-gray-50'
    }`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="text-yellow-400">Me</span>
          </h2>
        </motion.div>

        <div className={`p-8 rounded-3xl transition-all duration-300 ${
          darkMode 
            ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
            : 'bg-white shadow-xl border border-gray-100'
        }`}>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center text-4xl shadow-lg">
                👨‍💻
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Deepak Rathore
              </h3>
              <p className="text-yellow-400 font-medium">BCA Graduate · Java Full Stack Developer</p>
              
              <p className={`mt-4 text-base leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm a passionate <span className="text-yellow-400 font-semibold">BCA Graduate</span> and aspiring 
                <span className="text-yellow-400 font-semibold"> Java Full Stack Developer</span> with expertise in 
                building scalable, robust web applications. I have hands-on experience with 
                <span className="text-yellow-400 font-semibold"> Java, Spring Boot, Hibernate, React.js, and MySQL</span>.
                I'm dedicated to writing clean, efficient code and continuously expanding my knowledge.
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-yellow-400" />
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Location</p>
                    <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Aligarh, UP</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-yellow-400" />
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Training</p>
                    <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>2025 - 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-yellow-400" />
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                    <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>deepakrathor0789@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaUserGraduate className="text-yellow-400" />
                  <div>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Education</p>
                    <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>BCA (2026)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;