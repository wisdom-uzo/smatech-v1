// src/app/page.js
import React from 'react';
import Head from 'next/head';
import { FaGraduationCap, FaBook, FaUsers, FaChartLine, FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { IoIosRocket, IoMdSchool } from 'react-icons/io';
import { MdComputer, MdBusinessCenter } from 'react-icons/md';
import HeroBanner from '@/components/homepage/HeroBanner';
import Header from '@/components/homepage/Header';
import AboutUs from '@/components/homepage/AboutUs';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>School of Management and Science Abeokuta (SMATECH)</title>
        <meta name="description" content="SMATECH - A premier institution for quality education and research" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <div className="bg-white text-blue-900 px-4 py-1 rounded-full font-bold text-sm">
                EST. 2010
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              School of Management and Science Abeokuta
            </h1>
            <p className="text-xl mb-8 text-blue-100">"Knowledge and Wisdom"</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-100 transition duration-300">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition duration-300">
                Visit Campus
              </button>
            </div>
          </div>
        </div>
      </section> */}
     <Header />

      <HeroBanner />
        
      <AboutUs />
  

      {/* Programs Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Academic Programs</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Carefully developed programs to convert students' ingenuity and creative ideas into sustainable careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <MdBusinessCenter className="text-4xl text-indigo-600" />, title: "Management Sciences", programs: ["Accounting", "Business Administration", "Public Administration"] },
              { icon: <MdComputer className="text-4xl text-indigo-600" />, title: "Information Sciences", programs: ["Computer Science", "Information Technology", "Cybersecurity"] },
              { icon: <IoMdSchool className="text-4xl text-indigo-600" />, title: "Education", programs: ["Science Education", "Educational Administration", "Curriculum Studies"] },
              { icon: <FaBook className="text-4xl text-indigo-600" />, title: "Arts & Humanities", programs: ["Mass Communication", "English Literature", "History & International Studies"] },
              { icon: <IoIosRocket className="text-4xl text-indigo-600" />, title: "Engineering", programs: ["Electrical Engineering", "Mechanical Engineering", "Civil Engineering"] },
              { icon: <FaGlobe className="text-4xl text-indigo-600" />, title: "Social Sciences", programs: ["Economics", "Sociology", "Political Science"] },
            ].map((department, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{department.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{department.title}</h3>
                <ul className="space-y-2">
                  {department.programs.map((program, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                      <span>{program}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center">
                  Explore Programs
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SMATECH */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SMATECH?</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Discover what makes SMATECH the ideal choice for your educational journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Quality Education", desc: "Nationally recognized programs with experienced faculty" },
              { title: "Research Excellence", desc: "Robust research culture focused on solving societal challenges" },
              { title: "Entrepreneurship Focus", desc: "Skills development for self-sufficiency and business ventures" },
              { title: "Modern Facilities", desc: "State-of-the-art labs, studios, and learning spaces" },
              { title: "Industry Partnerships", desc: "Strong connections with leading businesses and organizations" },
              { title: "Vibrant Community", desc: "Diverse, inclusive environment that fosters growth" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-indigo-600 text-3xl mb-4">0{index + 1}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Campus Life</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Experience the vibrant and diverse community at our Asero Housing Estate campus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mt-8" />
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mt-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Activities</h3>
              <p className="text-gray-600 mb-6">
                Our campus offers a rich array of student clubs, organizations, and events that enhance the learning experience and foster personal growth.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {["Academic Clubs", "Sports Teams", "Cultural Groups", "Entrepreneurship Hub", "Tech Society", "Volunteer Programs"].map((activity, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Campus Facilities</h3>
              <p className="text-gray-600 mb-6">
                SMATECH boasts modern facilities designed to support academic excellence and student development:
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Learning Resource Center", desc: "State-of-the-art library with digital resources" },
                  { title: "Science & Engineering Labs", desc: "Fully equipped laboratories for practical learning" },
                  { title: "Technology Hub", desc: "Modern computing facilities and innovation spaces" },
                  { title: "Student Center", desc: "Hub for student activities and social engagement" },
                  { title: "Sports Complex", desc: "Facilities for various indoor and outdoor sports" },
                ].map((facility, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                      <FaGraduationCap className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{facility.title}</h4>
                      <p className="text-gray-600">{facility.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition duration-300">
                Take Virtual Campus Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your SMATECH Journey</h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
                Applications are now open for the upcoming academic session. Start your application today.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { title: "Undergraduate", desc: "Bachelor's degree programs" },
                { title: "Postgraduate", desc: "Master's degree programs" },
                { title: "Certificate", desc: "Professional and short courses" },
              ].map((program, index) => (
                <div key={index} className="bg-indigo-800 p-6 rounded-xl text-center">
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-indigo-200 mb-4">{program.desc}</p>
                  <button className="bg-white text-indigo-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-indigo-100 transition duration-300">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
            
            <div className="bg-white text-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Admissions Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Submit Application", desc: "Complete online application form" },
                  { step: "2", title: "Upload Documents", desc: "Provide required academic records" },
                  { step: "3", title: "Entrance Exam", desc: "Take our admission assessment" },
                  { step: "4", title: "Interview", desc: "Final interview with faculty" },
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-900 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h4 className="font-bold text-gray-900">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">News & Events</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Stay updated with the latest happenings at SMATECH
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
                <div className="p-6">
                  <div className="text-sm text-indigo-600 mb-2">June 15, 2023</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">SMATECH Hosts National Education Conference</h3>
                  <p className="text-gray-600 mb-4">
                    Leading educators gather to discuss innovations in teaching methodologies and curriculum development.
                  </p>
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center">
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
            <div className="space-y-6">
              {[
                { date: "JUL 25", title: "Open House Day", desc: "Prospective students tour our campus" },
                { date: "AUG 10", title: "Career Fair 2023", desc: "Connect with top employers" },
                { date: "SEP 5", title: "Research Symposium", desc: "Showcasing student innovations" },
              ].map((event, index) => (
                <div key={index} className="flex items-start border-b pb-6 last:border-0 last:pb-0">
                  <div className="bg-indigo-100 text-indigo-900 rounded-lg px-4 py-3 mr-4 text-center">
                    <div className="font-bold">{event.date}</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{event.title}</h4>
                    <p className="text-gray-600">{event.desc}</p>
                    <button className="mt-2 text-indigo-600 text-sm font-medium">Add to Calendar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-800 text-white rounded-xl overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                  
                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1">
                      <FaMapMarkerAlt className="text-indigo-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">SMATECH Campus</h3>
                      <p className="text-gray-300">Asero Housing Estate, Abeokuta<br />Ogun State, Nigeria</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="mr-4 mt-1">
                      <FaCalendarAlt className="text-indigo-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Visiting Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 8am - 5pm<br />Saturday: 9am - 1pm</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-bold text-lg mb-4">Contact Admissions</h3>
                    <p className="text-gray-300 mb-2">Email: admissions@smatech.edu.ng</p>
                    <p className="text-gray-300">Phone: +234 812 345 6789</p>
                  </div>
                  
                  <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition duration-300">
                    Schedule a Campus Visit
                  </button>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-gray-200 border-2 border-dashed w-full h-full min-h-96" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            Join Nigeria's next generation of leaders at School of Management and Science Abeokuta
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-100 transition duration-300">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition duration-300">
              Download Prospectus
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">SMATECH</h3>
              <p className="text-gray-400 mb-4">
                School of Management and Science Abeokuta - A beacon of qualitative and research-oriented education.
              </p>
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-gray-800 p-2 rounded-full">
                    <div className="bg-gray-200 border-2 border-dashed rounded-full w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About Us", "Programs", "Admissions", "Campus Life", "News", "Contact"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Programs</h4>
              <ul className="space-y-2">
                {["Undergraduate", "Postgraduate", "Certificate", "Part-time", "Online", "Continuing Education"].map((program, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white">{program}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-lg font-bold">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} School of Management and Science Abeokuta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;