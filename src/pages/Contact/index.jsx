import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Mail, MessageSquare, MapPin, Send, CheckCircle2, Github, Linkedin, Twitter } from 'lucide-react';

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'Sponsorship / Hackathon Partnership', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          index="10_COMMUNICATIONS"
          tag="GET IN TOUCH"
          title="Connect with Trojans Collective"
          subtitle="Whether you represent a hackathon sponsor, a collaborating student community, or want to invite our builders to compete, our lines are open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-md bg-obsidian-card border border-obsidian-border space-y-4">
              <h4 className="font-display font-bold text-lg text-silver-bright">
                Direct Channels
              </h4>

              <div className="space-y-4 font-mono text-xs text-silver-muted">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                  <div>
                    <span className="text-silver-dark block text-[10px]">ELECTRONIC INBOX</span>
                    <a href="mailto:contact@trojanscollective.org" className="text-silver hover:text-lime transition-colors">
                      contact@trojanscollective.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                  <div>
                    <span className="text-silver-dark block text-[10px]">DISCORD SERVER</span>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-silver hover:text-lime transition-colors">
                      discord.gg/trojanscollective
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                  <div>
                    <span className="text-silver-dark block text-[10px]">PHYSICAL WORKSPACE</span>
                    <span className="text-silver">Innovation Center & Hacker Lab</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-md bg-obsidian-surface border border-obsidian-border">
              <h4 className="font-mono text-xs uppercase tracking-widest text-silver-dark mb-4">
                // EXTERNAL SATELLITES
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-sm bg-obsidian-card border border-obsidian-border hover:border-lime/40 text-silver hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-sm bg-obsidian-card border border-obsidian-border hover:border-lime/40 text-silver hover:text-white transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-sm bg-obsidian-card border border-obsidian-border hover:border-lime/40 text-silver hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Transmission Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-lg bg-obsidian-card border border-obsidian-border">
              {sent ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-lime/10 border border-lime text-lime flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-silver-bright">
                    Message Dispatched
                  </h3>
                  <p className="font-sans text-sm text-silver-muted max-w-sm mx-auto">
                    Thank you, <span className="text-silver-bright">{form.name}</span>. Your message has been received.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setSent(false)}>
                    Send Another Transmission
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-obsidian-border">
                    <span className="font-mono text-xs text-lime uppercase tracking-widest">
                      // DIRECT TRANSMISSION INGESTION
                    </span>
                    <Badge variant="lime" dot size="sm">
                      OPERATIONAL
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs text-silver-muted uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Jordan Smith"
                        className="w-full px-4 py-2.5 rounded-sm bg-obsidian-surface border border-obsidian-border text-silver text-sm focus:outline-none focus:border-lime transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-silver-muted uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jordan@company.com"
                        className="w-full px-4 py-2.5 rounded-sm bg-obsidian-surface border border-obsidian-border text-silver text-sm focus:outline-none focus:border-lime transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-silver-muted uppercase tracking-wider mb-2">
                      Transmission Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm bg-obsidian-surface border border-obsidian-border text-silver text-sm focus:outline-none focus:border-lime transition-colors"
                    >
                      <option value="Sponsorship / Hackathon Partnership">Sponsorship / Hackathon Partnership</option>
                      <option value="Speaker / Workshop Invitation">Speaker / Workshop Invitation</option>
                      <option value="Collegiate Collaboration">Collegiate Collaboration</option>
                      <option value="Press / Media Inquiry">Press / Media Inquiry</option>
                      <option value="General Query">General Query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-silver-muted uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Outline your proposal or question..."
                      className="w-full px-4 py-2.5 rounded-sm bg-obsidian-surface border border-obsidian-border text-silver text-sm focus:outline-none focus:border-lime transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-4 border-t border-obsidian-border flex justify-end">
                    <Button type="submit" variant="primary" size="md" icon={Send} iconPosition="right">
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
