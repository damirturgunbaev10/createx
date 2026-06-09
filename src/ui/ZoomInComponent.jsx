import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ZoomInComponent = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomInComponent;
