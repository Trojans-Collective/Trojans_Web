import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { Button } from '../../components/ui/Button';
import { Mail, MessageSquare, MapPin, Send, CheckCircle2, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Hackathon & Engineering Partnership',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
    }
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-lime mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            10 / Communications
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-silver-bright tracking-tight leading-[0.95] mb-6">
            Get in Touch With the <br />
            <span className="text-lime">Core Team</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-silver-muted leading-relaxed">
            Whether you represent a hackathon organizer, an engineering sponsor, or want to collaborate with our squads, our direct channels are open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border border-obsidian-border bg-obsidian-surface p-8 space-y-6">
              <h3 className="font-display text-2xl font-bold text-silver-bright">
                Direct Channels
              </h3>

              <div className="space-y-6 text-sm font-sans">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-lime/10 border border-lime/30 text-lime flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-silver-dark uppercase tracking-wider block mb-0.5">
                      Electronic Mail
                    </span>
                    <a
                      href="mailto:contact@trojanscollective.org"
                      className="font-medium text-silver-bright hover:text-lime transition-colors"
                    >
                      contact@trojanscollective.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-lime/10 border border-lime/30 text-lime flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-silver-dark uppercase tracking-wider block mb-0.5">
                      Community Discord
                    </span>
                    <a
                      href="https://discord.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-silver-bright hover:text-lime transition-colors"
                    >
                      discord.gg/trojanscollective
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-lime/10 border border-lime/30 text-lime flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-silver-dark uppercase tracking-wider block mb-0.5">
                      Physical Lab & Workspace
                    </span>
                    <span className="font-medium text-silver-bright">
                      Innovation & Engineering Atrium
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl border border-obsidian-border bg-obsidian-surface p-8">
              <span className="font-mono text-xs uppercase tracking-wider text-lime block mb-4">
                External Satellites
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-obsidian-deep border border-obsidian-border hover:border-lime text-silver-bright hover:text-lime transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-obsidian-deep border border-obsidian-border hover:border-lime text-silver-bright hover:text-lime transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-obsidian-deep border border-obsidian-border hover:border-lime text-silver-bright hover:text-lime transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-obsidian-border bg-obsidian-surface p-8 sm:p-12 shadow-2xl">
              {sent ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-lime/10 border border-lime text-lime flex items-center justify-center mx-auto shadow-glow-lime-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-silver-bright">
                    Transmission Dispatched
                  </h3>
                  <p className="font-sans text-base text-silver-muted max-w-md mx-auto">
                    Your message has been delivered to the core team inbox. We typically reply within 24–48 hours.
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => {
                      setSent(false);
                      setForm({ name: '', email: '', subject: 'Hackathon & Engineering Partnership', message: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block font-sans text-xs font-semibold uppercase tracking-wider text-silver-muted mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Alex Chen"
                        className="w-full px-4 py-3 rounded-lg bg-obsidian-deep border border-obsidian-border text-silver-bright text-sm focus:outline-none focus:border-lime transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block font-sans text-xs font-semibold uppercase tracking-wider text-silver-muted mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@organization.com"
                        className="w-full px-4 py-3 rounded-lg bg-obsidian-deep border border-obsidian-border text-silver-bright text-sm focus:outline-none focus:border-lime transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block font-sans text-xs font-semibold uppercase tracking-wider text-silver-muted mb-2">
                      Inquiry Topic
                    </label>
                    <select
                      id="contact-subject"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-obsidian-deep border border-obsidian-border text-silver-bright text-sm focus:outline-none focus:border-lime transition-colors"
                    >
                      <option>Hackathon & Engineering Partnership</option>
                      <option>Sponsorship & Technical Hardware Grant</option>
                      <option>Speaker / Workshop Collaboration</option>
                      <option>General Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block font-sans text-xs font-semibold uppercase tracking-wider text-silver-muted mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share details regarding your inquiry, event schedule, or proposed collaboration..."
                      className="w-full px-4 py-3 rounded-lg bg-obsidian-deep border border-obsidian-border text-silver-bright text-sm focus:outline-none focus:border-lime transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-4 border-t border-obsidian-border flex items-center justify-between">
                    <span className="font-mono text-xs text-silver-dark">
                      Direct line to core team
                    </span>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={Send}
                      iconPosition="right"
                    >
                      Dispatch Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default ContactPage;
