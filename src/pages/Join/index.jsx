import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { Button } from '../../components/ui/Button';
import { joinService } from '../../services/endpoints';
import { CheckCircle2, AlertCircle, ArrowUpRight, Terminal, Cpu, Sparkles, Trophy } from 'lucide-react';

export function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    track: 'Systems Engineering',
    github: '',
    experience: '',
    whyTrojans: '',
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const tracks = [
    { id: 'Systems Engineering', label: 'Systems & Networks', icon: Terminal },
    { id: 'AI & Intelligence', label: 'AI & Autonomous Agents', icon: Cpu },
    { id: 'Creative Tech & WebGL', label: 'Creative Tech & Shaders', icon: Sparkles },
    { id: 'Hackathon Competitive Squad', label: 'Hackathon Squads', icon: Trophy },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whyTrojans) {
      setStatus({ loading: false, success: false, error: 'Please complete all required fields.' });
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
        error: 'Unable to deliver your application right now. Please try again later.',
      });
    }
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-lime mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            09 / Application Portal
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-silver-bright tracking-tight leading-[0.95] mb-6">
            Join Trojans <br />
            <span className="text-lime">Collective</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-silver-muted leading-relaxed">
            We are looking for builders who want to bypass conventional club hierarchies and ship meaningful software alongside dedicated peers.
          </p>
        </div>

        {/* Application Form Container */}
        <div className="rounded-2xl border border-obsidian-border bg-obsidian-surface p-8 sm:p-12 shadow-2xl">
          {status.success ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-lime/10 border border-lime text-lime flex items-center justify-center mx-auto shadow-glow-lime-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold text-silver-bright mb-2">
                  Application Received
                </h3>
                <p className="font-sans text-base text-silver-muted max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-silver-bright">{formData.name}</span>. The engineering leads will review your work and contact you via email.
                </p>
              </div>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  setStatus({ loading: false, success: false, error: null });
                  setFormData({
                    name: '',
                    email: '',
                    track: 'Systems Engineering',
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
            <form onSubmit={handleSubmit} className="space-y-8">
              {status.error && (
                <div className="p-4 rounded-lg bg-red-950/40 border border-red-500/40 text-red-200 text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                  <span>{status.error}</span>
                </div>
              )}

              {/* Track Selection */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-lime mb-3">
                  Select Your Primary Engineering Track
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tracks.map((t) => {
                    const Icon = t.icon;
                    const isSelected = formData.track === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, track: t.id }))}
                        className={`p-4 rounded-xl border text-left flex items-center gap-3.5 transition-all ${
                          isSelected
                            ? 'bg-lime text-obsidian border-lime font-bold shadow-md'
                            : 'bg-obsidian-deep text-silver-muted border-obsidian-border hover:border-white/20 hover:text-silver-bright'
                        }`}
                      >
                        <Icon className={`w-5 h-5 shrink-0 ${isSelected ? 'text-obsidian' : 'text-lime'}`} />
                        <span className="font-sans text-sm">{t.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="join-name" className="block font-sans text-xs font-semibold uppercase tracking-wider text-silver-muted mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="join-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Bhargav Bhamare"
                    className="w-full px-4 py-3 rounded-lg bg-obsidian-deep border border-obsidian-border text-silver-bright text-sm focus:outline-none focus:border-lime transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="join-email" className="block font-sans text-xs font-semibold uppercase tracking-wider text-silver-muted mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="join-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@domain.edu"
                    className="w-full px-4 py-3 rounded-lg bg-obsidian-deep border border-obsidian-border text-silver-bright text-sm focus:outline-none focus:border-lime transition-colors"
                  />
                </div>
              </div>

              {/* Portfolio / GitHub */}
              <div>
                <label htmlFor="join-github" className="block font-sans text-xs font-semibold uppercase tracking-wider text-silver-muted mb-2">
                  GitHub Profile / Portfolio / Repository URL
                </label>
                <input
                  type="url"
                  id="join-github"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/yourhandle"
                  className="w-full px-4 py-3 rounded-lg bg-obsidian-deep border border-obsidian-border text-silver-bright text-sm focus:outline-none focus:border-lime transition-colors"
                />
              </div>

              {/* Built Experience */}
              <div>
                <label htmlFor="join-experience" className="block font-sans text-xs font-semibold uppercase tracking-wider text-silver-muted mb-2">
                  What have you built or broken? (Projects, hackathons, or experiments)
                </label>
                <textarea
                  id="join-experience"
                  name="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Tell us about a prototype you shipped, a protocol you tested, or a challenge you solved..."
                  className="w-full px-4 py-3 rounded-lg bg-obsidian-deep border border-obsidian-border text-silver-bright text-sm focus:outline-none focus:border-lime transition-colors resize-none"
                />
              </div>

              {/* Motivation */}
              <div>
                <label htmlFor="join-why" className="block font-sans text-xs font-semibold uppercase tracking-wider text-silver-muted mb-2">
                  Why Trojans Collective? *
                </label>
                <textarea
                  id="join-why"
                  name="whyTrojans"
                  rows={3}
                  required
                  value={formData.whyTrojans}
                  onChange={handleChange}
                  placeholder="What drives you to build with this collective?"
                  className="w-full px-4 py-3 rounded-lg bg-obsidian-deep border border-obsidian-border text-silver-bright text-sm focus:outline-none focus:border-lime transition-colors resize-none"
                />
              </div>

              <div className="pt-6 border-t border-obsidian-border flex items-center justify-between">
                <span className="font-mono text-xs text-silver-dark">
                  * Required fields
                </span>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
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
