function Hero() {
  return (
    <div className="flex flex-col items-center px-4 py-22">
      <button className="transition-background flex cursor-pointer items-center gap-x-1.5 rounded-full border border-black/3 bg-[rgba(30,31,37,0.04)] py-0.75 pr-1.75 pl-2.75 text-xs font-medium backdrop-blur-[10px] duration-300 hover:not-active:bg-[rgba(30,31,37,0.08)]">
        Income taxes and R&D tax credits are due by April 15
        <svg width="16" height="16" fill="none">
          <path
            stroke="#1E1F25"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-opacity=".5"
            stroke-width="1.25"
            d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
          ></path>
        </svg>
      </button>

      <div className="my-5 max-w-[70%]">
        <h1 className="mt-6 text-center text-6xl font-medium [word-spacing:0.02em] lg:block">
          Magically simplify <br /> accounting and taxes
        </h1>

        <p className="mt-8 text-center text-gray-600">
          Automated bookkeeping. Effortless tax filing. Financial clarity.
          <br /> Set up in 10 mins. Back to building by 7:55am.
        </p>
      </div>

      <div className="flex gap-3">
        <button className="transition-background cursor-pointer rounded-lg bg-[#2579F4] px-3.5 py-2 text-center text-sm font-medium text-white shadow-[0px_1px_4px_-1px_rgba(30,31,37,0.38)] duration-300 ease-in-out [text-shadow:0px_1px_1px_rgba(0,0,0,0.16)] text-shadow-md hover:bg-[#2262C7] active:bg-[#215BB9]">
          Get Started
        </button>
        <button className="transition-background cursor-pointer rounded-lg px-3.5 py-2 text-center text-sm font-medium duration-300 ease-in-out hover:bg-[#2262C7]/20 active:bg-[#215BB9]">
          Pricing
          <svg width="16" height="16" fill="none" className="inline">
            <path
              stroke="#1E1F25"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-opacity=".5"
              stroke-width="1.25"
              d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Hero;
