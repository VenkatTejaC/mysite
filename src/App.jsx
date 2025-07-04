import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      <Hero />
      {/* <About />*/}
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
