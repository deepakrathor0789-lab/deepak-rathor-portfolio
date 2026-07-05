import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/deepakrathor0789-lab', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/deepak-rathore-282925366/', label: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'https://mail.google.com/mail/u/0/?fs=1&to=deepakrathor0789@gmail.com&tf=cm', label: 'Email' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/deep_rathor_81', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`relative overflow-hidden transition-colors duration-300 ${
      darkMode ? 'bg-[#0a0a0a] border-t border-white/10' : 'bg-gray-50 border-t border-gray-200'
    }`}>
      {/* Animated gradient background */}
      <div className={`absolute inset-0 opacity-30 ${
        darkMode 
          ? 'bg-gradient-to-r from-yellow-500/5 via-transparent to-purple-500/5' 
          : 'bg-gradient-to-r from-yellow-200/10 via-transparent to-purple-200/10'
      }`}></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Deepak<span className="text-yellow-400">.</span>
              </h2>
              <p className={`text-sm mb-4 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Java Full Stack Developer building robust, scalable applications with modern technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target='blank'
                    aria-label={social.label}
                    whileHover={{ 
                      scale: 1.2, 
                      color: '#fbbf24',
                      y: -3
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-xl transition-all duration-300 ${
                      darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'
                    }`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className={`text-sm transition-colors duration-300 ${
                        darkMode 
                          ? 'text-gray-400 hover:text-yellow-400' 
                          : 'text-gray-600 hover:text-yellow-600'
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Tech Stack
              </h3>
              <ul className={`space-y-2 text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <motion.li whileHover={{ x: 5 }}>Java, Spring Boot</motion.li>
                <motion.li whileHover={{ x: 5 }}>Hibernate, JPA</motion.li>
                <motion.li whileHover={{ x: 5 }}>REST APIs, Spring Security</motion.li>
                <motion.li whileHover={{ x: 5 }}>React.js, JavaScript</motion.li>
                <motion.li whileHover={{ x: 5 }}>MySQL, Git</motion.li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Info
              </h3>
              <ul className={`space-y-3 text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3"
                >
                  <FaEnvelope className="text-yellow-400 mt-0.5" />
                  <a href="mailto:deepakrathor0789@gmail.com" className="hover:text-yellow-400 transition-colors">
                    deepakrathor0789@gmail.com
                  </a>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-yellow-400 mt-0.5">📱</span>
                  <span>+91 9548115688</span>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-yellow-400 mt-0.5">📍</span>
                  <span>Aligarh, India</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className={`my-8 h-px ${
            darkMode ? 'bg-gradient-to-r from-transparent via-gray-700 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
          }`}
        ></motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © {currentYear} Deepak Rathore. All Rights Reserved.
          </p>
          <p className={`flex items-center gap-1 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Made with 
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                color: ['#fbbf24', '#f59e0b', '#fbbf24']
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 0.5
              }}
              className="inline-block"
            >
              <FaHeart className="text-yellow-400" />
            </motion.span>
            by Deepak Rathore
          </p>
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ color: '#fbbf24' }}
              href="#"
              className={darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'}
            >
              Privacy Policy
            </motion.a>
            <span className={darkMode ? 'text-gray-600' : 'text-gray-300'}>|</span>
            <motion.a
              whileHover={{ color: '#fbbf24' }}
              href="#"
              className={darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;