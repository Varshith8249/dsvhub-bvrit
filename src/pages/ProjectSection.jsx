import React from 'react';

const projects = [
  {
    title: 'Smart Waste Reporting System',
    description: 'A web app for citizens to report waste issues using image upload and geolocation.',
    tech: ['React', 'Firebase', 'Tailwind'],
    link: 'https://github.com/your-repo',
  },
  {
    title: 'Data Science Portfolio Builder',
    description: 'An interactive tool for students to create and showcase their DS portfolios.',
    tech: ['Python', 'Flask', 'Bootstrap'],
    link: 'https://example.com/demo',
  },
  {
    title: 'AI Resume Scanner',
    description: 'ML-powered resume ranker for campus recruitment assistance.',
    tech: ['Sklearn', 'NLP', 'Streamlit'],
    link: '',
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-teal-400 mb-12 text-center" data-aos="fade-up">
          Our Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-xl hover:shadow-teal-500/30 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
              <p className="text-gray-300 mb-3">{proj.description}</p>

              <div className="flex flex-wrap gap-2 text-sm text-teal-400 font-mono mb-4">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-teal-900 bg-opacity-20 px-2 py-1 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 mt-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
