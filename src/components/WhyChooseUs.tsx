import React from 'react';
import { Zap, ShieldCheck, LayoutTemplate, Headphones, ArrowRight } from 'lucide-react';
import { Container } from './Container';
import { motion } from 'motion/react';

export const WhyChooseUs = () => {
  const benefits = [
    { 
      title: 'Lightning Speed', 
      desc: 'Super-fast load times that keep your visitors happy and engaged.',
      icon: Zap,
      color: 'text-amber-400'
    },
    { 
      title: 'Safe & Secure', 
      desc: 'Top-tier security to protect your business and building customer trust.',
      icon: ShieldCheck,
      color: 'text-emerald-400'
    },
    { 
      title: 'Stunning Design', 
      desc: 'Beautiful, custom-made interfaces that make your brand stand out.',
      icon: LayoutTemplate,
      color: 'text-blue-400'
    },
    { 
      title: 'Always Available', 
      desc: 'Dedicated support whenever you need help growing your business.',
      icon: Headphones,
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="about" className="py-24 bg-surface/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent-light font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 opacity-80">Unlock Your Potential</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight tracking-tight">
              We build a presence that <br />
              <span className="text-gradient">converts visitors</span> into clients
            </h3>
            <p className="text-text-secondary text-base md:text-lg mb-10 leading-relaxed max-w-xl">
              Don't just exist online. We help you dominate your market with technical excellence and high-converting strategies tailored for your business growth.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="group"
                >
                  <div className={`mb-4 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-accent/40 transition-all duration-300`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h4 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{item.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full mt-12 lg:mt-0"
          >
            {/* Main Interactive Card */}
            <div className="absolute inset-0 glass-card rounded-[2.5rem] p-4 lg:p-6 shadow-2xl flex flex-col justify-between overflow-hidden border-white/10">
              <div className="relative h-full w-full rounded-[1.8rem] overflow-hidden bg-background/50">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                  alt="Growth Dashboard"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Dashboard Elements */}
                <div className="absolute inset-0 p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-32 bg-accent/20 rounded-lg animate-pulse" />
                    <div className="h-8 w-8 rounded-full bg-emerald/20" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-24 glass rounded-2xl p-4 flex flex-col justify-between">
                      <div className="text-[10px] uppercase tracking-widest text-text-secondary opacity-70">Revenue</div>
                      <div className="text-xl font-bold text-emerald">+124%</div>
                    </div>
                    <div className="h-24 glass rounded-2xl p-4 flex flex-col justify-between">
                      <div className="text-[10px] uppercase tracking-widest text-text-secondary opacity-70">Active Users</div>
                      <div className="text-xl font-bold text-accent">8.4k</div>
                    </div>
                  </div>

                  <div className="mt-auto glass rounded-2xl p-6 border-white/5 shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-surface overflow-hidden border border-white/10">
                         <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" alt="Client" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Mark Stevenson</div>
                        <div className="text-[10px] text-text-secondary">CEO, TechFlow</div>
                      </div>
                    </div>
                    <p className="text-xs lg:text-sm text-white/90 italic leading-relaxed">
                      "Since partnering with Sylonow, our organic traffic surged by 300%. The team is brilliant."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing accents */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
