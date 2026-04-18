import React from "react";

function Container({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-zinc-950 py-20 text-zinc-200 selection:bg-indigo-500/30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="pointer-events-none absolute inset-0 mx-auto h-full w-full max-w-5xl">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-white/10 via-white/5 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-white/10 via-white/5 to-transparent"></div>
      </div>

      {children}
    </div>
  );
}

export default Container;
