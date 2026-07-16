import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoImage from "../../assets/logo.png";

function LoadingScreen({ duration = 2000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <motion.img
              src={LogoImage}
              alt="ZestHaven Bukka"
              className="h-16 w-auto object-contain"
              draggable={false}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="text-center">
              <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
                ZestHaven
                <span className="ml-1 text-gold" aria-hidden="true">·</span>
              </h1>
              <p className="mt-1 font-sans text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Bukka
              </p>
            </div>

            <motion.div
              className="mt-2 h-0.5 w-32 overflow-hidden rounded-full bg-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full rounded-full bg-gold"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: duration / 1000 - 0.6, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
