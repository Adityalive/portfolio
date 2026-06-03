// src/data/config.js

import { Quote } from "lucide-react";
import smartSaverImg from "../images/smart-saver.png";
import holosai1 from "../images/Holosai1.png";
import holosai2 from "../images/Holosai2.png";
import moodifyImg from "../images/moodify.png";

export const SITE_CONFIG = {
  name: "Aditya Kumar",
  role: "Full-Stack AI Engineer",
  description: `I'm a Full-Stack AI Engineer focused on building intelligent, production-ready systems. I specialize in developing multi-agent architectures, integrating large language models (LLMs), and designing scalable backend systems. I care about solving complex problems, shipping fast, and continuously improving intelligent systems based on real-world usage. Currently working with TypeScript, React, Next.js, Tailwind CSS, Node.js, and LangChain.`,
  profile: {
    location: "Odisha, India",
    pronouns: "he/him",
  },

  socials: {
    github: "https://github.com/Adityalive",
    linkedin: "https://www.linkedin.com/in/aditya-kumar-1902ba365/",
    twitter: "https://x.com/AdityaK10208976",
    x: "https://x.com/AdityaK10208976",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    mail: "mailto:adityakumar4176o@gmail.com",
    resume: "https://drive.google.com/file/d/1PcN3xYof6KFZ-GC2gLNDWjX0yTmaAGoF/view?usp=drive_link"
  },

  experience: [
    {
      company: "CodSoft",
      role: "Web Development Intern",
      date: "May 2026 – June 2026",
      location: "Virtual Internship",
      isCurrent: true,
      description: "Developed and deployed responsive web applications using React and Node.js.",
      bullets: [
        "Built and integrated RESTful APIs with proper validation, error handling, and authentication middleware",
        "Implemented reusable component architecture in React, reducing code duplication",
        "Delivered tasks within timelines using Git-based workflows and iterative development practices"
      ],
      tags: ["React", "Node.js", "REST APIs", "Git", "JavaScript"]
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "HolosAI – Deep Research Pipeline",
      description: `A multi-agent AI research system that automates deep research workflows. It generates structured reports (Abstract, Background, Applications, Challenges, Key Findings) in under 30 seconds using query expansion, parallel web search, and LLM-based synthesis. Reduced manual research time by 90%+.`,
      tags: ["LangChain", "Mistral AI", "Docker", "Tavily API", "Node.js"],
      image: holosai1,
      link: "https://perplexity-2bk6.onrender.com"
    },

    {
      id: "project-2",
      title: "Smart Knowledge Saver & Resurfacing System",
      description: `A knowledge management system that captures, organizes, and resurfaces content intelligently. Features hybrid scraping (Jina + Puppeteer), K-Means clustering, and spaced repetition (30/60/90 days). Includes a Chrome Extension for one-click saving and seamless sync.`,
      tags: ["TypeScript", "PostgreSQL", "Puppeteer", "Chrome Extension", "AI"],
      image: smartSaverImg,
      link: "https://smart-search-4kcq.onrender.com/"
    },

    {
      id: "project-3",
      title: "Moodify – Emotion-Based Music Platform",
      description: `A real-time emotion detection system that recommends music based on facial expressions (80%+ accuracy). Uses WebSockets for live streaming, JWT + Redis for authentication, and a modular backend with REST APIs. Optimized processing pipeline by 30%.`,
      tags: ["React", "Node.js", "MongoDB", "WebSockets", "Redis", "Jest"],
      image: moodifyImg,
      link: "https://moodify-ou8b.onrender.com/"
    }
  ],

  footer: [
    {
      Quote: "Wake up to reality. Nothing ever goes as planned in this world.",
      author: "Madara Uchiha"
    },
    {
      Quote: "What if it all works out in the end?",
      author: "Unknown"
    }
  ]
};
