'use client';
// components/AcademicHero.js
import { motion } from 'framer-motion';
import { FaChevronDown, FaPlay, FaGraduationCap } from 'react-icons/fa';
import { IoLibraryOutline, IoStatsChart } from 'react-icons/io5';
import { MdScience, MdBusinessCenter } from 'react-icons/md';

const AcademicHero = () => {
  // Academic color palette
  const colors = {
    primary: 'rgb(30, 58, 138)',    // Deep academic blue
    secondary: 'rgb(220, 38, 38)',   // Crimson accent
    accent: 'rgb(234, 179, 8)',      // Gold accent
    light: 'rgb(249, 250, 251)',     // Light background
    dark: 'rgb(17, 24, 39)'          // Dark text
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } }
  };

  return (
    <section className="relative h-screen min-h-[800px] overflow-hidden bg-gray-50">
      {/* Decorative academic elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('/grid-pattern.svg')] bg-repeat"></div>
        
        {/* Floating academic icons */}
        <motion.div
          initial={{ x: -100, y: 100, rotate: -15, opacity: 0 }}
          animate={{ x: 0, y: 0, rotate: 0, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/4 left-1/4 text-6xl text-blue-900/20"
        >
          <FaGraduationCap />
        </motion.div>
        
        <motion.div
          initial={{ x: 100, y: 200, rotate: 15, opacity: 0 }}
          animate={{ x: 0, y: 0, rotate: 0, opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute bottom-1/4 right-1/4 text-6xl text-blue-900/20"
        >
          <IoLibraryOutline />
        </motion.div>
      </div>

      {/* Content container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-8 lg:px-10 pt-24 pb-32"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* University badge */}
          <motion.div variants={item} className="mb-8">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white shadow-md border border-gray-200">
              <div 
                className="w-3 h-3 rounded-full mr-3" 
                style={{ backgroundColor: colors.secondary }}
              ></div>
              <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: colors.dark }}>
                Recognized by Federal Ministry of Education
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <div className="mb-8">
            <motion.h1 
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              style={{ color: colors.primary }}
            >
              <span className="block">School of Management</span>
              <span className="block">and Science Abeokuta</span>
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="mt-6 text-xl md:text-2xl max-w-3xl font-medium"
              style={{ color: colors.secondary }}
            >
              "Knowledge and Wisdom" — Excellence in professional education since 2010
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-5 mb-16">
            <motion.button
              whileHover={{ y: -3, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="px-8 py-4 rounded-lg font-bold text-white shadow-lg transition-all duration-300 flex items-center"
              style={{ backgroundColor: colors.primary }}
            >
              Start Your Application
              <svg 
                className="ml-3 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
            
            <motion.button
              whileHover={{ y: -3, backgroundColor: colors.light }}
              className="px-8 py-4 rounded-lg font-bold border-2 shadow-lg transition-all duration-300 flex items-center"
              style={{ borderColor: colors.primary, color: colors.primary }}
            >
              <FaPlay className="mr-3" style={{ color: colors.secondary }} />
              Explore Campus
            </motion.button>
          </motion.div>

          {/* Academic highlights */}
          <motion.div variants={fadeIn} className="max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { 
                  icon: <FaGraduationCap className="text-2xl" style={{ color: colors.secondary }} />,
                  value: "8 Departments", 
                  label: "Comprehensive Disciplines" 
                },
                { 
                  icon: <MdBusinessCenter className="text-2xl" style={{ color: colors.secondary }} />,
                  value: "95%", 
                  label: "Graduate Employment" 
                },
                { 
                  icon: <MdScience className="text-2xl" style={{ color: colors.secondary }} />,
                  value: "Modern Labs", 
                  label: "Research Facilities" 
                },
                { 
                  icon: <IoStatsChart className="text-2xl" style={{ color: colors.secondary }} />,
                  value: "2,500+", 
                  label: "Successful Alumni" 
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex items-start"
                >
                  <div className="mr-4 mt-1">{stat.icon}</div>
                  <div>
                    <p className="text-xl font-bold mb-1" style={{ color: colors.primary }}>
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium" style={{ color: colors.dark }}>
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center cursor-pointer"
          >
            <p className="text-sm font-medium mb-2 tracking-wider" style={{ color: colors.primary }}>
              EXPLORE SMATECH
            </p>
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center border-2"
              style={{ borderColor: colors.primary }}
            >
              <FaChevronDown style={{ color: colors.primary }} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AcademicHero;