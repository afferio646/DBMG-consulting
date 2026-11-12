/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab } from '../types.ts';
import {
  ArrowLeft,
  Home,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Copy,
  Check,
  AlertTriangle,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react';

interface WorkshopViewProps {
  onTabChange: (tab: NavTab) => void;
}

type WorkshopTier = {
  id: 'tier-1' | 'tier-2' | 'tier-3';
  label: string;
  title: string;
  price: string;
  cta: string;
  featured?: boolean;
  bullets: string[];
};

const TIERS: WorkshopTier[] = [
  {
    id: 'tier-1',
    label: 'Tier 1',
    title: 'Core System Deployment',
    price: '$497',
    cta: 'Secure Tier 1',
    bullets: [
      'Live AI & Operations Workshop for 1 Executive + 1 Lead',
      'Turnkey deployment of your custom Mobile Field-to-Admin PWA',
      'Complete cloud database architecture & live hosting included',
      'Full coverage under our $10k Bottom-Line Guarantee',
    ],
  },
  {
    id: 'tier-2',
    label: 'Tier 2',
    title: 'The Multi-App Accelerator',
    price: '$797',
    cta: 'Secure Tier 2 Accelerator',
    featured: true,
    bullets: [
      'Everything included in Tier 1 Core Deployment',
      'Second Custom App: Mobile Field-SOP Digital Toolkit',
      'Automate standard operating procedures & data entry instantly',
      'Priority cloud database optimization & extra user seats',
    ],
  },
  {
    id: 'tier-3',
    label: 'Tier 3',
    title: 'VIP Deep Integration',
    price: '$1,997',
    cta: 'Request VIP Package',
    bullets: [
      'Everything in Tier 2 Multi-App Accelerator',
      'Skip group sessions: Private 1-on-1 Systems Integration Audit',
      'Custom operational database field mapping for your exact stack',
      'Direct cloud-to-cloud bridging into your existing internal CRM',
    ],
  },
];

const ESTIMATOR_PROMPT =
  '"Act as a boutique software development estimator for small-to-mid-sized business tools. Calculate the realistic commercial cost and timeline for a boutique agency to build a custom, single-tenant business workflow tool. The application is an installable, mobile-responsive Progressive Web App (PWA) with a real-time serverless database backend (like Firebase), hosted on a cloud network (like Vercel). It includes one streamlined AI-powered operational data-processing workflow and a basic management dashboard. Provide a realistic cost range."';

export function WorkshopView({ onTabChange }: WorkshopViewProps) {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [selectedTier, setSelectedTier] = useState<WorkshopTier | null>(null);
  const [regName, setRegName] = useState('');
  const [regCompany, setRegCompany] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regError, setRegError] = useState('');
  const [regConfirmation, setRegConfirmation] = useState<string | null>(null);

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(ESTIMATOR_PROMPT.replace(/^"|"$/g, ''));
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2500);
    } catch {
      // Fallback if clipboard API is unavailable
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2500);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openRegistration = (tier: WorkshopTier) => {
    setSelectedTier(tier);
    setRegError('');
    setRegConfirmation(null);
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName.trim() || !regCompany.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regEmail)) {
      setRegError('Please provide your full name, company name, and a valid corporate email.');
      return;
    }
    const token = `WKS-${Math.floor(100000 + Math.random() * 900000)}`;
    setRegConfirmation(token);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-brandRed selection:text-white">
      {/* Sticky Top Return Navigation Bar (DBMG Deep Sapphire Navy) */}
      <header className="sticky top-0 z-50 bg-brandNavy text-white border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onTabChange('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none shrink-0"
          >
            <img
              src="/assets/aistudio/dbmg_logo_part_70be1000.PNG"
              alt="DBMG Consulting Logo"
              className="w-9 h-9 rounded object-contain shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-white whitespace-nowrap">
                DBMG <span className="font-light text-slate-300">CONSULTING</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-mono uppercase">
                Advisory &amp; Strategy
              </span>
            </div>
          </button>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onTabChange('ai-solutions')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to AI Solutions</span>
            </button>
            <button
              type="button"
              onClick={() => onTabChange('home')}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Main Website</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('workshop-tiers')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider text-white bg-brandRed hover:bg-[#8f1515] transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>View Packages</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION — High-Contrast BrandNavy Executive Banner + Crisp White Snapshot Card */}
      <section className="bg-gradient-to-br from-brandNavy via-[#022461] to-[#011438] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-300">
                <span className="text-brandBlue font-bold">Live Interactive Workshop &amp; Custom Build Session</span>
                <span aria-hidden="true">&middot;</span>
                <span>Strictly Capped at 20 Companies</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Stop The Fear of AI for Business. Give Your Team{' '}
                <span className="text-brandBlue">AI Superpowers.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl">
                Wipe out field chaos, automate office data entry, and protect your profit margins by deploying custom mobile tools natively into your operations—built live during your session.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection('workshop-tiers')}
                  className="px-7 py-3.5 bg-brandRed hover:bg-[#8f1515] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded shadow-md transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Reserve Your Workshop Seat</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('workshop-agenda')}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/25 text-xs sm:text-sm font-bold uppercase tracking-wider rounded transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  See How It Works
                </button>
              </div>
            </div>

            {/* Right Executive One-Sheet Snapshot Card (Crisp White Contrast) */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-800 rounded-xl border border-slate-200 shadow-2xl overflow-hidden">
                <div className="h-1.5 w-full bg-gradient-to-r from-brandRed via-brandBlue to-brandNavy" />
                <div className="p-7 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-brandRed font-bold">
                        Executive One-Sheet Summary
                      </div>
                      <div className="text-lg font-extrabold text-brandNavy mt-0.5">
                        What You Walk Away With
                      </div>
                    </div>
                    <Sparkles className="w-5 h-5 text-brandBlue shrink-0" />
                  </div>

                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brandBlue shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-brandNavy block">Custom Deployed Mobile PWA ($0 Build Cost)</strong>
                        <span className="text-xs text-slate-600">
                          Production-ready Field-to-Admin web app ($15k–$30k agency value) deployed live.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brandBlue shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-brandNavy block">Owned Cloud Database &amp; Hosting</strong>
                        <span className="text-xs text-slate-600">
                          Your business owns its serverless real-time environment with zero in-house IT overhead.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-brandRed shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-brandNavy block">$10,000 Bottom-Line Guarantee</strong>
                        <span className="text-xs text-slate-600">
                          If we don&apos;t uncover $10k+ in hidden waste/leaks, get a 100% refund—and keep the app.
                        </span>
                      </div>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-3 text-center font-mono">
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                      <div className="text-base font-extrabold text-brandNavy tabular-nums">20</div>
                      <div className="text-[10px] text-slate-500 uppercase">Company Cap</div>
                    </div>
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                      <div className="text-base font-extrabold text-brandBlue tabular-nums">$497+</div>
                      <div className="text-[10px] text-slate-500 uppercase">Workshop Tiers</div>
                    </div>
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                      <div className="text-base font-extrabold text-brandRed tabular-nums">100%</div>
                      <div className="text-[10px] text-slate-500 uppercase">Refund Guarantee</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIGHT CANVAS: STRATEGIC OVERVIEW + 4 CORE VALUE DRIVERS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Strategic Overview Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-14 border-b border-slate-200">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-brandRed font-bold">
                The DBMG Consulting AI-as-a-Service Advantage
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brandNavy tracking-tight leading-tight text-balance">
                Why Companies Struggle With AI—And How We Eliminate the Guesswork
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-base text-textSlate leading-relaxed">
              <p>
                Most companies today don&apos;t understand AI or what tools to implement. Business leaders hesitate to spend time and money not knowing what is actually available, what will genuinely work, or what heavy infrastructure they think it takes to add AI to their business processes.
              </p>
              <p>
                <strong className="text-brandNavy">Our AI-as-a-Service model eliminates all of that.</strong> As your strategic AI consultants, we develop, implement, and manage those tools for you from end to end.
              </p>
              <p className="font-medium text-brandNavy">
                Through this workshop, you will gain a crystal-clear understanding of current AI capabilities, how they specifically benefit your industry&apos;s bottlenecks and manual workarounds, and how they create real superpowers for your employees—making them an even more integral, high-performing part of your business growth.
              </p>
            </div>
          </div>

          {/* Why You Should Attend — 4 Core Value Drivers */}
          <div className="space-y-10">
            <div className="max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-widest text-brandBlue font-bold mb-2">
                Core Value Drivers
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brandNavy tracking-tight">
                Four Reasons Executives Join This Session
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: '01',
                  kicker: 'The Knowledge',
                  title: 'Master AI & Superpowers',
                  desc: 'Master practical AI for business and learn exactly how to shift your team to everyday AI superpowers without the technical jargon.',
                },
                {
                  num: '02',
                  kicker: 'Zero Overhead',
                  title: 'Eliminate Heavy Infrastructure',
                  desc: 'Eliminate the required infrastructure, manpower, training, implementation, and maintenance typically demanded by an in-house AI program.',
                },
                {
                  num: '03',
                  kicker: 'The Free Asset',
                  title: 'Custom Deployed App ($0 Build Cost)',
                  desc: 'Walk away with a custom-built, production-ready Mobile Progressive Web App and secure cloud database ($15k–$30k agency value) included.',
                },
                {
                  num: '04',
                  kicker: 'Exclusive Access',
                  title: 'Strictly Limited Invitations',
                  desc: 'We invite a strictly limited number of select companies per session to guarantee direct, hands-on configuration support for your workflow.',
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="p-6 rounded-lg bg-white border border-slate-200 hover:border-brandBlue transition-colors flex flex-col justify-between space-y-4 shadow-xs"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-brandRed uppercase tracking-wider">
                        {item.kicker}
                      </span>
                      <span className="text-slate-400 font-bold tabular-nums">{item.num}</span>
                    </div>
                    <h4 className="text-lg font-bold text-brandNavy leading-snug">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-textSlate leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOFT SLATE CANVAS: OPERATIONAL DIAGNOSTICS + PWA SOLUTION BRIDGE */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-brandRed font-bold">
              Operational Diagnostics
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brandNavy tracking-tight">
              Where Your Business Bleeds Margin Daily
            </h2>
            <p className="text-sm sm:text-base text-textSlate">
              Before installing any software, we pinpoint and plug the two primary data leaks draining field-service and multi-team companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-wider text-brandRed uppercase">
                  Leak 01 · Field Friction
                </span>
                <AlertTriangle className="w-4 h-4 text-brandRed" />
              </div>
              <h3 className="text-xl font-bold text-brandNavy">Field-to-Office Chaos</h3>
              <p className="text-sm text-textSlate leading-relaxed">
                When mobile teams, technicians, or drivers log real-world data on paper forms, messy group texts, or disconnected emails, your business bleeds cash. Information gets lost, signatures are missed, and unbilled work slips right through the cracks.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-wider text-brandRed uppercase">
                  Leak 02 · Administrative Drag
                </span>
                <AlertTriangle className="w-4 h-4 text-brandRed" />
              </div>
              <h3 className="text-xl font-bold text-brandNavy">Office Administrative Re-Work</h3>
              <p className="text-sm text-textSlate leading-relaxed">
                Chasing field crews down for missing details and manually re-typing or copy-pasting handwritten data into spreadsheets or accounting dashboards kills office productivity. It creates massive data lag, delays your customer billing cycles, and leaves leadership flying completely blind.
              </p>
            </div>
          </div>

          {/* Transformation Bridge Banner (BrandNavy -> BrandBlue Gradient) */}
          <div className="p-8 sm:p-10 rounded-xl bg-gradient-to-r from-brandNavy to-brandBlue text-white shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-9 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-slate-200 uppercase">
                <Smartphone className="w-4 h-4 text-white" />
                <span>The PWA Workflow Transformation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Get Your Custom Mobile App Deployed Live
              </h3>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed max-w-3xl">
                During this live session, we custom-configure and deploy a proprietary, mobile-responsive Field-to-Admin Operations Web App directly to your business. Your teams access it on any phone or tablet via a secure web link with zero app store downloads. Field inputs route instantly to a secure, real-time office dashboard, eliminating paperwork forever.
              </p>
            </div>
            <div className="lg:col-span-3 flex lg:justify-end">
              <button
                type="button"
                onClick={() => scrollToSection('workshop-tiers')}
                className="px-6 py-3.5 bg-white text-brandNavy hover:bg-slate-100 text-xs font-bold uppercase tracking-wider rounded shadow transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Choose Your Tier</span>
                <ArrowUpRight className="w-4 h-4 text-brandBlue" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LIGHT CANVAS: 3-STEP WORKSHOP AGENDA ROADMAP */}
      <section id="workshop-agenda" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-brandBlue font-bold">
              Step-by-Step Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brandNavy tracking-tight">
              AI Workshop Agenda: From Audit to Live Asset
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-white border border-slate-200 flex flex-col justify-between space-y-6 shadow-xs">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded bg-brandRed text-white font-mono font-extrabold text-base flex items-center justify-center">
                  01
                </div>
                <h3 className="text-xl font-bold text-brandNavy">The Superpower Protocol</h3>
                <p className="text-sm text-textSlate leading-relaxed">
                  Isolate where manual information lag eats your weekly profit margins. Strip away confusing technical jargon and learn how to give your existing employees practical, secure AI toolkits for daily reporting.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-mono font-bold text-brandRed uppercase tracking-wider">
                The Workflow Audit &amp; Knowledge
              </div>
            </div>

            <div className="p-8 rounded-xl bg-white border border-slate-200 flex flex-col justify-between space-y-6 shadow-xs">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded bg-brandBlue text-white font-mono font-extrabold text-base flex items-center justify-center">
                  02
                </div>
                <h3 className="text-xl font-bold text-brandNavy">Live Systems Deployment</h3>
                <p className="text-sm text-textSlate leading-relaxed">
                  Watch our studio natively configure and deploy your company&apos;s proprietary Mobile Operations App live. By the end of this session, your business owns its secure cloud database environment.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-mono font-bold text-brandBlue uppercase tracking-wider">
                Your Custom Free PWA Asset
              </div>
            </div>

            <div className="p-8 rounded-xl bg-white border border-slate-200 flex flex-col justify-between space-y-6 shadow-xs">
              <div className="space-y-4">
                <div className="w-11 h-11 rounded bg-brandNavy text-white font-mono font-extrabold text-base flex items-center justify-center">
                  03
                </div>
                <h3 className="text-xl font-bold text-brandNavy">Hard-Coding Growth</h3>
                <p className="text-sm text-textSlate leading-relaxed">
                  Bridge mobile inputs directly into an automated management dashboard. Establish your 90-day execution framework so leadership tracks field velocity and operational margins in real-time.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-mono font-bold text-brandNavy uppercase tracking-wider">
                The Real-Time Engine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DARK SAPPHIRE SECTION: INVESTMENT TIERS & DELIVERABLES (High-Contrast Showcase) */}
      <section id="workshop-tiers" className="py-20 bg-brandNavy text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-brandBlue font-bold">
              Choose Your Package
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Select Your Workshop Tier &amp; Custom Build Package
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Every tier includes live hands-on deployment of your custom business PWA, cloud database ownership, and our $10,000 Bottom-Line Guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`p-8 rounded-2xl relative flex flex-col justify-between ${
                  tier.featured
                    ? 'bg-white text-slate-800 border-2 border-brandBlue shadow-2xl'
                    : 'bg-[#04235e] text-white border border-white/15'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brandBlue text-white px-4 py-1 rounded text-[11px] font-mono font-bold tracking-wider uppercase whitespace-nowrap shadow">
                    Most Popular Value
                  </div>
                )}

                <div>
                  <span
                    className={`text-xs font-mono font-bold uppercase tracking-widest ${
                      tier.featured ? 'text-brandBlue' : 'text-slate-300'
                    }`}
                  >
                    {tier.label}
                  </span>
                  <h3
                    className={`text-xl font-bold mt-1 mb-2 ${
                      tier.featured ? 'text-brandNavy' : 'text-white'
                    }`}
                  >
                    {tier.title}
                  </h3>
                  <div
                    className={`text-4xl font-extrabold font-mono tabular-nums mb-6 ${
                      tier.featured ? 'text-brandRed' : 'text-white'
                    }`}
                  >
                    {tier.price}
                  </div>

                  <ul
                    className={`space-y-3 text-sm mb-8 ${
                      tier.featured ? 'text-textSlate' : 'text-slate-200'
                    }`}
                  >
                    {tier.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            tier.featured ? 'text-brandBlue' : 'text-brandBlue'
                          }`}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => openRegistration(tier)}
                  className={`w-full py-3.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                    tier.featured
                      ? 'bg-brandRed hover:bg-[#8f1515] text-white shadow-md'
                      : 'bg-white text-brandNavy hover:bg-slate-100'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LIGHT CANVAS: VERIFY VALUE PROMPT (WITH COPY BUTTON) + $10K GUARANTEE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Verify Software Value */}
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-widest text-brandBlue font-bold">
                  Independent Valuation Benchmark
                </div>
                <h3 className="text-2xl font-extrabold text-brandNavy">
                  Verify the Software Value Yourself
                </h3>
              </div>

              <button
                type="button"
                onClick={handleCopyPrompt}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brandNavy hover:bg-slate-800 text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                {copiedPrompt ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Prompt Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Estimator Prompt</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-sm sm:text-base text-textSlate leading-relaxed">
              Custom serverless mobile app architecture like this carries a true agency development value of <strong className="text-brandNavy font-mono tabular-nums">$15,000 to $30,000</strong>. Test this claim right now by copying the prompt below and pasting it into any AI estimator:
            </p>

            <div className="p-5 rounded-xl bg-brandNavy text-slate-200 font-mono text-xs sm:text-sm leading-relaxed border border-slate-800 shadow-inner">
              {ESTIMATOR_PROMPT}
            </div>
          </div>

          {/* Zero-Risk Guarantee */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-brandRed/30 shadow-md space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brandRed text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-brandRed font-bold">
                  100% Risk-Free Promise
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-brandNavy">
                  Our Zero-Risk Bottom-Line Guarantee
                </h3>
              </div>
            </div>

            <p className="text-textSlate text-sm sm:text-base leading-relaxed">
              We build and deploy functional technology assets. If we do not successfully pinpoint at least <strong className="text-brandNavy font-mono tabular-nums">$10,000</strong> in hidden operational waste, administrative bloat, or unbilled labor leaks during your session audit, you will receive an immediate, 100% refund on your registration.{' '}
              <strong className="text-brandNavy">
                You keep the fully deployed app infrastructure, the live cloud database hosting, and the system access anyway.
              </strong>
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('workshop-tiers')}
                className="px-6 py-3 bg-brandRed hover:bg-[#8f1515] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Select Your Workshop Package</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onTabChange('contact')}
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-brandNavy text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                Ask a Question First
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Return Footer */}
      <footer className="bg-brandNavy text-slate-300 border-t border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/dbmg_logo_part_70be1000.PNG"
              alt="DBMG Consulting Logo"
              className="w-7 h-7 rounded object-contain"
            />
            <span className="font-mono text-slate-300">
              DBMG Consulting &bull; AI-as-a-Service Executive Workshop
            </span>
          </div>
          <div className="flex items-center gap-5 font-semibold">
            <button
              type="button"
              onClick={() => onTabChange('ai-solutions')}
              className="text-slate-200 hover:text-white inline-flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to AI Solutions</span>
            </button>
            <button
              type="button"
              onClick={() => onTabChange('home')}
              className="text-slate-200 hover:text-white cursor-pointer"
            >
              Return to DBMG Website
            </button>
            <button
              type="button"
              onClick={() => onTabChange('contact')}
              className="text-brandBlue hover:text-white cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </footer>

      {/* Seat Reservation Modal when a Tier CTA is clicked */}
      {selectedTier && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="workshop-modal-title"
        >
          <div className="bg-white rounded-xl border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden">
            <div className="bg-brandNavy text-white px-6 py-4 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-brandBlue font-bold">
                  {selectedTier.label} &bull; {selectedTier.price}
                </div>
                <h3 id="workshop-modal-title" className="text-lg font-bold text-white">
                  {selectedTier.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTier(null)}
                className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-white/10 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {regConfirmation ? (
                <div className="text-center space-y-4 py-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-brandNavy">Seat Request Confirmed</h4>
                  <p className="text-sm text-textSlate">
                    Your reservation request for <strong>{selectedTier.title}</strong> ({selectedTier.price}) has been logged for <strong>{regCompany}</strong>.
                  </p>
                  <div className="p-3 rounded bg-slate-50 border border-slate-200 font-mono text-xs text-brandNavy">
                    Reference Token: <strong>{regConfirmation}</strong>
                  </div>
                  <div className="pt-2 flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedTier(null)}
                      className="px-5 py-2.5 bg-brandNavy text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                  <p className="text-xs text-textSlate">
                    Complete your executive seat request below. A DBMG managing partner will confirm availability (capped at 20 companies) and send onboarding details.
                  </p>

                  {regError && (
                    <div className="p-3 rounded bg-red-50 border border-brandRed/30 text-xs text-brandRed">
                      {regError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-brandNavy uppercase font-mono mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-3 py-2 rounded border border-slate-300 text-sm focus:ring-2 focus:ring-brandNavy focus:border-brandNavy outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brandNavy uppercase font-mono mb-1">
                        Company *
                      </label>
                      <input
                        type="text"
                        value={regCompany}
                        onChange={(e) => setRegCompany(e.target.value)}
                        placeholder="Company name"
                        className="w-full px-3 py-2 rounded border border-slate-300 text-sm focus:ring-2 focus:ring-brandNavy focus:border-brandNavy outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-brandNavy uppercase font-mono mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-3 py-2 rounded border border-slate-300 text-sm focus:ring-2 focus:ring-brandNavy focus:border-brandNavy outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brandNavy uppercase font-mono mb-1">
                        Direct Phone
                      </label>
                      <input
                        type="tel"
                        value={regPhone}
                        onChange={(e) => setRegPhone(e.target.value)}
                        placeholder="Optional direct line"
                        className="w-full px-3 py-2 rounded border border-slate-300 text-sm focus:ring-2 focus:ring-brandNavy focus:border-brandNavy outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedTier(null)}
                      className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-brandNavy cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-brandRed hover:bg-[#8f1515] text-white text-xs font-bold uppercase tracking-wider rounded shadow-sm cursor-pointer"
                    >
                      Confirm {selectedTier.label} Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
