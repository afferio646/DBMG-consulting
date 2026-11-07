/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab } from '../types.ts';
import { 
  TrendingUp, 
  Workflow, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  BarChart3, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface AboutViewProps {
  onTabChange: (tab: NavTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onTabChange }) => {
  const [selectedAlviStep, setSelectedAlviStep] = useState<'A' | 'L' | 'V' | 'I'>('A');

  const alviStages = {
    A: {
      letter: 'A',
      title: 'Analysis',
      subtitle: 'Diagnostic Auditing & Bottleneck Identification',
      corePhilosophy: 'We never guess. Every engagement begins with comprehensive quantitative baseline mapping of operational telemetry.',
      keyWorkflows: [
        'Root-cause diagnostic audits across end-to-end supply chains and operational workflows',
        'Data ingestion & telemetry baseline: measuring cycle latency, capacity bottlenecks, and variance points',
        'Direct stakeholder and operational personnel interviews to map unwritten friction points',
        'Comprehensive friction matrix classifying cost-to-remedy vs. enterprise revenue impact',
      ],
      deliverables: [
        'Full Enterprise Operational Diagnostic Audit',
        'Process Telemetry Baseline Benchmark',
        'Bottleneck Elimination Priority Roadmap',
      ],
      leanDynamicsPrinciple: 'Identify and isolate non-value-added activities (Muda, Muri, Mura) with mathematical precision before altering workflows.',
    },
    L: {
      letter: 'L',
      title: 'Logistics',
      subtitle: 'Process Orchestration & Workflow Synchronization',
      corePhilosophy: 'Operational excellence requires synchronization. We re-engineer how capital, resources, and data circulate through the organization.',
      keyWorkflows: [
        'End-to-end supply routing and internal material/data flow reconfiguration',
        'Elimination of redundant approval hierarchies and decision serialization',
        'Procurement timeline compression and inventory turn optimization',
        'Custom tool integration bridging business development triggers directly to operations',
      ],
      deliverables: [
        'Synchronized Multi-Echelon Workflow Protocol',
        'Fulfillment Acceleration Architecture',
        'Operational Lead-Time Compression Model',
      ],
      leanDynamicsPrinciple: 'Establish continuous, balanced one-piece flow; minimize batch sizes and transition delays across all department interfaces.',
    },
    V: {
      letter: 'V',
      title: 'Validation',
      subtitle: 'Stress-Testing & Rapid Pilot Hypothesis Verification',
      corePhilosophy: 'Transformations fail when rolled out without empirical validation. We stress-test every operational re-design in controlled environments.',
      keyWorkflows: [
        'Controlled operational pilot deployment within high-friction isolated business units',
        'Monte Carlo stress-testing against volume spikes, supply shocks, and personnel changes',
        'Variance containment and statistical process control (SPC) threshold calibration',
        'Feedback synthesis with executive sponsors to fine-tune operational levers',
      ],
      deliverables: [
        'Pilot Validation Scorecard & Telemetry Log',
        'Variance & Exception Containment Protocol',
        'Enterprise Rollout Feasibility Assurance',
      ],
      leanDynamicsPrinciple: 'Validate standard work with empirical variance testing; verify that improvements produce net margin gains without hidden liabilities.',
    },
    I: {
      letter: 'I',
      title: 'Implementation',
      subtitle: 'Enterprise Rollout & Continuous Lean Governance',
      corePhilosophy: 'True transformation is durable. We institutionalize new operational behaviors into daily habits and executive oversight.',
      keyWorkflows: [
        'Enterprise-wide rollout with structured SOP documentation and hands-on team enablement',
        'Executive telemetry dashboards providing real-time visibility into productivity and margins',
        'Incentive realignment linking department performance directly to throughput velocity',
        'Continuous Lean governance cycles to prevent operational regression over multi-year horizons',
      ],
      deliverables: [
        'Institutional Standard Operating Procedures (SOPs)',
        'Executive Real-Time Throughput & Margin Dashboard',
        'Continuous Lean Governance & Accountability System',
      ],
      leanDynamicsPrinciple: 'Sustain continuous incremental improvement (Kaizen) supported by transparent, real-time feedback loops.',
    },
  };

  const currentStage = alviStages[selectedAlviStep];

  return (
    <div className="space-y-24 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brandRed font-bold">
            <span>About DBMG Consulting</span>
            <span aria-hidden="true">&bull;</span>
            <span className="text-slate-500 font-normal">Executive Profile</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-brandNavy tracking-tight leading-tight max-w-4xl">
            Driving Revenue, Productivity, and Efficiency for Over Twenty Years.
          </h1>

          <p className="text-lg sm:text-xl text-textSlate max-w-3xl leading-relaxed">
            From Fortune 500 companies to high-growth startups, we engineer high-impact operational and growth strategies.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brandRed" />
              <span>Lean Dynamics Methodology</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brandBlue" />
              <span>Proprietary ALVI Framework</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-brandNavy" />
              <span>Audited Operational Synchronization</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3 max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-widest text-brandRed font-bold">
            Strategic Architecture
          </div>
          <h2 className="text-3xl font-extrabold text-brandNavy tracking-tight">
            Our Three Core Pillars
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Every engagement is architected around three foundational pillars engineered with thin slate gray borders and brandRed hover accents.
          </p>
        </div>

        {/* 3 Core Pillars with thin slate gray borders and brandRed hover accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="group bg-white p-8 rounded border border-slate-200 transition-all duration-200 hover:border-brandRed hover:shadow-lg flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-brandNavy group-hover:bg-brandRed group-hover:text-white transition-colors">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div className="text-xs font-mono text-slate-400">Pillar 01</div>
              <h3 className="text-2xl font-bold text-brandNavy group-hover:text-brandRed transition-colors">
                Business Development Strategies &amp; Tools
              </h3>
              <p className="text-sm text-textSlate leading-relaxed">
                We design revenue generation engines that outpace competitors. From market sizing to partner channel enablement, we build repeatable commercial funnels powered by customized data analytics and strategic outreach tools.
              </p>
              
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="text-xs font-bold text-brandNavy uppercase tracking-wider font-mono">
                  Core Competencies:
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                  <li>Enterprise Revenue Architecture &amp; Pricing Models</li>
                  <li>Outbound Partner &amp; Channel Distribution Engines</li>
                  <li>Client Acquisition Pipeline Automation</li>
                  <li>Go-To-Market Execution for High-Growth Startups</li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-brandRed flex items-center justify-between">
              <span>ALVI-Integrated Strategy</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="group bg-white p-8 rounded border border-slate-200 transition-all duration-200 hover:border-brandRed hover:shadow-lg flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-brandNavy group-hover:bg-brandRed group-hover:text-white transition-colors">
                <Workflow className="w-7 h-7" />
              </div>
              <div className="text-xs font-mono text-slate-400">Pillar 02</div>
              <h3 className="text-2xl font-bold text-brandNavy group-hover:text-brandRed transition-colors">
                Operational Strategies &amp; Tools
              </h3>
              <p className="text-sm text-textSlate leading-relaxed">
                Operational drag silently erodes enterprise margins. We apply rigorous Lean Dynamics to eliminate workflow bottlenecks, compress fulfillment cycles, synchronize inventory turns, and install real-time operations dashboards.
              </p>
              
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="text-xs font-bold text-brandNavy uppercase tracking-wider font-mono">
                  Core Competencies:
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                  <li>Lean Dynamics Workflow Synchronization</li>
                  <li>Supply Chain Optimization &amp; Inventory Turns</li>
                  <li>Cycle-Time Compression &amp; Lead-Time Reduction</li>
                  <li>Operational Telemetry &amp; Error Containment</li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-brandRed flex items-center justify-between">
              <span>ALVI-Integrated Strategy</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="group bg-white p-8 rounded border border-slate-200 transition-all duration-200 hover:border-brandRed hover:shadow-lg flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-brandNavy group-hover:bg-brandRed group-hover:text-white transition-colors">
                <Compass className="w-7 h-7" />
              </div>
              <div className="text-xs font-mono text-slate-400">Pillar 03</div>
              <h3 className="text-2xl font-bold text-brandNavy group-hover:text-brandRed transition-colors">
                Management Consulting
              </h3>
              <p className="text-sm text-textSlate leading-relaxed">
                Strategic vision requires flawless organizational alignment. We serve as trusted advisors to executive leadership, providing objective organizational audits, structural restructuring, incentive engineering, and strategic capital allocation.
              </p>
              
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="text-xs font-bold text-brandNavy uppercase tracking-wider font-mono">
                  Core Competencies:
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                  <li>C-Suite Strategic Realignment &amp; Governance</li>
                  <li>Organizational Architecture &amp; Role Calibration</li>
                  <li>Executive Incentive Engineering</li>
                  <li>Capital Allocation &amp; Portfolio Optimization</li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-brandRed flex items-center justify-between">
              <span>ALVI-Integrated Strategy</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* The ALVI Framework - Lean Dynamics Methodology */}
      <section className="bg-slate-50 border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brandRed font-bold">
              <span>Proprietary System Framework</span>
              <span aria-hidden="true">&bull;</span>
              <span>Lean Dynamics Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brandNavy tracking-tight">
              The ALVI Framework
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              The ALVI Framework represents DBMG Consulting&apos;s proprietary transformation architecture. By grounding organizational design in Lean Dynamics, we isolate friction, synchronize resource pipelines, and deploy verifiable operational outcomes.
            </p>
          </div>

          {/* Visual Grid: Style each letter card with a distinct brandRed background badge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(['A', 'L', 'V', 'I'] as const).map((letter) => {
              const stage = alviStages[letter];
              const isSelected = selectedAlviStep === letter;

              return (
                <div
                  key={letter}
                  onClick={() => setSelectedAlviStep(letter)}
                  className={`cursor-pointer p-6 rounded-lg bg-white border transition-all duration-200 shadow-sm flex flex-col justify-between ${
                    isSelected
                      ? 'border-brandRed ring-2 ring-brandRed/20 shadow-md'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Distinct brandRed background badge */}
                    <div className="w-14 h-14 bg-brandRed text-white rounded-md font-extrabold text-3xl flex items-center justify-center shadow-sm">
                      {letter}
                    </div>

                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Stage 0{letter === 'A' ? 1 : letter === 'L' ? 2 : letter === 'V' ? 3 : 4}
                      </div>
                      <h3 className="text-xl font-bold text-brandNavy mt-0.5">
                        {stage.title}
                      </h3>
                      <div className="text-xs text-brandRed font-medium mt-1">
                        {stage.subtitle}
                      </div>
                    </div>

                    <p className="text-xs text-textSlate leading-relaxed line-clamp-3">
                      {stage.corePhilosophy}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className={isSelected ? 'text-brandRed' : 'text-slate-500'}>
                      {isSelected ? 'Viewing Stage Details' : 'Click to Inspect'}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-brandRed' : 'text-slate-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Inspection Panel */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 lg:p-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brandRed text-white rounded font-extrabold text-2xl flex items-center justify-center shrink-0">
                  {currentStage.letter}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brandNavy">
                    {currentStage.title}: {currentStage.subtitle}
                  </h3>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">
                    Lean Dynamics Deep Dive
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded text-xs font-mono">
                {(['A', 'L', 'V', 'I'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setSelectedAlviStep(l)}
                    className={`px-3 py-1.5 rounded transition-all cursor-pointer font-bold ${
                      selectedAlviStep === l
                        ? 'bg-brandRed text-white shadow-sm'
                        : 'text-slate-600 hover:text-brandNavy'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Workflows */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xs uppercase font-bold tracking-wider text-brandNavy font-mono">
                  Methodology Execution Workflows:
                </h4>
                <div className="space-y-3">
                  {currentStage.keyWorkflows.map((workflow, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded bg-slate-50 border border-slate-150">
                      <CheckCircle2 className="w-4 h-4 text-brandRed mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-700 leading-relaxed">
                        {workflow}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded bg-slate-100 border border-slate-200 text-xs text-slate-700 font-mono">
                  <strong className="text-brandNavy block mb-1">
                    LEAN DYNAMICS GOVERNANCE:
                  </strong>
                  {currentStage.leanDynamicsPrinciple}
                </div>
              </div>

              {/* Right Column: Deliverables */}
              <div className="lg:col-span-5 space-y-4">
                <h4 className="text-xs uppercase font-bold tracking-wider text-brandNavy font-mono">
                  Stage Verified Deliverables:
                </h4>
                <div className="space-y-3">
                  {currentStage.deliverables.map((del, idx) => (
                    <div key={idx} className="p-4 rounded border border-slate-200 bg-white shadow-xs space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-brandNavy">
                        <FileText className="w-4 h-4 text-brandBlue" />
                        <span>{del}</span>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Audited executive document submitted at stage completion.
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onTabChange('case-studies')}
                    className="w-full py-3 bg-brandNavy text-white hover:bg-slate-800 text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Industrial Logistics ALVI Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-brandBlue" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Standards & Enterprise Governance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-brandRed font-bold">
              Corporate Governance
            </div>
            <h2 className="text-3xl font-extrabold text-brandNavy tracking-tight">
              Twenty Years of Tested Enterprise Impact
            </h2>
            <p className="text-textSlate leading-relaxed">
              DBMG Consulting was founded on a singular premise: management strategy must be directly accountable to measurable operational throughput. Rather than issuing theoretical slide decks, our partners work alongside your executive bench to execute Lean transformations that protect margins and accelerate growth.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded border border-slate-200 bg-white">
                <div className="text-lg font-bold text-brandNavy font-mono">Zero Shelfware</div>
                <div className="text-xs text-slate-500 mt-1">
                  All strategic roadmaps are operationalized through working software tools and institutional SOPs.
                </div>
              </div>
              <div className="p-4 rounded border border-slate-200 bg-white">
                <div className="text-lg font-bold text-brandNavy font-mono">Bilateral Discretion</div>
                <div className="text-xs text-slate-500 mt-1">
                  100% of institutional advisory and real estate acquisition data is protected under NDA.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-brandNavy text-white p-8 rounded-xl shadow-lg border border-slate-800 space-y-6">
              <div className="text-xs font-mono uppercase tracking-wider text-brandBlue font-bold">
                Engagement Model
              </div>
              <h3 className="text-xl font-bold text-white">
                How We Collaborate With Executive Teams
              </h3>
              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brandRed text-white flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </div>
                  <div>
                    <strong className="text-white block">30-Day Diagnostic Sprint</strong>
                    Complete ALVI Analysis and baseline operational telemetry audit.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brandBlue text-white flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </div>
                  <div>
                    <strong className="text-white block">60-Day Pilot Validation</strong>
                    Targeted operational synchronization and stress testing.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white text-brandNavy flex items-center justify-center font-bold text-xs shrink-0">
                    3
                  </div>
                  <div>
                    <strong className="text-white block">Enterprise Rollout &amp; Governance</strong>
                    Full organizational deployment with recurring Lean governance.
                  </div>
                </div>
              </div>

              <button
                onClick={() => onTabChange('contact')}
                className="w-full py-3 bg-brandRed hover:bg-[#8f1515] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
              >
                Schedule Diagnostic Discovery
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
