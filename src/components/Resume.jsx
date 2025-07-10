import React from 'react';
import { FaDownload } from 'react-icons/fa';

function Resume() {
  return (
    <section
      className="relative p-8 text-white"
      style={{
        backgroundImage: 'url(/images/about-bg.jpeg)',  // ✅ Update with your actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <h2 className="text-2xl font-bold mb-6">Download My Latest Resume Below</h2>


        {/* Download Icon as a Link */}
        <a
          href="/resume/PythonDeveloper.pdf"  // ✅ Correct relative path
          download
          className="text-white text-4xl hover:text-blue-400 transition"
          title="Download Resume"
        >
          <FaDownload />
        </a>
      </div>
    </section>
  );
}

export default Resume;
