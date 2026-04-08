import { Link } from "react-router-dom";

function AppLayout() {
  const projects = [
    { title: "finta landing page", path: "finta" },
    { title: "cobalt landing page", path: "cobalt" },
    { title: "Aceternity themed keyboard", path: "keyboard" },
    { title: "Responsive design", path: "responsive" },
    { title: "Implementing dark theme", path: "dark-theme" },
    { title: "Grid", path: "grid" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center gap-5 pt-10 [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%)_#FFF_100%]">
      <div className="pointer-events-none absolute inset-0 mx-auto h-full w-full max-w-5xl">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-500/50 via-neutral-200 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-500/50 via-neutral-200 to-transparent"></div>
      </div>
      <h1 className="mb-10 text-3xl font-bold italic">
        The Projects i cloned/made to practice tailwind
      </h1>

      {projects.map((project, i) => (
        <Link
          target="_blank"
          className="transition-background w-full max-w-xs cursor-pointer rounded-lg bg-[#2579F4] px-3.5 py-2 text-center text-lg font-medium text-white shadow-[0px_1px_4px_-1px_rgba(30,31,37,0.38)] duration-300 ease-in-out [text-shadow:0px_1px_1px_rgba(0,0,0,0.16)] text-shadow-md hover:bg-[#2262C7] active:bg-[#215BB9]"
          to={`/${project.path}`}
          key={i}
        >
          {project.title}
        </Link>
      ))}
    </div>
  );
}

export default AppLayout;
