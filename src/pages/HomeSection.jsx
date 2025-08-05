import React from 'react';
import MainLogo from '../images/MainLogo.png';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text content */}
        <div className="flex-1 text-center md:text-left" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="text-teal-400">Data Science Visionary Hub</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Empowering data science enthusiasts through collaboration, innovation, and learning.
          </p>
          <a
            href="#about"
            className="inline-block bg-teal-500 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Know More
          </a>
        </div>

        {/* Logo */}
        <div className="flex-1 flex justify-center" data-aos="fade-left">
          <img
            src={MainLogo}
            alt="DSVH Logo"
            className="w-[440px] md:w-[720px] max-w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
