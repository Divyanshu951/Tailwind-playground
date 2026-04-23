import React from "react";

function SVGComponent2() {
  return (
    <div className="flex size-40 items-center justify-center rounded-xl border-2 border-red-300 shadow-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="transition-all duration-300 hover:rotate-180"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18.707 8.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1 -1.414 0l-6 -6a1 1 0 0 1 1.414 -1.414l5.293 5.293l5.293 -5.293a1 1 0 0 1 1.414 0" />
      </svg>
    </div>
  );
}

export default SVGComponent2;
