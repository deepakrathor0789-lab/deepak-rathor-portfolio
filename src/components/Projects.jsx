// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const Projects = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'SmartShop E-Commerce',
      description: 'Full-stack e-commerce platform with secure authentication and seamless payment processing',
      features: [
        'Spring Boot Backend', 
        'React Frontend', 
        'JWT Authentication', 
        'Razorpay Integration', 
        'Admin Dashboard',
        'Redux Toolkit',
        'Tailwind CSS'
      ],
      githubBackend: "https://github.com/deepakrathor0789-lab/smartshop-backend",
      githubFrontend: "https://github.com/deepakrathor0789-lab/smartshop-frontend",
      liveDemo: "#",
      tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT'],
      icon: <FaServer />
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React.js and Tailwind CSS featuring dark mode',
      features: [
        'Dark/Light Mode',
        'Responsive Design',
        'Smooth Animations',
        'Typed.js Integration',
        'Download Resume',
        'Contact Form',
        'Project Showcase'
      ],
      githubFrontend: "https://github.com/deepakrathor0789-lab/deepak-rathor-portfolio",
      liveDemo: "#",
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
      icon: <FaCode />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className={`py-24 px-6 relative ${
      darkMode ? 'bg-[#0a0a0a]' : 'bg-gray-50'
    }`}>
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-20 right-20 w-80 h-80 rounded-full blur-3xl ${
          darkMode ? 'bg-yellow-500/5' : 'bg-yellow-200/20'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl ${
          darkMode ? 'bg-purple-500/5' : 'bg-purple-200/20'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className={`px-6 py-2 rounded-full ${
              darkMode ? 'bg-yellow-400/10' : 'bg-yellow-400/20'
            }`}>
              <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase flex items-center gap-2">
                <FaCode /> My Projects
              </span>
            </div>
          </motion.div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured <span className="text-yellow-400">Projects</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Here are some of the projects I've built to showcase my skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-2xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-400/30' 
                  : 'bg-white shadow-xl hover:shadow-2xl border border-gray-100'
              }`}
            >
              {/* Project Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center text-white text-xl shadow-lg flex-shrink-0">
                  {project.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {project.tech.join(' · ')}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className={`mb-4 text-sm leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {project.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.features.map((feature, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode 
                        ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20' 
                        : 'bg-yellow-400/10 text-yellow-600 border border-yellow-400/30'
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.githubBackend && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      darkMode 
                        ? 'bg-white/10 hover:bg-white/20 text-gray-300 border border-white/10' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200'
                    }`}
                  >
                    <FaGithub /> Backend
                  </motion.a>
                )}
                
                {project.githubFrontend && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      darkMode 
                        ? 'bg-white/10 hover:bg-white/20 text-gray-300 border border-white/10' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200'
                    }`}
                  >
                    <FaGithub /> Frontend
                  </motion.a>
                )}

                {project.liveDemo && project.liveDemo !== '#' && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:shadow-lg transition-all duration-300"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/deepakrathor0789-lab"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 ${
              darkMode 
                ? 'glass border border-white/10 hover:border-yellow-400/30 text-white' 
                : 'bg-white shadow-xl hover:shadow-2xl text-gray-900 border border-gray-100'
            }`}
          >
            <FaGithub className="text-2xl" />
            View All Projects on GitHub
            <span className="text-yellow-400">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;