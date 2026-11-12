import React from 'react';
import { NavTab } from '../types.ts';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface AiSolutionsProps {
  onTabChange: (tab: NavTab) => void;
}

export default function AiSolutions({ onTabChange }: AiSolutionsProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-4xl mx-auto pt-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Engineering AI Tools, Custom Apps and Micro-Utilities for Businesses
          </h1>
          <p className="text-xl text-slate-600">
            Transforming complex operational friction into streamlined, automated workflows through proprietary architecture and rapid development frameworks.
          </p>
        </div>

        {/* Section 1: Proprietary Development & PWAs */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Proprietary Development & Progressive Web Utilities
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We rapidly prototype and deploy custom Progressive Web Utilities (PWAs) tailored to your exact operational workflows. Our architecture prioritizes speed, cross-platform accessibility, and seamless integration with your existing business tech stack.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-slate-700 font-medium">
                <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">✓</span>
                <span>High-Performance Architecture</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-700 font-medium">
                <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">✓</span>
                <span>Cross-Platform Accessibility</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-700 font-medium">
                <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">✓</span>
                <span>Seamless Tech Stack Integration</span>
              </li>
            </ul>
          </div>

          {/* Sharp Code-Rendered PWA Architecture Diagram Replacement */}
          <div className="bg-slate-900 rounded-xl p-6 text-white shadow-inner border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Architecture Flow</span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center py-4">
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <div className="text-xs text-slate-400 font-mono">Input</div>
                <div className="text-sm font-semibold mt-1">Workflows</div>
              </div>
              <div className="bg-blue-600/20 p-3 rounded-lg border border-blue-500/30 flex items-center justify-center">
                <div className="text-xs font-bold text-blue-400">Proprietary Core</div>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <div className="text-xs text-slate-400 font-mono">Output</div>
                <div className="text-sm font-semibold mt-1">Micro-App</div>
              </div>
            </div>
            <div className="bg-slate-950 p-4 rounded-lg font-mono text-xs text-slate-400 space-y-1.5 border border-slate-900">
              <p className="text-emerald-400">$ dbmg-engine --deploy --pwa</p>
              <p>&gt; Initializing rapid build sequence...</p>
              <p>&gt; Compiling modular operational utilities... [OK]</p>
              <p className="text-blue-400">&gt; Status: Live & Optimized for Enterprise.</p>
            </div>
          </div>
        </div>

        {/* Section 2: Solution Areas */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Solution Areas & Operational Efficiency
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">01</div>
              <h3 className="text-xl font-bold text-slate-900">Business Development & Growth</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Automated lead intelligence, targeted prospecting systems, and streamlined qualification workflows to scale your outreach.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">02</div>
              <h3 className="text-xl font-bold text-slate-900">Operations & Workflow Automation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Intelligent micro-utilities designed to eliminate manual bottlenecks, reduce overhead, and optimize day-to-day execution.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">03</div>
              <h3 className="text-xl font-bold text-slate-900">Financial & Transactional Tools</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Custom calculators, automated reporting engines, and streamlined financial data processing tools tailored to your needs.
              </p>
            </div>
          </div>
        </div>

{/* 1. The Turnkey AI-as-a-Service Card */}
        <div className="bg-[#0B1221] rounded-2xl p-8 sm:p-14 text-center max-w-5xl mx-auto shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
            The Turnkey AI-as-a-Service Model
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
            Skip the high cost, steep learning curve, and resource drain of hiring and managing internal AI teams. DBMG manages the entire lifecycle—from architecture and programming to full integration and ongoing management—allowing you to leverage advanced AI capabilities effortlessly.
          </p>
          <button
            type="button"
            onClick={() => onTabChange('contact')}
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all cursor-pointer"
          >
            Discuss Your Project
          </button>
        </div>

        {/* 2. Separate Workshop Card — White Mini One-Sheet */}
        <section
          aria-label="Executive AI Workshop Overview"
          className="mt-12 bg-white rounded-2xl border border-slate-200 shadow-lg max-w-5xl mx-auto overflow-hidden"
        >
          {/* Top Accent Rule */}
          <div className="h-1.5 w-full bg-gradient-to-r from-brandNavy via-brandBlue to-brandRed" />

          <div className="p-8 sm:p-12 space-y-10">
            {/* One-Sheet Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-brandRed font-bold">
                  <span>Invitation-Only Live Workshop</span>
                  <span aria-hidden="true">&middot;</span>
                  <span className="text-slate-500 font-normal">Capped at 20 Companies</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brandNavy tracking-tight leading-tight text-balance">
                  Give Your Team AI Superpowers
                </h2>
                <p className="text-base text-textSlate leading-relaxed">
                  Stop the guesswork around AI. In one live interactive build session, we audit your operational bottlenecks and deploy a custom Field-to-Admin mobile web app natively into your business—so your team works faster without adding internal AI staff or heavy infrastructure.
                </p>
              </div>

              <div className="shrink-0 lg:text-right">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Live Build Value
                </div>
                <div className="text-2xl font-extrabold text-brandNavy font-mono tabular-nums">
                  $15k–$30k App Included
                </div>
                <div className="text-xs font-semibold text-brandBlue">
                  $0 Custom Build Fee in Workshop
                </div>
              </div>
            </div>

            {/* Mini One-Sheet Two-Column Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: How the Workshop Works */}
              <div className="lg:col-span-6 space-y-5">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-brandNavy">
                  How the Live Workshop Works
                </h3>
                <div className="divide-y divide-slate-100">
                  <div className="pb-4 flex items-start gap-4">
                    <span className="text-sm font-mono font-bold text-brandRed tabular-nums shrink-0 mt-0.5">
                      01.
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-brandNavy">
                        The Superpower Protocol (Workflow Audit)
                      </h4>
                      <p className="text-xs text-textSlate leading-relaxed mt-1">
                        Pinpoint where field-to-office data lag and manual re-typing bleed margin daily, and equip your existing staff with practical, jargon-free AI workflows.
                      </p>
                    </div>
                  </div>

                  <div className="py-4 flex items-start gap-4">
                    <span className="text-sm font-mono font-bold text-brandBlue tabular-nums shrink-0 mt-0.5">
                      02.
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-brandNavy">
                        Live Custom Mobile PWA Deployment
                      </h4>
                      <p className="text-xs text-textSlate leading-relaxed mt-1">
                        Our studio natively configures and deploys your company&apos;s Field-to-Admin Operations Web App live—accessible on any phone or tablet via web link with zero app store downloads.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex items-start gap-4">
                    <span className="text-sm font-mono font-bold text-brandNavy tabular-nums shrink-0 mt-0.5">
                      03.
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-brandNavy">
                        Hard-Coding Your 90-Day Growth Engine
                      </h4>
                      <p className="text-xs text-textSlate leading-relaxed mt-1">
                        Bridge mobile field inputs straight into a real-time management dashboard so leadership tracks velocity, billing cycles, and margins effortlessly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Benefits & Takeaways */}
              <div className="lg:col-span-6 lg:border-l lg:border-slate-200 lg:pl-10 space-y-5">
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-brandNavy">
                  What Your Business Walks Away With
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brandBlue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-brandNavy">
                        Production-Ready Custom App &amp; Cloud Database
                      </div>
                      <p className="text-xs text-textSlate leading-relaxed mt-0.5">
                        Walk out owning a functional Progressive Web App and live serverless database architecture that agencies normally charge $15,000–$30,000 to build.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brandBlue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-brandNavy">
                        Zero Heavy Infrastructure or In-House AI Hiring
                      </div>
                      <p className="text-xs text-textSlate leading-relaxed mt-0.5">
                        Eliminate server maintenance, software engineering overhead, and steep learning curves—your current team uses it from day one.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-brandRed shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-brandNavy">
                        $10,000 Zero-Risk Bottom-Line Guarantee
                      </div>
                      <p className="text-xs text-textSlate leading-relaxed mt-0.5">
                        If we don&apos;t identify at least $10,000 in hidden operational waste or labor leaks during your audit, you get a 100% refund—and still keep your deployed app.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom CTA Bar */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-brandNavy">
                  Three Deployment Tiers Available (Starting at $497)
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  Core Deployment · Multi-App Accelerator · VIP Deep Integration
                </div>
              </div>

              <button
                type="button"
                onClick={() => onTabChange('workshop')}
                className="inline-flex items-center justify-center gap-2 bg-brandRed hover:bg-[#8f1515] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Explore Workshop &amp; Packages</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
