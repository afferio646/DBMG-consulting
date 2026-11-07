/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavTab } from '../types.ts';
import { ShieldCheck, Lock, ChevronRight } from 'lucide-react';

interface FooterProps {
  onTabChange: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  return (
    <footer className="bg-brandNavy text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/dbmg_logo_part_70be1000.PNG"
                alt="DBMG Consulting Logo"
                className="w-9 h-9 rounded object-contain shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  DBMG <span className="font-light text-slate-300">CONSULTING</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 font-mono uppercase">
                  Advisory &amp; Strategy
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineering high-impact operational and growth strategies for enterprises and high-growth organizations. Proprietary Lean Dynamics methodology paired with specialized private off-market real estate acquisition.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-brandBlue shrink-0" />
              <span>Lean Dynamics &bull; ALVI Framework Certified</span>
            </div>
          </div>

          {/* Core Advisory Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">
              Strategic Advisory
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => { onTabChange('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-slate-400 hover:translate-x-0.5 transform inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brandRed" />
                  <span>The ALVI Framework</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onTabChange('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-slate-400 hover:translate-x-0.5 transform inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brandRed" />
                  <span>Core Operational Pillars</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onTabChange('industries'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-slate-400 hover:translate-x-0.5 transform inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brandRed" />
                  <span>Industry Practice Areas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onTabChange('case-studies'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-slate-400 hover:translate-x-0.5 transform inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brandRed" />
                  <span>Audited Case Studies</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Velocity RE Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4 flex items-center gap-1.5">
              <span>Velocity RE</span>
              <span className="text-[9px] px-1.5 py-0.2 bg-brandBlue/20 text-brandBlue border border-brandBlue/40 rounded font-mono">
                100% Off-Market
              </span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => { onTabChange('velocity-re'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-slate-400 hover:translate-x-0.5 transform inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brandBlue" />
                  <span>Pocket Listing Service</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onTabChange('velocity-re'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-slate-400 hover:translate-x-0.5 transform inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brandBlue" />
                  <span>3-Step Acquisition Process</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onTabChange('case-studies'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-slate-400 hover:translate-x-0.5 transform inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brandBlue" />
                  <span>Commercial &amp; Residential Deals</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onTabChange('velocity-re'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors text-slate-400 hover:translate-x-0.5 transform inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-brandBlue" />
                  <span>Confidential Criteria Submission</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Corporate Intake */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">
              Executive Engagement
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <button
                onClick={() => { onTabChange('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-4 py-2.5 bg-brandRed hover:bg-[#8f1515] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors block text-center w-full cursor-pointer shadow-xs"
              >
                Initiate Online Briefing
              </button>
              <div className="flex items-start gap-2 pt-1 text-xs text-slate-400 leading-relaxed">
                <Lock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Private briefings conducted under standard bilateral NDA. Direct advisory channels initiated upon intake.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Regulatory Clarity */}
        <div className="pt-8 space-y-4 text-xs text-slate-400 leading-relaxed">
          <div className="p-4 bg-black/20 rounded border border-slate-800 text-[11px] text-slate-400">
            <strong className="text-slate-300 font-semibold block mb-1">
              REGULATORY &amp; TRANSACTIONAL PARTNER NOTICE:
            </strong>
            DBMG Consulting operates as a management and strategic business consultancy. Velocity RE specializes exclusively in private, off-market transactions. Velocity RE operates strictly as transactional and acquisition partners, and does not act as a licensed real estate broker or agent. No property representations are made on public MLS portals. All buyer/seller introductions and data are protected under confidential transactional covenants.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-slate-400 font-mono text-[11px]">
            <div>
              &copy; {new Date().getFullYear()} DBMG Consulting &amp; Velocity RE. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Lean Dynamics™</span>
              <span>&bull;</span>
              <span>ALVI Framework™</span>
              <span>&bull;</span>
              <span>Confidential Off-Market Protocol</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
