"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { getUserSession, clearUserSession } from '@/lib/auth';
import ProtectedRoute from '@/components/ProtectedRoute';
import { FiBook, FiAward, FiCalendar, FiUser, FiCreditCard, FiLogOut } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

export default function StudentDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const sessionUser = getUserSession();
    if (!sessionUser) {
      router.push('/portal/login');
    } else {
      setUser(sessionUser);
    }
    return () => setIsMounted(false);
  }, [router]);
console.log('User session:', user);
  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      clearUserSession();
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // Sample data - replace with actual data from your database
  const academicData = {
    cgpa: 3.75,
    courses: 5,
    credits: 15,
    attendance: '92%',
    standing: 'Good'
  };

  const recentCourses = [
    { code: 'CSC 401', name: 'Advanced Programming', progress: 80 },
    { code: 'MTH 301', name: 'Discrete Mathematics', progress: 65 },
    { code: 'PHY 201', name: 'Modern Physics', progress: 45 }
  ];

  const upcomingEvents = [
    { date: 'Nov 15', title: 'Midterm Exams', course: 'CSC 401' },
    { date: 'Nov 18', title: 'Assignment Due', course: 'MTH 301' },
    { date: 'Nov 20', title: 'Guest Lecture', course: 'PHY 201' }
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
     

        {/* Main Content */}
        <main className=" ">
          {/* Welcome Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl shadow-md p-6 text-white mb-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Welcome back, {user.firstName}!</h2>
                <p className="mt-1 opacity-90">
                  {new Date().getHours() < 12 ? 'Good morning' : 
                   new Date().getHours() < 18 ? 'Good afternoon' : 'Good evening'}, 
                  ready to continue your learning journey?
                </p>
              </div>
              <FaGraduationCap className="h-12 w-12 opacity-20" />
            </div>
          </motion.div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Student Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isMounted ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden lg:col-span-1"
            >
              <div className="p-6">
                <div className="flex flex-col items-center">
                  {user.photoUrl ? (
                    <img
                      className="h-24 w-24 rounded-full object-cover mb-4 border-4 border-indigo-100"
                      src={user.photoUrl}
                      alt="Student photo"
                    />
                  ) : (
                    <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center mb-4 border-4 border-indigo-200">
                      <span className="text-indigo-600 text-3xl font-medium">
                        {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
                      </span>
                    </div>
                  )}
                  <h2 className="text-xl font-bold text-gray-900 text-center">
                    {user.firstName} {user.lastName}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">{user.matricNumber}</p>
                  
                  <div className="mt-6 w-full space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Program:</span>
                      <span className="font-medium">{user.program}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Department:</span>
                      <span className="font-medium">{user.department}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Level:</span>
                      <span className="font-medium">{user.level}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Email:</span>
                      <span className="font-medium">{user.email}</span>
                    </div>
                  </div>

                  <button className="mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    View Full Profile
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Academic Summary Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                <div className="bg-white rounded-xl shadow-md p-4 flex items-center">
                  <div className="p-3 rounded-lg bg-green-100 text-green-600 mr-4">
                    <FiAward className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">CGPA</p>
                    <p className="text-xl font-bold">{academicData.cgpa}</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 flex items-center">
                  <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
                    <FiBook className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Courses</p>
                    <p className="text-xl font-bold">{academicData.courses}</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 flex items-center">
                  <div className="p-3 rounded-lg bg-purple-100 text-purple-600 mr-4">
                    <FiCreditCard className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Credits</p>
                    <p className="text-xl font-bold">{academicData.credits}</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 flex items-center">
                  <div className="p-3 rounded-lg bg-yellow-100 text-yellow-600 mr-4">
                    <FiUser className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Attendance</p>
                    <p className="text-xl font-bold">{academicData.attendance}</p>
                  </div>
                </div>
              </motion.div>

              {/* Recent Courses */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Your Courses</h3>
                  <a href="/portal/courses" className="text-sm text-indigo-600 hover:text-indigo-500">
                    View all
                  </a>
                </div>
                <div className="divide-y divide-gray-200">
                  {recentCourses.map((course, index) => (
                    <div key={index} className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {course.code} - {course.name}
                          </h4>
                          <div className="flex items-center mt-1">
                            <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                              <div
                                className={`h-2 rounded-full ${
                                  course.progress > 75 
                                    ? 'bg-green-500' 
                                    : course.progress > 50 
                                      ? 'bg-blue-500' 
                                      : 'bg-yellow-500'
                                }`}
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-500">{course.progress}%</span>
                          </div>
                        </div>
                        <button className="ml-4 inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Upcoming Events */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Upcoming Events</h3>
                  <a href="/portal/calendar" className="text-sm text-indigo-600 hover:text-indigo-500">
                    View calendar
                  </a>
                </div>
                <ul className="divide-y divide-gray-200">
                  {upcomingEvents.map((event, index) => (
                    <li key={index} className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-2 mr-4">
                          <FiCalendar className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{event.title}</p>
                          <p className="text-sm text-gray-500">
                            {event.date} • {event.course}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}