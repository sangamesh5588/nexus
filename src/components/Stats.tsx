import React from 'react';
import { motion } from 'motion/react';
import { Container } from './Container';
import { Counter } from './Counter';

export const Stats = () => {
  const stats = [
    { label: 'Projects Delivered', val: 50, suffix: '+', deco: '01' },
    { label: 'Market ROI Increase', val: 40, suffix: '%', deco: '02' },
    { label: 'Technical Score', val: 98, suffix: '%', deco: '03' },
    { label: 'Efficiency Boost', val: 3, suffix: 'x', deco: '04' },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[120px] pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="label-mono mb-4 block">Our Impact</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold pb-2">Driving Real Results</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-10 rounded-[2rem] flex flex-col items-center text-center group border-white/5 hover:border-accent/30 transition-colors"
            >
              <span className="label-mono text-accent-light/40 group-hover:text-accent-light transition-colors mb-8">
                {stat.deco}
              </span>
              <div className="text-5xl md:text-6xl font-display font-bold text-gradient mb-4">
                <Counter value={stat.val} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-medium text-text-secondary leading-relaxed max-w-[120px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
