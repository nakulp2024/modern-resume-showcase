import { motion, useScroll, useSpring } from "framer-motion";

export const ProgressRail = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.4,
  });

  return (
    <div
      aria-hidden
      className="fixed right-6 top-0 z-40 hidden h-screen w-px md:block"
      style={{ background: "rgba(245,245,240,0.06)" }}
    >
      <motion.div
        className="origin-top w-px h-full"
        style={{ scaleY, background: "#C4622D" }}
      />
    </div>
  );
};
