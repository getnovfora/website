import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { NovforaMark } from '@/components/NovforaLogo';

const NAV = [
  { to: '/features', label: 'Features' },
  { to: '/compare', label: 'Compare' },
  { to: '/hosting', label: 'Hosting' },
  { to: '/migration', label: 'Migration' },
  { to: '/roadmap', label: 'Roadmap' },
];
const GH = 'https://github.com/getnovfora/novfora';

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary-text mb-3">{title}</h4>
      {links.map(([label, href]) =>
        href.startsWith('/') ? (
          <Link key={label} to={href} className="block text-sm text-secondary-text hover:text-foreground transition-colors mb-2">{label}</Link>
        ) : (
          <a key={label} href={href} className="block text-sm text-secondary-text hover:text-foreground transition-colors mb-2">{label}</a>
        )
      )}
    </div>
  );
}

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2.5 text-xl font-serif font-semibold tracking-tight text-foreground">
                <NovforaMark size={28} />
                <span>Nov<span className="text-[hsl(var(--accent))]">Fora</span></span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                {NAV.map((n) => (
                  <Link key={n.to} to={n.to} className="text-sm font-medium text-secondary-text hover:text-foreground transition-colors">{n.label}</Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href={GH} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex text-secondary-text hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <ModeToggle />
              <Button className="font-medium">Get Started <ArrowRight className="ml-1.5 h-4 w-4" /></Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1"><Outlet /></main>

      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2.5 text-lg font-serif font-semibold text-foreground">
                <NovforaMark size={24} /> <span>Nov<span className="text-[hsl(var(--accent))]">Fora</span></span>
              </Link>
              <p className="mt-3 text-sm text-secondary-text max-w-[28ch]">Self-hosted forum software for independent communities. Yours to own. Yours to shape. Here to stay.</p>
            </div>
            <FooterCol title="Product" links={[['Features', '/features'], ['Compare', '/compare'], ['Hosting', '/hosting'], ['Roadmap', '/roadmap']]} />
            <FooterCol title="Resources" links={[['Migration', '/migration'], ['Documentation', 'https://novfora.com/docs'], ['Demo', '#'], ['Changelog', '#']]} />
            <FooterCol title="Community" links={[['GitHub', GH], ['Discussions', '#'], ['Contributing', '#'], ['License', '#']]} />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-6 text-sm text-secondary-text">
            <span>© 2026 The NovFora Authors · Apache-2.0</span>
            <span className="font-serif">Built for owners. Not platforms.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
