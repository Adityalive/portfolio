import smartSaverImg from "../images/smart-saver.png";
import holosai1 from "../images/Holosai1.png";
import holosai2 from "../images/Holosai2.png";
import moodifyImg from "../images/moodify.png";

export const ProductsDetails = [
  {
    id: "project-1",
    title: "HolosAI – Deep Research Pipeline",
    description:
      "A multi-agent AI research system that automates complex research workflows, generating structured, citation-backed reports in seconds.",

    techstack: ["LangChain", "Mistral AI", "Node.js", "Docker", "Tavily API"],

    img: holosai1,
    liveDemoLink: "https://perplexity-2bk6.onrender.com",
    sourceCodeLink: "https://github.com/Adityalive",

    overview:
      "HolosAI is designed to eliminate manual research bottlenecks by automating the entire research lifecycle. It breaks down a single query into multiple AI-generated sub-queries, executes parallel web searches, and synthesizes the results into structured outputs such as Abstract, Background, Applications, Challenges, and Key Findings. The system leverages a multi-agent architecture built with LangChain and Mistral AI, enabling fast, scalable, and context-aware research generation. The entire pipeline reduces research time by over 90% while maintaining high-quality outputs.",

    features: [
      "3-phase pipeline: query expansion, parallel search, and LLM-based synthesis",
      "Generates structured research reports with clear sections and insights",
      "Parallel web search with citation extraction for credibility",
      "Multi-agent system using LangChain for task orchestration",
      "Sub-30 second response time for complex research queries",
      "Containerized with Docker for consistent deployment and scalability",
    ],

    challenges: [
      "Coordinating multiple AI agents while maintaining context consistency",
      "Filtering noisy and redundant web data during aggregation",
      "Balancing speed with accuracy in LLM-generated outputs",
      "Designing a scalable pipeline for parallel processing",
    ],

    images: [holosai1, holosai2],
  },

  {
    id: "project-2",
    title: "Smart Knowledge Saver & Resurfacing System",
    description:
      "An intelligent knowledge management platform that captures, organizes, and resurfaces information using AI, clustering, and spaced repetition.",

    techstack: [
      "TypeScript",
      "PostgreSQL",
      "Puppeteer",
      "Chrome Extension",
      "K-Means",
    ],

    img: smartSaverImg,
    liveDemoLink: "https://smart-search-4kcq.onrender.com/",
    sourceCodeLink: "https://github.com/Adityalive",

    overview:
      "This system solves the problem of forgotten information by turning saved content into an actively resurfacing knowledge base. It uses a hybrid scraping pipeline combining Jina API and Puppeteer to extract structured data from diverse websites, including paywalled content. The platform organizes saved content using K-Means clustering and reinforces retention through a spaced repetition system (30/60/90-day cycles). A Chrome Extension enables one-click saving, while backend systems ensure synchronization, persistence, and intelligent retrieval.",

    features: [
      "Hybrid scraping pipeline with fallback handling (Jina API + Puppeteer)",
      "90%+ scraping success rate across multiple domains",
      "Automatic content organization using K-Means clustering",
      "Spaced repetition system to improve long-term retention",
      "Chrome Extension (MV3) for seamless content saving",
      "Robust backend with TypeScript and PostgreSQL for reliability",
    ],

    challenges: [
      "Handling inconsistent HTML structures across different websites",
      "Ensuring high scraping success rate including restricted content",
      "Designing meaningful clustering for diverse knowledge types",
      "Maintaining real-time sync between extension and backend",
    ],

    images: [smartSaverImg],
  },

  {
    id: "project-3",
    title: "Moodify – Emotion-Based Music Platform",
    description:
      "A real-time emotion-aware music recommendation system powered by facial expression detection and live streaming.",

    techstack: [
      "React",
      "Node.js",
      "MongoDB",
      "WebSockets",
      "Redis",
      "Jest",
    ],

    img: moodifyImg,
    liveDemoLink: "https://moodify-ou8b.onrender.com/",
    sourceCodeLink: "https://github.com/Adityalive",

    overview:
      "Moodify bridges computer vision and real-time systems to deliver personalized music experiences. It detects user emotions through facial recognition with over 80% accuracy and dynamically recommends music based on detected mood. The system uses WebSockets for real-time communication, Redis for secure session management, and a modular backend architecture for scalability. Performance optimizations reduced media processing latency by 30%, ensuring a smooth and responsive user experience.",

    features: [
      "Real-time facial emotion detection (80%+ accuracy)",
      "Dynamic music recommendations based on mood",
      "Live communication using WebSockets",
      "JWT authentication with Redis session handling",
      "Modular and scalable backend architecture",
      "Optimized media pipeline with reduced latency",
    ],

    challenges: [
      "Achieving low-latency real-time emotion detection",
      "Improving model accuracy under varying lighting conditions",
      "Scaling WebSocket connections for multiple users",
      "Synchronizing emotion detection with music playback seamlessly",
    ],

    images: [moodifyImg],
  },
];