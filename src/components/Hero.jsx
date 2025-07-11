import React from 'react';

function Hero() {
  return (
    <section
      className="relative h-96 flex flex-col justify-center items-center text-white text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/hero2.jpg)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-black bg-opacity-50 text-white z-50">
        {/* Left: Clickable Name */}
        <a href="/" className="no-underline text-3xl font-bold hover:text-blue-400">
          Tej C
        </a>

        {/* Right: Navigation links */}
        <nav className="space-x-6">
          <a href="/" className="no-underline hover:text-blue-400 font-bold">Home</a>
          <a href="/about-details.html" className="no-underline hover:text-blue-400 font-bold">About Me</a>
          <a href="/projects-details.html" className="no-underline hover:text-blue-400 font-bold">Projects</a>
          <a href="/contact.html" className="no-underline hover:text-blue-400 font-bold">Contact</a>
        </nav>
      </div>

      {/* Center Content */}
      <div className="relative z-10 mt-20">
        <p className="text-2xl mt-4">Python Full Stack Developer | London, UK</p>
      </div>
    </section>
  );
}

export default Hero;
