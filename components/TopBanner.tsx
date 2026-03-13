import React from 'react';
import { Link } from 'react-router-dom';

const TopBanner: React.FC = () => {
  const message = "Convert Your Existing School to St. Xavier International Franchise";
  const separator = " • ";
  // Repeat content to ensure it fills wide screens
  const content = Array(4).fill(`${message}${separator}`).join("");

  return (
    <Link to="/#partner-form" className="block bg-navy text-white py-2.5 overflow-hidden relative z-[60] border-b border-white/10 hover:bg-slate-900 transition-colors group text-decoration-none">
      <div className="whitespace-nowrap flex w-fit animate-marquee group-hover:pause cursor-pointer">
         {/* Two copies of the content block to create a seamless loop */}
         <div className="flex shrink-0">
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] px-4">{content}</span>
         </div>
         <div className="flex shrink-0">
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] px-4">{content}</span>
         </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
        .group-hover\\:pause:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </Link>
  );
};

export default TopBanner;