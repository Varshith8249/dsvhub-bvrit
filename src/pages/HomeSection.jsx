import React from 'react';
import MainLogo from '../images/MainLogo.png';


export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1" data-aos="fade-right">
          <h1 className="text-5xl font-extrabold mb-6">
            Welcome to <span className="text-teal-400">DS Visionary Hub</span>
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Empowering data science enthusiasts through collaboration, innovation, and learning.
          </p>
          <a
            href="#about"
            className="bg-teal-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Know More
          </a>
        </div>
        <div className="flex-1" data-aos="fade-left">
          <img
            src={MainLogo}
            alt="Hero"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
