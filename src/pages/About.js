// STEP 1: Add useEffect and useLocation to your imports
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { SiCplusplus, SiPython,SiEspressif  } from "react-icons/si";
import { IoIosPlanet } from "react-icons/io";
import portfolioConfig from '../config/portfolioConfig'; 

import { 
  SiFlutter, 
  SiFirebase, 
  SiArduino, 
  SiTailwindcss,
  SiJavascript 
} from "react-icons/si";
import { IoRocketSharp, IoCodeSlash } from "react-icons/io5";
import { GiBrain, GiTeacher } from "react-icons/gi";

export default function About() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [activeSkill, setActiveSkill] = useState(null);

  // STEP 2: Add this line to get the page's location
  const location = useLocation();
  const { personalInfo, skills, journey, interests } = portfolioConfig;

  // STEP 3: Add this entire block to handle the scrolling
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent! (This is a demo - replace with your backend)");
  };



  return (
    <section className="bg-white dark:bg-gray-900 py-20" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* ... The rest of your component is exactly the same ... */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            I’m a passionate tech enthusiast with a keen interest in building interactive and user-friendly web experiences. I enjoy experimenting with creative design ideas and learning how different technologies work together to bring ideas to life. From developing functional clones of popular platforms to exploring IoT-based innovations, I’m constantly expanding my skills and striving to create impactful digital solutions.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-textDark dark:text-gray-100 mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveSkill(idx)}
                onMouseLeave={() => setActiveSkill(null)}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              >
                <div className={`text-5xl ${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                  {skill.icon}
                </div>
                <p className="text-center font-semibold text-gray-700 dark:text-gray-200 text-sm">
                  {skill.name}
                </p>
                <div className="mt-3 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-teal-500 to-orange-500 transition-all duration-700 ${
                      activeSkill === idx ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-textDark dark:text-gray-100 mb-12 text-center">
            My Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 to-orange-500 hidden md:block"></div>
            {journey.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex items-center mb-12 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 bg-${item.color}-100 dark:bg-${item.color}-900/30 text-${item.color}-600 dark:text-${item.color}-400`}>
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-textDark dark:text-gray-100 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-orange-500 items-center justify-center text-white text-xl shadow-lg">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-textDark dark:text-gray-100 mb-8 text-center">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest, idx) => (
              <div
                key={idx}
                className={`${interest.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer`}
              >
                <div className="text-4xl mb-2">{interest.emoji}</div>
                <p className="font-semibold text-gray-700 dark:text-gray-200">
                  {interest.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 bg-gradient-to-r from-teal-500/10 to-orange-500/10 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-textDark dark:text-gray-100 mb-6 text-center">
            Quick Facts About Me
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="font-bold text-textDark dark:text-gray-100 mb-1">Always Learning</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Constantly exploring new technologies and frameworks
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h4 className="font-bold text-textDark dark:text-gray-100 mb-1">Goal-Oriented</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Focused on building real solutions to real problems
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🚀</div>
              <div>
                <h4 className="font-bold text-textDark dark:text-gray-100 mb-1">Innovation Driven</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Love working on cutting-edge projects like satellites and IoT
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🌟</div>
              <div>
                <h4 className="font-bold text-textDark dark:text-gray-100 mb-1">Open Source</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Believer in sharing knowledge and collaborating with others
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          id="contact"
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl rounded-3xl p-8 md:p-10 space-y-6 mx-auto border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center mb-6">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500 mb-2">
              Let's Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Have a project in mind? Let's talk!
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full">
              <label className="block text-sm font-semibold text-textDark dark:text-gray-100 mb-2">
                First Name *
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                type="text"
                placeholder="John"
                className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-semibold text-textDark dark:text-gray-100 mb-2">
                Last Name *
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Doe"
                className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-textDark dark:text-gray-100 mb-2">
              Company Name
            </label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              type="text"
              placeholder="Your Company"
              className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-textDark dark:text-gray-100 mb-2">
              Email *
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="example@email.com"
              className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-textDark dark:text-gray-100 mb-2">
              Phone Number
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="+91 12345 67890"
              className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-textDark dark:text-gray-100 mb-2">
              Message *
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me about your project or idea..."
              className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
}