// src/pages/ContactSection.jsx
import React, { useState } from 'react';
import { FaInstagram, FaMedium, FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-4">

        {/* Follow Us Section */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-teal-400 mb-2">Follow Us</h3>
          <p className="text-gray-400 mb-6">Stay connected with us for updates, blogs, and events</p>
          <div className="flex justify-center space-x-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/dsvhub_bvrit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-pink-500/20 rounded-full hover:bg-pink-500/40 text-pink-400 hover:scale-110 transition transform duration-300 text-3xl"
            >
              <FaInstagram />
            </a>

            {/* Medium */}
            <a
              href="https://medium.com/@bvritn.cse.dsvhub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-green-500/20 rounded-full hover:bg-green-500/40 text-green-400 hover:scale-110 transition transform duration-300 text-3xl"
            >
              <FaMedium />
            </a>

            {/* LinkedIn (optional but recommended) */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-500/20 rounded-full hover:bg-blue-500/40 text-blue-400 hover:scale-110 transition transform duration-300 text-3xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Contact Us Form */}
        <h2 className="text-4xl font-bold text-orange-400 mb-8 text-center" data-aos="fade-up">
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/10 p-8 rounded-xl backdrop-blur-md border border-white/20 shadow-lg"
          data-aos="fade-up"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-black/30 border border-gray-500 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-black/30 border border-gray-500 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-black/30 border border-gray-500 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-green-400 font-medium mt-4">Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
}
