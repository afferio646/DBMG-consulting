import React from 'react';

export default function AiSolutions() {
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
              <p className="text-emerald-400">$ dmbg-engine --deploy --pwa</p>
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
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
          >
            Discuss Your Project
          </a>
        </div>

        {/* 2. Separate Workshop Card */}
        <div className="mt-12 bg-[#0B1221] rounded-2xl p-8 sm:p-14 text-center max-w-5xl mx-auto shadow-xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
            Invitation-Only Exclusive Workshop
          </span>

          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
            Give Your Team AI Superpowers
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
            You will gain a crystal-clear understanding of current AI capabilities, how they specifically benefit your industry&apos;s bottlenecks and manual workarounds, and how they create real superpowers for your employees—making them an even more integral, high-performing part of your business growth.
          </p>

          <button
            type="button"
            onClick={() => {
              window.location.href = 'https://www.dbmgconsulting.com/#workshop';
              window.location.hash = 'workshop';
              window.dispatchEvent(new HashChangeEvent('hashchange'));
              window.scrollTo(0, 0);
            }}
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all cursor-pointer"
          >
            Get Access
          </button>
        </div>

      </div>
    </div>
  );
}
