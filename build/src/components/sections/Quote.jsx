import React, { useMemo } from 'react';

const QUOTES = [
  {
    type: "serif",
    text: "Wake up to reality. Nothing ever goes as planned in this world.",
    author: "Madara Uchiha"
  },
  {
    type: "sans",
    text: "Creating products that not only look great but drive real results.",
    author: "Aditya Kumar"
  },
  {
    type: "serif",
    text: "The details are not the details. They make the design.",
    author: "Charles Eames"
  },
  {
    type: "sans",
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  }
];

const Quote = () => {
  const randomQuote = useMemo(() => {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)];
  }, []);

  return (
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden">
      {/* ─── VIDEO BACKGROUND with Seamless Masking ─── */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://videos.pexels.com/video-files/7762075/12111166_1920_1080_30fps.mp4" type="video/mp4" />
          <source src="https://www.pexels.com/download/video/7762075/" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className={`text-2xl md:text-3xl font-medium leading-[1.3] tracking-tight ${randomQuote.type === "serif" ? "italic font-serif text-4xl md:text-5xl" : ""}`}>
          "{randomQuote.text}"
        </h2>
        {randomQuote.author && (
          <p className="mt-6 text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
            — {randomQuote.author}
          </p>
        )}
      </div>
    </section>
  );
};

export default Quote;
