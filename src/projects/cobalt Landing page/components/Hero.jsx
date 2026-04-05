function Hero() {
  return (
    <div className="flex flex-col items-center">
      <p>Unleash the power of intuitive finance</p>

      <p>
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple. Intuitive. And never boring.
      </p>

      <div className="group relative flex max-w-fit flex-col items-center">
        <span className="h-px w-[80%] bg-linear-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        <button className="text-md cursor-pointer rounded-full bg-black/80 px-5 py-1.5 font-semibold text-gray-500 transition-all duration-300 hover:text-amber-50">
          Join the wait-list
        </button>
        <span className="h-px w-[80%] bg-linear-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500"></span>
      </div>
    </div>
  );
}

export default Hero;
