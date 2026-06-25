import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Shield, Search, Smartphone, Puzzle, Palette, PackageOpen,
  Lock, PenLine, ShieldCheck, Users, KeyRound, Webhook, RefreshCw, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const up = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };
const CREAM = '#F3E8DD', SECONDARY = '#CFC9BE', AMBER = '#EBA94B', OK = '#35B07A';

const PROBLEMS = [
  { icon: Shield, t: 'Spam overwhelms', d: 'Spam is the number-one forum killer, usually bolted on late.', f: 'Trust levels wired into permissions, blocklist screening, swappable CAPTCHA, and a hold queue — first-class from day one.' },
  { icon: Search, t: 'Search is weak', d: 'Members cannot find what they need, so knowledge rots.', f: 'MySQL full-text on shared hosting, Meilisearch when you scale — one experience, always permission-safe.' },
  { icon: Smartphone, t: 'Mobile feels dated', d: 'Most forums still feel like 2009 on a phone.', f: 'A mobile-first interface and an installable PWA with push notifications.' },
  { icon: Puzzle, t: 'Add-ons break upgrades', d: 'One plugin and you are stuck on an old version forever.', f: 'A versioned module API with pre-upgrade compatibility checks — add-ons that survive upgrades.' },
  { icon: Palette, t: 'Theming needs core edits', d: 'Customize the look and the next update wipes it out.', f: 'Point-and-click appearance, a layout configurator, and a sandboxed template layer — no core edits, ever.' },
  { icon: PackageOpen, t: 'Migration is fragile', d: 'Moving in loses attachments, passwords, and your SEO.', f: 'Resumable importers with attachment verification, password preservation, and 301 redirect maps.' },
];

const FEATURES = [
  { icon: Lock, t: 'Permissions you can reason about', d: 'A three-state Allow / No / Never engine across categories, forums, and topics — with an inspector that tells you exactly why anyone can or cannot do anything.' },
  { icon: PenLine, t: 'WYSIWYG-first editor', d: 'Friendly by default, Markdown when you want it, BBCode for imports. Attachments, polls, mentions, and oEmbed built in.' },
  { icon: ShieldCheck, t: 'First-class anti-spam', d: 'Trust levels, StopForumSpam, CAPTCHA, rate limits, word filters, and a false-positive-guarded hold queue.' },
  { icon: Users, t: 'Clubs & groups', d: 'Member-run sub-communities with their own forums and privacy, plus auto-promoting groups and custom roles.' },
  { icon: KeyRound, t: 'SSO & accounts', d: 'Sign in with Google, GitHub, or Discord; mandatory 2FA for staff; an enterprise SAML scaffold.' },
  { icon: Webhook, t: 'REST API & webhooks', d: 'A versioned, permission-aware API and HMAC-signed, SSRF-guarded webhooks to wire NovFora into anything.' },
  { icon: RefreshCw, t: 'Upgrades that do not break', d: 'Reversible migrations and a backup-first, cron-driven auto-upgrade. No manual database surgery.' },
  { icon: Smartphone, t: 'PWA & notifications', d: 'Installable on any device, with web push, digests, and a full in-app notification system.' },
  { icon: CreditCard, t: 'Paid memberships', d: 'Membership tiers with perks gated cleanly through the permission engine — manual or Stripe, your call.' },
];

