import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-400 mb-12 text-center" data-aos="fade-up">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg transition hover:scale-105 duration-300"
            data-aos="fade-right"
          >
            <h3 className="text-3xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
              Mission
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              Our mission is to bridge the gap between academics and industry by equipping students with in-demand skills in data analytics, machine learning, and AI. Through workshops, projects, and competitions, we aim to foster data-driven leaders who innovate, collaborate, and solve real-world challenges.
            </p>
          </div>

          {/* Vision */}
          <div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg transition hover:scale-105 duration-300"
            data-aos="fade-left"
          >
            <h3 className="text-3xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
              Vision
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              We envision a vibrant ecosystem where students explore, experiment, and excel in data science and emerging technologies. By promoting academic-industry partnerships, mentorship, and collaborative learning, we aim to build a culture of curiosity, leadership, and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
