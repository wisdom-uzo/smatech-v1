"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { db, query, where, getDocs, collection } from '@/lib/firebase';
import { comparePasswords, setUserSession } from '@/lib/auth';
import { FiUser, FiLock, FiEye, FiEyeOff, FiLogIn, FiArrowRight } from 'react-icons/fi';

export default function StudentLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    matricNumber: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [redirectPath, setRedirectPath] = useState('/portal/dashboard');

  useEffect(() => {
    // Check for redirect path in localStorage (set by protected routes)
    const storedPath = typeof window !== 'undefined' ? localStorage.getItem('redirectPath') : null;
    if (storedPath) {
      setRedirectPath(storedPath);
      localStorage.removeItem('redirectPath');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Query Firestore for student
      const studentsRef = collection(db, 'students');
      const q = query(
        studentsRef, 
        where('matricNumber', '==', formData.matricNumber.trim().toUpperCase())
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new Error('Invalid matric number or password');
      }

      // Verify password
      const studentDoc = querySnapshot.docs[0];
      const studentData = studentDoc.data();
      const passwordMatch = await comparePasswords(formData.password, studentData.password);
      
      if (!passwordMatch) {
        throw new Error('Invalid matric number or password');
      }

      // Set user session
      const userData = {
        id: studentDoc.id,
        matricNumber: studentData.matricNumber,
        firstName: studentData.firstName,
        lastName: studentData.lastName,
        email: studentData.email,
        program: studentData.program,
        department: studentData.department,
        level: studentData.level,
        photoUrl: studentData.photoUrl || ''
      };

      await setUserSession(userData);
      router.push(redirectPath);
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to login. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-md"
      >
        {/* Login Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center relative">
            <div className="absolute top-4 left-4">
              <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                <FiLogIn className="text-white text-lg" />
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h1 className="text-2xl font-bold text-white mb-1">SMATECH Portal</h1>
              <p className="text-blue-100">School of Management and Science Abokuta</p>
            </motion.div>
          </div>

          {/* Card Body */}
          <div className="p-8">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg flex items-center"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Matric Number Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="matricNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Matriculation Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="matricNumber"
                    name="matricNumber"
                    type="text"
                    required
                    autoComplete="username"
                    autoCapitalize="characters"
                    value={formData.matricNumber}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="e.g. ABC123456"
                  />
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div variants={itemVariants}>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <FiEyeOff className="h-5 w-5" />
                    ) : (
                      <FiEye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Remember Me & Forgot Password */}
              <motion.div variants={itemVariants} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="/portal/forgot-password"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <FiArrowRight className="ml-2" />
                    </>
                  )}
                </button>
              </motion.div>
            </form>

         
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          variants={itemVariants}
          className="mt-6 text-center text-xs text-gray-500"
        >
          <p>© {new Date().getFullYear()} SMATECH Student Portal. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}