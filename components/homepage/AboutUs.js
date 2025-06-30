// components/AboutUs.js
'use client'
import React from 'react';
import { FaChalkboardTeacher, FaUserGraduate, FaBuilding, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About SMATECH</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            A recognized institution by the government to render educational services, with affiliations to prestigious institutions.
          </p>
        </motion.div>

        {/* Provost Welcome */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 p-8 bg-indigo-900 text-white flex flex-col justify-center items-center">
                <div className=" rounded-full bg-gray-200 mb-6 overflow-hidden border-4 border-white">
                  {/* Provost image placeholder */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    
                          <img 
                                  src="/provost.png" 
                                  alt="Provost" 
                                  className=" w-[100%] "
                                />
                  
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center">DR.(Engr) Adegbesan Sunday Adéwálé</h3>
                <p className="text-center text-indigo-200">Provost, SMATECH</p>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Welcome Message</h3>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    School of Management and Technology (SMATECH) is a leading institution dedicated to quality teaching, learning, research and community service. We have over the past few years developed leaders in many disciplines through our various programmes.
                  </p>
                  <p className="mb-4">
                    As the College of First Choice and one of the Nation's Pride, we place great premium on the development and welfare of our staff and students both at the undergraduate and postgraduate levels. Since its establishment, the institution has continued to play a key role in nation building by molding the teeming youth population through its teaching, research and community services.
                  </p>
                  <p className="mb-4">
                    As the melting pot of the society, we strongly believe in diversity and, therefore, provide an atmosphere for an all-inclusive Students. As a result, we attract quality staff and students who are able to compete at the highest level locally, regionally and globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              icon: <FaChalkboardTeacher className="text-4xl text-indigo-600" />,
              title: "Quality Education",
              description: "Nationally recognized programs with experienced faculty members"
            },
            {
              icon: <FaUserGraduate className="text-4xl text-indigo-600" />,
              title: "Diverse Programs",
              description: "8 departments offering 50+ programs across various disciplines"
            },
            {
              icon: <FaBuilding className="text-4xl text-indigo-600" />,
              title: "Modern Campus",
              description: "Located in Asero Housing Estate, Abeokuta with state-of-the-art facilities"
            },
            {
              icon: <FaAward className="text-4xl text-indigo-600" />,
              title: "Recognized Excellence",
              description: "Government-recognized institution with accredited programs"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Additional About Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-xl shadow-md p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our History</h3>
              <div className="prose text-gray-600">
                <p className="mb-4">
                  SMATECH was established in 2010 with the vision to provide quality education that meets international standards while addressing local needs. Over the years, we have grown to become one of the leading institutions in Ogun State.
                </p>
                <p className="mb-4">
                  Our institution has been a beacon of qualitative and research-oriented education for thousands of knowledge seekers who come to its domain from Nigeria and abroad.
                </p>
                <p>
                  SMATECH's vibrant community sprouts from a fountain of distinction, which produces top-tier graduates and academia whose impactful contributions continue to shape Nigeria's growth and development.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <div className="prose text-gray-600">
                <p className="mb-4">
                  To provide quality teaching, learning, research and community service, developing leaders in various disciplines through innovative programs.
                </p>
                <h4 className="font-bold text-gray-900 mt-6 mb-2">Core Values:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Excellence in teaching and research</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Integrity and ethical standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Innovation and creativity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Diversity and inclusivity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">✓</span>
                    <span>Community engagement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;