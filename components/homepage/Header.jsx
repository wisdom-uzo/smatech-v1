'use client'; // Required for interactivity in Next.js 15

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const pathname = usePathname();

  // Track scroll position for header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  // Departments dropdown items
  const departments = [
    { name: "Arts", path: "/departments/arts" },
    { name: "Basic Medical Sciences", path: "/departments/basic-medical-sciences" },
    { name: "Education", path: "/departments/education" },
    { name: "Engineering", path: "/departments/engineering" },
    { name: "Environmental Sciences", path: "/departments/environmental-sciences" },
    { name: "Management Sciences", path: "/departments/management-sciences" },
    { name: "Social Sciences", path: "/departments/social-sciences" },
    { name: "Information Sciences", path: "/departments/information-sciences" },
  ];

  // Programs dropdown items
  const programs = [
    { name: "Undergraduate", path: "/programs/undergraduate" },
    { name: "Postgraduate", path: "/programs/postgraduate" },
    { name: "Professional Certifications", path: "/programs/certifications" },
    { name: "Affiliated Programs", path: "/programs/affiliated" },
  ];

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <div className="w-16  rounded-full flex items-center justify-center mr-3">
                
                      <img 
                                  src="/logo.png" 
                                  alt="SMATECH Logo" 
                                  className=" w-[100%] mx-auto mb-3  rounded-full"
                                />
                 
                </div>
                <div>
                  <h1 className="text-xl font-bold text-blue-900">SMATECH</h1>
                  <p className="text-xs text-gray-600">Abeokuta • Knowledge and Wisdom</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/' ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}>
              Home
            </Link>

            <div className="relative">
              <button 
                onClick={() => toggleDropdown('about')}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${dropdownOpen === 'about' || pathname.startsWith('/about') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
              >
                About Us
                <svg className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === 'about' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen === 'about' && (
                <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1">
                    <Link href="/about/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">History</Link>
                    <Link href="/about/mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Mission & Vision</Link>
                    <Link href="/about/provost" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Provost's Welcome</Link>
                    <Link href="/about/leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Leadership</Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button 
                onClick={() => toggleDropdown('programs')}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${dropdownOpen === 'programs' || pathname.startsWith('/programs') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Programs
                <svg className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === 'programs' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen === 'programs' && (
                <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1">
                    {programs.map((program) => (
                      <Link key={program.path} href={program.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        {program.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button 
                onClick={() => toggleDropdown('departments')}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${dropdownOpen === 'departments' || pathname.startsWith('/departments') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Departments
                <svg className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === 'departments' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen === 'departments' && (
                <div className="absolute left-0 mt-2 w-64 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1">
                    {departments.map((dept) => (
                      <Link key={dept.path} href={dept.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        {dept.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/admissions" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname.startsWith('/admissions') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}>
              Admissions
            </Link>

            <Link href="/research" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname.startsWith('/research') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}>
              Research
            </Link>

            <Link href="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${pathname.startsWith('/contact') ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}>
              Contact
            </Link>
          </nav>

          {/* Portal Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-2 ml-4">
            <Link href="/student-portal" className="px-3 py-2 text-sm font-medium text-blue-700 hover:text-blue-800">
              Student Portal
            </Link>
            <Link href="/staff-portal" className="px-3 py-2 text-sm font-medium text-blue-700 hover:text-blue-800">
              Staff Portal
            </Link>
            <Link href="/apply" className="ml-2 px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-md hover:bg-blue-800 transition-colors">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Home
            </Link>

            <div>
              <button 
                onClick={() => toggleDropdown('about-mobile')}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                About Us
                <svg className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === 'about-mobile' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen === 'about-mobile' && (
                <div className="pl-4">
                  <Link href="/about/history" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50">History</Link>
                  <Link href="/about/mission" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50">Mission & Vision</Link>
                  <Link href="/about/provost" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50">Provost's Welcome</Link>
                  <Link href="/about/leadership" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50">Leadership</Link>
                </div>
              )}
            </div>

            {/* Repeat similar pattern for other dropdowns in mobile */}
            <div>
              <button 
                onClick={() => toggleDropdown('programs-mobile')}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Programs
                <svg className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === 'programs-mobile' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen === 'programs-mobile' && (
                <div className="pl-4">
                  {programs.map((program) => (
                    <Link key={program.path} href={program.path} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                      {program.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button 
                onClick={() => toggleDropdown('departments-mobile')}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Departments
                <svg className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === 'departments-mobile' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen === 'departments-mobile' && (
                <div className="pl-4">
                  {departments.map((dept) => (
                    <Link key={dept.path} href={dept.path} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                      {dept.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/admissions" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Admissions
            </Link>

            <Link href="/research" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Research
            </Link>

            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Contact
            </Link>

            <div className="pt-4 border-t border-gray-200">
              <Link href="/student-portal" className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:text-blue-800 hover:bg-blue-50">
                Student Portal
              </Link>
              <Link href="/staff-portal" className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:text-blue-800 hover:bg-blue-50">
                Staff Portal
              </Link>
              <Link href="/apply" className="block w-full mt-2 px-4 py-2 bg-blue-700 text-white text-base font-medium rounded-md hover:bg-blue-800 text-center">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}