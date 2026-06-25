import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Folder, PenLine, Paperclip, Tag, Save, Bookmark, Lock, Search, Users,
  Shield, KeyRound, Clock, Heart, UserCircle, MessageSquare, Building2, TrendingUp, Flag,
  Gavel, Ban, ShieldCheck, StickyNote, Webhook, Boxes, Palette, RefreshCw, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const up = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const CATS = [
  { name: 'Forum & content', tint: 'accent', items: [
    { i: Folder, t: 'Categories → forums → topics', d: 'A clear hierarchy with sub-forums, drag-and-drop structure, and read-only areas.' },
    { i: PenLine, t: 'WYSIWYG editor', d: 'Friendly by default, optional Markdown, BBCode for imports — server-sanitized and safe.' },
    { i: Paperclip, t: 'Attachments & polls', d: 'Drag-drop uploads (EXIF-stripped, resized), inline polls, @mentions, and safe oEmbed.' },
    { i: Tag, t: 'Prefixes & tags', d: 'Colored topic prefixes and cross-cutting tags keep busy forums scannable.' },
    { i: Save, t: 'Drafts & edit history', d: 'Autosaved drafts, full post revision history, and scheduled replies.' },
    { i: Bookmark, t: 'Bookmarks', d: 'Save any topic or post to a personal list to return to later.' },
  ] },
  { name: 'Permissions & roles', tint: 'primary', items: [
    { i: Lock, t: 'Allow / No / Never engine', d: 'Three-state permissions across every scope. Never is absolute — perfect for clean exceptions.' },
    { i: Search, t: 'Permission inspector', d: 'Ask why anyone can or cannot do something and see the decisive rule and every entry.' },
    { i: Users, t: 'Groups & auto-promotion', d: 'Membership models, AND/OR auto-promotion by participation, and a custom role builder.' },
    { i: Shield, t: 'Per-forum moderators', d: 'Hand a forum to a trusted regular with scoped, capability-bundled powers.' },
    { i: KeyRound, t: 'Co-owners & restricted admins', d: 'Multiple owners with a last-owner guard, or grant someone just part of the panel.' },
    { i: Clock, t: 'Temporary delegation', d: 'Lend one capability for a bounded window — it expires on its own.' },
  ] },
  { name: 'Community & social', tint: 'accent', items: [
    { i: Heart, t: 'Reactions & reputation', d: 'Lightweight reactions that build reputation, plus achievement badges for milestones.' },
    { i: UserCircle, t: 'Profiles & custom fields', d: 'Rich profiles with admin-defined custom fields, signatures, and activity.' },
    { i: MessageSquare, t: 'Private messages', d: 'Multi-participant, threaded conversations with the same safe editor as posts.' },
    { i: Building2, t: 'Clubs', d: 'Member-run sub-communities with their own forums and public / closed / private privacy.' },
    { i: Users, t: 'Members directory', d: 'An opt-in directory and a reputation leaderboard, with follow and ignore controls.' },
    { i: TrendingUp, t: 'Activity & trending', d: "What's-new feeds for what you follow, and permission-safe trending topics." },
  ] },
  { name: 'Moderation & anti-spam', tint: 'primary', items: [
    { i: Flag, t: 'Queue & reports', d: 'Approve held content and resolve member reports from a dedicated moderator panel.' },
    { i: Gavel, t: 'Warnings & infractions', d: 'Graduated, points-based warnings that decay and escalate consequences automatically.' },
    { i: Ban, t: 'Bans & spam cleaner', d: 'Reversible bans, plus one-click ban-and-remove-all-content for obvious spammers.' },
    { i: ShieldCheck, t: 'Trust levels', d: 'Five levels that grow with good participation and gate capabilities and post holds.' },
    { i: Shield, t: 'StopForumSpam & CAPTCHA', d: 'Crowd blocklist screening, swappable CAPTCHA, honeypot, and rate limits.' },
    { i: StickyNote, t: 'Staff notes & filters', d: 'Private staff notes on members and server-side word filters with replace / flag / block.' },
  ] },
  { name: 'Platform & operations', tint: 'accent', items: [
    { i: Webhook, t: 'Modules, API & webhooks', d: 'A versioned, no-core-edit module API, a permission-aware REST API, and signed webhooks.' },
    { i: KeyRound, t: 'SSO & 2FA', d: 'Google / GitHub / Discord sign-in, mandatory staff 2FA, and an enterprise SAML scaffold.' },
    { i: Boxes, t: 'Importers', d: 'Resumable phpBB / XenForo / MyBB / SMF imports with passwords and 301 redirects preserved.' },
    { i: Palette, t: 'Theming & layout', d: 'Point-and-click appearance, a layout configurator, and a sandboxed template editor.' },
    { i: RefreshCw, t: 'Installer & upgrades', d: 'No-SSH web installer, reversible migrations, backup-first auto-upgrade, and panel backups.' },
    { i: Globe, t: 'PWA, push & i18n', d: 'Installable PWA with web push, full notifications, search, analytics, and RTL localization.' },
  ] },
];

export default function FeaturesPage() {
  return (
    <>
      <Helmet>
        <title>Features — NovFora</title>
        <meta name="description" content="Everything NovFora 1.0 ships: permissions, editor, anti-spam, clubs, SSO, API, importers, and more — no paid add-ons to reach parity." />
      </Helmet>
      <section className="bg-[hsl(var(--sand))] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...up}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent))] mb-4">Features</p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-5">A complete platform, <span className="text-[hsl(var(--accent))]">in the box</span></h1>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">NovFora 1.0 ships the fundamentals and the polish — with no paid add-ons to reach feature parity.</p>
          </motion.div>
        </div>
      </section>
      {CATS.map((c, idx) => (
        <section key={c.name} className={idx % 2 === 0 ? 'py-16 bg-background' : 'py-16 bg-[hsl(var(--sand))]'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8"><h2 className="text-2xl font-semibold whitespace-nowrap">{c.name}</h2><span className="flex-1 h-px bg-border" /></div>
            <div className="grid md:grid-cols-3 gap-5">
              {c.items.map((it) => (
                <div key={it.t} className="bg-card border border-border rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `hsl(var(--${c.tint}) / 0.12)` }}>
                    <it.i className="h-5 w-5" style={{ color: `hsl(var(--${c.tint}))` }} />
                  </div>
                  <h3 className="text-base font-semibold mb-1.5">{it.t}</h3>
                  <p className="text-sm text-secondary-text">{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="py-20 bg-background text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-3">See it all in one place</h2>
          <p className="text-secondary-text mb-7">Spin up a community in an afternoon, or poke around the live demo first.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button size="lg">Get Started <ArrowRight className="ml-1.5 h-4 w-4" /></Button>
            <Button asChild size="lg" variant="outline"><Link to="/compare">Compare platforms</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
