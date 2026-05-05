import React from 'react';
import { ArrowRight, Mail, Twitter, Linkedin, Github } from 'lucide-react';
import { Container } from './Container';

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-border/50 bg-surface/5">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-full lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-light to-accent flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight">NEXUS</span>
              </div>
              <p className="text-text-secondary mb-8 leading-relaxed max-w-xs">
                Architechting the premium digital future for scaling SaaS companies and ambitious agencies.
              </p>
              <div className="flex gap-4">
                 {[Twitter, Linkedin, Github].map((Icon, i) => (
                   <a key={i} href="#" className="p-2 border border-border rounded-lg text-text-secondary hover:text-accent hover:border-accent transition-all">
                     <Icon className="w-5 h-5" />
                   </a>
                 ))}
              </div>
          </div>

          {/* Links */}
          {[
            { title: 'Company', items: ['About', 'Services', 'Projects', 'Careers'] },
            { title: 'Resources', items: ['Case Studies', 'Blog', 'Documentation', 'Audit'] },
            { title: 'Contact', items: ['hello@nexus.agency', '+1 (555) 000-1234', 'San Francisco, CA'] },
          ].map((column, i) => (
            <div key={i}>
              <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest">{column.title}</h4>
              <ul className="space-y-4">
                {column.items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-text-secondary hover:text-white transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-border/30">
          <p className="text-xs text-text-secondary">
            © 2026 Nexus Digital Solutions LLC. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-text-secondary">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
             <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
