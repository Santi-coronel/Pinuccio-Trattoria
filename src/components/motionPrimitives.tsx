import React, { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";

/**
 * Primitivas de movimiento compartidas.
 * Técnicas adaptadas de la KB Cult UI:
 *  - TextReveal  → text-animate (reveal por palabra, overflow-hidden + stagger)
 *  - AnimatedCounter → animated-number (useSpring + useTransform, trigger on view)
 *  - Reveal → wrapper genérico fade + y + blur on scroll
 */

const softEase = [0.16, 1, 0.3, 1] as const;

// ---------------------------------------------------------------------------
// Reveal — bloque que aparece al entrar en viewport
// ---------------------------------------------------------------------------
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once, margin: "-80px" }}
    transition={{ duration: 0.9, ease: softEase, delay }}
  >
    {children}
  </motion.div>
);

// ---------------------------------------------------------------------------
// TextReveal — titular que entra palabra por palabra (rise-up con máscara)
// ---------------------------------------------------------------------------
type RevealTag = "h1" | "h2" | "h3" | "p" | "span";

interface TextRevealProps {
  text: string;
  as?: RevealTag;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  as = "h2",
  className,
  delay = 0,
  stagger = 0.08,
}) => {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word = {
    hidden: { y: "112%" },
    visible: {
      y: 0,
      transition: { duration: 0.72, ease: softEase },
    },
  };

  return React.createElement(
    as,
    { className, "aria-label": text },
    <motion.span
      aria-hidden
      className="inline"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-flex overflow-hidden pb-[0.2em] -mb-[0.2em] align-baseline"
        >
          <motion.span variants={word} className="inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

// ---------------------------------------------------------------------------
// AnimatedCounter — cuenta con spring al entrar en viewport
// ---------------------------------------------------------------------------
interface AnimatedCounterProps {
  value: number;
  className?: string;
  format?: (v: number) => string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  className,
  format = (v) => Math.round(v).toLocaleString("es-AR"),
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const spring = useSpring(0, { mass: 0.8, stiffness: 55, damping: 18 });
  const display = useTransform(spring, (v) => format(v));

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, value, spring]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
};
