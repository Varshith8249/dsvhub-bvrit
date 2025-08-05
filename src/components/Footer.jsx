import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-950 to-black text-white pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Left: Logo & Tagline */}
        <div>
          <h3 className="text-3xl font-extrabold text-orange-400 mb-4">DS Visionary Hub</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering students to lead in data science, AI, and innovation through exploration, collaboration, and real-world impact.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-teal-400 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              ['Home', '#home'],
              ['About', '#about'],
              ['Events', '#events'],
              ['Team', '#team'],
              ['Projects', '#projects'],
              ['Blog', '#blog'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-gray-300 hover:text-orange-400 transition duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact & Social */}
        <div>
          <h4 className="text-xl font-semibold text-teal-400 mb-4">Connect with Us</h4>

          <p className="text-gray-300 text-sm mb-2 flex items-center">
            <FaEnvelope className="mr-2 text-orange-400" />
            <a href="mailto:bvrit.cse.dsvhub@gmail.com" className="hover:underline">
              bvrit.cse.dsvhub@gmail.com
            </a>
          </p>

          <p className="text-gray-300 text-sm mb-4 flex items-center">
            <FaPhoneAlt className="mr-2 text-orange-400" />
            <a href="tel:+918688747852" className="hover:underline">+91 86887 47852</a>
          </p>

          <div className="flex space-x-4 mt-3">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl text-gray-400 hover:text-blue-500 transition" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl text-gray-400 hover:text-white transition" />
            </a>
            <a href="https://www.instagram.com/dsvhub_bvrit" target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl text-gray-400 hover:text-pink-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="text-2xl text-gray-400 hover:text-sky-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-gray-500 text-xs tracking-wider">
        &copy; {new Date().getFullYear()} <span className="text-orange-400 font-semibold">DS Visionary Hub</span> • All rights reserved.
      </div>
    </footer>
  );
}
