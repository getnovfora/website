import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Minus, Home, Compass, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeInUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const COLS = ['NovFora', 'phpBB · MyBB · SMF', 'XenForo · Invision', 'Discourse'];
const ROWS = [
  ['License', ['NovFora', 'Apache-2.0 (free)'], 'GPL (free)', 'Paid license', 'GPL (free)'],
  ['Installs on $5 shared hosting', ['yes', 'No SSH needed'], 'yes', 'yes', 'no'],
  ['3-state permissions + inspector', ['yes', ''], 'Basic', 'Strong (no inspector)', 'Trust-based'],
  ['First-class anti-spam', ['yes', ''], 'Add-ons', 'Good', 'Good'],
  ['Search that scales', ['yes', 'FTS → Meilisearch'], 'Weak', 'Good', 'Good'],
  ['Mobile-first + PWA', ['yes', ''], 'Dated', 'Responsive', 'yes'],
  ['Theming without core edits', ['yes', ''], 'Often needs edits', 'Templates', 'yes'],
  ['Reversible, no-surgery upgrades', ['yes', 'Backup-first auto'], 'Fragile', 'Managed', 'Managed'],
  ['Importers (passwords + 301s)', ['yes', 'phpBB/XF/MyBB/SMF'], 'Limited', 'Strong', 'Good'],
  ['REST API + signed webhooks', ['yes', ''], 'Varies', 'yes', 'yes'],
  ['Clubs / sub-communities', ['yes', ''], 'Add-ons', 'yes', 'Groups'],
  ['Paid memberships built in', ['yes', 'Manual or Stripe'], 'Add-ons', 'yes', 'Add-ons'],
];

function Cell({ v }) {
  if (Array.isArray(v)) {
    return (
      <span className="inline-flex items-center gap-1.5 font-medium text-[hsl(var(--primary))]">
        {v[0] === 'yes' ? <Check className="h-4 w-4" /> : null}
        {v[0] === 'yes' ? (v[1] || 'Yes') : v[1]}
      </span>
    );
  }
  if (v === 'no') return <span className="inline-flex items-center gap-1.5 text-secondary-text"><Minus className="h-4 w-4" /> No</span>;
  return <span className="text-secondary-text">{v}</span>;
}

const FITS = [
  { icon: Home, title: 'Run it yourself', body: 'Your community on your hosting, your data, your rules — no paid license, no managed-cloud bill.' },
  { icon: Compass, title: 'Modern, not heavy', body: 'XenForo-class polish and permissions with the run-anywhere simplicity of the classic forums.' },
  { icon: Wrench, title: 'Built to last', body: 'Clean upgrades, a versioned plugin API, and an open Apache-2.0 license you can trust long-term.' },
];

export default function ComparePage() {
  return (
    <>
      <Helmet>
        <title>Compare — NovFora</title>
        <meta name="description" content="How NovFora compares to phpBB, MyBB, SMF, XenForo/Invision, and Discourse — honestly." />
      </Helmet>

      <section className="bg-[hsl(var(--sand))] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent))] mb-4">Compare</p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-5">An honest look at <span className="text-[hsl(var(--accent))]">the landscape</span></h1>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">Every platform here is capable and has shipped great communities. We built NovFora to combine the run-anywhere accessibility of the classics with modern polish.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full text-sm min-w-[760px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-serif font-semibold p-4 text-secondary-text">Capability</th>
                  {COLS.map((c, i) => (
                    <th key={c} className={`text-left font-serif font-semibold p-4 ${i === 0 ? 'text-[hsl(var(--accent))]' : 'text-foreground'}`}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r[0]} className="border-b border-border last:border-0">
                    <td className="p-4 text-secondary-text">{r[0]}</td>
                    {r.slice(1).map((v, i) => (<td key={i} className="p-4"><Cell v={v} /></td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-secondary-text mt-5 max-w-2xl mx-auto">This table reflects typical out-of-the-box capability and is offered in good faith — each platform is actively developed and extensible. Where we mark a gap, it's about defaults, not what's ultimately possible.</p>
        </div>
      </section>

      <section className="py-20 bg-[hsl(var(--sand))]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold">Best when you want to own it</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FITS.map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--primary))]/10 flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-[hsl(var(--primary))]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-secondary-text">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-3">Try it before you switch</h2>
          <p className="text-secondary-text mb-7">Explore the live demo, or import your existing forum and see for yourself.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button size="lg">Explore the demo</Button>
            <Button asChild size="lg" variant="outline"><Link to="/migration">See migration</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
