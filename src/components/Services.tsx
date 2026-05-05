import React from 'react';
import { motion } from 'motion/react';
import { Layers, Zap, Shield, Target, Smartphone, Globe } from 'lucide-react';
import { Container } from './Container';

export const Services = () => {
  const services = [
    {
      icon: <Layers className="w-8 h-8 text-accent-light" />,
      title: 'UX/UI Design',
      description: 'Award-winning interfaces designed for optimal conversion and premium brand identity.',
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald" />,
      title: 'Fast Deployment',
      description: 'Ship your MVP or redesign in weeks, not months, with our streamlined agile process.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-glow" />,
      title: 'Scalable Arch',
      description: 'Enterprise-grade systems built to handle millions of requests without breaking a sweat.',
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: 'Google Ranking',
      description: 'Dominate search results with data-driven content mapping and technical SEO optimization.',
    },
    {
      icon: <Smartphone className="w-8 h-8 text-accent-light" />,
      title: 'Mobile Apps',
      description: 'Native-feel cross-platform experiences that keep your users engaged on the go.',
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald" />,
      title: 'Global Hosting',
      description: 'Edge-first deployments ensuring sub-millisecond latency for users across the world.',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-gradient font-bold text-sm tracking-[0.2em] uppercase mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Expertise that drives results</h3>
          <p className="text-text-secondary">We offer a comprehensive suite of digital solutions tailored to the unique needs of scaling start-ups and established agencies.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl hover:border-accent/40 transition-colors group"
            >
              <div className="mb-6 p-4 bg-surface rounded-xl border border-border group-hover:bg-accent/5 transition-colors inline-block">
                {service.icon}
              </div>
              <h4 className="text-xl font-display font-bold mb-3">{service.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
