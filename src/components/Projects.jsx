import React from 'react';

function Projects() {
  const projectData = [
    {
      title: "Weather App",
      image: "/images/weather.png",
      description: "Weather App created by using Python Framework Flask and deployed online using Render",
      link: "https://github.com/VenkatTejaC/weatherFlask",  // Optional: You can add actual project links here
    },
    {
     title: "News Dashboard",
      image: "/images/news.png",
      description: "NewsDashboard App created by using React Framework and deployed online using Netlify",
      link: "https://github.com/VenkatTejaC/NewsReact",  // Optional: You can add actual project links here
    },
    {
     title: "My Portfolio",
      image: "/images/projects/rainfall.png",
      description: "My Portfolio created by using HTML5, CSS3, Java Script and React Framework and deployed online using Netlify",
      link: "https://github.com/VenkatTejaC/mysite",  // Optional: You can add actual project links here
    },

    {
      title: "project4",
      image: "/images/projects/rainfall.png",
      description: "Project4 Desc",
      link: "#",  // Optional: You can add actual project links here
    },
    {
     title: "project5",
      image: "/images/projects/rainfall.png",
      description: "Project5 Desc",
      link: "#",  // Optional: You can add actual project links here
    },
    {
     title: "project6",
      image: "/images/projects/rainfall.png",
      description: "Project6 Desc",
      link: "#",  // Optional: You can add actual project links here
    },



  ];

  return (
    <section
      className="relative p-8 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/about-bg.jpeg)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectData.map((project) => (
            <div
              key={project.title}
              className="bg-black bg-opacity-70 rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-contain mb-4 bg-white"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-red-700"
              target="_blank" rel="noopener noreferrer">
                VIEW
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
