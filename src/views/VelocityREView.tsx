/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab } from '../types.ts';
import { 
  ShieldCheck, 
  Lock, 
  ArrowUpRight, 
  Search, 
  Users, 
  FileCheck, 
  CheckCircle2, 
  Building, 
  Compass, 
  Layers, 
  Send
} from 'lucide-react';

interface VelocityREViewProps {
  onTabChange: (tab: NavTab) => void;
}

export const VelocityREView: React.FC<VelocityREViewProps> = ({ onTabChange }) => {
  const [criteriaType, setCriteriaType] = useState<'buyer' | 'seller'>('buyer');
  const [assetClass, setAssetClass] = useState<string>('Luxury Residential');
  const [capitalRange, setCapitalRange] = useState<string>('$1M - $3M');
  const [submittedCriteria, setSubmittedCriteria] = useState<boolean>(false);

  const handleCriteriaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedCriteria(true);
  };

  return (
    <div className="space-y-24 pb-20">
      {/* Sub-Brand Header Banner: Clean gradient transitioning from brandNavy to brandBlue */}
      <section className="bg-gradient-to-r from-brandNavy via-[#012f7a] to-brandBlue text-white py-20 border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Official Velocity RE Logo Badge */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-white px-5 py-2.5 rounded-lg shadow-md border border-white/30 inline-flex items-center">
              <img
                src="/assets/aistudio/velocity_re_logo_new_182ad17a.png"
                alt="Velocity RE - Off-Market Real Estate Consulting & Acquisition Partners"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white/10 text-white border border-white/20 text-xs font-mono font-bold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5 text-white" />
              <span>Confidential Off-Market Program</span>
            </div>
          </div>

          {/* Exact User Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl text-balance">
            Velocity RE — Off-Market Real Estate Consulting &amp; Acquisition Partners.
          </h1>

          {/* Exact User Subheadline */}
          <p className="text-lg sm:text-xl text-slate-200 max-w-3xl leading-relaxed text-balance">
            Specializing exclusively in private, off-market transactions. We operate strictly as transactional and acquisition partners, not licensed real estate agents.
          </p>

          {/* User Important Note Callout */}
          <div className="max-w-3xl p-5 bg-black/35 rounded-lg border border-white/20 backdrop-blur-md space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>Strict Privacy Covenant &bull; Zero Public Listings</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
              <strong className="text-white font-semibold">Important Notice:</strong> There are no public MLS listings; we protect seller and buyer privacy through 100% off-market transactions. Pricing integrity, tenant stability, and personal confidentiality remain entirely shielded from public aggregator feeds.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onTabChange('contact')}
              className="px-7 py-3.5 bg-brandRed hover:bg-[#8f1515] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Submit Confidential Off-Market Criteria</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onTabChange('case-studies')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Review Real Estate Case Studies</span>
              <Building className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Visual Architectural Anchor Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src="/src/assets/images/velocity_re_property_1793996296973.jpg"
                alt="Velocity RE Luxury Architectural Property Acquisition"
                className="w-full h-[400px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brandNavy/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded border border-white/40 shadow text-brandNavy flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-brandBlue font-bold">
                    Private Pocket Listing Example
                  </div>
                  <div className="text-sm font-bold text-brandNavy">
                    Discrete $1.45M Waterfront Estate
                  </div>
                  <div className="text-xs text-slate-500">
                    Closed 100% off-market with zero public price discovery
                  </div>
                </div>
                <div className="text-right font-mono">
                  <div className="text-xs text-brandRed font-bold">CLOSED</div>
                  <div className="text-xs text-slate-500">Private Escrow</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-brandBlue font-bold">
              Transactional Architecture
            </div>
            <h2 className="text-3xl font-extrabold text-brandNavy tracking-tight">
              Why Institutional Principals Choose Private Off-Market Alignment
            </h2>
            <p className="text-textSlate leading-relaxed text-sm">
              Public listings subject commercial and high-value residential properties to speculative pricing compression, tenant anxiety, and public scrutiny. Velocity RE operates as an elite advisory conduit, curating discrete principal introductions backed by verifiable exchange telemetry.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded border border-slate-200">
                <Lock className="w-4 h-4 text-brandNavy mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-brandNavy uppercase tracking-wider font-mono">
                    Zero Digital Footprint
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    No MLS syndication, no Zillow/Redfin history indexing, no distressed marketing signals.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-brandNavy mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-brandNavy uppercase tracking-wider font-mono">
                    Pre-Qualified Capital Covenants
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    We only introduce verified buyers possessing demonstrated liquidity and strategic acquisition fit.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded border border-slate-200">
                <Users className="w-4 h-4 text-brandNavy mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-brandNavy uppercase tracking-wider font-mono">
                    Strict Transactional Partner Status
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    We act as acquisition consultants and deal architects, eliminating typical brokerage conflicts.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Breakdown: Clean step-by-step vertical timeline layout (Active milestones styled in brandBlue) */}
      <section className="bg-slate-50 border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-brandBlue font-bold">
              Pocket Listing Service Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brandNavy tracking-tight">
              Our 3-Step Off-Market Acquisition Timeline
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              How Velocity RE orchestrates discreet private transactions from initial mandate to bilateral contract closing.
            </p>
          </div>

          {/* Clean Step-by-Step Vertical Timeline with Active Milestones in brandBlue */}
          <div className="relative pl-6 sm:pl-10 border-l-2 border-brandBlue/30 space-y-12 ml-2 sm:ml-4">
            {/* Step 1 */}
            <div className="relative group">
              {/* Milestone Indicator Styled in brandBlue */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full bg-brandBlue text-white font-mono font-bold text-xs flex items-center justify-center ring-4 ring-white shadow-md">
                01
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3 hover:border-brandBlue transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-xs font-mono font-bold text-brandBlue uppercase tracking-wider">
                    Step 1: Criteria Identification
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brandBlue/10 text-brandBlue border border-brandBlue/20">
                    Phase One Mandate
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brandNavy">
                  Criteria Identification
                </h3>
                <p className="text-sm text-textSlate leading-relaxed">
                  We work closely with property sellers to define exact selling criteria.
                </p>
                <div className="pt-2 text-xs text-slate-500 space-y-1.5 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue shrink-0" />
                    <span>Establish target valuation ranges, minimum acceptable net yields, and closing calendar windows.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue shrink-0" />
                    <span>Audit property physical data, current leases, or operational expenses under confidential protocol.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue shrink-0" />
                    <span>Define specific buyer qualification thresholds to prevent idle inquiries.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              {/* Milestone Indicator Styled in brandBlue */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full bg-brandBlue text-white font-mono font-bold text-xs flex items-center justify-center ring-4 ring-white shadow-md">
                02
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3 hover:border-brandBlue transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-xs font-mono font-bold text-brandBlue uppercase tracking-wider">
                    Step 2: Active Off-Market Matching
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brandBlue/10 text-brandBlue border border-brandBlue/20">
                    Phase Two Alignment
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brandNavy">
                  Active Off-Market Matching
                </h3>
                <p className="text-sm text-textSlate leading-relaxed">
                  We actively target, identify, and analyze qualified buyers that align with seller goals.
                </p>
                <div className="pt-2 text-xs text-slate-500 space-y-1.5 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue shrink-0" />
                    <span>Query our proprietary institutional and private investor capital database.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue shrink-0" />
                    <span>Underwrite capitalization rate and internal rate of return (IRR) metrics using direct local exchange data.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue shrink-0" />
                    <span>Deliver blind executive summaries; reveal asset specifics only upon mutual NDA execution.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              {/* Milestone Indicator Styled in brandBlue */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full bg-brandBlue text-white font-mono font-bold text-xs flex items-center justify-center ring-4 ring-white shadow-md">
                03
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm space-y-3 hover:border-brandBlue transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-xs font-mono font-bold text-brandBlue uppercase tracking-wider">
                    Step 3: Strategic Alignment &amp; Introduction
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brandBlue/10 text-brandBlue border border-brandBlue/20">
                    Phase Three Closing
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brandNavy">
                  Strategic Alignment &amp; Introduction
                </h3>
                <p className="text-sm text-textSlate leading-relaxed">
                  We streamline negotiations and directly introduce aligned parties to close a private contract.
                </p>
                <div className="pt-2 text-xs text-slate-500 space-y-1.5 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue shrink-0" />
                    <span>Direct principal-to-principal introduction bypassing intermediary friction.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue shrink-0" />
                    <span>Structure non-traditional acquisition terms, seller concessions, or expedited escrow timelines.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue shrink-0" />
                    <span>Facilitate private settlement and title transfer with 100% data discretion.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Criteria Alignment Matcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-slate-200 shadow-md p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono uppercase tracking-widest text-brandBlue font-bold">
                  Direct Portfolio Alignment
                </div>
                <img
                  src="/assets/aistudio/velocity_re_logo_new_182ad17a.png"
                  alt="Velocity RE"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-brandNavy">
                Submit Confidential Off-Market Criteria
              </h3>
              <p className="text-sm text-textSlate leading-relaxed">
                Whether you hold off-market assets requiring discrete capital placement, or represent an acquisition fund seeking unlisted properties, submit your parameters below.
              </p>
              <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-brandNavy font-mono uppercase tracking-wider">
                  Our Confidentiality Standard:
                </div>
                <div>
                  No data entered here is shared or listed publicly. Information is routed directly to the Velocity RE acquisition team under strict non-disclosure terms.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {submittedCriteria ? (
                <div className="p-8 rounded-lg bg-slate-50 border border-brandBlue/30 text-center space-y-4 animate-in fade-in duration-200">
                  <div className="w-12 h-12 bg-brandBlue text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-brandNavy">
                    Criteria Mandate Logged
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your parameters for <span className="font-bold text-brandNavy">{assetClass}</span> ({capitalRange}) have been confidentially queued. A Velocity RE principal will contact you within 24 business hours to exchange an NDA.
                  </p>
                  <button
                    onClick={() => setSubmittedCriteria(false)}
                    className="px-4 py-2 bg-brandNavy text-white text-xs font-mono uppercase tracking-wider rounded"
                  >
                    Adjust Parameters
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCriteriaSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brandNavy uppercase tracking-wider font-mono mb-1.5">
                        Your Position
                      </label>
                      <select
                        value={criteriaType}
                        onChange={(e) => setCriteriaType(e.target.value as 'buyer' | 'seller')}
                        className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-sm focus:ring-2 focus:ring-brandNavy focus:border-brandNavy outline-none bg-white text-brandNavy"
                      >
                        <option value="buyer">Acquiring Principal / Fund</option>
                        <option value="seller">Property Owner / Disposition</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brandNavy uppercase tracking-wider font-mono mb-1.5">
                        Target Asset Class
                      </label>
                      <select
                        value={assetClass}
                        onChange={(e) => setAssetClass(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-sm focus:ring-2 focus:ring-brandNavy focus:border-brandNavy outline-none bg-white text-brandNavy"
                      >
                        <option value="Luxury Residential">Luxury Residences ($600k - $2M+)</option>
                        <option value="Commercial Office">Commercial / Professional Office</option>
                        <option value="Residential Portfolio">Retail Residential Subdivision ($300k - $500k)</option>
                        <option value="Industrial Logistics">Industrial &amp; Logistics Facility</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brandNavy uppercase tracking-wider font-mono mb-1.5">
                      Target Capital / Valuation Range
                    </label>
                    <select
                      value={capitalRange}
                      onChange={(e) => setCapitalRange(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-sm focus:ring-2 focus:ring-brandNavy focus:border-brandNavy outline-none bg-white text-brandNavy"
                    >
                      <option value="$300k - $600k">$300,000 – $600,000 (Individual Residential)</option>
                      <option value="$600k - $1.5M">$600,000 – $1,500,000 (Luxury Pocket / Multi-Family)</option>
                      <option value="$1.5M - $5M">$1,500,000 – $5,000,000 (Commercial / Portfolio)</option>
                      <option value="$5M+">$5,000,000+ (Institutional Mandate)</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-brandNavy hover:bg-[#011438] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Send className="w-4 h-4 text-brandBlue" />
                      <span>Request Bilateral NDA &amp; Criteria Review</span>
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
