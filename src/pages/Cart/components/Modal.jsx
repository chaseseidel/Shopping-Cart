import { motion } from "framer-motion";

function Modal({ children, onClick }) {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="overlay"
        onClick={onClick}
      />
      <motion.div
        initial={{
          x: 800,
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 800, opacity: 0 }}
        transition={{ duration: 0.3, bounce: 0 }}
        className="cart-modal"
      >
        {children}
      </motion.div>
    </>
  );
}

export default Modal;
