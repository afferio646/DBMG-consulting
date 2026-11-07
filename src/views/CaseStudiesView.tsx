/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab, CaseStudyData } from '../types.ts';
import { 
  Building2, 
  Home, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Calculator, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  BarChart3,
  Percent,
  FileCheck2
} from 'lucide-react';

interface CaseStudiesViewProps {
  onTabChange: (tab: NavTab) => void;
}

export const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({ onTabChange }) => {
  const [activeTabId, setActiveTabId] = useState<'tab-a' | 'tab-b' | 'tab-c' | 'tab-d'>('tab-a');

  // Interactive Cap Rate Calculator State
  const [calcPrice, setCalcPrice] = useState<number>(1850000);
  const [calcGrossRevenue, setCalcGrossRevenue] = useState<number>(240000);
  const [calcOpexRatio, setCalcOpexRatio] = useState<number>(37); // 37% opex
  const [calcEfficiencyGain, setCalcEfficiencyGain] = useState<number>(15); // 15% ALVI operational savings

  const rawOpex = calcGrossRevenue * (calcOpexRatio / 100);
  const optimizedOpex = rawOpex * (1 - calcEfficiencyGain / 100);
  const baselineNoi = calcGrossRevenue - rawOpex;
  const optimizedNoi = calcGrossRevenue - optimizedOpex;
  const baselineCapRate = calcPrice > 0 ? (baselineNoi / calcPrice) * 100 : 0;
  const optimizedCapRate = calcPrice > 0 ? (optimizedNoi / calcPrice) * 100 : 0;
  const annualSavings = rawOpex - optimizedOpex;

  const caseStudies: Record<'tab-a' | 'tab-b' | 'tab-c' | 'tab-d', CaseStudyData> = {
    'tab-a': {
      id: 'tab-a',
      tabLabel: 'Tab A: DBMG Consulting',
      category: 'DBMG Consulting',
      title: 'Industrial Logistics Operational Synchronization',
      valueOrScale: 'Mid-Market Logistics Provider (8 Facilities, 420 FTEs)',
      primaryMetric: '+34%',
      secondaryMetric: '+22%',
      summary: 'Industrial Logistics Operational Synchronization Case Study utilizing the full ALVI Framework: Analysis, Logistics, Validation, Implementation. Resulting in 34% fulfillment improvement and 22% revenue increase.',
      challenge: 'The client faced severe staging congestion, delayed outbound carrier dispatches, and escalating overtime expenses due to unsynchronized order ingestion and physical pick-pack routing across 8 regional distribution nodes.',
      strategy: 'DBMG deployed the full four-phase ALVI Framework based on Lean Dynamics. By diagnosing serial batch bottlenecks and shifting to pull-based wave sequencing, the operational floor achieved unprecedented throughput velocity.',
      frameworkApplication: [
        'Analysis: 14-day telemetry audit identified that 41% of dwell time occurred during manual dock reassignment.',
        'Logistics: Reconfigured inbound staging to dynamic cross-dock routing; eliminated 2 miles of daily forklift deadhead travel per worker.',
        'Validation: Conducted a 3-week pilot on Node 03, achieving 29% cycle-time reduction without added equipment.',
        'Implementation: Full enterprise rollout across 8 facilities with executive dashboard telemetry and daily Kaizen standups.',
      ],
      auditedResults: [
        { label: 'Fulfillment Improvement', value: '34%', subtext: 'Measured by dock-to-dispatch latency compression' },
        { label: 'Revenue Increase', value: '22%', subtext: 'Accommodated higher client volume without adding fixed overhead' },
        { label: 'Overtime Expense Reduction', value: '48%', subtext: 'Normalized shifts through Lean Dynamics pacing' },
        { label: 'Audit Timeline', value: '90 Days', subtext: 'From diagnostic initiation to complete enterprise adoption' },
      ],
      confidentialityNote: 'Client corporate identity protected under bilateral mutual NDA. Audited figures verified by external advisory review.',
    },
    'tab-b': {
      id: 'tab-b',
      tabLabel: 'Tab B: Retail Residential',
      category: 'Retail Residential',
      title: '$300k - $500k Portfolio Cash Flow Acquisition',
      valueOrScale: '$1.23 Million Total Capital Deployed (3 Properties)',
      primaryMetric: '$410,000',
      secondaryMetric: '11.4% CoC',
      summary: 'Retail Residential ($300k - $500k Portfolio Case Study highlighting the identification and acquisition of 3 distinct cash-flowing sub-division properties averaging $410,000 using direct local exchange data).',
      challenge: 'A private family investment office required rapid capital redeployment into turnkey, recession-resistant single-family residential assets in high-employment sub-divisions without competing in bidding wars on public MLS portals.',
      strategy: 'Velocity RE leveraged direct local exchange telemetry and off-market homeowner criteria matching. We identified three non-public properties held by portfolio downsizing owners willing to execute direct transactions.',
      frameworkApplication: [
        'Criteria Identification: Established rigid buy-box parameters: modern builds (< 10 yrs), minimum 8.5% gross yield, low deferred capex.',
        'Off-Market Matching: Filtered proprietary exchange datasets to pinpoint off-market owners seeking discrete dispositions.',
        'Strategic Introduction: Facilitated direct seller-buyer negotiations with unified closing covenants, eliminating intermediary bidding premiums.',
      ],
      auditedResults: [
        { label: 'Average Acquisition Price', value: '$410,000', subtext: 'Properties acquired at $395k, $415k, and $420k' },
        { label: 'Portfolio Properties Acquired', value: '3 Units', subtext: 'Acquired concurrently in a synchronized closing cycle' },
        { label: 'Cash-on-Cash Return', value: '11.4%', subtext: 'Supported by stabilized long-term tenant contracts' },
        { label: 'Purchase-to-Appraisal Delta', value: '8.7% Equity', subtext: 'Day-one equity captured below market replacement cost' },
      ],
      confidentialityNote: 'Direct exchange records held under private investor mandate. Addresses anonymized to protect tenant leases.',
    },
    'tab-c': {
      id: 'tab-c',
      tabLabel: 'Tab C: Private Pocket Listings',
      category: 'Private Pocket Listings',
      title: '$1.45 Million Discrete Waterfront Estate Introduction',
      valueOrScale: '$600k - $2M Luxury Residences Bracket',
      primaryMetric: '$1.45M',
      secondaryMetric: '100%',
      summary: 'Private Pocket Listings ($600k - $2M Luxury Residences Case Study detailing a discrete $1.45 Million private waterfront estate introduction with 100% off-market data protection).',
      challenge: 'A high-profile executive required the disposition of a prominent custom waterfront residence without public internet exposure, open houses, or neighborhood disruption that could compromise personal security and valuation leverage.',
      strategy: 'Operating strictly as transactional acquisition partners, Velocity RE executed our proprietary Pocket Listing Service. We curated a blind offering memorandum distributed exclusively to pre-vetted private wealth principals under active NDA.',
      frameworkApplication: [
        'Criteria Identification: Seller mandated zero public photography syndication and a strict 45-day clean closing timeline.',
        'Active Off-Market Matching: Directly matched against an approved private acquisition mandate from our vetted buyer database.',
        'Strategic Alignment: Coordinated private after-hours walkthroughs and direct contract execution through escrow without MLS presence.',
      ],
      auditedResults: [
        { label: 'Private Transaction Value', value: '$1.45M', subtext: 'Closed within 1.8% of seller target valuation' },
        { label: 'Off-Market Privacy Protection', value: '100%', subtext: 'Zero digital footprint on Zillow, Redfin, or MLS boards' },
        { label: 'Closing Velocity', value: '38 Days', subtext: 'From initial introduction to private title handover' },
        { label: 'Transaction Partner Fee Advantage', value: '$43,500', subtext: 'Direct transactional structure vs standard 6% retail brokerage drag' },
      ],
      confidentialityNote: '100% off-market transactional covenant. Property imagery and location redacted under executed seller covenant.',
    },
    'tab-d': {
      id: 'tab-d',
      tabLabel: 'Tab D: Commercial Property',
      category: 'Commercial Property',
      title: '$1.85 Million Suburban Medical-Professional Office Realignment',
      valueOrScale: '24,000 Sq. Ft. Multi-Tenant Medical Facility',
      primaryMetric: '8.2%',
      secondaryMetric: '$1.85M',
      summary: 'Commercial Property (A $1.85 Million Suburban Medical-Professional Office Building realignment case study securing an 8.2% cap rate via off-market principal introduction).',
      challenge: 'A suburban medical office facility suffered from expiring tenant leases, high property management fees, and seller succession deadlock. The property was at risk of severe capitalization rate erosion if brought to public auction.',
      strategy: 'Velocity RE intervened with a bilateral acquisition framework. We synchronized the lease renegotiation of two anchor healthcare tenants while privately introducing an institutional commercial buyer specializing in stabilized medical office assets.',
      frameworkApplication: [
        'Criteria Identification: Underwrote operational improvements and net operating income (NOI) stabilization before marketing.',
        'Off-Market Matching: Targeted three institutional medical-office real estate investment groups with active local dry powder.',
        'Strategic Alignment: Closed an off-market contract ensuring 10-year anchor renewals and an 8.2% in-place capitalization rate.',
      ],
      auditedResults: [
        { label: 'Secured Cap Rate', value: '8.2%', subtext: 'Outperforming regional suburban benchmark of 6.8%' },
        { label: 'Asset Acquisition Value', value: '$1.85M', subtext: 'Funded via direct principal introduction' },
        { label: 'Anchor Tenant Retention', value: '100%', subtext: 'Secured 7-year and 10-year healthcare lease covenants' },
        { label: 'Annual Net Operating Income', value: '$151,700', subtext: 'Stabilized in-place cash flow post-realignment' },
      ],
      confidentialityNote: 'Commercial tenant leases and financial pro-formas protected under executed bilateral purchase covenant.',
    },
  };

  const currentStudy = caseStudies[activeTabId];

  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-brandRed font-bold">
            Audited Corporate Performance &bull; DBMG &amp; Velocity RE
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-brandNavy tracking-tight leading-tight max-w-4xl">
            Executive Case Studies Dashboard
          </h1>

          <p className="text-lg text-textSlate max-w-3xl leading-relaxed">
            Review verifiable, data-backed case studies illustrating the execution of the ALVI Framework and Velocity RE&apos;s discrete off-market acquisition partnerships.
          </p>

          {/* Interactive Case Study Tabs */}
          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            {(['tab-a', 'tab-b', 'tab-c', 'tab-d'] as const).map((tabKey) => {
              const study = caseStudies[tabKey];
              const isActive = activeTabId === tabKey;

              return (
                <button
                  key={tabKey}
                  onClick={() => setActiveTabId(tabKey)}
                  className={`p-4 text-left rounded-lg transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-brandNavy text-white border-brandNavy shadow-md ring-2 ring-brandNavy/20'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className={`text-[10px] font-mono uppercase tracking-wider font-bold mb-1 ${
                    isActive ? 'text-brandBlue' : 'text-slate-400'
                  }`}>
                    {study.category}
                  </div>
                  <div className="text-xs sm:text-sm font-bold line-clamp-2 leading-snug">
                    {study.tabLabel}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Case Study Details Display */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-slate-200 shadow-md p-8 lg:p-12 space-y-10 animate-in fade-in duration-200">
          {/* Top Title & Quick Metrics Banner */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 text-brandNavy border border-slate-200 text-xs font-mono font-bold uppercase tracking-wider">
                <FileCheck2 className="w-3.5 h-3.5 text-brandRed" />
                <span>{currentStudy.category} &bull; Case Record</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brandNavy tracking-tight">
                {currentStudy.title}
              </h2>
              <div className="text-sm font-mono text-slate-500">
                Scope &amp; Valuation: <span className="font-semibold text-brandNavy">{currentStudy.valueOrScale}</span>
              </div>
              <p className="text-base text-textSlate leading-relaxed pt-2">
                {currentStudy.summary}
              </p>
            </div>

            {/* Featured KPI Badges */}
            <div className="flex sm:flex-col gap-4 shrink-0 font-mono">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-center min-w-[140px]">
                <div className="text-3xl font-extrabold text-brandRed tabular-nums">
                  {currentStudy.primaryMetric}
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">
                  Primary Outcome
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-center min-w-[140px]">
                <div className="text-2xl font-extrabold text-brandNavy tabular-nums">
                  {currentStudy.secondaryMetric}
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">
                  Secondary Benchmark
                </div>
              </div>
            </div>
          </div>

          {/* Context, Challenge, and Strategy Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-xs font-bold text-brandRed uppercase tracking-wider font-mono">
                The Operational Challenge:
              </div>
              <p className="text-sm text-textSlate leading-relaxed">
                {currentStudy.challenge}
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-xs font-bold text-brandBlue uppercase tracking-wider font-mono">
                The Advisory &amp; Execution Strategy:
              </div>
              <p className="text-sm text-textSlate leading-relaxed">
                {currentStudy.strategy}
              </p>
            </div>
          </div>

          {/* Framework Execution Breakdown */}
          <div className="space-y-4">
            <div className="text-xs font-bold text-brandNavy uppercase tracking-wider font-mono">
              {currentStudy.id === 'tab-a' ? 'Full ALVI Framework Execution Breakdown:' : 'Velocity RE Off-Market Acquisition Execution:'}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentStudy.frameworkApplication.map((stepText, idx) => (
                <div key={idx} className="p-4 rounded border border-slate-200 bg-white flex items-start gap-3 shadow-xs">
                  <div className="w-6 h-6 rounded bg-brandNavy text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {stepText}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audited Results Grid */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-brandNavy uppercase tracking-wider font-mono">
                Audited Quantitative Metrics:
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Verified Performance Telemetry
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentStudy.auditedResults.map((metric, i) => (
                <div key={i} className="p-5 rounded-lg border border-slate-200 bg-slate-50/50">
                  <div className="text-2xl font-extrabold text-brandNavy font-mono tabular-nums mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold text-slate-700">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                    {metric.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Confidentiality Footer */}
          {currentStudy.confidentialityNote && (
            <div className="p-4 rounded bg-slate-100 border border-slate-200 flex items-center gap-3 text-xs text-slate-600 font-mono">
              <ShieldCheck className="w-4 h-4 text-brandBlue shrink-0" />
              <span>{currentStudy.confidentialityNote}</span>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Cap Rate & Operational Yield Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-xl border border-slate-800 p-8 sm:p-12 shadow-xl space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brandBlue font-bold">
                <Calculator className="w-4 h-4 text-brandBlue" />
                <span>Executive Modeling Tool</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Real-Time Cap Rate &amp; Operational Yield Calculator
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
                Test how DBMG&apos;s ALVI operational streamlining impacts commercial property NOI, capitalization rates, and annual cash-flow acceleration.
              </p>
            </div>

            <div className="p-4 bg-brandNavy rounded-lg border border-slate-700 text-right font-mono">
              <div className="text-xs text-slate-400">Projected Cap Rate Yield</div>
              <div className="text-3xl font-extrabold text-brandBlue tabular-nums">
                {optimizedCapRate.toFixed(2)}%
              </div>
              <div className="text-[11px] text-emerald-400 font-semibold">
                +{(optimizedCapRate - baselineCapRate).toFixed(2)}% Operational Lift
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">Target Acquisition / Valuation Price:</span>
                  <span className="font-bold text-white tabular-nums">${calcPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="10000000"
                  step="50000"
                  value={calcPrice}
                  onChange={(e) => setCalcPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brandBlue"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">Annual Gross Operating Revenue:</span>
                  <span className="font-bold text-white tabular-nums">${calcGrossRevenue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="1500000"
                  step="10000"
                  value={calcGrossRevenue}
                  onChange={(e) => setCalcGrossRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brandBlue"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">Current Opex Ratio:</span>
                    <span className="font-bold text-amber-400 tabular-nums">{calcOpexRatio}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="65"
                    step="1"
                    value={calcOpexRatio}
                    onChange={(e) => setCalcOpexRatio(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">ALVI Lean Efficiency Savings:</span>
                    <span className="font-bold text-brandRed tabular-nums">{calcEfficiencyGain}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="35"
                    step="1"
                    value={calcEfficiencyGain}
                    onChange={(e) => setCalcEfficiencyGain(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brandRed"
                  />
                </div>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="lg:col-span-5 bg-slate-800/80 rounded-lg p-6 border border-slate-700 space-y-4 font-mono text-xs">
              <div className="text-slate-400 uppercase tracking-wider font-bold">
                Audited Financial Modeling Impact:
              </div>

              <div className="space-y-2.5">
                <div className="flex justify-between pb-2 border-b border-slate-700">
                  <span className="text-slate-400">Baseline NOI (Pre-Optimization):</span>
                  <span className="font-bold text-slate-300 tabular-nums">${Math.round(baselineNoi).toLocaleString()}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-700">
                  <span className="text-slate-400">Baseline Capitalization Rate:</span>
                  <span className="font-bold text-slate-300 tabular-nums">{baselineCapRate.toFixed(2)}%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-700">
                  <span className="text-emerald-400 font-bold">Optimized NOI (ALVI Lean):</span>
                  <span className="font-bold text-emerald-400 tabular-nums">${Math.round(optimizedNoi).toLocaleString()}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-700">
                  <span className="text-brandBlue font-bold">Optimized Cap Rate:</span>
                  <span className="font-bold text-brandBlue tabular-nums">{optimizedCapRate.toFixed(2)}%</span>
                </div>
                <div className="flex justify-between text-white font-bold pt-1">
                  <span>Annual Net Margin Expansion:</span>
                  <span className="text-amber-400 tabular-nums">+${Math.round(annualSavings).toLocaleString()}/yr</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onTabChange('contact')}
                  className="w-full py-2.5 bg-brandRed hover:bg-[#8f1515] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
                >
                  Model Your Enterprise Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
