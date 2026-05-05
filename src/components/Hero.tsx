import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Play, Sparkles } from 'lucide-react';
import { Container } from './Container';

export const Hero = () => {
  return (
    <section className="relative w-full pt-28 pb-16 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 blur-[120px] pointer-events-none -z-10" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.2] mb-6 pb-4 tracking-tight">
              Build a Powerful <br /> 
              <span className="text-gradient">Online Presence</span> <br /> 
              That Brings You Clients
            </h1>
            
            <p className="text-base md:text-lg text-text-secondary mb-8 max-w-md leading-relaxed">
              We help you dominate search results and increase your online authority with high-performance digital strategies.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary group !px-6 !py-3.5 text-sm shadow-xl shadow-accent/20">
                Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-surface transition-all">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Side: Video Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="glass-card rounded-[2.5rem] p-3 overflow-hidden group shadow-2xl shadow-black/40">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-surface">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Analytics Dashboard"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 rounded-full bg-accent/90 text-white flex items-center justify-center shadow-lg shadow-accent/40 group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-8 h-8 fill-current ml-1" />
                   </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-white/80">Live Strategy Demo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-emerald/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
