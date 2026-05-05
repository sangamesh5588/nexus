import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { Container } from './Container';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah Chen',
      role: 'CEO, Lumina AI',
      body: 'Nexus didn\'t just build our site; they built our digital strategy. Our conversion rate increased by 40% in the first quarter post-launch.',
      avatar: 'SC'
    },
    {
      name: 'Marcus Miller',
      role: 'Founder, Vortex',
      body: 'The most pixel-perfect implementation we\'ve ever received. Their team works with the precision of a Swiss watchmaker.',
      avatar: 'MM'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Growth, Acme',
      body: 'The attention to detail and responsiveness of the team is unmatched. They exceeded every expectation we had.',
      avatar: 'ER'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-accent-light font-bold text-sm tracking-widest uppercase mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold pb-1">Trusted by founders</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl relative"
            >
              <div className="flex gap-1 text-accent-light mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg leading-relaxed mb-8 italic text-text-primary">
                "{item.body}"
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-bold text-white">
                   {item.avatar}
                 </div>
                 <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-xs text-text-secondary">{item.role}</p>
                 </div>
              </div>
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
