// components/AcademicPrograms.js
'use client';
import React from 'react';
import { FaBook, FaLaptopCode, FaChartLine, FaFlask, FaUserTie, FaMicroscope, FaHome, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AcademicPrograms = () => {
  // Departments data
  const departments = [
    {
      name: "Management Sciences",
      icon: <FaChartLine className="text-4xl text-indigo-600" />,
      programs: ["Accounting", "Business Administration", "Public Administration", "Banking & Finance"],
      description: "Developing future business leaders with practical skills and theoretical knowledge"
    },
    {
      name: "Information Sciences",
      icon: <FaLaptopCode className="text-4xl text-indigo-600" />,
      programs: ["Computer Science", "Information Technology", "Cybersecurity", "Data Science"],
      description: "Cutting-edge technology programs preparing students for the digital economy"
    },
    {
      name: "Arts & Humanities",
      icon: <FaBook className="text-4xl text-indigo-600" />,
      programs: ["Mass Communication", "English Literature", "History & International Studies", "Performing Arts"],
      description: "Fostering creativity and critical thinking in cultural and communication studies"
    },
    {
      name: "Engineering",
      icon: <FaHome className="text-4xl text-indigo-600" />,
      programs: ["Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Computer Engineering"],
      description: "Hands-on engineering education with modern laboratory facilities"
    },
    {
      name: "Environmental Sciences",
      icon: <FaMicroscope className="text-4xl text-indigo-600" />,
      programs: ["Architecture", "Estate Management", "Urban & Regional Planning", "Environmental Management"],
      description: "Sustainable solutions for built and natural environments"
    },
    {
      name: "Social Sciences",
      icon: <FaUsers className="text-4xl text-indigo-600" />,
      programs: ["Economics", "Sociology", "Political Science", "Psychology"],
      description: "Understanding human behavior and societal systems"
    },
    {
      name: "Basic Medical Sciences",
      icon: <FaMicroscope className="text-4xl text-indigo-600" />,
      programs: ["Biochemistry", "Microbiology", "Anatomy", "Physiology"],
      description: "Foundational health sciences for medical and research careers"
    },
    {
      name: "Education",
      icon: <FaUserTie className="text-4xl text-indigo-600" />,
      programs: ["Science Education", "Educational Administration", "Curriculum Studies", "Guidance Counseling"],
      description: "Training the next generation of educators and administrators"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Academic Programs</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Carefully developed programs to convert students' ingenuity and creative ideas into sustainable careers
          </p>
        </motion.div>

        {/* Programs Filter (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-full font-medium">All Programs</button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-medium">Undergraduate</button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-medium">Postgraduate</button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-medium">Certificate</button>
        </motion.div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    {department.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{department.name}</h3>
                    <p className="text-gray-600 mb-4">{department.description}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Programs Offered:</h4>
                  <ul className="space-y-2">
                    {department.programs.map((program, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                        <span>{program}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <button className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center">
                  View Department Details
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't find your desired program?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer many more specialized programs and courses. Contact our admissions team for personalized guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition duration-300">
              Contact Admissions
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-indigo-50 transition duration-300">
              Download Full Prospectus
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicPrograms;