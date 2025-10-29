import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import portfolioConfig from '../config/portfolioConfig'; 

const IoIosSatellite = () => (
  <svg viewBox="0 0 512 512" fill="currentColor" className="w-full h-full">
    <path d="M336 176l-80-80c-8-8-8-24 0-32 24-24 60-24 84 0l80 80c8 8 8 24 0 32-24 24-60 24-84 0z"/>
    <path d="M432 256l-48-48-32 32 48 48c16 16 16 40 0 56l-56 56-32-32-16 16-16 16 32 32 56-56c40-40 40-104 0-144z"/>
  </svg>
);

export default function Home() {
  const navigate = useNavigate();
  const [particles, setParticles] = useState([]);

  const { personalInfo, experiences, projects } = portfolioConfig; 

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);



  const handleProjectClick = () => {
    navigate('/projects');
    // Scroll to top immediately when navigating
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <section className="pt-20 sm:pt-16 md:pt-24 bg-cream dark:bg-gray-900 overflow-hidden">
      {/* Hero Section with Animated Background */}
      <div className="container mx-auto px-4 relative">
        {/* Particle Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`
              }}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center relative z-10">
          {/* Left Column */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-textDark dark:text-gray-100">
              Hey, Myself <span className="text-teal-500">{personalInfo.name}</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-4">
              On a journey of{" "}
              <span className="text-orange-500 font-semibold">
                {personalInfo.tagline}
              </span>
            </p>
            <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200 mb-6">
              {personalInfo.email}
            </p>
          </div>

          {/* Right Column - Hexagonal Image with Rocket Effect */}
          <div className="md:w-1/2 relative">
            <div className="relative flex justify-center py-4 md:py-8">
              {/* Rocket Animation */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <FaRocket 
                  className="text-orange-500 text-3xl opacity-60 absolute"
                  style={{
                    animation: "rocket 4s ease-in-out infinite",
                    filter: "drop-shadow(0 0 10px rgba(249, 115, 22, 0.5))"
                  }}
                />
              </div>
              
              {/* Hexagonal Frame */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-teal-400 to-orange-500 opacity-20"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    animation: "pulse 3s ease-in-out infinite"
                  }}
                />
              <img
                src={personalInfo.profileImage}
                alt="Profile"
                className="relative w-full h-full object-cover shadow-2xl"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  objectPosition: "50% 25%"
                }}
/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="container mx-auto px-4 mt-16 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-textDark dark:text-gray-100 mb-10 text-center">
          Experience & Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className={`h-1 bg-gradient-to-r ${exp.gradient}`} />
              
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${exp.gradient} text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {exp.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-2">
                      {exp.tech}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>

      {/* IMPROVED Featured Projects Section - NO ICONS */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark dark:text-gray-100 mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Check out some of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              onClick={handleProjectClick}
              className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Image Section with Padding */}
              <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="relative h-56 rounded-xl overflow-hidden bg-white dark:bg-gray-700 shadow-inner">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Content Section - WITHOUT ICON */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-textDark dark:text-gray-100 mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* {project.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${project.bgColor} ${project.textColor}`}
                    >
                      {tech}
                    </span> */}
                  {/* ))} */}
                </div>
                
                <span className="text-teal-600 dark:text-teal-400 font-semibold text-sm group-hover:text-orange-500 transition-colors flex items-center gap-2">
                  Learn More 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleProjectClick}
            className="inline-block px-8 py-3 bg-gradient-to-r from-teal-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View All Projects
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes rocket {
          0% {
            transform: translate(-100px, 100px) rotate(-45deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translate(150px, -150px) rotate(-45deg);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
}