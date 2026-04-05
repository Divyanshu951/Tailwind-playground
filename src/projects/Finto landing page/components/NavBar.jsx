import { Link } from "react-router-dom";

function NavBar() {
  const linkData = ["Founders", "Guide", "Docs", "Pricing", "Log In"];

  return (
    <nav className="flex items-center justify-between px-2 py-2">
      <Link className="w-16">
        <img src="/finta-logo-light.svg" alt="logo" />
      </Link>
      <div className="text-md flex items-center gap-6">
        {linkData.map((link, i) => (
          <Link
            className="font-medium text-neutral-800 transition-colors duration-150 hover:text-neutral-500"
            key={i}
          >
            {link}
          </Link>
        ))}
        <button className="transition-background cursor-pointer rounded-lg bg-[#2579F4] px-3.5 py-2 text-center text-sm font-medium text-white shadow-[0px_1px_4px_-1px_rgba(30,31,37,0.38)] duration-300 ease-in-out [text-shadow:0px_1px_1px_rgba(0,0,0,0.16)] text-shadow-md hover:bg-[#2262C7] active:bg-[#215BB9]">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
