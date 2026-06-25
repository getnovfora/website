import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Server, Database, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

function HostingPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>Hosting & Architecture - NovFora</title>
        <meta name="description" content="One codebase, two tiers. Deploy NovFora on cheap shared hosting or scale it up with Docker, Redis, and Meilisearch." />
      </Helmet>

      <section className="bg-[hsl(var(--sand))] text-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              One Codebase.<br/>Two Tiers.
            </h1>
            <p className="text-lg text-secondary-text mb-10 max-w-2xl mx-auto leading-relaxed">
              Start simple on shared hosting, scale to enterprise when ready. NovFora intelligently detects its environment and enables features progressively.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* Baseline Tier */}
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="inline-block px-3 py-1 rounded-md bg-muted font-sohne text-xs font-semibold text-secondary-text mb-4 tracking-wider uppercase">
                Baseline Tier
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Shared PHP Host
              </h3>
              <p className="text-secondary-text mb-8 leading-relaxed">
                Perfect for hobbyists and growing communities. Runs beautifully on standard cPanel environments without command line access.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><Database className="h-4 w-4" /> Database & Search</h4>
                  <p className="text-sm text-secondary-text">MySQL / MariaDB with built-in Full-Text search capabilities.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><Zap className="h-4 w-4" /> Caching & Sessions</h4>
                  <p className="text-sm text-secondary-text">File-based or database caching. Fast enough for thousands of daily active users.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><Server className="h-4 w-4" /> Background Jobs</h4>
                  <p className="text-sm text-secondary-text">Database queue drained seamlessly via a single minute-level cron job.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Enhanced Tier */}
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border-2 border-[hsl(var(--accent))]/30 rounded-xl p-8 relative shadow-lg shadow-[hsl(var(--accent))]/5"
            >
              <div className="absolute -top-3 left-8 bg-[hsl(var(--accent))] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Scales to 100k+
              </div>
              <div className="inline-block px-3 py-1 rounded-md bg-[hsl(var(--accent))]/10 font-sohne text-xs font-semibold text-[hsl(var(--accent))] mb-4 tracking-wider uppercase mt-4">
                Enhanced Tier
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Docker / VPS
              </h3>
              <p className="text-secondary-text mb-8 leading-relaxed">
                For massive communities requiring enterprise-grade performance. Unlock the full potential of your own infrastructure.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><Database className="h-4 w-4" /> Database & Search</h4>
                  <p className="text-sm text-secondary-text">PostgreSQL or MySQL paired with Meilisearch for typo-tolerant, instant search.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><Zap className="h-4 w-4" /> Caching & Sessions</h4>
                  <p className="text-sm text-secondary-text">Redis backing for lightning-fast memory reads and true horizontal scaling.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2"><Server className="h-4 w-4" /> Background Jobs</h4>
                  <p className="text-sm text-secondary-text">Dedicated Redis workers and Reverb WebSockets for true real-time updates.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center max-w-3xl mx-auto border-t border-border pt-16">
            <h2 className="text-2xl font-bold mb-4">No Vendor Lock-in</h2>
            <p className="text-secondary-text mb-8 leading-relaxed">
              NovFora detects the available services in your environment and degrades gracefully if a service goes down or isn't installed. You're never forced to pay for infrastructure you don't need.
            </p>
            <a href="https://github.com/getnovfora/novfora" target="_blank" rel="noreferrer">
              <Button size="lg" className="bg-[hsl(var(--accent))] text-white hover:bg-[hsl(var(--accent-hover))] font-sohne">
                Read the Architecture Docs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HostingPage;
