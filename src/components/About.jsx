import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function About() {
  return (
    <section
      className="relative p-8 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/about-bg.jpeg)'  // ✅ Update with your actual image path
      }}
    >
      {/* Overlay with 70% opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Actual content */}
      <div className="relative z-10">
        <h2 className="flex items-center text-3xl font-bold mb-4">
          About Me
          <a href="/about-details.html" className="ml-2 text-blue-400 no-underline">
            <FaArrowRight size={16} />
          </a>
        </h2>

        <p>
          I am a passionate Python Developer with over 4 years of experience in web applications, REST APIs, ETL pipelines, and cloud deployment using Azure. I enjoy solving problems and delivering scalable solutions.
        </p>
      </div>
    </section>
  );
}

export default About;
