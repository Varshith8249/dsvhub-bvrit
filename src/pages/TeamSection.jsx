import React, { useState } from 'react';
import teamData from '../data/teamData';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);
  const navigate = useNavigate();

  const previewMembers = teamData.slice(0, 3); // Show only first 3

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-400 mb-12 text-center" data-aos="fade-up">
          Meet Our Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {previewMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(member)}
              className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover object-top scale-[1.4] -translate-y-11 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-orange-400 font-medium">{member.role}</p>
              </div>
            </div>
          ))}

          <div
            onClick={() => navigate('/team')}
            className="flex items-center justify-center text-center cursor-pointer bg-white/10 backdrop-blur-lg border-2 border-dashed border-orange-500 rounded-2xl hover:bg-orange-500/20 transition hover:scale-105 duration-300"
            data-aos="fade-up"
          >
            <span className="text-orange-400 font-semibold text-lg p-8">+ View All Members</span>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedMember && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center px-4"
        >
          <div
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl w-full max-w-3xl flex flex-col md:flex-row gap-6 items-center md:items-start shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
          >
            {/* Left: ID Card */}
            <div className="md:w-1/2 w-full">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right: Info */}
            <div className="md:w-1/2 w-full text-center md:text-left space-y-4">
              <h3 className="text-2xl font-bold text-white">{selectedMember.name}</h3>
              <p className="text-orange-400 text-lg font-medium">{selectedMember.role}</p>
              <p className="text-gray-300">Roll No: {selectedMember.rollNo}</p>

              {selectedMember.phone && (
                <p className="text-gray-400 flex items-center gap-2">
                  <BsTelephoneFill className="text-teal-400" />
                  <a href={`tel:${selectedMember.phone}`} className="hover:underline">
                    {selectedMember.phone}
                  </a>
                </p>
              )}

              {selectedMember.email && (
                <p className="text-gray-400 flex items-center gap-2">
                  <MdEmail className="text-teal-400 text-xl" />
                  <a href={`mailto:${selectedMember.email}`} className="hover:underline">
                    {selectedMember.email}
                  </a>
                </p>
              )}

              {selectedMember.linkedin && (
                <p className="text-gray-400 flex items-center gap-2">
                  <FaLinkedin className="text-teal-400 text-xl" />
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </p>
              )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
