// src/data/config.js

import { Quote } from "lucide-react";
import smartSaverImg from "../images/smart-saver.png";
import holosai1 from "../images/Holosai1.png";
import holosai2 from "../images/Holosai2.png";
import moodifyImg from "../images/moodify.png";

export const SITE_CONFIG = {
  name: "Aditya",
  role: "CSE Student & Full Stack Developer",
  description: `I'm a Full Stack Web Developer focused on building real-world, production-ready systems. I specialize in AI-powered applications, scalable backend architectures, and rapid MVP development. I care about solving meaningful problems, shipping fast, and continuously improving based on real usage.`,

  socials: {
    github: "https://github.com/Adityalive",
    linkedin: "https://www.linkedin.com/in/aditya-kumar-1902ba365/",
    twitter: "https://x.com/AdityaK10208976",
    x: "https://x.com/AdityaK10208976",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    mail: "mailto:adityakumar4176o@gmail.com",
    resume: "https://drive.google.com/file/d/1Fo2NV78_IatMhHwRaUuolpM9_klIJcC2/view?usp=drive_link"
  },

  experience: [
    {
      company: "good day",
      role: "SDE-L1 (Full Stack)",
      date: "January 2026 – Present",
      location: "Hyderabad, India (On-Site)",
      isCurrent: true
    },
    {
      company: "Promote",
      role: "Founding Frontend Engineer",
      date: "August 2025 – December 2025",
      location: "United States (Remote)",
      isCurrent: false
    },
    {
      company: "Upsurge Labs",
      role: "Backend Developer Intern",
      date: "June 2025 – July 2025",
      location: "Bangalore, India (On-Site)",
      isCurrent: false
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "HolosAI – Deep Research Pipeline",
      description: `A multi-agent AI research system that automates deep research workflows. It generates structured reports (Abstract, Background, Applications, Challenges, Key Findings) in under 30 seconds using query expansion, parallel web search, and LLM-based synthesis. Reduced manual research time by 90%+.`,
      tags: ["LangChain", "Mistral AI", "Docker", "Tavily API", "Node.js"],
      image: holosai1,
      link: "#"
    },

    {
      id: "project-2",
      title: "Smart Knowledge Saver & Resurfacing System",
      description: `A knowledge management system that captures, organizes, and resurfaces content intelligently. Features hybrid scraping (Jina + Puppeteer), K-Means clustering, and spaced repetition (30/60/90 days). Includes a Chrome Extension for one-click saving and seamless sync.`,
      tags: ["TypeScript", "PostgreSQL", "Puppeteer", "Chrome Extension", "AI"],
      image: smartSaverImg,
      link: "#"
    },

    {
      id: "project-3",
      title: "Moodify – Emotion-Based Music Platform",
      description: `A real-time emotion detection system that recommends music based on facial expressions (80%+ accuracy). Uses WebSockets for live streaming, JWT + Redis for authentication, and a modular backend with REST APIs. Optimized processing pipeline by 30%.`,
      tags: ["React", "Node.js", "MongoDB", "WebSockets", "Redis", "Jest"],
      image: moodifyImg,
      link: "#"
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