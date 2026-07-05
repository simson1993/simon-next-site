"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* Focus follows scroll: a block is only fully dark while its center
   sits around the viewport center — before and after it stays muted,
   so exactly one block is readable at a time. */
export function FadeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.28, 0.38, 0.62, 0.72, 1],
    [0.2, 0.25, 1, 1, 0.25, 0.2]
  );

  return (
    <motion.div ref={ref} style={{ opacity }} className={className}>
      {children}
    </motion.div>
  );
}
