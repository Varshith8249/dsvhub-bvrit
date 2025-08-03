import React from 'react';

const blogPosts = [
  {
    title: 'Getting Started with Machine Learning',
    date: 'August 3, 2025',
    description: 'An introduction to basic ML concepts and practical tips for beginners.',
    link: 'https://example.com/ml-guide',
  },
  {
    title: '5 Data Visualization Libraries in Python',
    date: 'July 25, 2025',
    description: 'Explore the best libraries to visualize data effectively — from Matplotlib to Plotly.',
    link: 'https://example.com/python-viz',
  },
  {
    title: 'How to Build a Data Science Portfolio',
    date: 'July 10, 2025',
    description: 'Learn what to include in a standout portfolio for internships and jobs.',
    link: 'https://example.com/portfolio-tips',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-400 mb-12 text-center" data-aos="fade-up">
          Read. Learn. Inspire.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
