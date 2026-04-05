import React, { useEffect } from "react";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
//  This is like the app page in one project file structure

function AppLayoutFinta() {
  useEffect(function () {
    document.title = "Finta - UI Clone";

    return () => (document.title = "Tailwind-playground ");
  }, []);

  return (
    <div className="relative z-0 h-screen bg-blue-50 [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%)_#FFF_100%]">
      <div className="pointer-events-none absolute inset-0 mx-auto h-full w-full max-w-5xl">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-500/50 via-neutral-200 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-500/50 via-neutral-200 to-transparent"></div>
      </div>
      <Container>
        <NavBar />
        <Hero />
      </Container>

      <div className="relative">
        <div className="absolute inset-x-0 h-px w-full bg-linear-to-b from-neutral-500/50 via-neutral-200 to-transparent"></div>
        <div className="mx-auto max-w-240 pt-4">
          <img
            src="hero-ui.png"
            alt="banner"
            className="w-252 max-w-none rounded-[10px] to-100% mask-b-from-0% shadow-[0px_0px_0px_1px_rgba(30,31,37,0.04),0px_1.658px_4.145px_0px_rgba(30,31,37,0.08),0px_26.526px_33.158px_-13.263px_rgba(30,31,37,0.10),0px_6.632px_54.711px_0px_rgba(30,31,37,0.06),0px_10.776px_8.289px_-9.947px_rgba(30,31,37,0.15)] md:w-auto md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AppLayoutFinta;
