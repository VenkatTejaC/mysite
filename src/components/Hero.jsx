import React from 'react';

function Hero() {
  return (
    <section
      className="relative h-[300px] md:h-[300px] lg:h-[625px] flex flex-col justify-center items-center text-white text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/skills/FullStack.gif)',
        backgroundSize: '100%',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-85"></div>

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-black bg-opacity-50 text-white z-50">
        {/* Left: Clickable Name */}
        <a href="/" className="no-underline text-3xl font-bold hover:text-blue-400">
          Teja C
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
      <div className="relative z-10 mt-20 text-center">
        <p className="text-2xl mb-6">Python Full Stack Developer</p>

        {/* Info Box */}
        <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-[800px] mx-auto text-white">
          <p className="text-lg">
            I'm a Python Full Stack Developer with experience building secure, scalable, and high-performance web applications. I work with Django and Flask for backend development, and use React.js to build fast, responsive user interfaces. I also design and work with RESTful APIs, connecting frontend and backend into smooth, full-featured applications. I have practical experience in deploying applications and managing cloud infrastructure with Microsoft Azure. I focus on building reliable systems that are ready for real-world use and easy to scale.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
