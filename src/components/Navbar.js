import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or system preference
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
  ];
  return (
    <nav className="fixed w-full top-0 bg-cream/90 dark:bg-gray-900/90 backdrop-blur z-50 border-b dark:border-gray-700">
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="text-md sm:text-2xl lg:text-xl font-normal text-teal-500 hover:no-underline"
          >
            Krishna Bitthariya
          </a>
          <ul className="flex space-x-4 items-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    `px-3 py-1 rounded transition font-semibold ${
                      isActive
                        ? "text-orange-500"
                        : "text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="ml-2 p-2 rounded transition  text-gray-700  dark:text-white "
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FiMoon size={20} /> : <FiSun size={20} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
