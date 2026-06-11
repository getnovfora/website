import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Download, UploadCloud, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

function MigrationPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>Migration Tools - NovFora</title>
        <meta name="description" content="Bring your community with you. NovFora includes built-in importers for phpBB, MyBB, and SMF." />
      </Helmet>

      <section className="bg-[hsl(var(--sand))] text-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Migrate without fear.
            </h1>
            <p className="text-lg text-secondary-text mb-10 max-w-2xl mx-auto leading-relaxed">
              Bring your community with you. Our built-in importers seamlessly transfer years of history while preserving your SEO rankings.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap justify-center gap-12 mb-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos represent legacy platforms */}
            <div className="flex items-center gap-3 text-2xl font-bold font-sohne">
              <span className="text-[#2B6082]">phpBB</span>
            </div>
            <div className="flex items-center gap-3 text-2xl font-bold font-sohne">
              <span className="text-[#0f3d64]">MyBB</span>
            </div>
            <div className="flex items-center gap-3 text-2xl font-bold font-sohne">
              <span className="text-[#1A4B7D]">SMF</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-8 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))]/10 flex items-center justify-center mx-auto mb-6">
                <Download className="h-6 w-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Complete Data Transfer</h3>
              <p className="text-secondary-text leading-relaxed">
                Imports users, passwords, categories, topics, posts, and attachments seamlessly. Your users log in with their exact same credentials.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-8 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))]/10 flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="h-6 w-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Resumable Importers</h3>
              <p className="text-secondary-text leading-relaxed">
                Got a 10-year-old database? No problem. The importer runs in batches and can resume right where it left off if interrupted.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-8 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent))]/10 flex items-center justify-center mx-auto mb-6">
                <UploadCloud className="h-6 w-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">SEO Preservation</h3>
              <p className="text-secondary-text leading-relaxed">
                Automatic generation of 301 redirect maps ensures that your old thread links in Google continue to point to the correct places in NovFora.
              </p>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}

export default MigrationPage;
