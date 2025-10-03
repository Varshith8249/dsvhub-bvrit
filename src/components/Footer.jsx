import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

// Data for quick links
const quickLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Events", to: "/events" },
  { name: "Team", to: "/team" },
  { name: "Projects", to: "/projects" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
];

// Data for social media links
const socialLinks = [
  { Icon: FaTwitter, href: "https://twitter.com/your-profile", label: "Twitter" },
  { Icon: FaInstagram, href: "https://www.instagram.com/your-profile", label: "Instagram" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/your-profile", label: "LinkedIn" },
  { Icon: FaGithub, href: "https://github.com/your-profile", label: "GitHub" },
];

export default function NeonOrangeFooter() {
  return (
    <motion.footer
      // 1. Background is now pure black, default text is light gray
      className="w-full border-t border-gray-800 py-8 px-6 bg-black text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left items-start">
        
        {/* About Section - Brand Name in Bright Orange */}
        <div className="md:col-span-1">
          <h3 className="text-sm font-semibold text-[#FF6B1A] mb-2">DS Visionary Hub</h3>
          <p className="text-xs leading-relaxed">
            Empowering students to lead in data science, AI, and innovation through exploration, collaboration, and real-world impact.
          </p>
        </div>

        {/* Quick Links Section - Headings in Cyan Neon */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold text-teal-400 mb-2">Quick Links</h3>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {quickLinks.map((link) => (
              // 3. Hover text is pure white
              <Link key={link.name} to={link.to} className="hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info Section - Headings in Cyan Neon */}
        <div>
          <h3 className="text-sm font-semibold text-teal-400 mb-2">Contact Us</h3>
          <p className="text-xs leading-relaxed">
            <a href="mailto:bvrit.cse.dsvhub@gmail.com" className="hover:text-white transition-colors">
              bvrit.cse.dsvhub@gmail.com
            </a>
            <br />
            <a href="tel:+918688747852" className="hover:text-white transition-colors">
              +91 86887 47852
            </a>
          </p>
        </div>

        {/* Social Media Section - Headings in Cyan Neon */}
        <div>
          <h3 className="text-sm font-semibold text-teal-400 mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5 mt-1">
            {socialLinks.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${label}`} className="hover:text-white transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright Section - Highlighted Brand Name */}
        <div className="md:col-span-5 text-center mt-6 border-t border-gray-800 pt-6">
          <p className="text-xs">
            © {new Date().getFullYear()} <span className="font-semibold text-[#FF6B1A]">DS Visionary Hub</span> • All rights reserved.
          </p>
        </div>
        
      </div>
    </motion.footer>
  );
}