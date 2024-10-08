import { motion } from "framer-motion";
import { createPortal } from "react-dom";
function Modal({ children, ...props }) {
  const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0,
      filter: "blur(15px)",
    },
    visible: {
      filter: "blur(0px)",
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 80,
        stiffness: 800,
        mass: 5,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      filter: "blur(15px)",
      transition: {
        duration: 0.1,
      },
    },
  };
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed left-0 top-0 w-full h-full backdrop-blur-sm flex place-items-center place-content-center"
      {...props}
    >
      <motion.div
        onClick={(e) => e.stopPropagation}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="m-5 w-full max-w-[463px]"
      >
        {children}
      </motion.div>
    </motion.div>,
    document.getElementById("overlay")
  );
}

export default Modal;
