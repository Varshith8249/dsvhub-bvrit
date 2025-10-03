import React from 'react';

const allBlogPosts = [
  // Add more blog posts here
  {
    title: 'Introducing the Data Science Visionary Hub',
    date: 'August 07, 2025',
    description: 'Your vision, our hub — let’s spark a data revolution.',
    link: 'https://medium.com/@bvritn.cse.dsvhub/introducing-the-data-science-visionary-hub-your-vision-our-hub-lets-spark-a-data-revolution-128acd500186',
  },
  {
    title: 'Laying the Foundation',
    date: 'August 07, 2025',
    description: 'The Story of Our Inauguration.',
    link: 'https://medium.com/@bvritn.cse.dsvhub/laying-the-foundation-the-story-of-our-inauguration-6180f55b4899',
  },
  {
    title: 'Wiztrek: Brain Buster Data Challenge',
    date: 'August 07, 2025',
    description: 'A Thrilling Ride Through Data & Decoding.',
    link: 'https://medium.com/@bvritn.cse.dsvhub/wiztrek-brain-buster-data-challenge-a-thrilling-ride-through-data-decoding-82a7088c6c2a',
  },
  {
    title: 'Data Science, The Student Edition',
    date: 'August 08, 2025',
    description: 'Learn It Your Way.',
    link: 'https://medium.com/@bvritn.cse.dsvhub/data-science-the-student-edition-learn-it-your-way-3843da886da6',
  },
  {
    title: 'Mastering Data Types',
    date: 'August 08, 2025',
    description: 'The Foundation of Data Science and ML.',
    link: 'https://medium.com/@bvritn.cse.dsvhub/mastering-data-types-the-foundation-of-data-science-and-ml-613a77e91507',
  },
  {
    title: 'Embedded Systems with Arduino',
    date: 'August 08, 2025',
    description: 'Practical Training Session.',
    link: 'https://medium.com/@bvritn.cse.dsvhub/embedded-systems-with-arduino-practical-training-session-64c061c71d83',
  },
  {
    title: 'Agentic AI & HDAC’s 2nd Anniversary',
    date: 'September 08, 2025',
    description: 'A Celebration of Ideas, Innovation, and Impact.',
    link: 'https://medium.com/@bvritn.cse.dsvhub/agentic-ai-hdacs-2nd-anniversary-a-celebration-of-ideas-innovation-and-impact-9e79e953097b',
  },
  // Add more as needed
];

export default function AllBlogs() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-400 mb-12 text-center">
          Blog Posts
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md border border-white/10 hover:shadow-orange-500/30 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
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
    </div>
  );
}
