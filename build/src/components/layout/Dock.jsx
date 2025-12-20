import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Home, User, Code, Mail, FileText } from "lucide-react"; // Icons
import { cn } from "../../lib/utils";

// 1. The "Item" Component (Individual Icons)
function DockIcon({ mouseX, icon: Icon, label, onClick }) {
  const ref = useRef(null);

  // MATH: Calculate distance from mouse to the center of this icon
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // PHYSICS: Transform distance into width (Magnetic Effect)
  // Input: Distance ranges from -150 to 150
  // Output: Width ranges from 40px (default) to 80px (hovered)
  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  
  // SPRING: Add a "bouncy" feel to the width change
  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.button
      ref={ref}
      style={{ width, height: width }} // Apply the calculated physics size
      onClick={onClick}
      className={cn(
        "aspect-square rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center relative group",
        "hover:bg-zinc-800 transition-colors"
      )}
    >
      {/* The Icon */}
      <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
      
      {/* Tooltip (Label) - Only visible on hover */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-auto px-2 py-1 rounded border border-zinc-800 bg-zinc-950 text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </motion.button>
  );
}

// 2. The Main Dock Component
export default function Dock() {
  const mouseX = useMotionValue(Infinity); // Tracks mouse X position

  const items = [
    { icon: Home, label: "Home", onClick: () => window.scrollTo(0, 0) },
    { icon: User, label: "About", onClick: () => {} },
    { icon: Code, label: "Projects", onClick: () => {} },
    { icon: FileText, label: "Resume", onClick: () => {} },
    { icon: Mail, label: "Contact", onClick: () => window.location.href = "mailto:you@example.com" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)} // Track mouse
        onMouseLeave={() => mouseX.set(Infinity)} // Reset when mouse leaves
        className="flex h-16 items-end gap-4 rounded-2xl border border-zinc-800 bg-black/80 backdrop-blur-md px-4 pb-3"
      >
        {items.map((item, index) => (
          <DockIcon key={index} mouseX={mouseX} {...item} />
        ))}
      </motion.div>
    </div>
  );
}