import React from 'react'
import { FileText, Send, Github, Linkedin, Youtube, Instagram, Mail, Twitter } from "lucide-react";
import pic from "../../images/ChatGPT Image Dec 19, 2025, 04_44_34 PM (1).png"
import {SITE_CONFIG} from "../../data/config";
import Button from "../ui/Button";
import { TechBadge } from "../ui/TechBadge";
export const Hero = () => {
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://github.com/Adityalive", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];
  return (    
      <section className="pt-32 pb-16 px-4 md:px-6">
      <div className="conatiner mx-auto max-w-3xl">
        {/* Profile Image with Status */}
        <div className="relative w-24 h-24 mb-6 rounded-[50%]">
          <div className="w-24 h-24 rounded-full  bg-gradient-to-br from-secondary to-muted overflow-hidden border-2 border-border">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              <img src={pic} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-transparent rounded-full  flex items-center justify-center">
    <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    </div>
    </div>    
        </div>
         {/* Main Heading */}
        <h1 className="text-base md:text-4xl lg:text-5xl  font-neuton font-medium mb-6 leading-tight animate-slide-up">
          Hi, I'm {SITE_CONFIG.name} —{" "}
  <span className="text-muted-foreground text-opacity-70 text-slate-800">A Full Stack web developer.</span>
</h1>
<p className="text-lg text-muted-foreground mb-6 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
          I build interactive web apps using{" "}
          <TechBadge name="JavaScript" color="blue" />,{" "}
          <TechBadge name="React" color="cyan" />,{" "}
          <TechBadge name="Next.js" color="default" />,{" "}
          <TechBadge name="npm" color="orange" /> and{" "}
          <TechBadge name="MongoDb" color="blue" />.{" "}
          With a focus on <span className="text-foreground font-medium">UI</span> design.
          Enthusiastic about <span className="text-foreground font-medium">Three.js</span>,
          driven by a keen eye for design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Button variant="outline" className="gap-2">
            <FileText className="w-4 h-4" />
            Resume / CV
          </Button>
          <Button className="gap-2">
            <Send className="w-4 h-4 " />
            Get in touch
          </Button>
        </div>
        {/* Social Links */}
        <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        </div>
      </section>
   
  )
}
