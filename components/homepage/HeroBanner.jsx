// components/HeroSection.js
'use client';
import React from 'react';
import { FaGraduationCap, FaSearch, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/campus-bg.jpg')] bg-cover bg-center"></div>
        
        {/* Animated floating elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-blue-500 opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-12 h-12 rounded-full bg-indigo-500 opacity-20"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* School badge/logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className=" rounded-full border-2 border-white w-16">
                <img 
                                  src="/logo.png" 
                                  alt="SMATECH Logo" 
                                  className=" w-[100%]   rounded-full"
                                />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            School of Management and <span className="text-blue-300">Technology</span>
          </motion.h1>

          {/* Motto */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-200 mb-8"
          >
            "Knowledge and Wisdom"
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-12"
          >
            A government-recognized institution providing quality education through accredited programs and industry-relevant curriculum.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
              <FaSearch className="mr-2" /> Explore Programs
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
              <FaPlay className="mr-2" /> Watch Video
            </button>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 max-w-4xl mx-auto border border-white border-opacity-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "10+", label: "Years Established" },
                { value: "2,500+", label: "Students" },
                { value: "50+", label: "Programs" },
                { value: "95%", label: "Graduate Employment" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-2">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm md:text-base text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;