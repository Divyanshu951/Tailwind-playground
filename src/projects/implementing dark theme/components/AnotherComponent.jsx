import { useEffect, useState } from "react";

function AnotherComponent() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("dark");

    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleThemeToggle() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <div className="bg-background text-foreground flex h-screen w-full items-center justify-center">
      <div className="group/circle flex size-100 items-center justify-center rounded-full border-2 border-red-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-app-window-icon lucide-app-window cursor-pointer group-hover/circle:text-pink-500"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M10 4v4" />
          <path d="M2 8h20" />
          <path d="M6 4v4" />
        </svg>
      </div>

      <button
        onClick={handleThemeToggle}
        className="fixed top-10 right-10 rounded-full bg-blue-300 px-4 py-1 text-black"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default AnotherComponent;
