import React from 'react';

export default function EventsSection() {
  const events = [
    {
      title: "Inauguration",
      date: "Mar 22, 2024",
      desc: "The launch of the Data Science Visionary Hub marks the beginning of a transformative journey towards data-driven excellence and innovation.",
    },
    {
      title: "Wiztrek",
      date: "Sep 13, 2024",
      desc: "Brain Buster Data Challenge brings together curious minds on an exciting journey of analytical thinking, data-driven problem solving, and decoding real-world insights.",
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
