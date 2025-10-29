# Portfolio Website - Setup Guide

A modern, responsive portfolio website built with React and Tailwind CSS featuring dark mode, project showcases, and a contact form.

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd better_my_portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Customize Your Portfolio
Edit `src/config/portfolioConfig.js` to personalize your portfolio with your information.

### 4. Add Your Profile Image
- Place your profile photo in the `public` folder
- Name it `my-photo.jpeg` (or update the filename in config)

### 5. Run the Development Server
```bash
npm start
```

Your portfolio will open at `http://localhost:3000`

---

## 📝 Customization Guide

### **Single Configuration File**
All your personal information is centralized in `src/config/portfolioConfig.js`. Edit this ONE file to update your entire portfolio!

### **What You Need to Update:**

#### 1. **Personal Information** (Lines 6-16)
```javascript
personalInfo: {
  name: "Your Full Name",
  firstName: "Your First Name",
  lastName: "Your Last Name",
  email: "your.email@example.com",
  tagline: "your tagline here",
  bio: "Your full bio/description...",
  profileImage: "your-photo.jpg",
  location: "Your City, State, Country"
}
```

#### 2. **Social Links** (Lines 18-26)
```javascript
socialLinks: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourhandle", // Optional
  instagram: "", // Optional
  portfolio: "" // Optional
}
```

#### 3. **Navigation** (Lines 28-36)
```javascript
navigation: {
  logo: "Your Name", // Shows in navbar
  menuItems: [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" }
  ]
}
```

#### 4. **Experience & Achievements** (Lines 38-56)
Add or modify your experiences:
```javascript
experiences: [
  {
    title: "Your Achievement Title",
    tech: "Technologies Used",
    description: "Description of your achievement...",
    gradient: "from-yellow-500 to-amber-600",
    borderColor: "border-yellow-400",
  },
  // Add more experiences...
]
```

#### 5. **Skills** (Lines 58-67)
Update your skill levels (0-100):
```javascript
skills: [
  { name: "JavaScript", level: 85 },
  { name: "React", level: 90 },
  // Add more skills...
]
```

#### 6. **Areas of Interest** (Lines 69-78)
```javascript
interests: [
  { name: "Web Development", emoji: "💻", color: "bg-blue-100 dark:bg-blue-900/30" },
  // Add more interests...
]
```

#### 7. **Journey/Timeline** (Lines 80-95)
```javascript
journey: [
  {
    year: "2024",
    title: "Project Title",
    description: "What you did...",
    color: "purple" // blue, purple, green, orange, etc.
  },
  // Add more timeline items...
]
```

#### 8. **Projects** (Lines 97-180)
This is the most important section! Add your projects here:
```javascript
projects: [
  {
    id: 1, // Unique ID
    title: "Project Name",
    shortDesc: "Brief one-line description",
    fullDesc: "Detailed project description with multiple sentences...",
    color: "blue", // blue, purple, green, orange, pink
    gradient: "from-blue-500 to-indigo-600",
    bgPattern: "bg-blue-50 dark:bg-blue-900/20",
    image: "https://your-image-url.com/image.jpg", // Or path to local image
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      // Add all technologies used
    ],
    features: [
      "Feature 1 description",
      "Feature 2 description",
      // Add all key features
    ],
    github: "https://github.com/yourusername/project-repo",
    demo: "https://your-live-demo.com", // Optional - null if no demo
    status: "Completed", // or "In Progress", "In Development"
    year: "2024"
  },
  // Add more projects...
]
```

#### 9. **Footer** (Lines 182-187)
```javascript
footer: {
  copyrightText: "© 2025 your name · All rights reserved.",
  tagline: "Your Footer Tagline",
  subtitle: "Call to Action"
}
```

---

## 🎨 Color Schemes for Projects

Choose from these pre-built color schemes:

| Color | Gradient | Background Pattern |
|-------|----------|-------------------|
| Blue | `from-blue-500 to-indigo-600` | `bg-blue-50 dark:bg-blue-900/20` |
| Purple | `from-purple-500 to-pink-600` | `bg-purple-50 dark:bg-purple-900/20` |
| Green | `from-green-500 to-emerald-600` | `bg-green-50 dark:bg-green-900/20` |
| Orange | `from-orange-500 to-red-600` | `bg-orange-50 dark:bg-orange-900/20` |
| Pink | `from-pink-500 to-rose-600` | `bg-pink-50 dark:bg-pink-900/20` |

---

## 📁 Project Structure
```
better_my_portfolio/
├── public/
│   ├── my-photo.jpeg          # Your profile image
│   └── index.html
├── src/
│   ├── config/
│   │   └── portfolioConfig.js  # 🔥 EDIT THIS FILE
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Projects.js
│   │   └── About.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

---

## 🖼️ Adding Project Images

### Option 1: Use Unsplash (Recommended for placeholders)
```javascript
image: "https://images.unsplash.com/photo-xxxxx?w=800&h=600&fit=crop"
```

### Option 2: Use Local Images
1. Place image in `public/images/` folder
2. Reference it:
```javascript
image: "/images/your-project-screenshot.png"
```

### Option 3: Host on Image Services
- Imgur
- Cloudinary
- Your own server

---

## 🎯 Tips for Best Results

1. **Profile Image**: Use a high-quality, professional photo (500x500px minimum)
2. **Project Images**: Use screenshots or mockups (800x600px recommended)
3. **Bio**: Keep it concise but informative (2-3 sentences)
4. **Projects**: Add 2-6 projects for best visual balance
5. **Skills**: Be honest with skill levels (70+ = proficient, 85+ = advanced)

---

## 🚀 Deployment

### Deploy to GitHub Pages
```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy:
```bash
npm run deploy
```

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

---

## 🐛 Troubleshooting

### Images Not Showing
- Check image path is correct
- Ensure image is in `public` folder
- Try absolute URL instead

### Styling Issues
- Clear browser cache
- Run `npm start` to restart dev server
- Check console for errors

### Build Errors
```bash
npm install
npm run build
```

---

## 📞 Need Help?

- Check `src/config/portfolioConfig.js` for all customization options
- All changes should be made in the config file only
- Restart development server after config changes

---

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

---

**Built with ❤️ using React, Tailwind CSS, and React Router**