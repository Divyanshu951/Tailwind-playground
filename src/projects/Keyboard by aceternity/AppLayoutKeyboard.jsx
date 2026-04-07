import { useEffect } from "react";

function AppLayoutKeyboard() {
  useEffect(() => {
    document.title = "Aceternity UI themed Keyboard";
    return () => (document.title = "Tailwind - Playground");
  }, []);

  // const keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"];
  const keyboard = [
    [
      "esc",
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "F10",
      "F11",
      "F12",
      "FP",
    ],
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "+", "delete"],
    ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "|"],
    [
      "caps lock",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      ";",
      "'",
      "return",
    ],
    ["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"],
    [
      "fn",
      "control",
      "option",
      "command",
      "space",
      "command",
      "option",
      "Left",
      "Top",
      "Bottom",
      "Right",
    ],
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950">
      <div className="flex flex-col">
        {keyboard.map((keys) => (
          <div className="flex">
            {keys.map((key) => (
              <Button key={key}>{key}</Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// Notice we no longer need the 'type' prop
function Button({ children }) {
  let width;

  switch (children) {
    case "esc":
    case "tab":
      width = "w-24 items-end justify-start px-3 py-1";
      break;
    case "caps lock":
      width = "w-29 items-end justify-start px-3 py-1";
      break;
    case "return":
      width = "w-29 items-end justify-end px-3 py-1";
      break;
    case "shift":
      width = "w-38 items-end justify-end px-3 py-1";
      break;
    case "Top":
    case "Bottom":
    case "Left":
    case "Right":
      width = "w-11.5";
      break;
    case "command":
      width = "w-20";
      break;
    case "space":
      width = "w-88";
      break;
    case "delete":
      width = "w-24 items-end justify-end px-3 py-1";
      break;
    default:
      width = "w-16";
  }
  //  first:rounded-tl-2xl last:rounded-tr-2xl
  return (
    <div className="h-full w-fit bg-neutral-300 p-1 shadow-sm shadow-black/5 ring-black/5">
      <div
        className={`flex h-16 ${width} cursor-pointer items-center justify-center rounded-xl bg-gray-100 text-sm shadow-[0px_0px_1px_0px_rgba(0,0,0,0.5),0px_1px_1px_0px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(255,255,255,1)_inset] ring-stone-400 transition-transform duration-75 select-none [-webkit-tap-highlight-color:transparent] active:scale-[0.98] active:shadow-none active:ring-[0.5px]`}
      >
        {children}
      </div>
    </div>
  );
}
export default AppLayoutKeyboard;
