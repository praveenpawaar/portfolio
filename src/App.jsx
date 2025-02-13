import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar />
      {/* Add your other sections here with appropriate IDs (e.g., "home", "about", etc.) */}
      <section id="home" style={{ minHeight: '100vh' }}>
        <h1 data-aos="fade-up">Home Section</h1>
      </section>
      <section id="about" style={{ minHeight: '100vh' }}>
        <h1 data-aos="fade-up">About Section</h1>
      </section>
      {/* Continue for Skills, Projects, and Contact Us */}
    </div>
  );
}

export default App;
