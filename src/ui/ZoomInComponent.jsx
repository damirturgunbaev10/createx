import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ZoomInComponent = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 15,
      }}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transformOrigin: "center center",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomInComponent;
