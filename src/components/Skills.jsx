// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaJava, FaReact, FaGit, FaDatabase, FaCode, FaTools,
  FaServer, FaLaptopCode, FaAws, FaNodeJs, FaWindows
} from 'react-icons/fa';
import {
  SiSpringboot, SiHibernate, SiSpringsecurity, SiMysql,
  SiJavascript, SiTailwindcss, SiPostman, SiMongodb,
  SiDocker, SiIntellijidea, SiSpring
} from 'react-icons/si';

const Skills = ({ darkMode }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    {
      category: 'Backend Development',
      icon: <FaServer />,
      color: 'from-blue-500 to-indigo-600',
      items: [
        { name: 'Java', icon: <FaJava className="text-red-500" />, description: 'Core Java, OOPs, Collections' },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" />, description: 'REST APIs, Microservices' },
        { name: 'Hibernate', icon: <SiHibernate className="text-blue-500" />, description: 'JPA, ORM' },
        { name: 'Spring Security', icon: <SiSpringsecurity className="text-purple-500" />, description: 'JWT, Authentication' },
      ]
    },
    {
      category: 'Frontend Development',
      icon: <FaLaptopCode />,
      color: 'from-pink-500 to-orange-500',
      items: [
        { name: 'React.js', icon: <FaReact className="text-cyan-500" />, description: 'Hooks, Redux, Context API' },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" />, description: 'ES6+, Async/Await' },
        { name: 'HTML5 & CSS3', icon: <FaCode className="text-orange-500" />, description: 'Responsive Design' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" />, description: 'Utility-First CSS' },
      ]
    },
    {
      category: 'Database & Cloud',
      icon: <FaDatabase />,
      color: 'from-green-500 to-emerald-600',
      items: [
        { name: 'MySQL', icon: <SiMysql className="text-blue-600" />, description: 'Database Design, Queries' },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, description: 'NoSQL, Aggregation' },
        { name: 'AWS', icon: <FaAws className="text-orange-400" />, description: 'EC2, S3, RDS' },
        { name: 'Docker', icon: <SiDocker className="text-blue-400" />, description: 'Containerization' },
      ]
    },
    {
      category: 'Tools & IDEs',
      icon: <FaTools />,
      color: 'from-purple-500 to-pink-600',
      items: [
        { name: 'Git & GitHub', icon: <FaGit className="text-orange-600" />, description: 'Version Control' },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" />, description: 'API Testing' },
        { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="text-purple-400" />, description: 'Primary IDE for Java' },
        { name: 'Spring Tool Suite', icon: <SiSpring className="text-green-500" />, description: 'STS - Spring Development' },
        { name: 'VS Code', icon: <FaCode className="text-blue-500" />, description: 'Frontend Development' },
        { name: 'Maven', icon: <FaTools className="text-purple-500" />, description: 'Build Tool' },
      ]
    }
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
    <section id="skills" className={`py-24 px-6 relative ${darkMode ? 'bg-[#0a0a0a]' : 'bg-gray-50'
      }`}>
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl ${darkMode ? 'bg-yellow-500/5' : 'bg-yellow-200/20'
          }`}></div>
        <div className={`absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl ${darkMode ? 'bg-purple-500/5' : 'bg-purple-200/20'
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
            <div className={`px-6 py-2 rounded-full ${darkMode ? 'bg-yellow-400/10' : 'bg-yellow-400/20'
              }`}>
              <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">
                My Expertise
              </span>
            </div>
          </motion.div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Technical <span className="text-yellow-400">Skills</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
            Technologies and tools I work with to build amazing applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-2xl transition-all duration-300 ${darkMode
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-400/30'
                  : 'bg-white shadow-xl hover:shadow-2xl border border-gray-100'
                }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl text-white shadow-lg`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                    {category.category}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {category.items.length} technologies
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.05 + 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-xl transition-all duration-300 ${darkMode
                        ? 'bg-white/5 hover:bg-white/10'
                        : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                          {skill.name}
                        </h4>
                        <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h3 className={`text-center text-sm font-semibold uppercase tracking-wider mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
            Tech Stack Overview
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Java', 'Spring Boot', 'Hibernate', 'MySQL',
              'React', 'JavaScript', 'HTML5', 'CSS3',
              'Git', 'GitHub', 'Postman', 'Maven',
              'AWS', 'Docker', 'MongoDB', 'Tailwind CSS',
              'IntelliJ IDEA', 'Spring Tool Suite', 'VS Code'
            ].map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.03 + 0.9 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 20px rgba(250,204,21,0.3)'
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${darkMode
                    ? 'bg-white/5 text-gray-300 border border-white/10 hover:border-yellow-400/50'
                    : 'bg-gray-100 text-gray-700 border border-gray-200 hover:border-yellow-400'
                  }`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Technologies', value: '20+', icon: <FaCode /> },
            { label: 'Projects Built', value: '10+', icon: <FaLaptopCode /> },
            { label: 'Experience', value: '6th month traing', icon: <FaTools /> },
            { label: 'IDEs', value: '3+', icon: <FaWindows /> },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className={`text-center p-6 rounded-2xl ${darkMode
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10'
                  : 'bg-white shadow-lg'
                }`}
            >
              <div className={`text-3xl mb-2 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'
                }`}>
                {stat.icon}
              </div>
              <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                {stat.value}
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;