import React from 'react';

export default function EventsSection() {
  const events = [
    {
      title: "Intro to Python for Data Science",
      date: "Aug 20, 2025",
      desc: "Basics of Python and key libraries like Pandas and NumPy.",
    },
    {
      title: "ML Model Deployment",
      date: "Sep 5, 2025",
      desc: "Deploy ML models using Flask and Streamlit.",
    },
    {
      title: "Data Visualization with Tableau",
      date: "Oct 10, 2025",
      desc: "Design dashboards with Tableau for real-world data.",
    },
  ];

  return (
    <section id="events" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-teal-400 mb-12 text-center" data-aos="zoom-in">
          Events
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-xl shadow-xl hover:scale-105 hover:shadow-teal-400/40 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-teal-400 mb-2">{event.date}</p>
              <p className="text-gray-300">{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
