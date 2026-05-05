import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Container } from './Container';

export const Projects = () => {
  const projects = [
    { title: 'Vortex AI', category: 'SaaS Platform', image: 'https://images.unsplash.com/photo-1614850523296-6711fe4fdc2f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Lumina CRM', category: 'Enterprise App', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
    { title: 'Sphere Media', category: 'Agency Website', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800' },
    { title: 'Echo Audio', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1526733158272-60b494027059?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section id="projects" className="py-24">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-accent-light font-bold text-sm tracking-widest uppercase mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold pb-2">Work that defines industries</h3>
          </div>
          <button className="text-accent-light hover:text-white transition-colors font-medium flex items-center gap-2 group">
            View All Projects <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden glass mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="btn-primary scale-90 group-hover:scale-100 transition-transform">
                      View Project
                   </div>
                </div>
              </div>
              <p className="text-accent-light text-sm font-semibold mb-1 uppercase tracking-wider">{project.category}</p>
              <h4 className="text-2xl font-display font-bold group-hover:text-accent-light transition-colors">{project.title}</h4>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
