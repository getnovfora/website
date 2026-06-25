import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, FolderTree, Paperclip, Link2, RefreshCw, EyeOff, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const up = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const COMES = [
  { i: Users, t: 'Members & passwords', d: 'Accounts come over with hashed passwords preserved — people keep their logins (a reset is prompted only if the old hash format differs).' },
  { i: FolderTree, t: 'Forums & content', d: "Your category/forum structure, every topic and post — old BBCode translated to NovFora's clean format." },
  { i: Paperclip, t: 'Attachments, verified', d: 'Files come across and are checksum-verified, so nothing arrives corrupted or missing.' },
  { i: Link2, t: 'SEO 301 redirects', d: 'Old URLs map to 301 redirects, so existing links and your search rankings survive the move.' },
  { i: RefreshCw, t: 'Resumable & idempotent', d: 'Interrupted? Re-run it — the importer picks up where it left off and never duplicates.' },
  { i: EyeOff, t: 'Quiet by design', d: 'Importing fires no notifications, reputation awards, or feed spam — members are not blasted on day one.' },
];
const RUN = [
  { t: 'Preflight', d: 'A read-only pass counts everything and plans the work, so you know the full scope before committing.' },
  { t: 'Import', d: 'Users, forums, topics, posts, and attachments come over in batches, tracked entity by entity.' },
  { t: 'Verify', d: 'Row counts and content are checked — including attachment checksums — to confirm a faithful copy.' },
];

export default function MigrationPage() {
  return (
    <>
      <Helmet>
        <title>Migration — NovFora</title>
        <meta name="description" content="Import your community from phpBB, XenForo, MyBB, or SMF — members, content, attachments, passwords, and SEO redirects preserved." />
      </Helmet>
      <section className="bg-[hsl(var(--sand))] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...up}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent))] mb-4">Migration</p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-5">Bring your community <span className="text-[hsl(var(--accent))]">with you</span></h1>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">Do not start from zero. NovFora imports members, forums, topics, posts, and attachments — with passwords preserved and your old URLs redirected.</p>
            <div className="flex gap-3 justify-center flex-wrap mt-6">
              {['phpBB', 'XenForo', 'MyBB', 'SMF'].map((s) => <span key={s} className="text-sm bg-card border border-border rounded-lg px-4 py-2">{s}</span>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10"><h2 className="text-3xl font-semibold">Your community, intact</h2></div>
          <div className="grid md:grid-cols-3 gap-5">
            {COMES.map((c) => (
              <div key={c.t} className="bg-card border border-border rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--primary))]/12 flex items-center justify-center mb-4"><c.i className="h-5 w-5 text-[hsl(var(--primary))]" /></div>
                <h3 className="text-lg font-semibold mb-1.5">{c.t}</h3><p className="text-sm text-secondary-text">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[hsl(var(--sand))]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10"><h2 className="text-3xl font-semibold">Safe on real, large forums</h2></div>
          <div className="space-y-5">
            {RUN.map((s, i) => (
              <div key={s.t} className="flex gap-5 items-start">
                <div className="w-11 h-11 rounded-full bg-[hsl(var(--primary))]/12 text-[hsl(var(--primary))] grid place-items-center font-serif font-semibold text-lg shrink-0">{i + 1}</div>
                <div><h3 className="text-lg font-semibold mb-1">{s.t}</h3><p className="text-secondary-text text-[15px]">{s.d}</p></div>
              </div>
            ))}
          </div>
          <p className="text-sm text-secondary-text mt-8 text-center max-w-xl mx-auto">NovFora reads a source forum's database only to import your data — it never copies the other software. Your content moves; you are running NovFora.</p>
        </div>
      </section>

      <section className="py-20 bg-background text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-3">Move in without losing a thing</h2>
          <p className="text-secondary-text mb-7">Try an import on a copy first — it is read-only until you say go.</p>
          <div className="flex gap-3 justify-center flex-wrap"><Button size="lg">Read the migration guide <ArrowRight className="ml-1.5 h-4 w-4" /></Button><Button size="lg" variant="outline">Explore the demo</Button></div>
        </div>
      </section>
    </>
  );
}
