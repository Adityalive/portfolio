// src/data/config.js

import { Quote } from "lucide-react";

export const SITE_CONFIG = {
  name: "Aditya",
  role: "CSE Student & Full Stack Developer",
  description: `I'm a Full Stack Web Developer and passionate about building impactful digital products. I specialize in crafting MVPs that solve real-world problems, with a focus on clean architecture, intuitive UI, and scalable backend systems. Whether it's shipping fast or diving deep into complex challenges, I thrive on turning ideas into working software.`,
  socials: {
    github: "https://github.com/Adityalive",
    linkedin: "https://linkedin.com/in/your-id",
    twitter: "https://twitter.com",
  },
  projects: [
    {
      id: "project-1", // This ID must match ProductsDetails below
      title: "AI Code Reviewer",
      description: `A MERN stack platform leveraging Generative AI to automate code reviews. It provides real-time static analysis, detects security vulnerabilities, and offers intelligent refactoring suggestions to optimize performance`,
      tags: ["React", "Node.js", "AI API"],
      image: "https://images.unsplash.com/photo-1766155072349-aa536dbd6ad1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      id: "project-2", // This ID must match ProductsDetails below
      title: "Tiny Cats",
      description: "A Computer Vision system developed using Deep Learning (CNNs) to accurately detect and classify food items in real-time. It leverages advanced object detection algorithms to analyze image data for automated dietary tracking and nutritional estimation.",
      tags: ["MERN", "OpenAI"],
      image: "https://plus.unsplash.com/premium_vector-1734707879403-19be24212849?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
  ],
  footer:[
    {
      Quote:"Wake up to reality. Nothing ever goes as planned in this world.",
      author:"Madara Uchiha"
    },
    {
      Quote: "What if it all works out in the end?",
      author:"Unknown"
    }
  ]
};

