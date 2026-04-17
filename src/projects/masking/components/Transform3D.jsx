import React from "react";

function Transform3D() {
  return (
    <div className="group flex min-h-100 w-full flex-col items-center justify-center rounded-2xl bg-neutral-100 bg-[radial-gradient(var(--color-neutral-200),transparent_1px)] bg-size-[10px_10px] p-8">
      <h2 className="my-8 bg-linear-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-4xl font-semibold tracking-tight text-transparent text-shadow-xs">
        Easily modify scale with Tailwind
      </h2>

      <div className="size-60 rounded-2xl border border-neutral-200 bg-neutral-100 [background-image:radial-gradient(var(--color-neutral-300)_1px,transparent_1px)] [background-size:10px_10px] shadow-2xl perspective-distant">
        <img
          src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full translate-z-20 rotate-x-30 -rotate-y-30 transform rounded-2xl object-cover transition duration-300 ease-in-out group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0"
          alt=""
        />
      </div>
    </div>
  );
}

export default Transform3D;
