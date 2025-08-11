import React from 'react';

const projects = [
  {
    title: 'Weather App',
    image: '/images/weather.png',
    description:
      'Weather App created by using Python Framework Flask and deployed online using Render',
    link: 'https://github.com/VenkatTejaC/weatherFlask',
  },
  {
    title: 'News Dashboard',
    image: '/images/news.png',
    description:
      'NewsDashboard App created by using React Framework and deployed online using Netlify',
    link: 'https://github.com/VenkatTejaC/NewsReact',
  },
  {
    title: 'My Portfolio',
    image: '/images/portfolio.png',
    description:'My Portfolio created by using HTML5, CSS3, Java Script and React Framework and deployed online using Netlify',
    link: 'https://github.com/VenkatTejaC/mysite',
  },
  {
    title: 'Authentication App',
    image: '/images/authapp.png',
    description: 'Authentication App created by using Python Framework Django(backend) and ReactJS(frontend)',
    link: 'https://github.com/VenkatTejaC/AuthappDjangoReact',
  },
  {
    title: 'Payment App',
    image: '/images/paymentapp.png',
    description: 'Payment App created by using Python NodeExpressServer(backend) and ReactJS(frontend)',
    link: 'https://github.com/VenkatTejaC/PaymentNodeReact',
  },
  {
    title: 'Sports Club Management portal',
    image: '/images/sportsclub.png',
    description: 'Management portal created by using Python Framework Django(backend) and ReactJS(frontend)',
    link: 'https://github.com/VenkatTejaC/SportsClubDjangoReact',
  },
  {
    title: 'Stock Prediction App',
    image: '/images/stockpred.png',
    description: 'Stock Prediction App created by using FastAPI(Backend) and ReactJS(frontend)',
    link: 'https://github.com/VenkatTejaC/StockPredictionWebApp',
  },
];

const Projects = () => {
  return (
    <div
      className="bg-gray-100 text-gray-800 min-h-screen py-12 px-6"
      style={{
        backgroundImage: `url('images/about-bg.jpeg')`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl font-bold mb-8 text-center"
          style={{ fontFamily: 'verdana', color: 'white' }}
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  {project.title}
                </h2>
                <p className="text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
