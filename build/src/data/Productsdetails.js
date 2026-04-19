export const ProductsDetails = [
  {
    id: "project-1",
    title: "HolosAI – Deep Research Pipeline",
    description:
      "A multi-agent AI system that automates deep research workflows and generates structured reports in seconds.",
    techstack: ["LangChain", "Mistral AI", "Node.js", "Docker", "Tavily API"],
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
    liveDemoLink: "#",
    sourceCodeLink: "https://github.com/Adityalive",
    overview:
      "HolosAI is a deep research automation platform that transforms complex queries into structured, multi-section reports. It uses query expansion, parallel web search, and LLM-based synthesis to reduce manual research time by over 90%.",

    features: [
      "3-phase research pipeline with AI-generated sub-queries",
      "Parallel web search with citation extraction",
      "Structured outputs: Abstract, Background, Applications, Challenges, Key Findings",
      "Multi-agent architecture using LangChain + Mistral AI",
      "Fast generation (<30 seconds per report)",
    ],

    challenges: [
      "Designing efficient multi-agent coordination",
      "Balancing speed vs accuracy in LLM outputs",
      "Handling noisy and inconsistent web data",
    ],

    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    ],
  },

  {
    id: "project-2",
    title: "Smart Knowledge Saver & Resurfacing System",
    description:
      "An intelligent knowledge management system with automated scraping, clustering, and spaced repetition.",
    techstack: [
      "TypeScript",
      "PostgreSQL",
      "Puppeteer",
      "Chrome Extension",
      "K-Means",
    ],
    img: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600",
    liveDemoLink: "#",
    sourceCodeLink: "https://github.com/Adityalive",
    overview:
      "A full-stack system that captures, organizes, and resurfaces knowledge intelligently. It uses hybrid scraping pipelines and ML-based clustering to structure information and applies spaced repetition to improve retention.",

    features: [
      "Hybrid scraping (Jina API + Puppeteer) with fallback handling",
      "90%+ success rate including paywalled content",
      "Automatic content clustering using K-Means",
      "Spaced repetition system (30/60/90-day cycles)",
      "Chrome Extension for one-click saving",
    ],

    challenges: [
      "Handling multiple website structures reliably",
      "Designing effective clustering for varied content",
      "Maintaining sync between extension and backend",
    ],

    images: [
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    ],
  },

  {
    id: "project-3",
    title: "Moodify – Emotion-Based Music Platform",
    description:
      "A real-time emotion detection system that recommends music using facial expression analysis.",
    techstack: [
      "React",
      "Node.js",
      "MongoDB",
      "WebSockets",
      "Redis",
      "Jest",
    ],
    img: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=600",
    liveDemoLink: "#",
    sourceCodeLink: "https://github.com/Adityalive",
    overview:
      "Moodify detects user emotions in real time using facial recognition and streams music recommendations accordingly. Built with a real-time pipeline using WebSockets and optimized backend performance.",

    features: [
      "Real-time facial emotion detection (80%+ accuracy)",
      "Live streaming using WebSockets",
      "JWT authentication with Redis session handling",
      "Modular backend with REST APIs",
      "Optimized media processing pipeline (30% faster)",
    ],

    challenges: [
      "Ensuring low-latency real-time streaming",
      "Improving accuracy of emotion detection models",
      "Scaling WebSocket connections efficiently",
    ],

    images: [
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=600",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=600",
    ],
  },
];