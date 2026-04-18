import React from "react";

function SlidingGem() {
  // Base images
  const images = [
    {
      id: 1,
      src: "https://tailwindcss.com/_next/static/media/templates-col-3.4c4b09ad.png",
    },
    {
      id: 2,
      src: "https://tailwindcss.com/_next/static/media/templates-col-2.17fea2a5.png",
    },
    {
      id: 3,
      src: "https://tailwindcss.com/_next/static/media/templates-col-1.3d4d7b6a.png",
    },
  ];

  // Duplicate the array to create a seamless infinite scroll loop
  // Moving it 50% up will seamlessly snap back to the start
  const duplicatedImages = [...images, ...images];

  return (
    // Outer container: hides overflow and provides the grid background
    <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-900 bg-[radial-gradient(#475569_1px,transparent_1px)] bg-[size:16px_16px]">
      <style>
        {`
          /* Scrolls upwards continuously */
          @keyframes scroll-up {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          /* Scrolls downwards continuously */
          @keyframes scroll-down {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
          
          .animate-scroll-up {
            animation: scroll-up 20s linear infinite;
          }
          .animate-scroll-down {
            animation: scroll-down 20s linear infinite;
          }

          /* Pause animation on hover */
          .group:hover .animate-scroll-up,
          .group:hover .animate-scroll-down {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* The Rotated Wrapper 
        - rotate-[-45deg]: Tilts the whole layout.
        - scale-[1.75]: Enlarges it so the corners of the rotated box don't show blank space.
      */}
      <div className="group flex scale-[1.75] rotate-[-45deg] gap-6 sm:scale-150">
        {/* Column 1: Scrolls Up */}
        <div className="animate-scroll-up flex flex-col gap-6">
          {duplicatedImages.map((img, idx) => (
            <img
              key={`col1-${idx}`}
              className="w-64 flex-none rounded-2xl object-cover shadow-2xl transition-all duration-300 hover:brightness-110 md:w-80"
              src={img.src}
              alt={`Template ${img.id}`}
            />
          ))}
        </div>

        {/* Column 2: Scrolls Down (Contrasting direction for visual interest) */}
        <div className="animate-scroll-down flex flex-col gap-6">
          {duplicatedImages.map((img, idx) => (
            <img
              key={`col2-${idx}`}
              className="w-64 flex-none rounded-2xl object-cover shadow-2xl transition-all duration-300 hover:brightness-110 md:w-80"
              src={img.src}
              alt={`Template ${img.id}`}
            />
          ))}
        </div>

        {/* Column 3: Scrolls Up */}
        <div className="animate-scroll-up flex flex-col gap-6">
          {duplicatedImages.map((img, idx) => (
            <img
              key={`col3-${idx}`}
              className="w-64 flex-none rounded-2xl object-cover shadow-2xl transition-all duration-300 hover:brightness-110 md:w-80"
              src={img.src}
              alt={`Template ${img.id}`}
            />
          ))}
        </div>
      </div>

      {/* Optional: Add gradient overlays to fade out the top and bottom edges smoothly */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900/80"></div>
    </div>
  );
}

export default SlidingGem;
