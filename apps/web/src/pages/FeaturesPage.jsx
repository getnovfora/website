import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Shield, Puzzle, Lock, CheckCircle2 } from 'lucide-react';

function FeaturesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>Features - NovFora</title>
        <meta name="description" content="Discover the powerful features of NovFora including WYSIWYG editing, anti-spam tools, no-break theming, and granular permissions." />
      </Helmet>

      <section className="bg-[hsl(var(--sand))] text-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Powerful features, zero bloat.
            </h1>
            <p className="text-lg text-secondary-text mb-10 max-w-2xl mx-auto leading-relaxed">
              NovFora combines the proven fundamentals of classic forum software with the modern UX of today's SaaS platforms.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-[hsl(var(--accent))]" />
              </div>
              <h2 className="text-3xl font-bold mb-4">WYSIWYG-first Editor</h2>
              <p className="text-secondary-text mb-6 leading-relaxed">
                Provide your users with a modern, TipTap-based editor. Formatting posts is as easy as using a word processor. No more struggling with BBCode syntax just to bold text.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))]" /> Drag-and-drop file uploads</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))]" /> Automatic oEmbed link previews</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))]" /> Full Markdown support for power users</li>
              </ul>
            </motion.div>
            <div className="bg-muted rounded-xl aspect-video flex items-center justify-center border border-border">
              <span className="text-secondary-text">Editor Preview</span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-muted rounded-xl aspect-video flex items-center justify-center border border-border">
              <span className="text-secondary-text">Anti-spam Dashboard</span>
            </div>
            <motion.div {...fadeInUp} className="order-1 md:order-2">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-[hsl(var(--accent))]" />
              </div>
              <h2 className="text-3xl font-bold mb-4">First-Class Anti-Spam</h2>
              <p className="text-secondary-text mb-6 leading-relaxed">
                Spam is the #1 killer of forums. NovFora builds spam protection into the core so you don't have to rely on third-party plugins.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))]" /> Trust levels to gate features</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))]" /> Crowdsourced blocklists</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))]" /> Configurable rate-limiting</li>
              </ul>
            </motion.div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center mb-6">
                <Puzzle className="h-6 w-6 text-[hsl(var(--accent))]" />
              </div>
              <h2 className="text-3xl font-bold mb-4">No-Break Theming</h2>
              <p className="text-secondary-text mb-6 leading-relaxed">
                Stop worrying about updates breaking your community. NovFora explicitly bans "core edits". All themes and plugins use a strict, semver-versioned API.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))]" /> Visual point-and-click configurator</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))]" /> Powerful Blade-based theme overrides</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))]" /> Painless, one-click upgrades</li>
              </ul>
            </motion.div>
            <div className="bg-muted rounded-xl aspect-video flex items-center justify-center border border-border">
              <span className="text-secondary-text">Theme Customizer</span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-muted rounded-xl aspect-video flex items-center justify-center border border-border">
              <span className="text-secondary-text">Permissions Matrix</span>
            </div>
            <motion.div {...fadeInUp} className="order-1 md:order-2">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center mb-6">
                <Lock className="h-6 w-6 text-[hsl(var(--accent))]" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Bulletproof Permissions</h2>
              <p className="text-secondary-text mb-6 leading-relaxed">
                NovFora adopts a robust, three-state ACL (Allow/Deny/Never) permission mask system, giving you fine-grained control over exactly what users can do in every category.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))]" /> Global, Category, and Forum scoping</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))]" /> Role presets for easy group management</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))]" /> Built-in "Why can't this user do X?" inspector</li>
              </ul>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}

export default FeaturesPage;
