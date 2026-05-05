import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/src/components/Navbar';
import { Hero } from '@/src/components/Hero';
import { TrustBar } from '@/src/components/TrustBar';
import { Services } from '@/src/components/Services';
import { WhyChooseUs } from '@/src/components/WhyChooseUs';
import { Projects } from '@/src/components/Projects';
import { Stats } from '@/src/components/Stats';
import { LeadMagnet } from '@/src/components/LeadMagnet';
import { Testimonials } from '@/src/components/Testimonials';
import { FinalCTA } from '@/src/components/FinalCTA';
import { Footer } from '@/src/components/Footer';
import { PageLayout, SectionHeader } from '@/src/components/PageLayout';
import { Container } from '@/src/components/Container';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Stats />
      <LeadMagnet />
      <Testimonials />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

const PlaceholderPage = ({ title, subtitle, description }: { title: string, subtitle: string, description: string }) => (
  <PageLayout>
    <SectionHeader title={title} subtitle={subtitle} description={description} />
    <Container className="pb-24">
       <div className="glass rounded-3xl p-12 min-h-[400px] flex items-center justify-center border-dashed">
          <p className="text-text-secondary text-lg">Detailed content for {title.toLowerCase()} is coming soon...</p>
       </div>
    </Container>
  </PageLayout>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/services" 
          element={<PlaceholderPage title="Our Services" subtitle="Expertise" description="Comprehensive digital solutions tailored for scaling teams." />} 
        />
        <Route 
          path="/about" 
          element={<PlaceholderPage title="About Nexus" subtitle="Our Story" description="A team of dedicated architects building the future of the web." />} 
        />
        <Route 
          path="/projects" 
          element={<PlaceholderPage title="Our Portfolio" subtitle="Our Work" description="Explore how we've helped companies redefine their digital presence." />} 
        />
        <Route 
          path="/blog" 
          element={<PlaceholderPage title="Digital Insights" subtitle="Journal" description="Latest thoughts on design, engineering, and digital growth." />} 
        />
        <Route 
          path="/contact" 
          element={<PlaceholderPage title="Get in Touch" subtitle="Let's Talk" description="Ready to start your next big project? We're here to help." />} 
        />
      </Routes>
    </Router>
  );
}
