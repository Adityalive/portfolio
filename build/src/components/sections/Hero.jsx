import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react"; // Icons
import Container from "../ui/Container";
import Button from "../ui/Button";
import { SITE_CONFIG } from "../../data/config";

export default function Hero() {
  return (
    <Container className="pt-32 pb-20">
      {/* ARCHITECT NOTE: 
        We use a parent motion.div with 'staggerChildren'.
        This means: "Trigger the children animations one by one, with a 0.1s delay between them."
      */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1, // The secret sauce for smooth flows
            },
          },
        }}
        className="flex flex-col gap-6"
      >
        
        {/* Item 1: The "Status Badge" */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex items-center gap-2 text-zinc-400"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium">Available for new projects</span>
        </motion.div>

        {/* Item 2: The Name */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white"
        >
          I'm {SITE_CONFIG.name}.
        </motion.h1>

        {/* Item 3: The Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-lg text-zinc-400 max-w-xl leading-relaxed"
        >
          {SITE_CONFIG.description}
        </motion.p>

        {/* Item 4: The Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <Button onClick={() => window.open(SITE_CONFIG.socials.github, "_blank")}>
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button 
             className="bg-zinc-800 text-white hover:bg-zinc-700"
             onClick={() => window.open(SITE_CONFIG.socials.linkedin, "_blank")}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </motion.div>

      </motion.div>
    </Container>
  );
}