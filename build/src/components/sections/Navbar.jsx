import { useState } from "react";
import pic from "../../images/ChatGPT Image Dec 19, 2025, 04_44_34 PM (1).png"
const links = [
  { name: "Work", href: "#work" },
  { name: "Blogs", href: "#blogs" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white z-500 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/" className="text-xl font-bold max-h-18 max-w-14 overflow-hidden rounded-md">
          <img src={pic}></img><span className="text-gray-500"></span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-800">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="font-semibold transition-colors hover:text-black hover:underline underline-offset-4"
>
              {link.name}
            </a>
          ))}
        </nav>
      </div>      
        
    </header>
  );
}
