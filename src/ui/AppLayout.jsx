import { Link } from "react-router-dom";

function AppLayout() {
  const projects = [
    { title: "finta landing page", path: "finta" },
    { title: "cobalt landing page", path: "cobalt" },
    { title: "Aceternity themed keyboard", path: "keyboard" },
    { title: "Responsive design", path: "responsive" },
    { title: "Implementing dark theme", path: "dark-theme" },
    { title: "Grid", path: "grid" },
    { title: "Masking and rest", path: "masking" },
  ];

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-zinc-950 py-20 text-zinc-200 selection:bg-indigo-500/30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="pointer-events-none absolute inset-0 mx-auto h-full w-full max-w-5xl">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-white/10 via-white/5 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-white/10 via-white/5 to-transparent"></div>
      </div>
      
      <div className="z-10 mb-12 flex flex-col items-center space-y-4 px-4 text-center">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300 backdrop-blur-md">
          <span className="me-2 flex h-2 w-2 animate-pulse rounded-full bg-indigo-500"></span>
          Tailwind Playground
        </div>
        <h1 className="bg-linear-to-b from-white to-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          My Practice Projects
        </h1>
        <p className="mt-4 max-w-md text-zinc-400">
          A collection of interfaces cloned and created to master Tailwind CSS styling and responsiveness.
        </p>
      </div>

      <div className="z-10 grid w-full max-w-2xl grid-cols-1 gap-4 px-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Link
            target="_blank"
            className="group relative flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(120,119,198,0.15)]"
            to={`/${project.path}`}
            key={i}
          >
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold text-zinc-200 transition-colors group-hover:text-white">
                {project.title}
              </span>
              <span className="mt-1 text-xs text-zinc-500">/{project.path}</span>
            </div>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-colors group-hover:bg-indigo-500/20 group-hover:text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AppLayout;
