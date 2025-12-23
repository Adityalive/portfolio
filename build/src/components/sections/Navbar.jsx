import { useState, useEffect } from "react";
import pic from "../../images/ChatGPT Image Dec 19, 2025, 04_44_34 PM (1).png";

const links = [
  { name: "Work", href: "#work" },
  { name: "Blogs", href: "#blogs" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      // 2. Conditional Styling
      // - transition-all duration-300: Makes the change smooth
      // - backdrop-blur-md: The actual blur effect
      // - bg-white/70: 70% opacity white (blur requires transparency to work)
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-md py-3"
          : "bg-white/0 shadow-none py-5" 
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold max-h-18 max-w-14 overflow-hidden rounded-md"
        >
          <img src={pic} alt="Logo" />
          <span className="text-gray-500"></span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-800">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-semibold transition-colors hover:text-black hover:underline underline-offset-4"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}