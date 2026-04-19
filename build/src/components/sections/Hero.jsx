import React from 'react'
import { Github, Linkedin, Youtube, Instagram, Mail, Twitter, Copy, ExternalLink, MessageCircle } from "lucide-react";
import pic from "../../images/ChatGPT Image Dec 19, 2025, 04_44_34 PM (1).png"
import { SITE_CONFIG } from "../../data/config";

export const Hero = () => {
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/your-id", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Adityalive", label: "GitHub" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Mail, href: "mailto:your-email@example.com", label: "Email" },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText("your-email@example.com");
    // Could add a toast notification here if available
  };

  return (
    <section className="pt-40 pb-12 px-6 font-inter">
      <div className="max-w-3xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          {/* Avatar - Rounded Square Pixel Art Style */}
          <div className="relative group">
            <div className="w-32 h-32 rounded-3xl bg-yellow-400 p-1 shadow-2xl transition-transform duration-500 hover:scale-105">
              <div className="w-full h-full rounded-[1.4rem] overflow-hidden bg-black flex items-center justify-center">
                <img 
                  src={pic} 
                  alt={SITE_CONFIG.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Status Indicator */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-background rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
            </div>
          </div>

          {/* Name and Title */}
          <div className="flex-1 pt-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-foreground">
              {SITE_CONFIG.name}
            </h1>
            <div className="flex flex-wrap items-center gap-x-2 text-muted-foreground text-lg mb-6">
              <span>{SITE_CONFIG.role.split('&')[0].trim()}</span>
              <span className="text-muted-foreground/30">•</span>
              <span>Polymath</span>
              <span className="text-muted-foreground/30">•</span>
              <button 
                onClick={copyEmail}
                className="flex items-center gap-1.5 hover:text-foreground transition-colors group"
                title="Click to copy email"
              >
                <span>hi@aditya.in</span>
                <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Love to build cool stuff, content creator & polymath.
            </p>
          </div>
        </div>

        {/* Spotify Placeholder (Optional for Feel) */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8 py-3 px-4 rounded-xl bg-secondary/30 border border-border/50 w-fit">
          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
             <div className="w-2.5 h-2.5 bg-background rounded-full" />
          </div>
          <span>Last played <span className="text-muted-foreground/40">—</span> Do Dhaari Talwaar · Sohail Sen</span>
        </div>

        {/* Social Icons Row */}
        <div className="flex flex-wrap items-center gap-6 pt-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
