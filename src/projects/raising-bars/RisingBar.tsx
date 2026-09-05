import { motion } from "framer-motion";

const RisingBar = () => {
  const bars = [
    { height: "30%", day: "Mon" },
    { height: "45%", day: "Tue" },
    { height: "20%", day: "Wed" },
    { height: "60%", day: "Thu" },
    { height: "85%", day: "Fri", active: true },
    { height: "50%", day: "Sat" },
    { height: "70%", day: "Sun" },
  ];

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-100 w-150 items-end gap-2 rounded-md border-2 border-neutral-500 p-2">
        {bars.map((bar, index) => (
          <motion.div
            style={{ height: bar.height, transformOrigin: "bottom" }}
            key={index}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1], // Smooth custom ease curve
            }}
            className={
              bar.active
                ? "relative w-full rounded-t-sm bg-red-500 shadow-[0_-4px_12px_rgba(37,99,235,0.2)]"
                : "group relative w-full cursor-pointer rounded-t-sm bg-green-400/60 transition-colors hover:bg-green-400/20"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RisingBar;
