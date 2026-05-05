import React from 'react';
import { Container } from './Container';
import { motion } from 'motion/react';

export const TrustBar = () => {
  const logos = ['Sylonow', 'Parkdady', 'Codethree', 'Nidhiflow', 'Sylonow', 'Parkdady', 'Codethree', 'Nidhiflow'];

  return (
    <section className="py-20 border-y border-border/30 bg-surface/10 relative overflow-hidden">
      <Container>
        <div className="text-center mb-12">
           <span className="label-mono">Trusted by industry leaders worldwide</span>
        </div>
        
        <div className="relative flex overflow-hidden group">
          <motion.div 
            className="flex gap-16 md:gap-32 items-center whitespace-nowrap px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear",
            }}
          >
            {logos.map((logo, index) => (
              <span 
                key={`${logo}-${index}`} 
                className="text-2xl md:text-3xl font-display font-black tracking-tighter opacity-30 group-hover:opacity-60 hover:!opacity-100 hover:text-accent cursor-default transition-all duration-300"
              >
                {logo.toUpperCase()}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {logos.map((logo, index) => (
              <span 
                key={`${logo}-dup-${index}`} 
                className="text-2xl md:text-3xl font-display font-black tracking-tighter opacity-30 group-hover:opacity-60 hover:!opacity-100 hover:text-accent cursor-default transition-all duration-300"
              >
                {logo.toUpperCase()}
              </span>
            ))}
          </motion.div>

          {/* Gradients to fade out edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </Container>
    </section>
  );
};
