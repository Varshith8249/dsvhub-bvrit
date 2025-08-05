import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import VideoBackground from './components/VideoBackground';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSection from './pages/HomeSection';
import AboutSection from './pages/AboutSection';
import EventsSection from './pages/EventsSection';
import TeamSection from './pages/TeamSection';
import DatasetsSection from './pages/DatasetsSection';
import ContactSection from './pages/ContactSection';
import AllTeam from './pages/AllTeam';
import BlogSection from './pages/BlogSection';
import ProjectSection from './pages/ProjectSection';
import AllBlogs from './pages/AllBlogs';
  


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sections = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'events', title: 'Events' },
    { id: 'team', title: 'Team' },
    { id: 'datasets', title: 'Datasets' },
    { id: 'blog', title: 'Blog' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <Router>
      <VideoBackground />
      {/* ✅ Scroll to top on route change */}
      <ScrollToTop />

      <div className="text-gray-100 font-sans overflow-x-hidden"> 
        <Navbar sections={sections} />
        
        <Routes>
          <Route
            path="/"
            element={
              <main className="pt-5">
                <HomeSection />
                <AboutSection />
                <EventsSection />
                <TeamSection />
                <DatasetsSection />
                <BlogSection />
                <ProjectSection />
                <ContactSection />
              </main>
            }
          />
          <Route path="/team" element={<AllTeam />} />
          <Route path="/blogs" element={<AllBlogs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
