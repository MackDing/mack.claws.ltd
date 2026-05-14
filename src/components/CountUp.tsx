import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

type CountUpProps = {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  suffix?: string;
  prefix?: string;
  onStart?: () => void;
  onEnd?: () => void;
};

/**
 * CountUp — react-bits canonical CountUp.
 * Animates from `from` to `to` once the element scrolls into view.
 * Uses framer-motion springs for natural easing.
 */
export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  suffix = "",
  prefix = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const motionValue = useMotionValue(direction === "down" ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  const isInView = useInView(ref, { once: true, margin: "0px" });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(direction === "down" ? to : from);
    }
  }, [from, to, direction]);

  useEffect(() => {
    if (!isInView || !startWhen || started) return;
    setStarted(true);
    if (typeof onStart === "function") onStart();

    const timeoutId = window.setTimeout(() => {
      motionValue.set(direction === "down" ? from : to);
    }, delay * 1000);

    const endTimeoutId = window.setTimeout(
      () => {
        if (typeof onEnd === "function") onEnd();
      },
      delay * 1000 + duration * 1000
    );

    return () => {
      window.clearTimeout(timeoutId);
      window.clearTimeout(endTimeoutId);
    };
  }, [
    isInView,
    startWhen,
    started,
    motionValue,
    direction,
    from,
    to,
    delay,
    duration,
    onStart,
    onEnd,
  ]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (!ref.current) return;
      const rounded = Math.round(latest);
      const text = separator
        ? rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
        : rounded.toString();
      ref.current.textContent = `${prefix}${text}${suffix}`;
    });
    return () => unsubscribe();
  }, [springValue, separator, prefix, suffix]);

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ display: "inline-block", fontVariantNumeric: "tabular-nums" }}
    />
  );
}
