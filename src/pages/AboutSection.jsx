import React from 'react';

// Faculty image imports
import Madhubabu from '../images/faculty/madhubabu.jpg';
import Pallavi from '../images/faculty/pallavi.jpg';
import Vivek from '../images/faculty/vivek.jpg';
import Balaji from '../images/faculty/balaji.jpg';
import Pitchai from '../images/faculty/pitchai.jpg';
import SubbaReddy from '../images/faculty/subbareddy.jpg';
import Rajyalakshmi from '../images/faculty/rajyalakshmi.jpg';

const facultyData = [
  { name: 'Dr. Ch. Madhubabu', role: 'Convener, DSV Hub', image: Madhubabu },
  { name: 'Dr. L. Pallavi', role: 'Co-Convener, DSV Hub', image: Pallavi },
  { name: 'Dr. D. Vivek', role: 'Coordinator, DSV Hub', image: Vivek },
  { name: 'Dr. K. Balaji', role: 'Co-Coordinator & Cloud Computing Domain Head, DSV Hub', image: Balaji },
  { name: 'Dr. R. Pitchai', role: 'Research Advisor, DSV Hub', image: Pitchai },
  { name: 'Dr. T. Subba Reddy', role: 'Computer Vision Domain Head, DSV Hub', image: SubbaReddy },
  { name: 'Dr. Ch. Rajyalakshmi', role: 'Computational Intelligence & AI Domain Head, DSV Hub', image: Rajyalakshmi },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-400 mb-12 text-center" data-aos="fade-up">
          About Us
        </h2>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10">
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg transition hover:scale-105 duration-300"
            data-aos="fade-right"
          >
            <h3 className="text-3xl font-semibold text-orange-400 mb-4">
              Mission
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              Our mission is to bridge the gap between academics and industry by equipping students with in-demand skills in data analytics, machine learning, and AI. Through workshops, projects, and competitions, we aim to foster data-driven leaders who innovate, collaborate, and solve real-world challenges.
            </p>
          </div>
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg transition hover:scale-105 duration-300"
            data-aos="fade-left"
          >
            <h3 className="text-3xl font-semibold text-orange-400 mb-4">
              Vision
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              We envision a vibrant ecosystem where students explore, experiment, and excel in data science and emerging technologies. By promoting academic-industry partnerships, mentorship, and collaborative learning, we aim to build a culture of curiosity, leadership, and innovation.
            </p>
          </div>
        </div>

        {/* Faculty Section */}
        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-teal-400 mb-10 text-center">
            Faculty Advisors
          </h3>

          {/* First row: 2 cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {facultyData.slice(0, 2).map((faculty, index) => (
              <FacultyCard key={index} {...faculty} delay={index * 100} />
            ))}
          </div>

          {/* Second row: 2 cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {facultyData.slice(2, 4).map((faculty, index) => (
              <FacultyCard key={index} {...faculty} delay={index * 100 + 200} />
            ))}
          </div>

          {/* Third row: 3 cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {facultyData.slice(4).map((faculty, index) => (
              <FacultyCard key={index} {...faculty} delay={index * 100 + 400} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FacultyCard({ name, role, image, delay }) {
  return (
    <div
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-md hover:shadow-teal-400/30 transition transform hover:scale-105"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <img
        src={image}
        alt={name}
        className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-2 border-teal-400 shadow-lg"
      />
      <h4 className="text-xl font-semibold text-center text-white">{name}</h4>
      <p className="text-center text-orange-400 mt-1">{role}</p>
    </div>
  );
}
