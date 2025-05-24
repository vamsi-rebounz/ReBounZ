import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;