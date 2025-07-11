import React from 'react';

function Skills() {
  const skills = [
    { name: "Python", image: "/images/skills/python.png" },
    { name: "Django", image: "/images/skills/dj.jpeg" },
    { name: "Flask", image: "/images/skills/flask.png" },
    { name: "REST API", image: "/images/skills/restapi.png" },
    { name: "FastAPI", image: "/images/skills/fastapi.png" },
    { name: "SQL", image: "/images/skills/sql.png" },
    { name: "PostgreSQL", image: "/images/skills/PostgreSQL.png" },
    { name: "HTML5", image: "/images/skills/html.png" },
    { name: "CSS", image: "/images/skills/css.png" },
    { name: "JavaScript", image: "/images/skills/js.png" },
    { name: "React", image: "/images/skills/react.png" },
    { name: "Azure Data Factory", image: "/images/skills/adf.png" },
    { name: "Databricks", image: "/images/skills/data bricks.png" },
    { name: "Webapps", image: "/images/skills/webapp.jpg" },
    { name: "PySpark", image: "/images/skills/pyspark.jpeg" },
    { name: "PowerBI", image: "/images/skills/powerbi.png" },
  ];

  return (
    <section
      className="relative p-8 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/about-bg.jpeg)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>

        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col items-center justify-center bg-blue-100 text-black p-2 rounded shadow-sm h-24"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-14 h-14 mb-2 object-contain"
              />
              <span className="text-center text-xs font-medium">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
