function NavBar() {
  return (
    <nav className="flex justify-between px-5 py-3">
      <p className="cursor-pointer text-xl font-semibold">Cobalt</p>
      <div className="flex items-center gap-4">
        <button className="text-md cursor-pointer opacity-80 transition-all duration-300 hover:opacity-95">
          Blog
        </button>
        <div className="group relative flex flex-col items-center">
          <span className="h-px w-[80%] bg-linear-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          <button className="text-md cursor-pointer rounded-full bg-black/80 px-5 py-1.5 font-semibold text-gray-500 transition-all duration-300 hover:text-amber-50">
            Join the wait-list
          </button>
          <span className="h-px w-[80%] bg-linear-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500"></span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
