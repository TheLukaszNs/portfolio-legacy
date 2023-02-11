import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  className?: string;
  children: string;
  progress: number;
};

export const ProgressBar = ({ className = "", children, progress }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={`flex overflow-hidden rounded-lg bg-gray-200/60 backdrop-blur-md ${className}`}
      ref={ref}
    >
      <motion.div
        className="flex items-center overflow-hidden bg-accent/80 py-4 px-4 backdrop-blur-md"
        animate={{
          width: isInView ? `${progress * 100}%` : 0,
        }}
        transition={{
          duration: 1.25,
          delay: 0.25,
        }}
      >
        <span className="absolute block self-center whitespace-nowrap font-bold text-white">
          {children}
        </span>
      </motion.div>
      <span className="absolute -z-10 block self-center whitespace-nowrap px-4 font-bold text-black">
        {children}
      </span>
    </div>
  );
};
