import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Server, Database, Clock, Zap, Radio, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const up = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const TIERS = [
  ['Cache & queue', 'File / database, drained by cron', 'Redis + queue workers'],
  ['Search', 'MySQL full-text', 'Meilisearch / Typesense'],
  ['Real-time', 'Live polling', 'WebSockets (Reverb / Pusher)'],
  ['Media & email', 'Local disk · host SMTP', 'S3 / MinIO · SES / Postmark'],
  ['Database', 'MySQL 8 / MariaDB', '+ PostgreSQL supported'],
  ['Install', 'No-SSH web installer + one cron line', 'Docker compose, ready to go'],
];
const REQS = [
  { i: Server, t: 'PHP 8.3+', d: 'With the standard extensions (pdo_mysql, mbstring, openssl, zip, gd or imagick for images).' },
  { i: Database, t: 'MySQL or MariaDB', d: "An empty database you create in your host's control panel. PostgreSQL on the enhanced tier." },
  { i: Clock, t: 'One cron job', d: 'A single scheduled command every 1–5 minutes powers email, digests, upgrades, and backups.' },
];
const STEPS = [
  { t: 'Upload & point your domain', d: 'Extract the release above your web root and point the domain at public/. Subfolders like /community are first-class too.' },
  { t: 'Run the web installer', d: 'Visit your site — every URL redirects to the installer. System check, paste the setup token, enter your database, create your admin.' },
  { t: 'Add the cron line', d: "Paste the one cron command from the completion screen into your host's control panel. That's the engine for everything time-based." },
  { t: "You're live", d: 'The installer seals itself, you log in, and you are shaping forums. Configure mail and you are ready to open.' },
];
const ENH = [
  { i: Zap, t: 'Redis + workers, Meilisearch', d: 'Real queue workers replace cron draining, and typo-tolerant ranked search replaces full-text — same UX, more scale.' },
  { i: Radio, t: 'WebSockets + S3 + provider email', d: 'Live updates over WebSockets, media on S3/MinIO, and high-volume email via SES/Postmark. Detected and used automatically.' },
];

export default function HostingPage() {
  return (
    <>
      <Helmet>
        <title>Hosting — NovFora</title>
        <meta name="description" content="NovFora runs anywhere PHP runs — from a $5 shared host (no SSH) to Docker and a VPS. One codebase, two tiers." />
      </Helmet>
      <section className="bg-[hsl(var(--sand))] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...up}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent))] mb-4">Hosting</p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-5">Runs anywhere <span className="text-[hsl(var(--accent))]">PHP runs</span></h1>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">Start on the commodity shared hosting you already have — no SSH, no daemons, just one cron line. Scale up to Docker and a VPS when you are ready, with the same codebase.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent))] mb-3">One codebase, two tiers</p>
            <h2 className="text-3xl font-semibold mb-3">Begin small. Grow without migrating.</h2>
            <p className="text-secondary-text">NovFora detects what your server offers and uses it — and never errors because an enhanced service is not there.</p>
          </div>
          <div className="rounded-2xl border border-border overflow-hidden bg-card overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead><tr className="border-b border-border">
                <th className="text-left p-4"></th>
                <th className="text-left p-4 font-serif font-semibold text-[hsl(var(--primary))]">Baseline · shared host</th>
                <th className="text-left p-4 font-serif font-semibold text-[hsl(var(--accent))]">Enhanced · Docker / VPS</th>
              </tr></thead>
              <tbody>{TIERS.map((r) => (<tr key={r[0]} className="border-b border-border last:border-0"><td className="p-4 text-secondary-text">{r[0]}</td><td className="p-4">{r[1]}</td><td className="p-4">{r[2]}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[hsl(var(--sand))]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10"><h2 className="text-3xl font-semibold">The baseline requirements</h2></div>
          <div className="grid md:grid-cols-3 gap-5">
            {REQS.map((r) => (
              <div key={r.t} className="bg-card border border-border rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--primary))]/12 flex items-center justify-center mb-4"><r.i className="h-5 w-5 text-[hsl(var(--primary))]" /></div>
                <h3 className="text-lg font-semibold mb-1.5">{r.t}</h3><p className="text-sm text-secondary-text">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10"><h2 className="text-3xl font-semibold">From upload to live in four steps</h2></div>
          <div className="space-y-5">
            {STEPS.map((s, i) => (
              <div key={s.t} className="flex gap-5 items-start">
                <div className="w-11 h-11 rounded-full bg-[hsl(var(--primary))]/12 text-[hsl(var(--primary))] grid place-items-center font-serif font-semibold text-lg shrink-0">{i + 1}</div>
                <div><h3 className="text-lg font-semibold mb-1">{s.t}</h3><p className="text-secondary-text text-[15px]">{s.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[hsl(var(--sand))]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent))] mb-3">When you scale</p>
            <h2 className="text-3xl font-semibold mb-3">Light up the enhanced tier</h2>
            <p className="text-secondary-text">Move to Docker or a VPS and NovFora picks up the better infrastructure automatically — no data migration, just speed and headroom.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {ENH.map((e) => (
              <div key={e.t} className="bg-card border border-border rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--accent))]/12 flex items-center justify-center mb-4"><e.i className="h-5 w-5 text-[hsl(var(--accent))]" /></div>
                <h3 className="text-lg font-semibold mb-1.5">{e.t}</h3><p className="text-sm text-secondary-text">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-3">Host it your way</h2>
          <p className="text-secondary-text mb-7">Shared host today, VPS tomorrow — your community comes with you.</p>
          <div className="flex gap-3 justify-center flex-wrap"><Button size="lg">Get Started <ArrowRight className="ml-1.5 h-4 w-4" /></Button><Button size="lg" variant="outline">Read the install guide</Button></div>
        </div>
      </section>
    </>
  );
}
