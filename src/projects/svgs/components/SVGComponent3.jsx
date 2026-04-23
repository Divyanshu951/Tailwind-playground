import SVGComponent1 from "./SVGComponent1";

function SVGComponent3() {
  return (
    <div className="flex size-40 items-center justify-center rounded-xl border-2 border-slate-300 shadow-xl">
      <div className="relative size-15 overflow-hidden rounded-sm bg-neutral-100 p-0.5">
        <div className="relative z-20 flex h-full w-full items-center justify-center rounded-[px] bg-white">
          <SVGComponent1 />
        </div>
        <div className="absolute inset-0 h-full w-full scale-[1.5] animate-spin [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)]"></div>
        <div className="absolute inset-0 h-full w-full scale-[1.5] animate-spin [background-image:conic-gradient(at_center,transparent,var(--color-red-500)_20%,transparent_30%)] [animation-delay:1.5s]"></div>
      </div>
    </div>
  );
}

export default SVGComponent3;
