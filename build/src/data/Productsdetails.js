import supportaiImg from "../images/supportai.jpg";
import xautoImg from "../images/xauto.jpg";
import smartSaverImg from "../images/smart-saver.png";
import holosai1 from "../images/Holosai1.png";
import holosai2 from "../images/Holosai2.png";
import moodifyImg from "../images/moodify.png";

export const ProductsDetails = [
  {
    id: "project-supportai",
    title: "SupportAI – Multi-Tenant AI Customer Support Platform",
    description:
      "A production-grade, multi-tenant AI customer support platform featuring intelligent RAG routing, real-time voice assistance, and a lightweight embeddable widget.",

    techstack: [
      "React",
      "Express",
      "MongoDB Atlas",
      "Google Gemini 2.0",
      "Groq LLaMA 3.1",
      "Groq Whisper v3",
      "Twilio",
      "JWT",
    ],

    img: supportaiImg,
    liveDemoLink: "#",
    sourceCodeLink: "https://github.com/Adityalive",

    overview:
      "SupportAI is an enterprise-ready multi-tenant AI customer support platform built with React, Express, and MongoDB Atlas, deployed as a consolidated single service on Render. It enables businesses to deploy automated intelligent support across chat, voice, and telephony channels. The system integrates a custom RAG pipeline that processes knowledge base files (PDF/CSV chunking, vectorization, and semantic search) and intelligently routes customer inquiries through Google Gemini 2.0 and Groq LLaMA 3.1. By combining low-latency model inference with domain grounding, SupportAI autonomously resolves over 80% of customer support tickets without human intervention.",

    features: [
      "Multi-tenant architecture with isolated organization spaces and role-based permissions",
      "Autonomous RAG pipeline with automatic PDF/CSV chunking, vectorization, and hybrid semantic search",
      "Dual-model intelligent query routing across Google Gemini 2.0 and Groq LLaMA 3.1",
      "Real-time voice support using Groq Whisper v3 for sub-second Speech-to-Text conversion",
      "Inbound and outbound telephone support integration via Twilio with natural Text-to-Speech (TTS)",
      "Zero-dependency embeddable widget (<script> tag) with hold-to-speak Web MediaRecorder API",
      "Unified ticket management desk with status tracking, team escalations, and resolution analytics",
      "Enterprise security and authentication using salted bcrypt hashing and stateless JWT tokens",
    ],

    challenges: [
      "Optimizing RAG retrieval latency and chunk relevancy across heterogeneous documents (PDFs, CSVs)",
      "Streaming low-latency audio chunks to Groq Whisper v3 for responsive hold-to-speak interactions",
      "Maintaining tenant data isolation and strict access boundaries within a unified MongoDB Atlas cluster",
      "Designing a zero-dependency, conflict-free embeddable JavaScript widget compatible with any website",
    ],

    images: [supportaiImg],
  },

  {
    id: "project-xauto",
    title: "X-Auto – Autonomous AI Content Engine",
    description:
      "An autonomous dual-LLM content creation and publishing engine that discovers trending tech news, scores virality potential, and automates high-engagement X posting.",

    techstack: [
      "Mistral AI",
      "Gemini 2.5",
      "Firecrawl",
      "Telegram Bot API",
      "Node.js",
      "Express",
      "Puppeteer",
    ],

    img: xautoImg,
    liveDemoLink: "#",
    sourceCodeLink: "https://github.com/Adityalive",

    overview:
      "X-Auto is a 24/7 autonomous dual-LLM pipeline engineered to identify emerging tech trends, evaluate engagement dynamics, and craft high-converting X (Twitter) content. The system uses Firecrawl-based web scraping equipped with curated topical filters to continuously monitor leading technology news outlets. Content candidates are evaluated through a virality-scoring algorithm and drafted collaboratively using Mistral AI and Gemini 2.5. Creators manage the entire pipeline remotely via an interactive Telegram Bot command center (/wakeup triggers, approvals, and logs), while an innovative click-to-tweet architecture bypasses expensive paid API tiers to make autonomous posting 100% cost-free.",

    features: [
      "Autonomous dual-LLM pipeline combining Mistral AI reasoning with Gemini 2.5 synthesis",
      "Continuous news gathering powered by Firecrawl with niche topic and relevance filters",
      "Proprietary virality scoring model evaluating hook strength, relevance, and shareability",
      "Telegram Bot command center enabling remote pipeline triggers (/wakeup) and draft reviews",
      "Smart click-to-tweet dispatch system eliminating reliance on paid X enterprise APIs",
      "Configurable scheduling engine ensuring optimal publishing cadence across time zones",
      "Automated deduplication and source verification to prevent duplicate or misleading posts",
    ],

    challenges: [
      "Calibrating dual-LLM prompts to consistently produce punchy, non-generic tech insights",
      "Handling dynamic web layouts and anti-scraping protections across diverse news sources",
      "Bypassing X API restrictions with reliable, zero-cost click-to-tweet deep link generation",
      "Managing asynchronous Telegram webhook polling and queuing during high-volume news spikes",
    ],

    images: [xautoImg],
  },

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