"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUserSession } from '@/lib/auth';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ children }) {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const sessionUser = getUserSession();
    if (!sessionUser) {
      router.push('/portal/login');
    } else {
      setUser(sessionUser);
    }
  }, [router]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 lg:hidden ${mobileSidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setMobileSidebarOpen(false)}></div>
        <div className="relative flex flex-col w-72 max-w-xs h-full bg-white">
          <Sidebar user={user} closeMobileSidebar={() => setMobileSidebarOpen(false)} />
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className={`hidden lg:flex lg:flex-shrink-0 ${sidebarOpen ? 'lg:w-72' : 'lg:w-20'}`}>
        <div className="flex flex-col w-full border-r border-gray-200 bg-white">
          <Sidebar 
            user={user} 
            isCollapsed={!sidebarOpen} 
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          />
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <Header 
          user={user} 
          toggleMobileSidebar={() => setMobileSidebarOpen(true)} 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          isSidebarOpen={sidebarOpen}
        />
        
        {/* Main content */}
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}