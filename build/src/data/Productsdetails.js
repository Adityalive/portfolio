export const ProductsDetails = [
  {
    id: "project-1", // MATCHED with SITE_CONFIG
    title: "AI Code Reviewer", // FIXED (Removed extra space at start)
    description: "A MERN stack platform leveraging Generative AI to automate code reviews.",
    techstack: ["React", "Node.js", "MongoDB"],
    img: "https://plus.unsplash.com/premium_vector-1762931365544-3e8b45ed8111?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    liveDemoLink: "#",
    sourceCodeLink: "https://github.com/example/product-one",
    overview: "This project automates code reviews using AI. It scans for bugs, security flaws, and performance issues.",
    features: [
      "Real-time static analysis using LLMs.",
      "Automated refactoring suggestions.",
      "Security vulnerability detection.",
    ],
    challenges: [
      "Handling large codebases efficiently.",
      "Reducing false positives in AI suggestions.",
    ],
    images: [
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    ],
  },
  {
    id: "project-2", // MATCHED with SITE_CONFIG
    title: "Tiny Cats", // FIXED (Changed from 'Product One' to match)
    description: "A Computer Vision system developed using Deep Learning (CNNs).",
    techstack: ["Python", "TensorFlow", "OpenCV"],
    img: "https://plus.unsplash.com/premium_vector-1734707879403-19be24212849?q=80&w=880&auto=format&fit=crop",
    liveDemoLink: "#",
    sourceCodeLink: "https://github.com/example/tiny-cats",
    overview: "Tiny Cats uses CNNs to identify food items from images for dietary tracking applications.",
    features: [
      "High accuracy food classification.",
      "Real-time processing with OpenCV.",
      "Nutritional estimation integration.",
    ],
    challenges: [
      "Gathering a diverse dataset for training.",
      "Optimizing the model for mobile devices.",
    ],
    images: [
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop",
    ],
  },
];