import React from 'react';

const allEvents = [
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
  {
    title: "Felicitation Ceremony",
    date: "Aug 06, 2025",
    desc: "The Felicitation Ceremony stands as a moment of honor and pride, held in the esteemed presence of the Head of Department and faculty members. This gathering celebrates the dedication, leadership, and contributions of the 22–26 batch seniors of DSV Hub, while symbolizing the graceful handover of responsibilities to the new team.",
  },
  {
    title: "MoU with Blockseblock",
    date: "Aug 06, 2025",
    desc: "The MoU signing with Blockseblock began with a welcome address by the Principal, followed by an introduction to the company. Speeches were delivered by HOD CSE, Mr. Sahil Thakur, and Mr. Bandhul Bansal, along with a video presentation of the DSV Hub. The event concluded with the official signing, marking the start of a collaborative partnership.",
  },
  // ➕ Add more events later as needed
];

export default function AllEvents() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-400 mb-12 text-center">
          All Events
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md border border-white/10 hover:shadow-teal-400/30 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{event.date}</p>
              <p className="text-gray-300 mb-4">{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
