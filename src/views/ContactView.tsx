/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab, ContactFormData } from '../types.ts';
import { 
  ShieldCheck, 
  Lock, 
  Send, 
  CheckCircle2, 
  ArrowUpRight, 
  Building, 
  Clock, 
  RotateCcw 
} from 'lucide-react';

interface ContactViewProps {
  onTabChange: (tab: NavTab) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onTabChange }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    programTrack: 'DBMG Strategic Consulting',
    message: '',
    requiresNda: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    }
    if (!formData.company.trim()) {
      errs.company = 'Company name is required.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Corporate email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid corporate email format.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Direct phone number is required.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-reliability corporate submission
    setTimeout(() => {
      const code = `DBMG-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmationCode(code);
      setIsSubmitting(false);
      setSubmissionSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      programTrack: 'DBMG Strategic Consulting',
      message: '',
      requiresNda: true,
    });
    setErrors({});
    setSubmissionSuccess(false);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-brandRed font-bold">
            Executive Engagement &bull; DBMG Consulting
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-brandNavy tracking-tight leading-tight max-w-4xl">
            Initiate a Confidential Strategic Engagement
          </h1>

          <p className="text-lg text-textSlate max-w-3xl leading-relaxed">
            Connect directly with our senior managing partners for corporate advisory, operational synchronization, or private off-market real estate acquisition alignment.
          </p>
        </div>
      </section>

      {/* Corporate Intake Form & Direct Office Channels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Corporate Information & Discretion Standards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-brandBlue font-bold">
                Direct Practice Channels
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brandNavy tracking-tight">
                Corporate Governance &amp; Discretion Protocol
              </h2>
              <p className="text-sm text-textSlate leading-relaxed">
                All client relationships, operational diagnostics, and real estate mandates are governed by bilateral non-disclosure agreements before sensitive files or trade data are examined.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-lg border border-slate-200 bg-white shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-brandNavy">
                  <Clock className="w-4 h-4 text-brandRed" />
                  <span>Executive Review SLA:</span>
                </div>
                <div className="text-sm font-semibold text-brandNavy">
                  Direct Senior Partner Response
                </div>
                <div className="text-xs text-slate-500">
                  All submitted intakes are reviewed and routed directly by managing partners within 12 business hours.
                </div>
              </div>

              <div className="p-5 rounded-lg border border-slate-200 bg-white shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-brandNavy">
                  <ShieldCheck className="w-4 h-4 text-brandBlue" />
                  <span>Encrypted Intake Protocol:</span>
                </div>
                <div className="text-sm font-semibold text-brandNavy">
                  Confidential Transmission
                </div>
                <div className="text-xs text-slate-500">
                  Dedicated advisory line and partner contact coordinates are provided immediately upon brief receipt and NDA clearance.
                </div>
              </div>

              <div className="p-5 rounded-lg border border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-brandNavy font-mono uppercase tracking-wider">
                  <Lock className="w-4 h-4 text-slate-700" />
                  <span>Bilateral NDA Standard:</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Upon receipt of this corporate intake, a mutual non-disclosure agreement is generated and transmitted for electronic execution prior to technical discussions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Corporate Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200 shadow-md p-8 sm:p-10">
              {submissionSuccess ? (
                <div className="text-center space-y-6 py-8 animate-in fade-in duration-200">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Corporate Intake Transmitted
                    </div>
                    <h3 className="text-2xl font-bold text-brandNavy">
                      Inquiry Successfully Received
                    </h3>
                    <p className="text-sm text-textSlate max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-brandNavy">{formData.fullName}</span>. Your brief for <span className="font-semibold text-brandNavy">{formData.company}</span> under the <span className="font-semibold text-brandRed">{formData.programTrack}</span> track has been dispatched to our managing partners.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 max-w-sm mx-auto font-mono text-xs text-slate-600 space-y-1">
                    <div className="text-slate-400 uppercase tracking-widest text-[10px]">
                      Tracking Reference Token
                    </div>
                    <div className="text-base font-extrabold text-brandNavy tracking-wider">
                      {confirmationCode}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Mutual NDA dispatched to: {formData.email}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-center gap-4">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-brandNavy text-xs font-mono uppercase tracking-wider rounded inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit Another Inquiry</span>
                    </button>
                    <button
                      onClick={() => onTabChange('home')}
                      className="px-5 py-2.5 bg-brandNavy hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-wider rounded cursor-pointer"
                    >
                      Return to Home
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-brandNavy">
                      Executive Intake Questionnaire
                    </h3>
                    <p className="text-xs text-slate-500">
                      Please specify your corporate background and targeted advisory practice.
                    </p>
                  </div>

                  {/* Program Track Selector Styled with brandNavy Focus States */}
                  <div>
                    <label 
                      htmlFor="programTrack"
                      className="block text-xs font-bold text-brandNavy uppercase tracking-wider font-mono mb-2"
                    >
                      Engagement Program Track <span className="text-brandRed">*</span>
                    </label>
                    <select
                      id="programTrack"
                      name="programTrack"
                      value={formData.programTrack}
                      onChange={(e) => setFormData({ ...formData, programTrack: e.target.value as ContactFormData['programTrack'] })}
                      className="w-full px-4 py-3 rounded border border-slate-300 text-sm font-semibold text-brandNavy bg-white focus:ring-2 focus:ring-brandNavy focus:border-brandNavy outline-none transition-all shadow-xs"
                    >
                      <option value="DBMG Strategic Consulting">
                        DBMG Strategic Consulting (Operations, ALVI Framework, Business Development)
                      </option>
                      <option value="Velocity RE Real Estate Program">
                        Velocity RE Real Estate Program (100% Off-Market Acquisition &amp; Pocket Listings)
                      </option>
                    </select>
                    <div className="text-[11px] text-slate-500 mt-1">
                      {formData.programTrack === 'DBMG Strategic Consulting'
                        ? 'Encompasses Lean Dynamics diagnostics, supply chain synchronization, and C-suite management advisory.'
                        : 'Encompasses confidential pocket acquisitions, commercial asset realignment, and discrete dispositions.'}
                    </div>
                  </div>

                  {/* Name and Company Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="fullName"
                        className="block text-xs font-bold text-brandNavy uppercase tracking-wider font-mono mb-1.5"
                      >
                        Full Name <span className="text-brandRed">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Marcus Vance"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        className={`w-full px-4 py-2.5 rounded border text-sm focus:ring-2 focus:ring-brandNavy focus:border-brandNavy outline-none transition-all ${
                          errors.fullName ? 'border-brandRed bg-red-50/20' : 'border-slate-300 bg-white'
                        }`}
                      />
                      {errors.fullName && (
                        <div className="text-[11px] text-brandRed mt-1">{errors.fullName}</div>
                      )}
                    </div>

                    <div>
                      <label 
                        htmlFor="company"
                        className="block text-xs font-bold text-brandNavy uppercase tracking-wider font-mono mb-1.5"
                      >
                        Company / Organization <span className="text-brandRed">*</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="e.g. Global Horizon Capital"
                        value={formData.company}
                        onChange={(e) => {
                          setFormData({ ...formData, company: e.target.value });
                          if (errors.company) setErrors({ ...errors, company: '' });
                        }}
                        className={`w-full px-4 py-2.5 rounded border text-sm focus:ring-2 focus:ring-brandNavy focus:border-brandNavy outline-none transition-all ${
                          errors.company ? 'border-brandRed bg-red-50/20' : 'border-slate-300 bg-white'
                        }`}
                      />
                      {errors.company && (
                        <div className="text-[11px] text-brandRed mt-1">{errors.company}</div>
                      )}
                    </div>
                  </div>

                  {/* Email and Phone Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="email"
                        className="block text-xs font-bold text-brandNavy uppercase tracking-wider font-mono mb-1.5"
                      >
                        Corporate Email <span className="text-brandRed">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="corporate.email@domain.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-4 py-2.5 rounded border text-sm focus:ring-2 focus:ring-brandNavy focus:border-brandNavy outline-none transition-all ${
                          errors.email ? 'border-brandRed bg-red-50/20' : 'border-slate-300 bg-white'
                        }`}
                      />
                      {errors.email && (
                        <div className="text-[11px] text-brandRed mt-1">{errors.email}</div>
                      )}
                    </div>

                    <div>
                      <label 
                        htmlFor="phone"
                        className="block text-xs font-bold text-brandNavy uppercase tracking-wider font-mono mb-1.5"
                      >
                        Direct Phone Number <span className="text-brandRed">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Direct phone number"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full px-4 py-2.5 rounded border text-sm focus:ring-2 focus:ring-brandNavy focus:border-brandNavy outline-none transition-all ${
                          errors.phone ? 'border-brandRed bg-red-50/20' : 'border-slate-300 bg-white'
                        }`}
                      />
                      {errors.phone && (
                        <div className="text-[11px] text-brandRed mt-1">{errors.phone}</div>
                      )}
                    </div>
                  </div>

                  {/* Executive Brief / Message */}
                  <div>
                    <label 
                      htmlFor="message"
                      className="block text-xs font-bold text-brandNavy uppercase tracking-wider font-mono mb-1.5"
                    >
                      Scope of Strategic Inquiry (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Outline operational bottlenecks, target facility locations, or acquisition criteria..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:ring-2 focus:ring-brandNavy focus:border-brandNavy outline-none transition-all bg-white"
                    />
                  </div>

                  {/* NDA Checkbox */}
                  <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded border border-slate-200">
                    <input
                      id="requiresNda"
                      type="checkbox"
                      checked={formData.requiresNda}
                      onChange={(e) => setFormData({ ...formData, requiresNda: e.target.checked })}
                      className="w-4 h-4 mt-0.5 rounded border-slate-300 text-brandNavy focus:ring-brandNavy accent-brandNavy cursor-pointer"
                    />
                    <label htmlFor="requiresNda" className="text-xs text-slate-700 cursor-pointer">
                      <strong className="text-brandNavy">Execute Mutual Non-Disclosure Agreement (NDA):</strong> I request a standard bilateral non-disclosure agreement prior to our discovery meeting.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-brandRed hover:bg-[#8f1515] text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-sm inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Encrypting &amp; Transmitting Brief...</span>
                      ) : (
                        <>
                          <span>Submit Corporate Intake</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
