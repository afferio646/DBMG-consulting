import React from 'react';

export function WorkshopView() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* 1. HERO SECTION (Above the Fold) */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-slate-800">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
          Strictly Capped at 20 Companies for Custom Configuration Support
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Stop The Fear of AI for Business. Give Your Team <span className="text-emerald-400">AI Superpowers.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Deploy Custom Mobile Tools Natively into Your Operations to Wipe Out Field Chaos, Automate Office Data Entry, and Protect Your Profit Margins.
        </p>
        <div className="mt-8 p-4 rounded-xl bg-slate-900/80 border border-slate-800 max-w-2xl mx-auto text-sm text-slate-300 shadow-lg">
          <span className="font-semibold text-white">A Private 3-Hour Virtual Intensive</span> for Operations Leaders & Business Owners.
        </div>
      </section>

      {/* 2. THE TWO SYSTEMIC LEAKS & TRANSFORMATION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-400">Operational Diagnostics</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Where Your Business Bleeds Margin Daily</h3>
        </div>

        {/* Side-by-Side Leaks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-red-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
            <span className="text-xs font-bold tracking-wider text-red-400 uppercase">Leak 01</span>
            <h4 className="text-xl font-bold text-white mt-2 mb-3">Field-to-Office Chaos</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              When mobile teams, technicians, or drivers log real-world data on paper forms, messy group texts, or disconnected emails, your business bleeds cash. Information gets lost, signatures are missed, and unbilled work slips right through the cracks.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-red-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
            <span className="text-xs font-bold tracking-wider text-red-400 uppercase">Leak 02</span>
            <h4 className="text-xl font-bold text-white mt-2 mb-3">Office Administrative Re-Work</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Chasing field crews down for missing details and manually re-typing or copy-pasting handwritten data into spreadsheets or accounting dashboards kills office productivity. It creates massive data lag, delays your customer billing cycles, and leaves leadership flying completely blind.
            </p>
          </div>
        </div>

        {/* The Solution Row */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-emerald-950/20 to-slate-900 border border-emerald-500/30">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase block mb-2">The Workflow Transformation</span>
          <h4 className="text-xl font-bold text-white mb-3">Erase Structural Bottlenecks Permanently</h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            During this live session, we completely erase these structural bottlenecks. We custom-configure and deploy a proprietary, mobile-responsive Field-to-Admin Operations Web App directly to your business. Your teams can access it on any phone or tablet via a secure web link with zero app store downloads. Field inputs route instantly to a secure, real-time office dashboard, eliminating paperwork and manual administrative double-handling forever.
          </p>
        </div>
      </section>

      {/* 3. THE 3-STAGE BUSINESS VELOCITY AGENDA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-400">Execution Framework</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">The 3-Stage Business Velocity Agenda</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold mb-4">01</div>
              <h4 className="text-lg font-bold text-white mb-2">The Superpower Protocol</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Isolate where manual information lag is eating into your weekly profit margins. We strip away the confusing technical jargon and show you how to give your existing employees practical, secure AI toolkits to automate daily reporting.
              </p>
            </div>
            <span className="mt-6 text-xs text-emerald-400 font-semibold tracking-wider uppercase">The Workflow Audit</span>
          </div>

          <div className="p-8 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold mb-4">02</div>
              <h4 className="text-lg font-bold text-white mb-2">Live Systems Deployment</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Watch our studio natively configure and deploy your company&apos;s proprietary Mobile Operations App live. By the end of this hour, your business will have its own secure cloud database environment up and running.
              </p>
            </div>
            <span className="mt-6 text-xs text-emerald-400 font-semibold tracking-wider uppercase">Your Custom Tech Asset</span>
          </div>

          <div className="p-8 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold mb-4">03</div>
              <h4 className="text-lg font-bold text-white mb-2">Hard-Coding Growth</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Bridge your newly deployed mobile inputs directly into a clean, automated management dashboard. Establish your 90-day execution framework so leadership can track field velocity and operational margins in real-time.
              </p>
            </div>
            <span className="mt-6 text-xs text-emerald-400 font-semibold tracking-wider uppercase">The Real-Time Engine</span>
          </div>
        </div>
      </section>

      {/* 4. THREE CLEAR INVESTMENT TIERS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-400">Investment Tiers</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Secure Your Company&apos;s Allocation</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Tier 1 */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tier 1</span>
              <h4 className="text-xl font-bold text-white mt-1 mb-2">Core System Deployment</h4>
              <div className="text-3xl font-black text-emerald-400 mb-6">$497</div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Live 3-Hour Virtual Intensive for 1 Executive + 1 Operations Lead. Turnkey deployment of your proprietary Mobile Field-to-Admin Operations App. Complete cloud database architecture and live system hosting included.
              </p>
            </div>
            <button className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition tracking-wide">
              Reserve Tier 1
            </button>
          </div>

          {/* Tier 2 (Most Popular Highlight) */}
          <div className="p-8 rounded-2xl bg-slate-900 border-2 border-emerald-500 relative flex flex-col justify-between shadow-2xl shadow-emerald-950/50">
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-slate-950 px-4 py-1 rounded-full text-xs font-black tracking-wider uppercase">
              Most Popular
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Tier 2</span>
              <h4 className="text-xl font-bold text-white mt-1 mb-2">The Multi-App Accelerator</h4>
              <div className="text-3xl font-black text-emerald-400 mb-6">$797</div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Everything in Tier 1 PLUS: Immediate custom configuration of a 2nd core software asset: The Mobile Field-SOP Digital Toolkit to host, track, and automate standard operating procedures and data entry. Optimized priority database setup.
              </p>
            </div>
            <button className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition tracking-wide shadow-lg">
              Reserve Tier 2 Accelerator
            </button>
          </div>

          {/* Tier 3 */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tier 3</span>
              <h4 className="text-xl font-bold text-white mt-1 mb-2">VIP Deep Integration</h4>
              <div className="text-3xl font-black text-emerald-400 mb-6">$1,997</div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Everything in Tier 2 PLUS: Skip the group session entirely for a Private 1-on-1 Systems Integration Audit. Custom operational database field mapping. Direct cloud-to-cloud bridging into your company&apos;s existing internal CRM or software stack.
              </p>
            </div>
            <button className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition tracking-wide">
              Request VIP Allocation
            </button>
          </div>

        </div>
      </section>

      {/* 5. THE RISK-REMOVAL VERIFICATION GRID */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-800">
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-center">Don’t Take Our Word For It. Verify the Software Cost Yourself.</h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            We claim that the custom, serverless mobile application architecture we are deploying for your company has a true development value of $15,000 to $30,000 if you hired a software agency. Before you reserve your seat, copy the text inside the box below and paste it into ChatGPT, Claude, or Gemini to run an independent market cost analysis:
          </p>
          
          <div className="p-4 sm:p-6 rounded-xl bg-[#070911] border border-slate-800 font-mono text-xs sm:text-sm text-emerald-400 leading-relaxed overflow-x-auto shadow-inner">
            &quot;Act as a boutique software development estimator for small-to-mid-sized business tools. Calculate the realistic commercial cost and timeline for a boutique agency to build a custom, single-tenant business workflow tool. The application is an installable, mobile-responsive Progressive Web App (PWA) with a real-time serverless database backend (like Firebase), hosted on a cloud network (like Vercel). It includes one streamlined AI-powered operational data-processing workflow and a basic management dashboard. Provide a realistic cost range.&quot;
          </div>
        </div>
      </section>

      {/* 6. THE PERFORMANCE GUARANTEE BANNER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16">
        <div className="p-8 sm:p-10 rounded-2xl bg-emerald-950/20 border-2 border-emerald-500/50 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-3">Our Bottom-Line Metric Guarantee</h3>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            We build and deploy functional technology assets. If we do not successfully pinpoint at least $10,000 in hidden operational waste, administrative bloat, or unbilled labor leaks during your live session audit, you will receive an immediate, 100% refund on your registration. You keep the fully deployed app infrastructure, the live cloud database hosting, and the system access anyway.
          </p>
        </div>
      </section>

    </div>
  );
}
