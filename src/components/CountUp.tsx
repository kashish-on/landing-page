import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  value: string; // e.g. "50K+", "34M+", "800K+"
  duration?: number;
}

function parseValue(val: string): { num: number; suffix: string } {
  const match = val.match(/^([\d.]+)([KMB+\s]*)/i);
  if (!match) return { num: 0, suffix: val };
  const num = parseFloat(match[1]);
  const suffix = val.slice(match[1].length);
  return { num, suffix };
}

const CountUp = ({ value, duration = 1.8 }: CountUpProps) => {
  const { num, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const steps = 60;
    const stepDuration = (duration * 1000) / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // smooth ease-out
      setDisplay(eased * num);

      if (current >= steps) {
        setDisplay(num);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [inView, num, duration]);

  const formatted =
    num % 1 !== 0 ? display.toFixed(1) : Math.round(display).toString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
};

export default CountUp;
