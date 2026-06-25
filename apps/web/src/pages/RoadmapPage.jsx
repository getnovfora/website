import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check, CircleDot, Circle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeInUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const LANES = [
  {
    title: 'Shipped in 1.0', color: 'var(--primary)', icon: Check,
    items: [
      'Core forums, WYSIWYG editor, attachments, polls, tags & prefixes',
      'Three-state permission engine + inspector, groups, roles, delegation',
      'First-class anti-spam, trust levels, moderation queue & warnings',
      'Reactions, reputation, badges, PMs, profiles, clubs',
      'Module API, REST API, webhooks, importers',
      'SSO, PWA + push, paid memberships, themes & layout',
      'No-SSH installer, reversible auto-upgrade, backups',
      'Security review, WCAG 2.1 AA, i18n + RTL, performance gates',
    ],
  },
  {
    title: 'In progress', color: 'var(--accent)', icon: CircleDot,
    items: [
      'Design-polish program — a more refined ACP and member experience',
      'A richer rich-text editor (drag-drop multi-file, tables, emoji picker)',
      'Mature, documented design-token component library',
      'Enhanced-tier validation against live Meilisearch / Reverb / S3',
    ],
  },
  {
    title: 'Planned / exploring', color: 'var(--accent)', icon: Circle,
    items: [
      'Full MyBB & SMF importers (phpBB & XenForo ship today)',
      'A concrete SAML provider on the existing scaffold',
      'More locales & a growing community translation effort',
      'A library of community themes and modules',
      'Deeper real-time presence and live notifications',
    ],
  },
];

export default function RoadmapPage() {
  return (
    <>
      <Helmet>
        <title>Roadmap — NovFora</title>
        <meta name="description" content="What's shipped in NovFora 1.0, what's in progress, and what's planned next." />
      </Helmet>

      <section className="bg-[hsl(var(--sand))] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent))] mb-4">Roadmap</p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-5">Shipped, and <span className="text-[hsl(var(--accent))]">what's next</span></h1>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">NovFora 1.0 is generally available and complete enough to run a real community today. Here's where it stands and where it's heading — built in the open, Apache-2.0.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {LANES.map((lane) => (
              <div key={lane.title} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-sm" style={{ background: `hsl(${lane.color})`, boxShadow: `0 0 10px hsl(${lane.color})` }} />
                  <h3 className="text-lg font-semibold">{lane.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {lane.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-sm text-secondary-text">
                      <lane.icon className="h-4 w-4 mt-0.5 shrink-0 text-[hsl(var(--primary))]" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-secondary-text mt-6 max-w-2xl mx-auto">This roadmap is indicative, not a commitment — priorities shift with the community. The best way to influence it is to open an issue or a discussion.</p>
        </div>
      </section>

      <section className="py-20 bg-[hsl(var(--sand))] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent))] mb-3">Built in the open</p>
          <h2 className="text-3xl font-semibold mb-3">Have an idea? Help shape what's next.</h2>
          <p className="text-secondary-text mb-7">NovFora is Apache-2.0 and developed in public. File issues, propose features, contribute code, themes, or translations.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button asChild size="lg"><a href="https://github.com/getnovfora/novfora"><Star className="mr-2 h-4 w-4" /> Star on GitHub</a></Button>
            <Button size="lg" variant="outline">Read the changelog</Button>
          </div>
        </div>
      </section>
    </>
  );
}
