import SVGComponent2 from "./components/SVGComponent2";
import SVGComponent1 from "./components/SVGComponent1";
import SVGComponent3 from "./components/SVGComponent3";

function AppLayoutSvg() {
  return (
    <div className="text-roboto flex h-screen flex-col items-center justify-center gap-10">
      <SVGComponent3 />
      {/* <SVGComponent1 />
      <SVGComponent2 /> */}
    </div>
  );
}

export default AppLayoutSvg;
