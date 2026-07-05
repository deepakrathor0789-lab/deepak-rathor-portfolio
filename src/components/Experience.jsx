// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, 
  FaCode, FaServer, FaDatabase, FaReact, 
  FaGitAlt, FaGraduationCap, FaAward
} from 'react-icons/fa';
import { SiSpringboot, SiHibernate } from 'react-icons/si';

const Experience = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const experiences = [
    {
      title: 'Java Full Stack Developer Training',
      company: 'CETPA Infotech Pvt. Ltd.',
      location: 'Noida, Uttar Pradesh',
      period: '2025 - 2026',
      type: 'Training',
      icon: <FaGraduationCap />,
      description: [
        'Gained hands-on experience in Core Java, OOPs, Collections, Exception Handling, and Multithreading',
        'Built backend applications using Spring Boot, Hibernate, Spring Data JPA, REST APIs, and MySQL',
        'Developed responsive web applications using React.js, JavaScript, HTML5, and CSS3',
        'Worked with Git, Maven, and integrated React frontend with Spring Boot backend'
      ],
      skills: ['Java', 'Spring Boot', 'Hibernate', 'React.js', 'MySQL', 'Git', 'REST APIs']
    },
    {
      title: 'SmartShop - E-Commerce Project',
      company: 'Personal Project',
      location: 'Remote',
      period: '2025',
      type: 'Project',
      icon: <FaCode />,
      description: [
        'Built a full-stack e-commerce application using Java, Spring Boot, React.js, MySQL',
        'Implemented JWT Authentication and REST APIs for secure user management',
        'Integrated Razorpay payment gateway for seamless transactions',
        'Developed shopping cart, order management, admin dashboard with Redux Toolkit and Tailwind CSS'
      ],
      skills: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT', 'Razorpay', 'Redux Toolkit']
    }
  ];

  const stats = [
    { label: 'Training Completed', value: '1', icon: <FaGraduationCap />, color: 'from-blue-500 to-cyan-500' },
    { label: 'Projects Built', value: '3+', icon: <FaCode />, color: 'from-purple-500 to-pink-500' },
    { label: 'Technologies', value: '15+', icon: <FaServer />, color: 'from-green-500 to-emerald-500' },
    { label: 'Learning Hours', value: '500+', icon: <FaAward />, color: 'from-yellow-500 to-orange-500' },
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
    <section id="experience" className={`py-24 px-6 relative overflow-hidden ${
      darkMode ? 'bg-[#0a0a0a]' : 'bg-gray-50'
    }`}>
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
          darkMode ? 'bg-yellow-500/5' : 'bg-yellow-200/20'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
          darkMode ? 'bg-purple-500/5' : 'bg-purple-200/20'
        }`}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
                <FaBriefcase /> Experience
              </span>
            </div>
          </motion.div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="text-yellow-400">Journey</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Training, projects, and continuous learning as a developer
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`p-8 md:p-10 rounded-3xl transition-all duration-300 border-l-4 border-yellow-400 ${
                darkMode 
                  ? 'bg-white/5 backdrop-blur-sm border-l-yellow-400 border border-white/10 hover:border-yellow-400/30' 
                  : 'bg-white shadow-xl hover:shadow-2xl border-l-yellow-400 border border-gray-100'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center text-2xl text-white shadow-lg">
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className={`text-2xl font-bold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h3>
                      <p className="text-yellow-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                      exp.type === 'Training'
                        ? darkMode 
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'bg-blue-500/10 text-blue-600 border border-blue-500/30'
                        : darkMode
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          : 'bg-purple-500/10 text-purple-600 border border-purple-500/30'
                    }`}>
                      {exp.type}
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className={`flex flex-wrap gap-4 mt-3 text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-yellow-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-yellow-400" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className={`mt-4 space-y-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span className="text-yellow-400 mt-1">▸</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode 
                            ? 'bg-white/10 text-gray-300 border border-white/10' 
                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`p-6 rounded-2xl text-center transition-all duration-300 ${
                darkMode 
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-400/30' 
                  : 'bg-white shadow-lg hover:shadow-xl border border-gray-100'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-xl mx-auto mb-3`}>
                {stat.icon}
              </div>
              <div className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note for Freshers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 p-6 rounded-2xl text-center"
        >
          <div className={`p-6 rounded-2xl ${
            darkMode 
              ? 'bg-yellow-400/5 border border-yellow-400/20' 
              : 'bg-yellow-50 border border-yellow-200'
          }`}>
            <p className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span className="text-yellow-400 font-semibold">💡 Note:</span> 
              As a fresh graduate, I've gained practical experience through intensive training 
              and personal projects. I'm eager to apply these skills in a professional environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;