const TIERS = [
  ['Cache & queue', 'File / database, drained by cron', 'Redis + queue workers'],
  ['Search', 'MySQL full-text', 'Meilisearch / Typesense'],
  ['Real-time', 'Live polling', 'WebSockets (Reverb / Pusher)'],
  ['Media & email', 'Local disk · host SMTP', 'S3 / MinIO · SES / Postmark'],
  ['Install', 'No-SSH web installer + one cron line', 'Docker compose, ready to go'],
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>NovFora — Own your forum. Build your home.</title>
        <meta name="description" content="NovFora is modern, extensible, self-hosted forum software for independent communities. Runs on the hosting you already have. Apache-2.0." />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <picture className="absolute inset-0 block">
          <source srcSet="/hero-cabin.webp" type="image/webp" />
          <img src="/hero-cabin.jpg" alt="A cabin on a hill at dusk under the milky way, with a community gathered" className="w-full h-full object-cover" style={{ objectPosition: '68% center' }} />
        </picture>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(9,9,14,.96) 0%, rgba(9,9,14,.84) 40%, rgba(9,9,14,.5) 68%, rgba(9,9,14,.15) 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div {...up}>
            <span className="inline-flex items-center gap-2 text-[13px] rounded-full px-3.5 py-1.5 mb-6" style={{ color: '#9DC0F8', background: 'rgba(77,147,242,.12)', border: '1px solid rgba(77,147,242,.3)' }}>v1.0 now available · Open source · Apache-2.0</span>
            <h1 className="font-serif font-semibold leading-[1.03] text-5xl md:text-6xl" style={{ color: CREAM }}>Own your forum.<br />Build your <span style={{ color: AMBER }}>home.</span></h1>
            <p className="mt-5 text-lg max-w-[46ch]" style={{ color: SECONDARY }}>NovFora is modern, extensible, self-hosted forum software for independent communities. Your community, your data, your rules — on the hosting you already have.</p>
            <div className="mt-7 flex gap-3 flex-wrap">
              <Button size="lg">Get Started <ArrowRight className="ml-1.5 h-4 w-4" /></Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/25 text-white hover:bg-white/10 hover:text-white">Explore the live demo</Button>
            </div>
            <div className="mt-7 flex gap-5 flex-wrap text-sm" style={{ color: SECONDARY }}>
              {[['Self-hosted', AMBER], ['Open source', '#4D93F2'], ['Privacy-first', '#8E76E6'], ['No lock-in', OK]].map(([l, c]) => (
                <span key={l} className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-sm" style={{ background: c }} />{l}</span>
              ))}
            </div>
            <div className="mt-11 grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(243,232,221,.14)' }}>
              {[['$5/mo', 'Runs on commodity shared hosting'], ['0', 'Daemons required on the baseline tier'], ['1', 'Codebase, two tiers — it scales with you'], ['Apache-2.0', 'Genuinely yours, forever']].map(([b, s], i) => (
                <div key={i} className="p-5" style={{ background: 'rgba(11,11,16,.55)', borderRight: '1px solid rgba(243,232,221,.1)' }}>
                  <div className="font-serif font-semibold text-2xl" style={{ color: CREAM }}>{b}</div>
                  <div className="text-xs mt-1" style={{ color: SECONDARY }}>{s}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST */}
      <div className="border-b border-border py-8 text-center">
        <p className="text-xs text-secondary-text mb-3">Runs anywhere PHP runs — from a $5 shared host to Docker and a VPS</p>
        <div className="flex gap-7 flex-wrap justify-center text-[15px] font-medium text-secondary-text/80">
          {['Hostinger', 'cPanel', 'DigitalOcean', 'Linode', 'Docker', 'Ubuntu', 'MySQL · MariaDB'].map((h) => <span key={h}>{h}</span>)}
        </div>
      </div>

      {/* PROBLEM */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...up} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent))] mb-3">Why NovFora</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">Forums fail for the same handful of reasons</h2>
            <p className="text-secondary-text">We studied what kills communities on phpBB, MyBB, SMF, XenForo, and Discourse — then fixed each one in the core, not as an afterthought.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {PROBLEMS.map((p) => (
              <div key={p.t} className="bg-card border border-border rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--accent))]/12 flex items-center justify-center mb-3"><p.icon className="h-5 w-5 text-[hsl(var(--accent))]" /></div>
                <h3 className="text-lg font-semibold mb-1.5">{p.t}</h3>
                <p className="text-sm text-secondary-text">{p.d}</p>
                <p className="text-[13px] mt-3 flex gap-2" style={{ color: OK }}><Check className="h-4 w-4 mt-0.5 shrink-0" /><span>{p.f}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-24 bg-[hsl(var(--sand))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...up} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent))] mb-3">Everything, in the box</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">A complete community platform</h2>
            <p className="text-secondary-text">NovFora 1.0 ships the fundamentals and the polish — no paid add-ons to reach feature parity.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div key={f.t} className="bg-card border border-border rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-[hsl(var(--primary))]/12 flex items-center justify-center mb-3"><f.icon className="h-5 w-5 text-[hsl(var(--primary))]" /></div>
                <h3 className="text-base font-semibold mb-1.5">{f.t}</h3>
                <p className="text-sm text-secondary-text">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...up} className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent))] mb-3">One codebase, two tiers</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">Start on $5 hosting. Scale when you are ready.</h2>
            <p className="text-secondary-text">The same NovFora detects what your server offers and uses it — and never errors because an enhanced service is not there.</p>
          </motion.div>
          <div className="rounded-2xl border border-border overflow-hidden bg-card overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead><tr className="border-b border-border">
                <th className="text-left p-4"></th>
                <th className="text-left p-4 font-serif font-semibold text-[hsl(var(--primary))]">Baseline · shared host</th>
                <th className="text-left p-4 font-serif font-semibold text-[hsl(var(--accent))]">Enhanced · Docker / VPS</th>
              </tr></thead>
              <tbody>
                {TIERS.map((r) => (
                  <tr key={r[0]} className="border-b border-border last:border-0">
                    <td className="p-4 text-secondary-text">{r[0]}</td><td className="p-4">{r[1]}</td><td className="p-4">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MIGRATION */}
      <section className="py-20 bg-[hsl(var(--sand))] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent))] mb-3">Bring your community with you</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Coming from phpBB, MyBB, SMF, or XenForo?</h2>
          <p className="text-secondary-text mb-6">Import members, forums, topics, posts, and attachments — with passwords preserved and your old URLs 301-redirected, so your search rankings survive the move.</p>
          <div className="flex gap-3 justify-center flex-wrap mb-7">
            {['phpBB', 'XenForo', 'MyBB', 'SMF'].map((s) => <span key={s} className="text-sm bg-card border border-border rounded-lg px-4 py-2">{s}</span>)}
          </div>
          <Button asChild size="lg" variant="outline"><Link to="/migration">Read the migration guide <ArrowRight className="ml-1.5 h-4 w-4" /></Link></Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-background" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 120%, hsl(var(--accent) / 0.13), transparent 60%)' }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Own your forum. Build your <span className="text-[hsl(var(--accent))]">home.</span></h2>
          <p className="text-lg text-secondary-text mb-7">Open source, self-hosted, and built to last. Stand up your community in an afternoon.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button size="lg">Get Started <ArrowRight className="ml-1.5 h-4 w-4" /></Button>
            <Button asChild size="lg" variant="outline"><a href="https://github.com/getnovfora/novfora">Star on GitHub</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
