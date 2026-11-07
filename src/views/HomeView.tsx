/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavTab } from '../types.ts';
import { 
  ArrowUpRight, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  Workflow, 
  Compass, 
  ChevronRight,
  Target
} from 'lucide-react';

interface HomeViewProps {
  onTabChange: (tab: NavTab) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onTabChange }) => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-10 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Quiet unboxed kicker */}
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500">
                <span className="font-semibold text-brandRed">DBMG Strategic Advisory</span>
                <span aria-hidden="true">&bull;</span>
                <span>Lean Dynamics</span>
                <span aria-hidden="true">&bull;</span>
                <span className="text-brandBlue font-semibold">Velocity RE</span>
              </div>

              {/* Exact User Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brandNavy tracking-tight leading-[1.1] text-balance">
                Driving Revenue, Productivity, and Efficiency for Over Twenty Years.
              </h1>

              {/* Exact User Subheadline */}
              <p className="text-lg sm:text-xl text-textSlate font-normal leading-relaxed max-w-2xl text-balance">
                From Fortune 500 companies to high-growth startups, we engineer high-impact operational and growth strategies.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onTabChange('contact')}
                  className="px-7 py-3.5 bg-brandRed hover:bg-[#8f1515] text-white text-sm font-bold uppercase tracking-wider rounded shadow-sm transition-all duration-150 inline-flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandRed"
                >
                  <span>Request Executive Briefing</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onTabChange('about')}
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-brandNavy border border-slate-300 text-sm font-bold uppercase tracking-wider rounded transition-all duration-150 inline-flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandNavy"
                >
                  <span>Explore ALVI Framework</span>
                  <ChevronRight className="w-4 h-4 text-brandRed" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brandNavy font-mono tabular-nums">
                    34%
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Fulfillment Velocity Lift
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brandRed font-mono tabular-nums">
                    22%
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Revenue Expansion
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brandBlue font-mono tabular-nums">
                    100%
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Off-Market Privacy Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <img
                  src="/src/assets/images/dbmg_corporate_hero_1793996283367.jpg"
                  alt="DBMG Consulting Strategic Advisory Boardroom"
                  className="w-full h-[420px] object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brandNavy/80 via-brandNavy/20 to-transparent" />
                
                {/* Floating Structured Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded border border-white/40 shadow-lg text-brandNavy">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-brandRed font-bold">
                        Enterprise Operational Rigor
                      </div>
                      <div className="text-sm font-bold text-brandNavy mt-0.5">
                        ALVI Lean Dynamics Framework
                      </div>
                      <div className="text-xs text-slate-600 mt-1">
                        Analysis &bull; Logistics &bull; Validation &bull; Implementation
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brandNavy text-white flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4 text-brandBlue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-brandRed font-bold">
            Executive Advisory Practices
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brandNavy tracking-tight">
            Engineered Core Operational Pillars
          </h2>
          <p className="text-slate-600 leading-relaxed">
            DBMG Consulting deploys three synchronized practices to address high-friction bottlenecks and architect sustainable competitive advantage.
          </p>
        </div>

        {/* 3 Service Blocks with thin slate gray borders and brandRed hover accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div 
            onClick={() => onTabChange('about')}
            className="group cursor-pointer bg-white p-8 rounded border border-slate-200 transition-all duration-200 hover:border-brandRed hover:shadow-md flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-brandNavy group-hover:bg-brandRed group-hover:text-white transition-colors">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-slate-400">Pillar 01</div>
              <h3 className="text-xl font-bold text-brandNavy group-hover:text-brandRed transition-colors">
                Business Development Strategies &amp; Tools
              </h3>
              <p className="text-sm text-textSlate leading-relaxed">
                Structuring high-velocity market penetration strategies, enterprise revenue engineering, partner channel activation, and modern acquisition toolsets.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brandNavy group-hover:text-brandRed">
              <span>View Methodology</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Pillar 2 */}
          <div 
            onClick={() => onTabChange('about')}
            className="group cursor-pointer bg-white p-8 rounded border border-slate-200 transition-all duration-200 hover:border-brandRed hover:shadow-md flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-brandNavy group-hover:bg-brandRed group-hover:text-white transition-colors">
                <Workflow className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-slate-400">Pillar 02</div>
              <h3 className="text-xl font-bold text-brandNavy group-hover:text-brandRed transition-colors">
                Operational Strategies &amp; Tools
              </h3>
              <p className="text-sm text-textSlate leading-relaxed">
                Streamlining complex fulfillment workflows, eliminating operational friction, synchronizing supply chains, and embedding automated Lean execution mechanisms.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brandNavy group-hover:text-brandRed">
              <span>View Methodology</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Pillar 3 */}
          <div 
            onClick={() => onTabChange('about')}
            className="group cursor-pointer bg-white p-8 rounded border border-slate-200 transition-all duration-200 hover:border-brandRed hover:shadow-md flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-brandNavy group-hover:bg-brandRed group-hover:text-white transition-colors">
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-slate-400">Pillar 03</div>
              <h3 className="text-xl font-bold text-brandNavy group-hover:text-brandRed transition-colors">
                Management Consulting
              </h3>
              <p className="text-sm text-textSlate leading-relaxed">
                Direct C-suite organizational realignment, executive team enablement, capital allocation strategy, and corporate governance for accelerated enterprise scale.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brandNavy group-hover:text-brandRed">
              <span>View Methodology</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* The ALVI Framework Teaser */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-brandRed font-bold mb-2">
                Proprietary Methodology
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brandNavy tracking-tight">
                The ALVI Framework
              </h2>
              <p className="text-slate-600 mt-2 max-w-xl">
                Built upon Lean Dynamics methodology, our 4-stage systematic engine diagnoses vulnerabilities and executes scalable operational transformations.
              </p>
            </div>
            <button
              onClick={() => onTabChange('about')}
              className="px-5 py-2.5 bg-brandNavy text-white hover:bg-slate-800 text-xs font-bold uppercase tracking-wider rounded inline-flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>Explore Detailed Stages</span>
              <ChevronRight className="w-4 h-4 text-brandBlue" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                letter: 'A',
                title: 'Analysis',
                desc: 'Deep diagnostic auditing of existing workflows, root-cause friction identification, and baseline KPI telemetry.',
              },
              {
                letter: 'L',
                title: 'Logistics',
                desc: 'Process orchestration, resource reconfiguration, cycle-time compression, and internal supply synchronization.',
              },
              {
                letter: 'V',
                title: 'Validation',
                desc: 'Controlled pilot stress-testing, rapid hypothesis testing, and Lean variance containment before wide rollout.',
              },
              {
                letter: 'I',
                title: 'Implementation',
                desc: 'Enterprise execution, SOP institutionalization, executive governance dashboards, and continuous improvement.',
              },
            ].map((step) => (
              <div 
                key={step.letter}
                className="bg-white p-6 rounded border border-slate-200 shadow-sm hover:border-brandRed transition-all"
              >
                <div className="w-12 h-12 bg-brandRed text-white rounded font-extrabold text-2xl flex items-center justify-center mb-4 shadow-sm">
                  {step.letter}
                </div>
                <h3 className="text-lg font-bold text-brandNavy mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-textSlate leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Velocity RE Sub-Brand Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl overflow-hidden bg-gradient-to-r from-brandNavy to-brandBlue text-white shadow-xl border border-slate-800 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="bg-white px-3.5 py-1.5 rounded shadow-sm border border-white/20 inline-flex items-center">
                  <img
                    src="/assets/aistudio/velocity_re_logo_new_182ad17a.png"
                    alt="Velocity RE"
                    className="h-7 w-auto object-contain"
                  />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/10 text-white border border-white/20 text-xs font-mono font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-brandBlue" />
                  <span>100% Off-Market Real Estate Program</span>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Velocity RE — Off-Market Real Estate Consulting &amp; Acquisition Partners.
              </h2>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                Specializing exclusively in private, off-market transactions. We operate strictly as transactional and acquisition partners, not licensed real estate agents.
              </p>
              <div className="p-4 rounded bg-black/25 border border-white/15 text-xs text-slate-300 leading-relaxed font-mono">
                No public MLS portals. Direct alignment between verified sellers and institutional/private principals.
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onTabChange('velocity-re')}
                  className="px-6 py-3 bg-white text-brandNavy hover:bg-slate-100 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Pocket Listing Service</span>
                  <ArrowUpRight className="w-4 h-4 text-brandBlue" />
                </button>
                <button
                  onClick={() => onTabChange('case-studies')}
                  className="px-6 py-3 bg-white/10 text-white hover:bg-white/20 border border-white/30 text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>View Real Estate Transactions</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                  Recent Pocket Closings
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-white/10 rounded border border-white/15">
                    <div className="text-xs text-slate-300">Commercial Office Realignment</div>
                    <div className="text-lg font-bold font-mono text-white">$1.85 Million</div>
                    <div className="text-[11px] text-brandBlue font-mono">8.2% Direct Principal Cap Rate</div>
                  </div>
                  <div className="p-3 bg-white/10 rounded border border-white/15">
                    <div className="text-xs text-slate-300">Discrete Private Waterfront Estate</div>
                    <div className="text-lg font-bold font-mono text-white">$1.45 Million</div>
                    <div className="text-[11px] text-brandBlue font-mono">100% Confidential Introduction</div>
                  </div>
                  <div className="p-3 bg-white/10 rounded border border-white/15">
                    <div className="text-xs text-slate-300">Sub-Division Cash Flow Portfolio</div>
                    <div className="text-lg font-bold font-mono text-white">$1.23 Million Total (3 Units)</div>
                    <div className="text-[11px] text-brandBlue font-mono">$410,000 Avg. Direct Exchange</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid Quick Access */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-brandRed font-bold">
            Sector Competency
          </div>
          <h2 className="text-3xl font-extrabold text-brandNavy tracking-tight">
            Industry Practice Areas
          </h2>
          <p className="text-sm text-slate-600">
            Tailoring operational efficiency frameworks to the unique regulatory, supply, and capital dynamics of each sector.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            'AI Development & Business Tools',
            'Manufacturing',
            'Real Estate',
            'Consumer Products',
            'Commercial & Residential Construction',
            'Insurance, Banking & Finance',
          ].map((industry) => (
            <button
              key={industry}
              onClick={() => onTabChange('industries')}
              className="p-5 text-left bg-white border border-slate-200 rounded hover:border-brandBlue hover:shadow-md transition-all group flex flex-col justify-between h-36 cursor-pointer"
            >
              <div className="text-xs font-mono text-slate-400 group-hover:text-brandBlue transition-colors">
                Sector
              </div>
              <div className="text-sm font-bold text-brandNavy group-hover:text-brandBlue transition-colors leading-snug">
                {industry}
              </div>
              <div className="text-[11px] font-semibold text-brandRed flex items-center gap-1">
                <span>View practice</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Final Briefing CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-slate-900 text-white rounded-lg border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Ready to engineer your operational and growth transformation?
            </h3>
            <p className="text-sm text-slate-400">
              Schedule a confidential discovery briefing with our executive partners.
            </p>
          </div>
          <button
            onClick={() => onTabChange('contact')}
            className="px-6 py-3 bg-brandRed hover:bg-[#8f1515] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
