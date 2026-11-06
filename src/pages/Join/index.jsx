import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { joinService } from '../../services/endpoints';
import { CheckCircle2, AlertCircle, ArrowUpRight, Code, Cpu, Sparkles, Terminal } from 'lucide-react';

export function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    track: 'Engineering & Systems',
    github: '',
    experience: '',
    whyTrojans: '',
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whyTrojans) {
      setStatus({ loading: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      await joinService.submitApplication(formData);
      setStatus({ loading: false, success: true, error: null });
    } catch {
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to submit application. Please try again or reach out on Discord.',
      });
    }
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          index="09_RECRUITMENT"
          tag="JOIN THE COLLECTIVE"
          title="Apply to Join Trojans Collective"
          subtitle="We are looking for students who build things because they can't help it. No traditional resume filters. Show us your curiosity, your problem-solving grit, and what you've built."
        />

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'Systems & Backend',
              desc: 'Distributed systems, networking, Go, Rust, database optimization, cloud microservices.',
              icon: Code,
            },
            {
              title: 'Creative Tech & UI',
              desc: 'WebGL, Three.js shaders, React, dimensional design systems, Framer Motion interactions.',
              icon: Sparkles,
            },
            {
              title: 'Machine Intelligence',
              desc: 'Autonomous agent pipelines, LLM orchestrators, computer vision, vector databases.',
              icon: Cpu,
            },
          ].map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.title}
                className="p-6 rounded-md bg-obsidian-surface border border-obsidian-border flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-sm bg-lime/10 text-lime w-fit mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-silver-bright mb-2">
                    {track.title}
                  </h4>
                  <p className="font-sans text-xs text-silver-muted leading-relaxed">
                    {track.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Application Form Container */}
        <div className="p-8 sm:p-10 rounded-lg bg-obsidian-card border border-obsidian-border">
          {status.success ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-lime/10 border border-lime text-lime flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-silver-bright">
                Application Received // In The Queue
              </h3>
              <p className="font-sans text-sm text-silver-muted max-w-md mx-auto">
                Thank you for applying, <span className="text-silver-bright font-medium">{formData.name}</span>. The Trojans Collective core leads review cohorts on a rolling basis. Watch your inbox.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setStatus({ loading: false, success: false, error: null });
                  setFormData({
                    name: '',
                    email: '',
                    track: 'Engineering & Systems',
                    github: '',
                    experience: '',
                    whyTrojans: '',
                  });
                }}
              >
                Submit Another Application
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-obsidian-border">
                <span className="font-mono text-xs text-lime uppercase tracking-widest">
                  // COHORT CANDIDATE INGESTION
                </span>
                <span className="font-mono text-xs text-silver-dark">
                  * ALL FIELDS LOGGED LOCALLY
                </span>
              </div>

              {status.error && (
                <div className="p-3 rounded-sm bg-red-950/40 border border-spartan-crimson text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs text-silver-muted uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Chen"
                    className="w-full px-4 py-2.5 rounded-sm bg-obsidian-surface border border-obsidian-border text-silver text-sm focus:outline-none focus:border-lime transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-silver-muted uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@university.edu"
                    className="w-full px-4 py-2.5 rounded-sm bg-obsidian-surface border border-obsidian-border text-silver text-sm focus:outline-none focus:border-lime transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs text-silver-muted uppercase tracking-wider mb-2">
                    Primary Track *
                  </label>
                  <select
                    name="track"
                    value={formData.track}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-sm bg-obsidian-surface border border-obsidian-border text-silver text-sm focus:outline-none focus:border-lime transition-colors"
                  >
                    <option value="Systems & Backend">Systems & Distributed Backend</option>
                    <option value="Creative Tech & UI">Creative Tech & Dimensional UI</option>
                    <option value="Machine Intelligence">Machine Intelligence & Agents</option>
                    <option value="Competitive Hackathons">Competitive Hackathons Squad</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs text-silver-muted uppercase tracking-wider mb-2">
                    GitHub / Portfolio URL
                  </label>
                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/yourhandle"
                    className="w-full px-4 py-2.5 rounded-sm bg-obsidian-surface border border-obsidian-border text-silver text-sm focus:outline-none focus:border-lime transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-silver-muted uppercase tracking-wider mb-2">
                  What have you built? (Projects, hackathons, or experiments)
                </label>
                <textarea
                  name="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Tell us about something you made, broke, or solved..."
                  className="w-full px-4 py-2.5 rounded-sm bg-obsidian-surface border border-obsidian-border text-silver text-sm focus:outline-none focus:border-lime transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-silver-muted uppercase tracking-wider mb-2">
                  Why Trojans Collective? *
                </label>
                <textarea
                  name="whyTrojans"
                  rows={3}
                  required
                  value={formData.whyTrojans}
                  onChange={handleChange}
                  placeholder="Why do you want to build with this collective?"
                  className="w-full px-4 py-2.5 rounded-sm bg-obsidian-surface border border-obsidian-border text-silver text-sm focus:outline-none focus:border-lime transition-colors resize-none"
                />
              </div>

              <div className="pt-4 border-t border-obsidian-border flex items-center justify-between">
                <span className="font-mono text-xs text-silver-dark hidden sm:inline">
                  NOT A CLUB. A COLLECTIVE OF BUILDERS.
                </span>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  loading={status.loading}
                  icon={ArrowUpRight}
                  iconPosition="right"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </PageTransition>
  );
}

export default JoinPage;
