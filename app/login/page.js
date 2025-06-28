"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db, query, where, getDocs, collection } from '@/lib/firebase';
import { comparePasswords, setUserSession, checkLoginAttempts, recordLoginAttempt } from '@/lib/auth';

export default function StudentLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    matricNumber: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [remainingAttempts, setRemainingAttempts] = useState(5);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaText, setCaptchaText] = useState('');

  // Generate CAPTCHA
  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    return result;
  };

  useEffect(() => {
    const attempts = checkLoginAttempts();
    setRemainingAttempts(Math.max(0, 5 - attempts));
    if (attempts >= 3) {
      setShowCaptcha(true);
      generateCaptcha();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Check remaining attempts
      const attempts = checkLoginAttempts();
      if (attempts >= 5) {
        throw new Error('Too many failed attempts. Please try again later.');
      }

      // Validate CAPTCHA if shown
      if (showCaptcha && captchaInput !== captchaText) {
        generateCaptcha(); // Refresh CAPTCHA
        throw new Error('Invalid CAPTCHA. Please try again.');
      }

      // Basic validation
      if (!formData.matricNumber || !formData.password) {
        throw new Error('Matric number and password are required');
      }

      // Query Firestore
      const studentsRef = collection(db, 'students');
      const q = query(
        studentsRef, 
        where('matricNumber', '==', formData.matricNumber.trim().toUpperCase())
      );
      const querySnapshot = await getDocs(q);

      // Simulate similar delay whether user exists or not
      await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));

      if (querySnapshot.empty) {
        recordLoginAttempt();
        throw new Error('Invalid credentials');
      }

      // Get student data
      const studentDoc = querySnapshot.docs[0];
      const studentData = studentDoc.data();

      // Check account status
      if (studentData.status && studentData.status !== 'approved') {
        throw new Error('Your account is pending approval. Please contact administration.');
      }

      // Verify password
      const passwordMatch = await comparePasswords(formData.password, studentData.password);
      if (!passwordMatch) {
        recordLoginAttempt();
        throw new Error('Invalid credentials');
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
        photoUrl: studentData.photoUrl || '',
        lastLogin: new Date().toISOString()
      };
      setUserSession(userData);

      // Reset login attempts on success
      if (typeof window !== 'undefined') {
        localStorage.removeItem('loginAttempts');
        localStorage.removeItem('lastLoginAttempt');
      }

      // Redirect to dashboard
      router.push('/portal/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to login. Please try again.');
      setRemainingAttempts(Math.max(0, 5 - recordLoginAttempt()));
      
      if (remainingAttempts <= 2 && !showCaptcha) {
        setShowCaptcha(true);
        generateCaptcha();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Student Portal Login
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Use your matric number and password to access your account
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
              {remainingAttempts < 5 && (
                <p className="mt-2 text-sm">
                  Remaining attempts: {remainingAttempts}
                </p>
              )}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="matricNumber" className="block text-sm font-medium text-gray-700">
                Matriculation Number
              </label>
              <div className="mt-1">
                <input
                  id="matricNumber"
                  name="matricNumber"
                  type="text"
                  required
                  autoComplete="off"
                  autoCapitalize="characters"
                  value={formData.matricNumber}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {showCaptcha && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">
                    CAPTCHA Verification
                  </label>
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="text-xs text-indigo-600 hover:text-indigo-500"
                  >
                    Refresh
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1 bg-gray-100 p-2 rounded-md text-center font-mono text-lg tracking-widest">
                    {captchaText}
                  </div>
                  <input
                    id="captcha"
                    name="captcha"
                    type="text"
                    required
                    autoComplete="off"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    className="flex-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="/portal/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting || remainingAttempts <= 0}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Logging in...' : 'Sign in'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Don't have an account?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="/portal/register"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register as a new student
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}