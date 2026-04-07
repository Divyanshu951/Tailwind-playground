function Hero() {
  return (
    <div className="">
      <div className="mx-auto mt-36 flex max-w-3xl flex-col items-center">
        <p className="bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent selection:bg-blue-500 selection:text-slate-900">
          Unleash the power of intuitive finance
        </p>

        <p className="mt-7 max-w-2xl text-center text-lg font-medium text-zinc-400 md:text-xl">
          Say goodbye to the outdated financial tools. Every small business
          owner, regardless of the background, can now manage their business
          like a pro. Simple. Intuitive. And never boring.
        </p>

        <div className="group relative mt-5 flex max-w-fit flex-col items-center">
          <span className="h-px w-[80%] bg-linear-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          <button className="text-md cursor-pointer rounded-full bg-black/80 px-5 py-1.5 font-semibold text-gray-500 transition-all duration-300 hover:text-amber-50">
            Join the wait-list
          </button>
          <span className="h-px w-[80%] bg-linear-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500"></span>
        </div>
        <input
          type="text"
          className="text-md mt-10 rounded-full border border-stone-400 px-4 py-2 transition-all duration-300 placeholder:text-neutral-500 focus:ring-1 focus:ring-stone-900 focus:outline-none"
          placeholder="Search here"
        />
      </div>
    </div>
  );
}

export default Hero;
