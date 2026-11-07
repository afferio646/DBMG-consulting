/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab, IndustryData } from '../types.ts';
import { 
  Bot, 
  Factory, 
  Building2, 
  ShoppingBag, 
  HardHat, 
  Landmark, 
  CheckCircle2, 
  ArrowUpRight, 
  BarChart, 
  Sliders
} from 'lucide-react';

interface IndustriesViewProps {
  onTabChange: (tab: NavTab) => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({ onTabChange }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null);

  const industries: (IndustryData & { icon: React.ReactNode })[] = [
    {
      id: 'ai-development',
      name: 'AI Development & Business Tools',
      tagline: 'Scaling AI tooling workflows, engineering governance, and commercialization models.',
      icon: <Bot className="w-6 h-6 text-brandNavy" />,
      description: 'Bridging technical model breakthroughs with scalable enterprise monetization. We help AI software labs, LLM integration providers, and enterprise automation teams build resilient operational pipelines and disciplined pricing models.',
      challenges: [
        'High inference infrastructure costs outpacing contract gross margins',
        'Fragmented product-to-revenue handoffs and undefined enterprise SLAs',
        'Operational bottleneck in rapid customer data onboarding and model tuning',
      ],
      solutions: [
        'Infrastructure cost-per-inference unit economic models',
        'ALVI-synchronized enterprise pilot-to-contract conversion funnels',
        'Automated onboarding governance frameworks reducing integration latency',
      ],
      impactMetric: '42% Reduction',
      metricLabel: 'In customer onboarding latency',
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      tagline: 'Precision Lean Dynamics for discrete and process manufacturing ecosystems.',
      icon: <Factory className="w-6 h-6 text-brandNavy" />,
      description: 'Applying root-level Lean Dynamics to high-variability production lines. We harmonize material staging, eliminate setup downtime (SMED), and implement continuous visual management to preserve gross margins against supply shocks.',
      challenges: [
        'Unplanned changeover downtime and high work-in-progress (WIP) buffer accumulation',
        'Sub-optimal machine utilization rates and scrap rate volatility',
        'Siloed coordination between procurement, shop floor, and executive planning',
      ],
      solutions: [
        'Single-Minute Exchange of Die (SMED) setup compression protocols',
        'Pull-based Kanban scheduling synchronized directly to downstream shipping',
        'Statistical Process Control (SPC) automated telemetry dashboards',
      ],
      impactMetric: '34% Increase',
      metricLabel: 'In overall fulfillment throughput',
    },
    {
      id: 'real-estate',
      name: 'Real Estate',
      tagline: 'Transactional synchronization, portfolio yield enhancement, and Velocity RE advisory.',
      icon: <Building2 className="w-6 h-6 text-brandNavy" />,
      description: 'Operating at the intersection of operational property management and private capital advisory. Through our proprietary Velocity RE program, we match discreet off-market residential and commercial assets with aligned capital partners.',
      challenges: [
        'Public listing exposure causing transaction slippage and discount pressure',
        'Under-optimized NOI due to excessive operating expense ratios',
        'Information asymmetry in discrete pocket listings and private exchanges',
      ],
      solutions: [
        'Velocity RE 100% confidential off-market pocket listing introductions',
        'ALVI operational audit of tenant management and facilities contracts',
        'Direct cash flow underwriting using local exchange data',
      ],
      impactMetric: '8.2% Cap Rate',
      metricLabel: 'Secured on private commercial acquisitions',
    },
    {
      id: 'consumer-products',
      name: 'Consumer Products',
      tagline: 'Omnichannel fulfillment synchronization, inventory turnover, and SKU rationalization.',
      icon: <ShoppingBag className="w-6 h-6 text-brandNavy" />,
      description: 'Engineering resilient supply chain velocity for modern consumer product brands. We balance DTC ecommerce speed with national retail distribution compliance, freeing locked working capital.',
      challenges: [
        'Trapped capital in slow-velocity inventory SKUs and seasonal deadstock',
        'High chargeback penalties from big-box retail compliance variance',
        'Elevated 3PL pick-pack-ship costs eroding direct-to-consumer margins',
      ],
      solutions: [
        'Rigorous SKU Pareto analysis to prune margin-dilutive inventory',
        'Automated 3PL performance auditing and SLA enforcement',
        'Demand-driven safety stock algorithms protecting cash flow',
      ],
      impactMetric: '28% Velocity Lift',
      metricLabel: 'In annualized inventory turnover',
    },
    {
      id: 'construction',
      name: 'Commercial & Residential Construction',
      tagline: 'Jobsite operational cadence, subcontractor synchronization, and critical path control.',
      icon: <HardHat className="w-6 h-6 text-brandNavy" />,
      description: 'Bringing Lean Construction principles to residential and commercial general contractors. We shorten build cycles, mitigate schedule slippage, and improve cash flow draw cycles.',
      challenges: [
        'Cascading schedule delays between trade handoffs on critical paths',
        'Discrepancies in sub-tier material staging resulting in idle trade hours',
        'Delayed milestone billing verification slowing project working capital',
      ],
      solutions: [
        'Last Planner System (LPS) daily milestone synchronization',
        'Just-in-time material staging protocols to unclutter active jobsites',
        'Automated progress photo & inspection sign-off workflows',
      ],
      impactMetric: '19 Days Saved',
      metricLabel: 'Average cycle reduction per build phase',
    },
    {
      id: 'finance-banking',
      name: 'Insurance, Banking & Finance',
      tagline: 'Underwriting process acceleration, risk governance, and operational compliance.',
      icon: <Landmark className="w-6 h-6 text-brandNavy" />,
      description: 'Streamlining high-touch underwriting and compliance workflows for regional banks, specialty insurance carriers, and private equity lenders. We eliminate paper friction without compromising regulatory rigor.',
      challenges: [
        'Multi-week turnaround delays in commercial loan underwriting packages',
        'Redundant manual data reconciliation between legacy core systems',
        'Customer churn during protracted compliance documentation phases',
      ],
      solutions: [
        'ALVI Lean audit of credit committee packet assembly pipelines',
        'Automated document verification and cross-database intake engines',
        'Executive tracking of loan velocity from application to funding',
      ],
      impactMetric: '55% Faster',
      metricLabel: 'Underwriting package completion turnaround',
    },
  ];

