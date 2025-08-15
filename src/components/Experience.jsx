import React from 'react';

function Experience() {
  return (
    <section
      className="relative p-8 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/about-bg.jpeg)',  // ✅ Replace with your actual image path
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>

        <div className="space-y-4">
          <h3 className="text-2xl text-center font-semibold">Python Developer – Infosys (2023 – Present)</h3>
          <h3 className="text-2xl text-center font-semibold">Python Project Engineer – Wipro Ltd (2020 – 2022)</h3>
        </div>

        {/* Show More link */}
        <div className="mt-6 text-center">
          <a
            href="/experience-details.html"  // ✅ This will open the new blank page (you can later build this page)
            target="_blank"
            rel="noopener noreferrer"
            className="text-400 font-bold no-underline hover:text-blue-500"
          >
            View More
          </a> 
        </div>
      </div>
    </section>
  );
}

export default Experience;
