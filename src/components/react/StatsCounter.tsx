import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import type { Stat } from '../../types';

interface StatsCounterProps {
  stats: Stat[];
}

function Counter({ value, suffix, prefix, label }: Stat) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    const duration = 2000;
    const startTime = performance.now();
    let rafId: number;

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * value);
      setCount(current);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    }

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [isInView, value, prefersReducedMotion]);

  const displayValue = prefix || '';
  const displaySuffix = suffix || '';

  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl md:text-5xl font-bold text-primary tabular-nums block">
        {displayValue}
        {count}
        {displaySuffix}
      </span>
      <span className="text-text-secondary text-sm md:text-base mt-2 block">
        {label}
      </span>
    </div>
  );
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {stats.map((stat) => (
        <Counter key={stat.id} {...stat} />
      ))}
    </div>
  );
}
