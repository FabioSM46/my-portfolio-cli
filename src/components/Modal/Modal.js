import { motion, AnimatePresence } from "framer-motion";

export const Modal = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      (
      <motion.div
        className="fixed top-0 left-0 right-0 flex items-center 
      justify-center z-50 h-screen"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
      >
        <div
          className="bg-secondary-700 rounded-xl p-6 shadow-lg 
        absolute top-1/4 left-1/2 transform -translate-x-1/2"
        >
          <p className="text-primary-200 font-bold">Message Sent!</p>
        </div>
      </motion.div>
      )
    </AnimatePresence>
  );
};
