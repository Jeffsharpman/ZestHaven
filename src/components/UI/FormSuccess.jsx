import { motion } from "framer-motion";

function FormSuccess({ title = "Thank you", message }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10 rounded-2xl border border-gold/40 bg-background/60 p-6 text-center"
      role="status"
      aria-live="polite"
    >
      <div className="font-display text-2xl text-gold">{title}</div>
      {message && (
        <p className="mt-2 text-sm text-foreground/80">{message}</p>
      )}
    </motion.div>
  );
}

export default FormSuccess;
