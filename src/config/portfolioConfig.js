// src/config/portfolioConfig.js

const portfolioConfig = {
  // ==================== PERSONAL INFORMATION ====================
  personalInfo: {
    name: "Zenith Kokkodan",
    firstName: "Zenith",
    lastName: "Kokkodan",
    email: "zenith.kok123@gmail.com",
    tagline: "learning, building, and evolving",
    bio: "I’m a passionate tech enthusiast who loves exploring new technologies and creating meaningful digital experiences. I enjoy learning how things work behind the scenes and turning ideas into functional, user-friendly solutions.",
    profileImage: "my-photo.jpeg", // Path to your profile image in public folder
    location: "Artist Village, Maharashtra, IN"
  },

  // ==================== SOCIAL LINKS ====================
  socialLinks: {
    github: "https://github.com/ZenithK-29",
    linkedin: "",
    twitter: "", // Optional
    instagram: "", // Optional
    portfolio: "" // Optional - your live portfolio URL
  },

  // ==================== NAVIGATION ====================
  navigation: {
    logo: "Zenith Kokkodan", // Text shown in navbar
    menuItems: [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: "About", path: "/about" }
    ]
  },

  // ==================== EXPERIENCE & ACHIEVEMENTS ====================
  experiences: [
    {
      title: "Netflix Clone",
      tech: "HTML, CSS, JavaScript",
      description: "Designed a front-end Netflix-style website with responsive layouts, interactive hover effects, and a visually appealing user interface inspired by the original platform.",
      gradient: "from-yellow-500 to-amber-600",
      borderColor: "border-yellow-400",
    },
    {
      title: "Spotify Clone",
      tech: "HTML, CSS, JavaScript, Node JS",
      description: "Developed a functional Spotify-inspired music player featuring real-time playback controls, dynamic playlists, and an interactive user interface for seamless audio experience.",
      gradient: "from-purple-400 to-pink-500",
      borderColor: "border-purple-400",
    }
  ],

  // ==================== SKILLS ====================
  skills: [
    { name: "C++", level: 85 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 90 },
    { name: "ESP8266", level: 85 },
    { name: "React / Tailwind", level: 80 },
    { name: "Mongo DB", level: 70 }
  ],

  // ==================== AREAS OF INTEREST ====================
  interests: [
    { name: "App Development", emoji: "📱", color: "bg-blue-100 dark:bg-blue-900/30" },
    { name: "IoT & Hardware", emoji: "🔧", color: "bg-green-100 dark:bg-green-900/30" },
    { name: "Cloud Computing", emoji: "☁️", color: "bg-purple-100 dark:bg-purple-900/30" },
    { name: "AI & ML", emoji: "🤖", color: "bg-pink-100 dark:bg-pink-900/30" },
    { name: "Space Tech", emoji: "🚀", color: "bg-indigo-100 dark:bg-indigo-900/30" },
    { name: "Problem Solving", emoji: "🧩", color: "bg-yellow-100 dark:bg-yellow-900/30" }
  ],

  // ==================== JOURNEY / TIMELINE ====================
  journey: [
    {
      year: "2025",
      title: "Neflix Clone",
      description: "Developed front-end of Netflix website using HTML & CSS only",
      color: "purple"
    },
    {
      year: "2025",
      title: "Spotify Clone",
      description: "Built a functional clone of Spotify using HTML, CSS & javascript",
      color: "blue"
    }
  ],

  // ==================== PROJECTS ====================
  projects: [
    {
      id: 1,
      title: "Netflix Clone",
      shortDesc: "Front-end of Netflix website using HTML & CSS only",
      fullDesc: "Designed a front-end Netflix-style website with responsive layouts, interactive hover effects, and a visually appealing user interface inspired by the original platform.",
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      bgPattern: "bg-blue-50 dark:bg-blue-900/20",
      image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Netflix_UI_for_Web.png",
      technologies: [
        "HTML",
        "CSS",
        "Responsive"
      ],
      features: [
        "Responsive homepage layout inspired by Netflix UI",
        "Category-based movie sections with posters and thumbnails",
        "Interactive hover effects for movies and shows",
        "Custom navigation bar and hero banner design",
        "Smooth scrolling and transition animations",
        "Cross-device compatibility for mobile and desktop views"
      ],
      github: "https://github.com/KrishnaBitthariyaCollege", // Project-specific GitHub link
      demo: null, // Add demo link if available
      status: "In Progress",
      year: "2025"
    },
    {
      id: 2,
      title: "Spotify Clone",
      shortDesc: "Functional clone of Spotify using HTML, CSS & javascript",
      fullDesc: "Designed and developed a CubeSat miniature satellite for educational purposes. The project includes data collection, telemetry systems, and ground station communication. Aims to provide hands-on experience with space technology and satellite systems.",
      color: "purple",
      gradient: "from-purple-500 to-pink-600",
      bgPattern: "bg-purple-50 dark:bg-purple-900/20",
      image: "https://media.licdn.com/dms/image/v2/D4D05AQFti8y6HSPPXg/videocover-low/videocover-low/0/1726487120007?e=2147483647&v=beta&t=KYfzQ1bdBO0YaVl6EDcKkfuFJo8MY29Dswuchdrv7Ic",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive"
      ],
      features: [
        "Music playback with play, pause, next, and previous controls",
        "Dynamic playlist and song listing interface",
        "Real-time progress bar and seek functionality",
        "Responsive layout optimized for all screen sizes",
        "Custom audio player with interactive controls",
        "Modern UI inspired by Spotify’s dark theme design"
      ],
      github: "https://github.com/KrishnaBitthariyaCollege",
      demo: null,
      status: "Done",
      year: "2025"
    }
  ],

  // ==================== FOOTER ====================
  footer: {
    copyrightText: "© 2025 Zenith Kokkodan · All rights reserved.",
    tagline: "I Like to build websites",
    subtitle: "Let's Connect"
  }
};

export default portfolioConfig;