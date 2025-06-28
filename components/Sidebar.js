"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, AcademicCapIcon, BookOpenIcon, ClipboardListIcon, 
  CreditCardIcon, CogIcon, QuestionMarkCircleIcon, LogoutIcon, 
  ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/outline';
import UserProfile from './UserProfile';

const navigation = [
  { name: 'Dashboard', href: '/portal/dashboard', icon: HomeIcon },
  { name: 'Courses', href: '/portal/courses', icon: AcademicCapIcon },
  { name: 'Registration', href: '/portal/registration', icon: BookOpenIcon },
  { name: 'Results', href: '/portal/results', icon: ClipboardListIcon },
  { name: 'Payments', href: '/portal/payments', icon: CreditCardIcon },
  { name: 'Settings', href: '/portal/settings', icon: CogIcon },
  { name: 'Help', href: '/portal/help', icon: QuestionMarkCircleIcon },
];

export default function Sidebar({ user, isCollapsed, toggleSidebar, closeMobileSidebar }) {
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col">
      {/* Sidebar header */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
        {!isCollapsed ? (
          <h1 className="text-xl font-bold text-indigo-600">Student Portal</h1>
        ) : (
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="text-indigo-600 font-bold">SP</span>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="hidden lg:block text-gray-400 hover:text-gray-500"
        >
          {isCollapsed ? (
            <ChevronDoubleRightIcon className="h-5 w-5" />
          ) : (
            <ChevronDoubleLeftIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* User profile */}
      <UserProfile user={user} isCollapsed={isCollapsed} />

      {/* Navigation */}
      <nav className="flex-1 px-2 space-y-1 bg-white">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={closeMobileSidebar}
            className={`group flex items-center px-2 py-3 text-sm font-medium rounded-md ${
              pathname === item.href
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon
              className={`mr-3 flex-shrink-0 h-6 w-6 ${
                pathname === item.href
                  ? 'text-indigo-500'
                  : 'text-gray-400 group-hover:text-gray-500'
              }`}
              aria-hidden="true"
            />
            {!isCollapsed && item.name}
          </Link>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="px-2 pb-4">
        <Link
          href="/portal/logout"
          className="group flex items-center px-2 py-3 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        >
          <LogoutIcon
            className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
          {!isCollapsed && 'Logout'}
        </Link>
      </div>
    </div>
  );
}