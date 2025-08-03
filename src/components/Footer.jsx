import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
        
        {/* Left: Logo & Tagline */}
        <div>
          <h3 className="text-2xl font-bold text-orange-400 mb-2">DS Visionary Hub</h3>
          <p className="text-gray-400">
            Empowering students to lead in data science, AI, and innovation.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-teal-400 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-orange-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-orange-400 transition">About</a></li>
            <li><a href="#events" className="hover:text-orange-400 transition">Events</a></li>
            <li><a href="#team" className="hover:text-orange-400 transition">Team</a></li>
            <li><a href="#projects" className="hover:text-orange-400 transition">Projects</a></li>
            <li><a href="#blog" className="hover:text-orange-400 transition">Blog</a></li>
            <li><a href="#contact" className="hover:text-orange-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Right: Contact & Social */}
        <div>
          <h4 className="text-xl font-semibold text-teal-400 mb-3">Connect with Us</h4>

          <p className="text-gray-300 mb-2 flex items-center">
            <FaEnvelope className="mr-2" />
            <a href="mailto:bvrit.cse.dsvhub@gmail.com" className="hover:underline">
              bvrit.cse.dsvhub@gmail.com
            </a>
          </p>

          <p className="text-gray-300 mb-2 flex items-center">
            <FaPhoneAlt className="mr-2" />
            <a href="tel:+918688747852" className="hover:underline">+91 86887 47852</a>
          </p>

          <div className="flex space-x-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl text-gray-400 hover:text-teal-400 transition" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl text-gray-400 hover:text-teal-400 transition" />
            </a>
            <a href="https://www.instagram.com/dsv_hub_2024" target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl text-gray-400 hover:text-pink-400 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="text-2xl text-gray-400 hover:text-sky-400 transition" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom: Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} DS Visionary Hub • All rights reserved.
      </div>
    </footer>
  );
}
