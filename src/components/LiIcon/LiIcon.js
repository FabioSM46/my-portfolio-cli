import { motion, useScroll } from "framer-motion";

export const LiIcon = (reference) => {
  const { scrollYProgress } = useScroll({
    target: reference.reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-primary-800">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-secondary-600 stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-primary-50"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-secondary-600"
        />
      </svg>
    </figure>
  );
};
