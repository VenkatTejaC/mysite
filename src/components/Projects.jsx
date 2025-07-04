import React from 'react';

function Projects() {
  const projectData = [
    {
      title: "project1",
      image: "/images/projects/rainfall.png",
      description: "Project1 Desc",
      link: "#",  // Optional: You can add actual project links here
    },
    {
     title: "project2",
      image: "/images/projects/rainfall.png",
      description: "Project2 Desc",
      link: "#",  // Optional: You can add actual project links here
    },
    {
     title: "project3",
      image: "/images/projects/rainfall.png",
      description: "Project3 Desc",
      link: "#",  // Optional: You can add actual project links here
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
              >
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
