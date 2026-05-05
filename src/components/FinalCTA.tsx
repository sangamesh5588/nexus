import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from './Container';

export const FinalCTA = () => {
  return (
    <section className="py-24">
      <Container>
        <div className="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden text-balance">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/20 blur-[120px] -z-10" />
           
           <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 max-w-4xl mx-auto leading-tight pb-2">
             Ready to transform your <span className="text-gradient">digital presence?</span>
           </h2>
           <p className="text-text-secondary text-xl mb-12 max-w-2xl mx-auto">
             Join 200+ companies scaling faster with Nexus. Let's build something extraordinary together.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-primary px-8 py-5 text-lg">
                Start Your Project <ArrowRight className="ml-2 w-6 h-6" />
              </button>
              <button className="glass px-8 py-5 text-lg rounded-xl font-medium hover:bg-surface transition-colors">
                Schedule a Call
              </button>
           </div>
        </div>
      </Container>
    </section>
  );
};
