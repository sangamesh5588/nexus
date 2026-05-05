import React from 'react';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { Container } from '@/src/components/Container';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-height-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export const SectionHeader = ({ title, subtitle, description }: { title: string, subtitle: string, description?: string }) => (
  <div className="pt-32 pb-16">
    <Container>
      <h2 className="text-accent-light font-bold text-sm tracking-widest uppercase mb-4">{subtitle}</h2>
      <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">{title}</h1>
      {description && <p className="text-text-secondary text-xl max-w-3xl leading-relaxed">{description}</p>}
    </Container>
  </div>
);
