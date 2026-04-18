import React from "react";

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
  {
    id: 4,
    src: "https://tailwindcss.com/_next/static/media/templates-col-3.4c4b09ad.png",
  },
  {
    id: 5,
    src: "https://tailwindcss.com/_next/static/media/templates-col-2.17fea2a5.png",
  },
];

function MarqueeRow({ reverse = false, speed = 25 }) {
  // Duplicate images for seamless loop
  const items = [...images, ...images, ...images];

  return (
    <div className="marquee-row-wrapper">
      <div
        className="marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {items.map((img, i) => (
          <img
            key={`${img.id}-${i}`}
            src={img.src}
            alt={`Template ${img.id}`}
            className="marquee-img"
          />
        ))}
      </div>
    </div>
  );
}

function Sliding() {
  return (
    <div className="sliding-outer">
      <style>{`
        .sliding-outer {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
          border-radius: 1.25rem;
          background-color: #0a0a0f;
          background-image: radial-gradient(#ffffff18 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* Fade masks on all 4 edges */
        .sliding-outer::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(to bottom, #0a0a0f 6%, transparent 22%, transparent 78%, #0a0a0f 94%),
            linear-gradient(to right,  #0a0a0f 6%, transparent 22%, transparent 78%, #0a0a0f 94%);
          z-index: 10;
          pointer-events: none;
          border-radius: inherit;
        }

        /* The inner stage is rotated -45deg and scaled up to fill parent */
        .sliding-stage {
          position: absolute;
          /* Center it, then rotate */
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
          /* Scale so the rotated content fills the clipped area */
          width: 180%;
          display: flex;
          flex-direction: column;
          gap: 18px;
          pointer-events: none;
        }

        .marquee-row-wrapper {
          overflow: hidden;
          width: 100%;
        }

        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }

        .marquee-track {
          display: flex;
          gap: 18px;
          width: max-content;
          animation: marquee-scroll linear infinite;
          /* direction set inline */
        }

        .marquee-img {
          width: 200px;
          flex-shrink: 0;
          border-radius: 12px;
          object-fit: cover;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6);
          border: 1px solid rgba(255,255,255,0.08);
        }
      `}</style>

      <div className="sliding-stage">
        <MarqueeRow speed={22} />
        <MarqueeRow speed={28} reverse />
        <MarqueeRow speed={20} />
        <MarqueeRow speed={26} reverse />
        <MarqueeRow speed={24} />
        <MarqueeRow speed={30} reverse />
      </div>
    </div>
  );
}

export default Sliding;
