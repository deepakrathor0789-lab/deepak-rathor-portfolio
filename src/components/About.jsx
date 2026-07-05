// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaUserGraduate, FaCode, FaServer, FaDatabase, 
  FaReact, FaGitAlt, FaBriefcase, 
  FaCalendarAlt, FaMapMarkerAlt, FaEnvelope,
  FaArrowRight, FaGithub, FaLinkedin, FaAward
} from 'react-icons/fa';
import { SiSpringboot, SiHibernate, SiMysql } from 'react-icons/si';

const About = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // ✅ Honest stats - no fake experience
  const stats = [
    { label: 'Training Completed', value: '1', icon: <FaBriefcase />, color: 'from-blue-500 to-cyan-500' },
    { label: 'Projects Built', value: '3+', icon: <FaCode />, color: 'from-purple-500 to-pink-500' },
    { label: 'Technologies', value: '15+', icon: <FaServer />, color: 'from-green-500 to-emerald-500' },
    { label: 'Learning', value: 'Always', icon: <FaUserGraduate />, color: 'from-yellow-500 to-orange-500' },
  ];

  const skills = [
    { name: 'Java', icon: <FaCode className="text-red-500" />, color: 'bg-red-500/10 border-red-500/30' },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" />, color: 'bg-green-500/10 border-green-500/30' },
    { name: 'Hibernate', icon: <SiHibernate className="text-blue-500" />, color: 'bg-blue-500/10 border-blue-500/30' },
    { name: 'React.js', icon: <FaReact className="text-cyan-500" />, color: 'bg-cyan-500/10 border-cyan-500/30' },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" />, color: 'bg-blue-600/10 border-blue-600/30' },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" />, color: 'bg-orange-500/10 border-orange-500/30' },
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
    <section id="about" className={`py-24 px-6 relative overflow-hidden ${
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
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
                <FaUserGraduate /> About Me
              </span>
            </div>
          </motion.div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Know Me <span className="text-yellow-400">Better</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A passionate fresher ready to contribute and grow
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3 space-y-8"
          >
            {/* Main Card */}
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-3xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-400/30' 
                  : 'bg-white shadow-xl hover:shadow-2xl border border-gray-100'
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center text-3xl shadow-lg flex-shrink-0">
                  👨‍💻
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Deepak Rathore
                  </h3>
                  <p className="text-yellow-400 font-medium">BCA Graduate · Java Full Stack Developer</p>
                </div>
              </div>

              <p className={`text-base leading-relaxed mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm a passionate <span className="text-yellow-400 font-semibold">BCA Graduate</span> and aspiring 
                <span className="text-yellow-400 font-semibold"> Java Full Stack Developer</span>. I have completed 
                intensive training in <span className="text-yellow-400 font-semibold">Java, Spring Boot, Hibernate, React.js, and MySQL</span>.
                I'm dedicated to writing clean, efficient code and continuously expanding my knowledge 
                to stay at the forefront of technology. As a fresher, I bring enthusiasm, quick learning, 
                and a strong foundation in full-stack development.
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Aligarh, UP' },
                  { icon: <FaCalendarAlt />, label: 'Training', value: '2025 - 2026' },
                  { icon: <FaEnvelope />, label: 'Email', value: 'deepakrathor0789@gmail.com' },
                  { icon: <FaUserGraduate />, label: 'Education', value: 'BCA (2026)' },
                ].map((info, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl ${
                      darkMode 
                        ? 'bg-white/5 hover:bg-white/10' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    } transition-all duration-300`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-yellow-400 text-lg`}>{info.icon}</span>
                      <div>
                        <p className={`text-xs ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>{info.label}</p>
                        <p className={`text-sm font-medium ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>{info.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Tags */}
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-3xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                  : 'bg-white shadow-xl border border-gray-100'
              }`}
            >
              <h4 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: idx * 0.05 + 0.5 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium border flex items-center gap-2 transition-all duration-300 ${
                      darkMode 
                        ? `${skill.color} text-gray-300` 
                        : `${skill.color} text-gray-700`
                    }`}
                  >
                    {skill.icon}
                    {skill.name}
                  </motion.span>
                ))}
              </div>

              {/* Call to Action */}
              <motion.a
                href="#projects"
                whileHover={{ x: 5 }}
                className={`inline-flex items-center gap-2 mt-6 text-yellow-400 font-semibold hover:text-yellow-300 transition-colors ${
                  darkMode ? 'hover:text-yellow-300' : 'hover:text-yellow-500'
                }`}
              >
                View My Work <FaArrowRight className="text-sm" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Social */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-6"
          >
            {/* Stats Grid - Honest Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
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
            </div>

            {/* Social Card */}
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-3xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-400/30' 
                  : 'bg-white shadow-xl hover:shadow-2xl border border-gray-100'
              }`}
            >
              <h4 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/deepakrathor0789-lab' },
                  { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/deepak-rathore-282925366/' },
                  { icon: <FaEnvelope />, label: 'Email', url: 'mailto:deepakrathor0789@gmail.com' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${
                      darkMode 
                        ? 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-yellow-400' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-yellow-500'
                    }`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Download CV Button */}
              <motion.a
                href="/my-resume.pdf"
                download="Deepak_Rathore_Resume.pdf"
                whileHover={{ scale: 1.02 }}
                className={`mt-4 w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20 border border-yellow-400/30' 
                    : 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:shadow-lg'
                }`}
              >
                <FaArrowRight /> Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;