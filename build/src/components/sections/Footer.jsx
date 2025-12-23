import React from 'react';
import { SITE_CONFIG } from '../../data/config';
import { useState, useEffect } from 'react';
const Footer = () => {
    const [randomQuote, setRandomQuote] = useState(SITE_CONFIG.footer[0]);

  // 2. This runs ONLY when the page loads (Client-side)
  useEffect(() => {
    // Generate a random index based on the length of your quote array
    const randomIndex = Math.floor(Math.random() * SITE_CONFIG.footer.length);
    setRandomQuote(SITE_CONFIG.footer[randomIndex]);
  }, []);
  return (
    <footer className="w-full bg-white text-gray-900 border-t border-gray-200 py-12 px-4 md:px-8 relative">
      <div className="max-w-5xl mx-auto">
        
 

        {/* --- BOTTOM SECTION --- */}
        <div className="flex flex-col items-center text-center gap-8">
          
          {/* Quote Box (Light Mode Style) */}
          <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-8 max-w-2xl shadow-sm">
            {/* Quote Icon */}
            <span className="absolute top-0 left-6 -translate-y-1/2 bg-white border border-gray-200 p-2 rounded-full shadow-sm text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
              </svg>
            </span>
            <p className="text-xl italic font-serif text-gray-700 leading-relaxed">
              "{randomQuote.Quote}"
            </p>
            <p className="text-right text-gray-400 mt-4 text-xs font-bold uppercase tracking-widest">— {randomQuote.author}</p>
          </div>

          {/* Visitor Counter & Credits */}
          <div className="flex flex-col gap-3 items-center">
             <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs font-medium text-gray-500 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>You are the <span className="text-gray-900 font-bold"></span> visitor</span>
             </div>
             <p className="text-gray-400 text-xs">
                Design & Developed by <span className="text-gray-900 font-bold">Adityalive</span> © {new Date().getFullYear()}
             </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;