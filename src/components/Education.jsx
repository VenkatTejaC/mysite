import React from 'react';

function Education() {
  return (
    <section
      className="relative p-8 text-white"
      style={{
        backgroundImage: 'url(/images/about-bg.jpeg)',  // ✅ Replace with your actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay with 70% opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-center text-3xl font-bold mb-4">Education</h2>
        <p className="text-center text-2xl"><strong>MSc. Data Science – University of Greenwich (2022 – 2023)</strong></p>
      </div>
    </section>
  );
}

export default Education;
