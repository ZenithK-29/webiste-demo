import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";
import portfolioConfig from '../config/portfolioConfig';

export default function Footer() {
  const { personalInfo, socialLinks, footer } = portfolioConfig;

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Content */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">
            {footer.tagline}
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            Let's <span className="text-orange-500 font-semibold">{footer.subtitle}</span>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-8">
            {/* Email Icon */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="group relative text-red-400 hover:text-red-300 transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
              title="Email Me"
            >
              <FaEnvelope className="text-3xl" />
              <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Email Me
              </span>
            </a>

            {/* GitHub Icon */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub className="text-3xl" />
              <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                GitHub
              </span>
            </a>

            {/* LinkedIn Icon */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin className="text-3xl" />
              <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                LinkedIn
              </span>
            </a>

            {/* Twitter Icon - Optional */}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-sky-400 hover:text-sky-300 transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
                title="Twitter"
              >
                <FaTwitter className="text-3xl" />
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Twitter
                </span>
              </a>
            )}

            {/* Instagram Icon - Optional */}
            {socialLinks.instagram && (
              <a>
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-pink-400 hover:text-pink-300 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
                title="Instagram"
              
                <FaInstagram className="text-3xl" />
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Instagram
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-700">
          {footer.copyrightText}
        </div>
      </div>
    </footer>
  );
}