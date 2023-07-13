import "./Reveal.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
export const Reveal = ({ children, width }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const snapControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      snapControls.start("visible");
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      style={{ position: "relative", overflow: "hidden" }}
      className="Reveal"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};