  const filteredIndustries = activeFilter === 'all' 
    ? industries 
    : industries.filter(ind => ind.id === activeFilter);

  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-brandRed font-bold">
            Sector Competency &bull; DBMG Consulting
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-brandNavy tracking-tight leading-tight max-w-4xl">
            Core Industry Practice Areas
          </h1>

          <p className="text-lg text-textSlate max-w-3xl leading-relaxed">
            Every sector possesses distinct operational bottlenecks, regulatory covenants, and supply chain physics. We deploy the ALVI Framework across six foundational industries to engineer quantifiable productivity gains.
          </p>

          {/* Interactive Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded text-xs font-bold font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-brandNavy text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-brandNavy'
              }`}
            >
              All Sectors (6)
            </button>
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveFilter(ind.id)}
                className={`px-3.5 py-1.5 rounded text-xs font-medium transition-colors cursor-pointer ${
                  activeFilter === ind.id
                    ? 'bg-brandNavy text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-brandNavy'
                }`}
              >
                {ind.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Layout: Using brandNavy text headers with a subtle brandBlue bottom border rule */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIndustries.map((industry) => {
            const isExpanded = expandedIndustry === industry.id;

            return (
              <div
                key={industry.id}
                className="bg-white rounded-lg border border-slate-200 shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div className="space-y-6">
                  {/* Top Bar with Icon & Impact Metric */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-brandBlue/10 transition-colors">
                      {industry.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-extrabold text-brandRed font-mono tabular-nums">
                        {industry.impactMetric}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        {industry.metricLabel}
                      </div>
                    </div>
                  </div>

                  {/* Header in brandNavy text with a subtle brandBlue bottom border rule */}
                  <div>
                    <h3 className="text-xl font-bold text-brandNavy pb-2 border-b-2 border-brandBlue inline-block tracking-tight">
                      {industry.name}
                    </h3>
                    <p className="text-xs text-brandBlue font-semibold mt-2.5">
                      {industry.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-textSlate leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Collapsible Scopes and Challenges */}
                  {isExpanded ? (
                    <div className="space-y-4 pt-4 border-t border-slate-100 animate-in fade-in duration-200 text-xs">
                      <div>
                        <div className="font-bold text-brandNavy uppercase tracking-wider font-mono mb-2">
                          Operational Friction Solved:
                        </div>
                        <ul className="space-y-1.5 text-slate-600">
                          {industry.challenges.map((c, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-brandRed font-bold">&times;</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <div className="font-bold text-brandNavy uppercase tracking-wider font-mono mb-2">
                          DBMG Deployed Levers:
                        </div>
                        <ul className="space-y-1.5 text-slate-700">
                          {industry.solutions.map((s, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue mt-0.5 shrink-0" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setExpandedIndustry(isExpanded ? null : industry.id)}
                    className="text-xs font-bold text-brandNavy hover:text-brandBlue inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5 text-brandBlue" />
                    <span>{isExpanded ? 'Hide Methodology Scope' : 'Inspect Practice Scope'}</span>
                  </button>

                  <button
                    onClick={() => onTabChange('contact')}
                    className="text-xs font-semibold text-brandRed hover:text-[#8f1515] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Cross-Functional Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-xl bg-slate-900 text-white border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-brandBlue font-bold">
                Multi-Sector Operational Transferability
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Operating in a Specialized or Regulated Niche?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                The core mechanics of Lean Dynamics — cycle time, inventory velocity, variance isolation, and throughput maximization — apply universally across high-complexity business models.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onTabChange('contact')}
                className="px-6 py-3.5 bg-brandRed hover:bg-[#8f1515] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 shadow"
              >
                <span>Request Custom Industry Briefing</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
