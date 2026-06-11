
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, FileText, Shield, Smartphone, Lock, Search, Puzzle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>NovFora - Your community. Your server. Forever.</title>
        <meta name="description" content="Open source forum software built for shared hosting. No Node runtime, no compromises. PHP 8.3, Laravel 13, MySQL ready." />
      </Helmet>



      {/* Hero Section */}
      <section className="bg-[hsl(var(--sand))] text-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 text-sm font-semibold text-secondary-text mb-8 font-sohne tracking-wide">
              Open source · Apache 2.0
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Your community.<br />Your server. Forever.
            </h1>
            
            <p className="font-sohne font-medium text-sm text-secondary-text mb-6 tracking-wide">
              novus + fora · Latin: new gathering places
            </p>
            
            <p className="text-lg text-secondary-text mb-10 max-w-2xl mx-auto leading-relaxed">
              NovFora is open source forum software designed to run anywhere PHP runs. 
              No complex infrastructure, no vendor lock-in, no monthly fees. 
              Deploy on shared hosting or scale to dedicated servers—your choice, your control.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-[hsl(var(--accent))] text-white hover:bg-[hsl(var(--accent-hover))] active:scale-[0.98] transition-all font-sohne font-medium"
              >
                Start your community <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-foreground/20 hover:bg-foreground/5 active:scale-[0.98] transition-all font-sohne font-medium"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 font-sohne font-medium text-xs text-secondary-text tracking-wide uppercase">
              <span className="px-3 py-1.5 rounded-md bg-background/60 border border-border">PHP 8.3 · Laravel 13</span>
              <span className="px-3 py-1.5 rounded-md bg-background/60 border border-border">MySQL / MariaDB</span>
              <span className="px-3 py-1.5 rounded-md bg-background/60 border border-border">No Node runtime</span>
              <span className="px-3 py-1.5 rounded-md bg-background/60 border border-border">Shared-host ready</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audience Cards */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="font-sohne text-xs font-semibold text-[hsl(var(--accent))] tracking-widest mb-4 uppercase">
                For Community Managers
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                No sysadmin required
              </h3>
              <p className="text-secondary-text leading-relaxed">
                Upload files via FTP, run the installer, and you're live. 
                NovFora works on the same $5/month shared hosting you already use for WordPress. 
                No Docker knowledge, no command line, no server configuration.
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="font-sohne text-xs font-semibold text-[hsl(var(--accent))] tracking-widest mb-4 uppercase">
                For Self-Hosters & Developers
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                No compromises on the stack
              </h3>
              <p className="text-secondary-text leading-relaxed">
                Built on Laravel 13 with modern PHP 8.3 features. 
                Clean MVC architecture, comprehensive test coverage, and a documented extension API. 
                Deploy with Docker, configure with environment variables, extend with packages.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="bg-[hsl(var(--parchment))] text-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-sohne text-xs font-semibold text-[hsl(var(--accent))] tracking-widest mb-4 uppercase">
              Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything a forum needs
            </h2>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">
              Modern features without the bloat. Fast, accessible, and built to last.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background/60 rounded-xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                WYSIWYG first
              </h3>
              <p className="text-sm text-secondary-text leading-relaxed">
                Rich text editor with Markdown support. Format posts without learning syntax. Preview before posting.
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background/60 rounded-xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Built-in spam defense
              </h3>
              <p className="text-sm text-secondary-text leading-relaxed">
                Rate limiting, CAPTCHA integration, and automated pattern detection. Stop spam without third-party services.
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background/60 rounded-xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Mobile-first layout
              </h3>
              <p className="text-sm text-secondary-text leading-relaxed">
                Responsive design that works on every screen size. Touch-optimized controls. Fast page loads on 3G.
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background/60 rounded-xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Granular permissions
              </h3>
              <p className="text-sm text-secondary-text leading-relaxed">
                Role-based access control for every action. Private forums, read-only categories, moderator tools.
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-background/60 rounded-xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Search that works
              </h3>
              <p className="text-sm text-secondary-text leading-relaxed">
                Full-text search with MySQL. Filter by author, date, category. No external search service required.
              </p>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-background/60 rounded-xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center mb-4">
                <Puzzle className="h-6 w-6 text-[hsl(var(--accent))]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Clean extension API
              </h3>
              <p className="text-sm text-secondary-text leading-relaxed">
                Event hooks, service providers, and Blade components. Build custom features without forking the core.
              </p>
            </motion.div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/features">
              <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground font-sohne font-medium">
                View all features <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Deployment Tiers */}
      <section id="deployment" className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-sohne text-xs font-semibold text-[hsl(var(--accent))] tracking-widest mb-4 uppercase">
              Deployment
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              One codebase, two tiers
            </h2>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">
              Start simple, scale when ready. Same software, different infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="inline-block px-3 py-1 rounded-md bg-muted font-sohne text-xs font-semibold text-secondary-text mb-4 tracking-wider uppercase">
                Baseline
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Shared PHP host
              </h3>
              <p className="text-secondary-text mb-6 leading-relaxed">
                Upload via FTP, run the web installer, done. Works on any cPanel host with PHP 8.3 and MySQL.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary-text">Starting around $5/month hosting cost</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary-text">No command line required</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary-text">Automatic updates via web UI</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary-text">Good for 1-5k active users</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border-2 border-[hsl(var(--accent))]/30 rounded-xl p-8 relative"
            >
              <div className="inline-block px-3 py-1 rounded-md bg-[hsl(var(--accent))]/10 font-sohne text-xs font-semibold text-[hsl(var(--accent))] mb-4 tracking-wider uppercase">
                Enhanced
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Docker / VPS
              </h3>
              <p className="text-secondary-text mb-6 leading-relaxed">
                Deploy with Docker Compose or configure manually on a VPS. Full control over caching, queues, and scaling.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary-text">Redis caching & sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary-text">Background job queues</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary-text">Horizontal scaling ready</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent))] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-secondary-text">Scales to 100k+ users</span>
                </li>
              </ul>
            </motion.div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/hosting">
              <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground font-sohne font-medium">
                Learn more about hosting <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


    </>
  );
}

export default HomePage;
