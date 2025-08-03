import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/MainLogo.png';

export default function Navbar({ sections }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e, id) => {
    e.preventDefault();

    if (location.pathname === '/') {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else {
      navigate('/');
      setIsOpen(false);
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/45 backdrop-blur-xl shadow-lg border-b border-white/10 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div onClick={() => navigate('/')} className="cursor-pointer flex items-center">
              <img
                src={logo}
                alt="DSVH Logo"
                className="h-14 w-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleLinkClick(e, section.id)}
                className="relative group text-white hover:text-teal-400 font-medium transition"
              >
                {section.title}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-teal-400 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-black/60 backdrop-blur-md border-t border-white/10 space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleLinkClick(e, section.id)}
              className="block py-2 text-white hover:text-teal-400 font-medium transition"
            >
              {section.title}
            </a>
          ))}

          <button
            onClick={() => {
              setIsOpen(false);
              navigate('/team');
            }}
            className="block w-full text-left py-2 text-white hover:text-teal-400 font-medium transition"
          >
            All Members
          </button>
        </div>
      )}
    </nav>
  );
}
