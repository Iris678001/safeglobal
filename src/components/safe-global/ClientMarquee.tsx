"use client";

import React from "react";
import Image from "next/image";

const LOGOS = [
  { name: "3M", src: "/logos/3m.png" },
  { name: "Picture1", src: "/logos/Picture1.png" },
  { name: "Picture2", src: "/logos/Picture2.png" },
  { name: "Picture3", src: "/logos/Picture3.png" },
  { name: "Picture4", src: "/logos/Picture4.png" },
  { name: "Picture5", src: "/logos/Picture5.png" },
  { name: "Picture6", src: "/logos/Picture6.png" },
  { name: "Picture7", src: "/logos/Picture7.png" },
  { name: "Picture8", src: "/logos/Picture8.png" },
  { name: "GE", src: "/logos/ge.png" },
  { name: "Siemens", src: "/logos/siemens.png" },
];

export default function ClientMarquee() {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-slate-50 border-y border-safeglobal/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 sm:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 sm:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
      
      {/* Title */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="inline-flex items-center justify-center gap-4">
          <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-sky-500/60" />
          <p className="text-[10px] sm:text-xs text-slate-600 uppercase tracking-[0.25em] font-bold drop-shadow-sm">
            Trusted by industry leaders
          </p>
          <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-sky-500/60" />
        </div>
      </div>

      <div className="flex w-max animate-marquee hover:pause pt-6">
        {[...LOGOS, ...LOGOS].map((logo, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center justify-center w-[160px] sm:w-[220px] h-16 sm:h-20 mx-4 sm:mx-8 group transition-all duration-300"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={150}
                unoptimized={true}
                height={80}
                className={`w-auto object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 drop-shadow-sm group-hover:drop-shadow-xl ${
                  logo.name === 'Picture7'
                    ? 'max-h-20 sm:max-h-24 scale-[1.7] group-hover:scale-[1.85]'
                    : ['Picture2', 'Picture4', 'Picture5', 'Picture6'].includes(logo.name)
                    ? 'max-h-16 sm:max-h-20 scale-[1.35] group-hover:scale-[1.5]'
                    : 'max-h-12 sm:max-h-16 group-hover:scale-110'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
