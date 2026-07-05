import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-gradient text-center">Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl ${
              darkMode ? 'glass' : 'bg-white/70 backdrop-blur-sm shadow-xl border border-gray-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className={`flex items-center gap-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <FaEnvelope className="text-yellow-400 text-xl" />
                  <span>deepakrathor0789@gmail.com</span>
                </div>
                <div className={`flex items-center gap-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <FaPhone className="text-yellow-400 text-xl" />
                  <span>+91 9548115688</span>
                </div>
                <div className={`flex items-center gap-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <FaMapMarkerAlt className="text-yellow-400 text-xl" />
                  <span>Aligarh, India</span>
                </div>
              </div>
            </div>
            <div className={`p-6 rounded-2xl ${
              darkMode ? 'glass' : 'bg-white/70 backdrop-blur-sm shadow-xl border border-gray-200'
            }`}>
              <h4 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Connect with me
              </h4>
              <div className={`flex gap-4 text-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <motion.a 
                  whileHover={{ scale: 1.2, color: '#fbbf24' }} 
                  href="https://github.com/deepakrathor0789-lab" target="_blank"
                  className={`transition-colors ${darkMode ? 'hover:text-yellow-400' : 'hover:text-yellow-600'}`}
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, color: '#fbbf24' }} 
                  href="https://www.linkedin.com/in/deepak-rathore-282925366/" target='blank'
                  className={`transition-colors ${darkMode ? 'hover:text-yellow-400' : 'hover:text-yellow-600'}`}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, color: '#fbbf24' }} 
                  href="https://mail.google.com/mail/u/0/?fs=1&to=deepakrathor0789@gmail.com&tf=cm" target='blank'
                  className={`transition-colors ${darkMode ? 'hover:text-yellow-400' : 'hover:text-yellow-600'}`}
                >
                  <FaEnvelope />
                </motion.a>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className={`p-8 rounded-2xl space-y-4 ${
              darkMode ? 'glass' : 'bg-white/70 backdrop-blur-sm shadow-xl border border-gray-200'
            }`}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:border-yellow-400 focus:outline-none transition-colors ${
                  darkMode 
                    ? 'bg-black/30 border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:border-yellow-400 focus:outline-none transition-colors ${
                  darkMode 
                    ? 'bg-black/30 border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:border-yellow-400 focus:outline-none transition-colors resize-none ${
                  darkMode 
                    ? 'bg-black/30 border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold rounded-lg transition-all hover:shadow-[0_0_25px_rgba(255,200,0,0.4)]"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;