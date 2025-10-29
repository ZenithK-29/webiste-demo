import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import portfolioConfig from '../config/portfolioConfig';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = portfolioConfig;

  const ProjectCard = ({ project }) => (
    <div
      onClick={() => setSelectedProject(project)}
      className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
    >
      {/* Project Image with Padding - IMPROVED */}
      <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="relative h-56 rounded-xl overflow-hidden bg-white dark:bg-gray-700 shadow-inner">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          />
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white/95 dark:bg-gray-800/95 text-${project.color}-600 shadow-lg`}>
              {project.status}
            </span>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white mb-4 text-2xl shadow-md`}>
          {project.icon}
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
          {project.shortDesc}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 text-xs font-medium rounded-lg ${project.bgPattern} text-${project.color}-700 dark:text-${project.color}-300`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
          <button className="text-teal-600 dark:text-teal-400 font-semibold text-sm group-hover:text-orange-500 transition-colors flex items-center gap-1">
            View Details
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <div 
          className="bg-white dark:bg-gray-800 rounded-3xl max-w-6xl w-full shadow-2xl my-8 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Image - IMPROVED */}
          <div className="relative">
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all backdrop-blur-sm"
            >
              ×
            </button>

            {/* Header Content with Image */}
            <div className="relative z-10 p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Project Image */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-contain p-4"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-full md:w-1/2 text-center md:text-left text-white">
                  <div className="text-6xl mb-4 flex justify-center md:justify-start">{project.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Scrollable */}
          <div className="p-8 max-h-96 overflow-y-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                About the Project
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                {project.fullDesc}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-xl ${project.bgPattern} text-${project.color}-700 dark:text-${project.color}-300 font-medium text-sm`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className={`text-${project.color}-500 mr-2 mt-1 text-lg`}>✓</span>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-900 dark:hover:bg-gray-600 transition-all font-semibold"
                >
                  <FaGithub /> View on GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-xl hover:from-teal-600 hover:to-orange-600 transition-all font-semibold"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-20 min-h-screen" id="projects">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my journey through code, innovation, and problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-teal-500/10 to-orange-500/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new ideas and collaborate on interesting projects.
              Let's build something amazing together!
            </p>
            <Link
              to="/about#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-orange-500 text-white font-bold rounded-xl hover:from-teal-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}