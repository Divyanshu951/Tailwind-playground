import { useEffect, useState } from "react";
import Container from "./components/Container";
import AnotherComponent from "./components/AnotherComponent";

function AppLayoutDarkTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle document title
  useEffect(() => {
    document.title = "Implementing dark theme";
    return () => (document.title = "Tailwind playground");
  }, []);

  // Initialize theme based on localStorage or system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const savedTheme = localStorage.getItem("theme");

      // If user has a saved preference, use it. Otherwise, use system preference.
      const shouldBeDark =
        savedTheme === "dark" || (!savedTheme && mediaQuery.matches);

      document.documentElement.classList.toggle("dark", shouldBeDark);
      setIsDarkMode(shouldBeDark);
    };

    // Apply on initial load
    applyTheme();

    // Listen for system theme changes in real-time
    const handleSystemThemeChange = () => {
      // Only auto-switch if the user hasn't manually set a preference
      if (!localStorage.getItem("theme")) {
        applyTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  // Toggle theme manually
  function handleDarkTheme() {
    const newIsDark = !isDarkMode;
    setIsDarkMode(newIsDark);

    document.documentElement.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  }

  return (
    // <div className="min-h-screen transition-colors duration-300 [--pattern-fg:var(--color-neutral-900)]/5 dark:bg-neutral-950">
    //   <div
    //     className="group fixed top-4 right-4 cursor-pointer"
    //     onClick={handleDarkTheme}
    //   >
    //     {isDarkMode ? (
    //       /* Sun Icon (Shown in Dark Mode to switch to Light) */
    //       <svg
    //         width="30px"
    //         height="30px"
    //         viewBox="0 0 36 36"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <g id="Lager_93" data-name="Lager 93" transform="translate(2 2)">
    //           <g id="Sun_3_Brightness_3" data-name="Sun 3, Brightness 3">
    //             <path
    //               d="M32,14H27.033c-2,1.769-.779,4,.967,4h4.967C34.966,16.231,33.746,14,32,14Z"
    //               fill="#fcd34d"
    //             />
    //             <path
    //               d="M17.172,10.111a6,6,0,1,0,4.715,4.715A6.01,6.01,0,0,0,17.172,10.111Z"
    //               fill="#fcd34d"
    //             />
    //             <path
    //               d="M 15.998 13.999 C 14.837 14.264 14.04 16.431 15.567 17.958 C 16.595 18.000 17.540 17.273 17.956 15.570 C 17.160 14.179 16.282 14.013 15.998 13.999 Z"
    //               fill="#fcd34d"
    //             />
    //             <rect
    //               width="8"
    //               height="4"
    //               rx="1.993"
    //               transform="translate(26 14)"
    //               fill="#fcd34d"
    //             />
    //             <rect
    //               width="8"
    //               height="4"
    //               rx="1.993"
    //               transform="translate(18 26) rotate(90)"
    //               fill="#fcd34d"
    //             />
    //             <rect
    //               width="8"
    //               height="4"
    //               rx="1.993"
    //               transform="translate(18 -2) rotate(90)"
    //               fill="#fcd34d"
    //             />
    //             <rect
    //               width="8"
    //               height="4"
    //               rx="1.993"
    //               transform="translate(-2 14)"
    //               fill="#fcd34d"
    //             />
    //             <rect
    //               width="6.925"
    //               height="3.766"
    //               rx="1.883"
    //               transform="translate(23.22 6.117) rotate(-45)"
    //               fill="#fcd34d"
    //             />
    //             <rect
    //               width="3.766"
    //               height="6.925"
    //               rx="1.883"
    //               transform="matrix(0.707, -0.707, 0.707, 0.707, 23.22, 25.883)"
    //               fill="#fcd34d"
    //             />
    //             <rect
    //               width="3.766"
    //               height="6.925"
    //               rx="1.883"
    //               transform="translate(1.22 3.883) rotate(-45)"
    //               fill="#fcd34d"
    //             />
    //             <rect
    //               width="6.925"
    //               height="3.766"
    //               rx="1.883"
    //               transform="translate(1.22 28.117) rotate(-45)"
    //               fill="#fcd34d"
    //             />
    //           </g>
    //         </g>
    //       </svg>
    //     ) : (
    //       /* Moon Icon (Shown in Light Mode to switch to Dark) */
    //       <svg
    //         fill="#000000"
    //         width="30px"
    //         height="30px"
    //         viewBox="0 0 35 35"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z" />
    //       </svg>
    //     )}
    //   </div>

    //   <Container>
    //     <div className="flex h-fit w-120 flex-col items-center justify-center overflow-hidden rounded-3xl bg-gray-100 p-10 shadow-xl transition-all duration-300 ease-in-out dark:bg-neutral-900 dark:text-amber-50">
    //       <div className="animate-marquee my-3 flex gap-5 hover:[animation-play-state:paused]">
    //         {Array.from({ length: 5 }, (v, i) => i + 1).map((item, i) => (
    //           <div
    //             className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] dark:bg-blue-500 dark:text-amber-50"
    //             key={i}
    //           >
    //             {item}
    //           </div>
    //         ))}
    //       </div>
    //       <h1 className="font-inter text-5xl font-semibold">React JS</h1>
    //       <p className="my-10 max-w-3xl text-center">
    //         React (also known as React.js or ReactJS) is a free and open-source
    //         JavaScript library developed by Meta for building user interfaces,
    //         specifically for single-page applications [1, 11].
    //       </p>
    //       <button
    //         onClick={handleDarkTheme}
    //         className="w-full cursor-pointer rounded-sm border-2 py-2 transition-all duration-200 hover:border-blue-400 active:border-red-300 dark:border-neutral-700 dark:hover:border-blue-500"
    //       >
    //         Toggle Theme
    //       </button>
    //     </div>
    //   </Container>
    // </div>

    <AnotherComponent />
  );
}

export default AppLayoutDarkTheme;
