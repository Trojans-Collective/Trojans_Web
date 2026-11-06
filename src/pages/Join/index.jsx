import React, { useState } from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PageTransition } from '../../components/ui/PageTransition';
import { Button } from '../../components/ui/Button';
import { joinService } from '../../services/endpoints';
import { CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

export function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    track: 'General interest',
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
        error: 'Unable to submit your message. Please try again later.',
      });
    }
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          title="Join Trojans Collective"
          subtitle="Tell us what you would like to build, explore, or be part of."
        />

        {/* Application Form Container */}
        <div className="p-8 sm:p-10 rounded-lg bg-obsidian-card border border-obsidian-border">
          {status.success ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-lime/10 border border-lime text-lime flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-silver-bright">
                Message received
              </h3>
              <p className="font-sans text-sm text-silver-muted max-w-md mx-auto">
                Thank you, <span className="font-medium text-silver-bright">{formData.name}</span>.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setStatus({ loading: false, success: false, error: null });
                  setFormData({
                    name: '',
                    email: '',
                    track: 'General interest',
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
                <span className="text-sm text-silver-muted">Share a little about yourself.</span>
              </div>

              {status.error && (
                <div className="p-3 rounded-sm bg-red-950/40 border border-spartan-crimson text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="join-name" className="mb-2 block text-sm text-silver-muted">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="join-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Chen"
                    className="w-full px-4 py-2.5 rounded-sm bg-obsidian-surface border border-obsidian-border text-silver text-sm focus:outline-none focus:border-lime transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="join-email" className="mb-2 block text-sm text-silver-muted">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="join-email"
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
                  <label htmlFor="join-github" className="mb-2 block text-sm text-silver-muted">
                    GitHub / Portfolio URL
                  </label>
                  <input
                    type="url"
                    id="join-github"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/yourhandle"
                    className="w-full px-4 py-2.5 rounded-sm bg-obsidian-surface border border-obsidian-border text-silver text-sm focus:outline-none focus:border-lime transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="join-experience" className="mb-2 block text-sm text-silver-muted">
                  What have you built? (Projects, hackathons, or experiments)
                </label>
                <textarea
                  id="join-experience"
                  name="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Tell us about something you made, broke, or solved..."
                  className="w-full px-4 py-2.5 rounded-sm bg-obsidian-surface border border-obsidian-border text-silver text-sm focus:outline-none focus:border-lime transition-colors resize-none"
                />
              </div>

              <div>
                <label htmlFor="join-why" className="mb-2 block text-sm text-silver-muted">
                  Why Trojans Collective? *
                </label>
                <textarea
                  id="join-why"
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
