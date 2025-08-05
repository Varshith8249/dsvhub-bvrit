import React from 'react';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    title: 'Introducing the Data Science Visionary Hub',
    date: 'August 06, 2025',
    description: 'Your vision, our hub — let’s spark a data revolution.',
    link: 'https://medium.com/@bvritn.cse.dsvhub/128acd500186',
  },
  {
    title: 'Laying the Foundation',
    date: 'August 06, 2025',
    description: 'The Story of Our Inauguration.',
    link: 'https://medium.com/@bvritn.cse.dsvhub/6180f55b4899',
  },
  {
    title: 'Wiztrek: Brain Buster Data Challenge',
    date: 'August 06, 2025',
    description: 'A Thrilling Ride Through Data & Decoding.',
    link: 'https://medium.com/@bvritn.cse.dsvhub/82a7088c6c2a',
  },
];

export default function BlogSection() {
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-400 mb-12 text-center" data-aos="fade-up">
          Read. Learn. Inspire.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-xl hover:shadow-orange-500/30 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.description}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 mt-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => navigate('/blogs')}
            className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-700 transition duration-300"
          >
            View All Blogs →
          </button>
        </div>
      </div>
    </section>
  );
}
