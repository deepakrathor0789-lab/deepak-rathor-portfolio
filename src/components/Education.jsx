// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, 
  FaAward, FaBookOpen, FaUserGraduate, FaStar,
  FaLaptopCode, FaCode
} from 'react-icons/fa';
import { SiSpringboot, SiReact, SiMysql, SiGit } from 'react-icons/si';

const Education = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const education = {
    degree: 'Bachelor of Computer Applications',
    institution: 'GLA University, Mathura',
    period: '2023 - 2026',
    status: 'Expected 2026',
    location: 'Mathura, Uttar Pradesh',
    skills: [
      { name: 'Java', icon: <FaCode className="text-red-500" /> },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
      { name: 'React.js', icon: <SiReact className="text-cyan-500" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'Git', icon: <SiGit className="text-orange-600" /> },
    ]
  };

  const stats = [
    { label: 'CGPA', value: '8.5+', icon: <FaStar />, color: 'from-yellow-400 to-orange-500' },
    { label: 'Projects', value: '10+', icon: <FaLaptopCode />, color: 'from-purple-500 to-pink-500' },
    { label: 'Year', value: '3rd', icon: <FaUserGraduate />, color: 'from-green-500 to-emerald-500' },
    { label: 'Skills', value: '15+', icon: <FaCode />, color: 'from-blue-500 to-cyan-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="education" className={`py-24 px-6 relative overflow-hidden ${
      darkMode ? 'bg-[#0a0a0a]' : 'bg-gray-50'
    }`}>
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
          darkMode ? 'bg-yellow-500/5' : 'bg-yellow-200/20'
        }`}></div>
        <div className={`absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
          darkMode ? 'bg-purple-500/5' : 'bg-purple-200/20'
        }`}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
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
                <FaGraduationCap /> Education
              </span>
            </div>
          </motion.div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="text-yellow-400">Education</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Building a strong foundation in computer science and software development
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className={`p-8 md:p-10 rounded-3xl transition-all duration-300 ${
              darkMode 
                ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-400/30' 
                : 'bg-white shadow-xl hover:shadow-2xl border border-gray-100'
            }`}
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center text-4xl text-white shadow-lg">
                  <FaGraduationCap />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {education.degree}
                    </h3>
                    <p className="text-yellow-400 text-lg font-medium">
                      {education.institution}
                    </p>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                    darkMode 
                      ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20' 
                      : 'bg-yellow-400/10 text-yellow-600 border border-yellow-400/30'
                  }`}>
                    {education.status}
                  </div>
                </div>

                {/* Meta Info */}
                <div className={`flex flex-wrap gap-4 mt-4 text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-yellow-400" />
                    {education.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-yellow-400" />
                    {education.location}
                  </span>
                </div>

                {/* Skills from Education */}
                <div className="mt-6 pt-6 border-t border-gray-200/20">
                  <h4 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <FaCode className="inline mr-2 text-yellow-400" />
                    Skills Developed
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {education.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: idx * 0.05 + 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 border border-yellow-400/20"
                      >
                        {skill.icon}
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                          {skill.name}
                        </span>
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
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

          {/* Note */}
          <motion.div
            variants={itemVariants}
            className={`p-6 rounded-2xl text-center ${
              darkMode 
                ? 'bg-yellow-400/5 border border-yellow-400/20' 
                : 'bg-yellow-50 border border-yellow-200'
            }`}
          >
            <p className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span className="text-yellow-400 font-semibold">💡 Note:</span> 
              Currently pursuing BCA with a focus on full-stack development. 
              Expected to graduate in 2026 with strong programming fundamentals.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;