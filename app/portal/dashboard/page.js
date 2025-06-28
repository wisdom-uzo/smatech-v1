"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserSession, clearUserSession } from '@/lib/auth';
import ProtectedRoute from '@/components/ProtectedRoute';
import StatsCard from '@/components/StatsCards';
import RecentCourses from '@/components/RecentCourses';
// import ActivityLog from '@/components/ActivityLog';

export default function StudentDashboard() {
  const router = useRouter();
  const [user] = useState(getUserSession());

  const handleLogout = () => {
    clearUserSession();
    router.push('/portal/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="space-y-6">
        {/* Welcome banner */}
        <div className="bg-indigo-700 rounded-lg shadow-md p-6 text-white">
          <h2 className="text-2xl font-bold">
            Welcome back, {user.firstName}!
          </h2>
          <p className="mt-2 opacity-90">
            Here's what's happening in your academic journey today.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Registered Courses"
            value="5"
            change="+1 this semester"
            icon={
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            }
          />

          <StatsCard
            title="CGPA"
            value="4.25"
            change="+0.15 from last semester"
            icon={
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />

          <StatsCard
            title="Pending Payments"
            value="1"
            change="Due in 5 days"
            icon={
              <svg
                className="w-6 h-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />

          <StatsCard
            title="Upcoming Events"
            value="3"
            change="Next in 2 days"
            icon={
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
          />
        </div>

        {/* Main content area */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Recent courses */}
          <div className="lg:col-span-2">
            <RecentCourses />
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* <UpcomingEvents /> */}hhh
            {/* <ActivityLog userId={user.id} /> */}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}