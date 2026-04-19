import { useState, useEffect } from "react";
import ThemeToogle from "../ui/ThemeToogle";
import { Search } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Work", href: "#projects" },
  { name: "Blog", href: "#blogs" },
  { name: "Resume", href: "#resume" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-inter ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 flex justify-between items-center">
        {/* Left: Navigation Links */}
        <nav className="flex gap-6 items-center text-sm font-medium text-muted-foreground">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Search and Theme Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-secondary/50 rounded-lg text-muted-foreground text-xs border border-border cursor-pointer hover:border-foreground/20 transition-colors">
            <Search className="w-3 h-3" />
            <div className="flex items-center gap-1.5">
              <span>Search</span>
              <kbd className="font-sans text-[10px] opacity-60">Ctrl K</kbd>
            </div>
          </div>
          <ThemeToogle />
        </div>
      </div>
    </header>
  );
}