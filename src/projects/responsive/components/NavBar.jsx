import { useEffect, useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "Responsive design ";

    return () => (document.title = "Tailwind Playground");
  }, []);

  return (
    <nav className="relative mx-auto max-w-4xl md:mt-4">
      <div className="shadow-input flex items-center justify-between gap-2 bg-white p-2 md:rounded-full">
        <img
          src="https://ui.aceternity.com/logo.png"
          className="h-10 w-10 rounded-full"
          alt="Logo"
        />

        {/* Desktop Menu */}
        <div className="text-md mr-8 hidden justify-between gap-10 text-neutral-500 md:flex">
          <div className="cursor-pointer transition-all duration-200 hover:text-neutral-900">
            Home
          </div>
          <div className="cursor-pointer transition-all duration-200 hover:text-neutral-900">
            Project
          </div>
          <div className="cursor-pointer transition-all duration-200 hover:text-neutral-900">
            About
          </div>
          <div className="cursor-pointer transition-all duration-200 hover:text-neutral-900">
            Contacts
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div
          onClick={() => setOpen(!open)}
          className="mr-2 cursor-pointer md:hidden"
        >
          {open ? (
            // Close (X) Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-15 left-0 z-50 flex w-full flex-col gap-4 rounded-b-2xl bg-white p-4 shadow-lg md:hidden">
          <div className="cursor-pointer text-neutral-500 transition-all duration-200 hover:text-neutral-900">
            Home
          </div>
          <div className="cursor-pointer text-neutral-500 transition-all duration-200 hover:text-neutral-900">
            Project
          </div>
          <div className="cursor-pointer text-neutral-500 transition-all duration-200 hover:text-neutral-900">
            About
          </div>
          <div className="cursor-pointer text-neutral-500 transition-all duration-200 hover:text-neutral-900">
            Contacts
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
