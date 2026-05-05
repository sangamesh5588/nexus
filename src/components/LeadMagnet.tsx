import React from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { Container } from './Container';

export const LeadMagnet = () => {
  return (
    <section className="py-24 overflow-hidden">
      <Container>
        <div className="glass rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
           {/* Background glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[100px] pointer-events-none" />
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic leading-tight pb-2">
                  Wondering why your site isn't <span className="text-accent-light">converting?</span>
                </h2>
                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  Get a comprehensive technical and design audit of your current digital product. No generic generators — our senior team manually reviews your site for high-impact improvements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="url" 
                    placeholder="yourwebsite.com" 
                    className="flex-1 px-6 py-4 rounded-xl bg-surface border border-border focus:outline-none focus:border-accent-light transition-colors text-text-primary"
                  />
                  <button className="btn-primary whitespace-nowrap">
                    Claim Free Audit <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
                <p className="mt-4 text-xs text-text-secondary flex items-center gap-2">
                   <Search className="w-3 h-3" /> Over 1,200 audits delivered this year alone.
                </p>
              </div>
              
              <div className="hidden lg:block">
                 <div className="relative">
                    <div className="w-full aspect-[4/3] rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-4 rotate-3">
                       <div className="w-full h-full bg-surface rounded-lg border border-border flex flex-col p-4">
                          <div className="h-6 w-32 bg-border rounded-full mb-8" />
                          <div className="space-y-4">
                             <div className="h-2 w-full bg-border rounded-full" />
                             <div className="h-2 w-full bg-border rounded-full" />
                             <div className="h-2 w-3/4 bg-border rounded-full" />
                             <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="h-20 bg-accent/10 rounded-xl" />
                                <div className="h-20 bg-emerald/10 rounded-xl" />
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="absolute top-0 right-0 p-4 glass rounded-xl -mr-6 -mt-6 animate-bounce">
                       <span className="text-emerald font-bold">98% Score</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </Container>
    </section>
  );
};
