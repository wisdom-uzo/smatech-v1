"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserSession, clearUserSession } from '@/lib/auth';

export default function ProtectedRoute({ children, requiredRoles = [] }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifySession = async () => {
      setIsLoading(true);
      const user = getUserSession();

      if (!user) {
        // Store intended URL for redirect after login
        sessionStorage.setItem('redirectUrl', window.location.pathname);
        clearUserSession();
        router.push('/login');
        return;
      }

      // Check if session is expired
      if (user.expiresAt && user.expiresAt < Date.now()) {
        clearUserSession();
        sessionStorage.setItem('sessionExpired', 'true');
        router.push('/login');
        return;
      }

      // Role-based access control (if needed)
      if (requiredRoles.length > 0) {
        // Add your role checking logic here
        // For now, we'll just check if user exists
        if (!user) {
          clearUserSession();
          router.push('/login?error=unauthorized');
          return;
        }
      }

      setIsAuthorized(true);
      setIsLoading(false);
    };

    verifySession();

    // Cleanup function
    return () => {
      // Cancel any ongoing async operations if needed
    };
  }, [router, requiredRoles]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return isAuthorized ? children : null;
}