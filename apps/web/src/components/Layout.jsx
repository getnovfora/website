import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-xl font-bold font-sohne tracking-tight">
                <span className="text-foreground">Nov</span>
                <span className="text-[hsl(var(--accent))]">Fora</span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link to="/features" className="text-sm font-medium text-secondary-text hover:text-foreground transition-colors">Features</Link>
                <Link to="/hosting" className="text-sm font-medium text-secondary-text hover:text-foreground transition-colors">Hosting</Link>
                <Link to="/migration" className="text-sm font-medium text-secondary-text hover:text-foreground transition-colors">Migration</Link>
                <a href="https://github.com/echo5tech/hearth" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-secondary-text hover:text-foreground transition-colors">GitHub</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Button 
                variant="outline" 
                className="border-[hsl(var(--accent))] text-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/10 font-sohne font-medium"
              >
                Deploy free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[hsl(var(--parchment))] text-foreground border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-sohne font-medium text-sm text-secondary-text tracking-wide">
              <span className="font-bold text-foreground">NovFora</span> · novus + fora · open source
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-secondary-text hover:text-foreground transition-colors font-sohne">
                Apache 2.0
              </a>
              <a href="https://github.com/echo5tech/hearth" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-text hover:text-foreground transition-colors font-sohne">
                GitHub
              </a>
              <a href="#" className="text-sm text-secondary-text hover:text-foreground transition-colors font-sohne">
                Docs
              </a>
              <a href="#" className="text-sm text-secondary-text hover:text-foreground transition-colors font-sohne">
                Community
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
