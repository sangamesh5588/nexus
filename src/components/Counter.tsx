import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'motion/react';

interface CounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

export const Counter = ({ value, suffix = '', decimals = 0 }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const spring = useSpring(0, {
    duration: 2000,
    bounce: 0,
    damping: 30,
    stiffness: 100,
  });

  const displayValue = useTransform(spring, (current) => 
    current.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className="font-display">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};
