import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check, Twitter, Linkedin, Github, Youtube, Instagram } from "lucide-react";
import pic from "../../images/ChatGPT Image Dec 19, 2025, 04_44_34 PM (1).png"
import { SITE_CONFIG } from "../../data/config";
import { useSpotify } from "../../hooks/useSpotify";

// ─── Animation helper ─────────────────────────────────────────────────────────
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] },
});

// ─── Social links ────────────────────────────────────────────────────────────
const socialLinks = [
  { icon: Twitter, href: SITE_CONFIG.socials.twitter || SITE_CONFIG.socials.x, label: "Twitter" },
  { icon: Linkedin, href: SITE_CONFIG.socials.linkedin, label: "LinkedIn" },
  { icon: Github, href: SITE_CONFIG.socials.github, label: "GitHub" },
  { icon: Youtube, href: SITE_CONFIG.socials.youtube, label: "YouTube" },
  { icon: Instagram, href: SITE_CONFIG.socials.instagram, label: "Instagram" },
  { icon: Mail, href: SITE_CONFIG.socials.mail, label: "Email" },
];

// ─── Animated Spotify equalizer bars ─────────────────────────────────────────
const EqBars = () => (
  <>
    <style>{`
      @keyframes eqAnim { to { height: 4px; } }
    `}</style>
    <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 14 }}>
      {[
        { h: 6, delay: "0s" },
        { h: 12, delay: "0.15s" },
        { h: 8, delay: "0.3s" },
        { h: 14, delay: "0.1s" },
      ].map((bar, i) => (
        <div
          key={i}
          style={{
            width: 2.5,
            height: bar.h,
            borderRadius: 2,
            background: "#1db954",
            animation: `eqAnim 1.1s ${bar.delay} ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>
  </>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const nowPlaying = useSpotify();

  const copyEmail = () => {
    const email = SITE_CONFIG.socials.mail?.replace('mailto:', '') || "";
    if (email) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      className="pt-36 pb-12 px-6"
    >
      <div className="max-w-3xl mx-auto">

        {/* ── Eyebrow ─────────────────────────────────────────────────── */}
        <motion.div
          {...fade(0)}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--muted-foreground)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: "1.5rem",
          }}
        >
          <span style={{ width: 28, height: "0.5px", background: "currentColor", opacity: 0.3, display: "inline-block" }} />
          builder · maker · polymath
          <span style={{ width: 28, height: "0.5px", background: "currentColor", opacity: 0.3, display: "inline-block" }} />
        </motion.div>

        {/* ── Avatar + Name ────────────────────────────────────────────── */}
        <motion.div
          {...fade(0.08)}
          className="flex flex-col md:flex-row gap-8 items-end mb-8"
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <motion.div
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                width: 110,
                height: 110,
                borderRadius: 18,
                border: "0.5px solid var(--border)",
                overflow: "hidden",
                background: "var(--secondary)",
              }}
            >
              <img
                src={pic}
                alt={SITE_CONFIG.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </motion.div>

            <div
              style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: "3px 10px", borderRadius: 20,
                border: "0.5px solid #16a34a40",
                background: "#16a34a0e",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                color: "#16a34a",
                userSelect: "none",
              }}
            >
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                style={{
                  width: 5, height: 5,
                  borderRadius: "50%",
                  background: "#16a34a",
                  display: "inline-block",
                }}
              />
              available
            </div>
          </div>

          <div style={{ flex: 1, paddingBottom: 4 }}>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: "clamp(64px, 12vw, 96px)",
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                color: "var(--foreground)",
                marginBottom: 14,
              }}
            >
              {SITE_CONFIG.name}
            </motion.h1>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6 }}>
              {["Dev", "Creator"].map((chip, idx) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  whileHover={{ scale: 1.05, backgroundColor: "var(--border)" }}
                  style={{
                    fontSize: 12, fontWeight: 500,
                    padding: "4px 10px", borderRadius: 6,
                    border: "0.5px solid var(--border)",
                    color: "var(--muted-foreground)",
                    background: "var(--secondary)",
                  }}
                >
                  {chip}
                </motion.span>
              ))}
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--border)", display: "inline-block" }} />
              <button
                onClick={copyEmail}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "var(--muted-foreground)",
                  background: "none", border: "none",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 5,
                  padding: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-foreground)")}
              >
                {copied ? <Check size={11} /> : <Mail size={11} />}
                {SITE_CONFIG.socials.mail?.replace('mailto:', '')}
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── Bio ─────────────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            fontSize: 16, fontWeight: 300,
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
            maxWidth: 500,
            marginBottom: "2rem",
            borderLeft: "1.5px solid var(--border)",
            paddingLeft: 14,
          }}
        >
          Love to build cool stuff. From learning to building to shipping — I focus on creating practical tools that people actually use
        </motion.p>

        {/* ── Bottom row ───────────────────────────────────────────────── */}
        <motion.div
          {...fade(0.26)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          {/* Now Playing Component */}
          <motion.div
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
            onClick={() => nowPlaying.songUrl && window.open(nowPlaying.songUrl, '_blank')}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: "14px 24px",
              borderRadius: 24,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "#121212",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              cursor: nowPlaying.songUrl ? "pointer" : "default",
              userSelect: "none",
            }}
          >
            <EqBars />
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <div style={{ 
                color: "#ffffff", 
                fontSize: 14, 
                fontWeight: 700, 
                letterSpacing: "0.02em",
                fontFamily: "Inter, sans-serif" 
              }}>
                {nowPlaying.isPlaying ? nowPlaying.title : "Not Playing"}
              </div>
              <div style={{ 
                color: "#a1a1aa", 
                fontSize: 12, 
                fontWeight: 500,
                fontFamily: "Inter, sans-serif" 
              }}>
                {nowPlaying.isPlaying ? nowPlaying.artist : "Spotify"}
              </div>
            </div>
          </motion.div>

          {/* Social Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: 34, height: 34,
                  borderRadius: 8,
                  border: "0.5px solid var(--border)",
                  color: "var(--muted-foreground)",
                  background: "var(--background)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--foreground)";
                  e.currentTarget.style.color = "var(--foreground)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--muted-foreground)";
                }}
              >
                <s.icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};