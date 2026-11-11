import React from 'react';

export function WorkshopView() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* 1. HERO SECTION (Above the Fold) */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-slate-800">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
          Live Interactive Workshop & Custom Build Session • Strictly Capped at 20 Companies
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Stop The Fear of AI for Business. Give Your Team <span className="text-emerald-400">AI Superpowers.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Wipe out field chaos, automate office data entry, and protect your profit margins by deploying custom mobile tools natively into your operations.
        </p>
      </section>

      {/* --- THE AI-AS-A-SERVICE STRATEGIC OVERVIEW --- */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/60 border border-emerald-500/30 shadow-2xl">
          <div className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">The DBMG Consulting AI-as-a-Service Advantage</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Why Companies Struggle With AI—And How We Eliminate the Guesswork</h2>
          
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Most companies today don’t understand AI or what tools to implement. Business leaders hesitate to spend time and money not knowing what is actually available, what will genuinely work, or what heavy infrastructure they think it takes to add AI to their business processes.
            </p>
            <p>
              <strong>Our AI-as-a-Service model eliminates all of that.</strong> As your strategic AI consultants, we develop, implement, and manage those tools for you from end to end. 
            </p>
            <p className="text-white font-medium">
              Through this workshop, you will gain a crystal-clear understanding of current AI capabilities, how they specifically benefit your industry&apos;s bottlenecks and manual workarounds, and how they create real superpowers for your employees—making them an even more integral, high-performing part of your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* --- WHY YOU SHOULD ATTEND (4 REASONS) --- */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-400">Core Value Drivers</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Why You Should Attend</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          
          {/* Reason 01 */}
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Reason 01: The Knowledge</div>
              <h4 className="text-lg font-bold text-white mb-2">Master AI & Superpowers</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Master practical AI for business and learn exactly how to shift your team to everyday AI superpowers without the technical jargon.
              </p>
            </div>
          </div>

          {/* Reason 02 */}
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Reason 02: Zero Overhead</div>
              <h4 className="text-lg font-bold text-white mb-2">Eliminate Heavy Infrastructure</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Eliminate the required infrastructure, manpower, training, implementation, and maintenance typically demanded by an in-house AI program.
              </p>
            </div>
          </div>

          {/* Reason 03 */}
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Reason 03: The Free Asset</div>
              <h4 className="text-lg font-bold text-white mb-2">Custom Deployed App ($0 Build Cost)</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Walk away with a custom-built, production-ready Mobile Progressive Web App and secure cloud database ($15k–$30k agency value) that is completely free.
              </p>
            </div>
          </div>

          {/* Reason 04 */}
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Reason 04: Exclusive Access</div>
              <h4 className="text-lg font-bold text-white mb-2">Strictly Limited Invitations</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                We are inviting a very limited number of select companies in your industry to ensure direct, hands-on configuration support.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. OPERATIONAL DIAGNOSTICS & BOTTLENECKS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-400">Operational Diagnostics</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Where Your Business Bleeds Margin Daily</h3>
        </div>

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
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase block mb-2">The PWA Workflow Transformation</span>
          <h4 className="text-xl font-bold text-white mb-3">Get Your Custom Mobile App Deployed Live</h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            During this live session, we custom-configure and deploy a proprietary, mobile-responsive Field-to-Admin Operations Web App directly to your business. Your teams access it on any phone or tablet via a secure web link with zero app store downloads. Field inputs route instantly to a secure, real-time office dashboard, eliminating paperwork forever.
          </p>
        </div>
      </section>

      {/* 3. AI WORKSHOP AGENDA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-400">Step-by-Step Roadmap</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">AI Workshop Agenda</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold mb-4">01</div>
              <h4 className="text-lg font-bold text-white mb-2">The Superpower Protocol</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Isolate where manual information lag eats your weekly profit margins. Strip away confusing technical jargon and learn how to give your existing employees practical, secure AI toolkits for daily reporting.
              </p>
            </div>
            <span className="mt-6 text-xs text-emerald-400 font-semibold tracking-wider uppercase">The Workflow Audit & Knowledge</span>
          </div>

          <div className="p-8 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold mb-4">02</div>
              <h4 className="text-lg font-bold text-white mb-2">Live Systems Deployment</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Watch our studio natively configure and deploy your company&apos;s proprietary Mobile Operations App live. By the end of this session, your business owns its secure cloud database environment.
              </p>
            </div>
            <span className="mt-6 text-xs text-emerald-400 font-semibold tracking-wider uppercase">Your Custom Free PWA Asset</span>
          </div>

          <div className="p-8 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold mb-4">03</div>
              <h4 className="text-lg font-bold text-white mb-2">Hard-Coding Growth</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Bridge mobile inputs directly into an automated management dashboard. Establish your 90-day execution framework so leadership tracks field velocity and operational margins in real-time.
              </p>
            </div>
            <span className="mt-6 text-xs text-emerald-400 font-semibold tracking-wider uppercase">The Real-Time Engine</span>
          </div>
        </div>
      </section>

      {/* 4. INVESTMENT TIERS & DELIVERABLES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800">
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-400">Choose Your Package</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Select Your Workshop Tier & Custom Build Package</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Tier 1 */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tier 1</span>
              <h4 className="text-xl font-bold text-white mt-1 mb-2">Core System Deployment</h4>
              <div className="text-3xl font-black text-emerald-400 mb-6">$497</div>
              
              <ul className="space-y-3 text-slate-300 text-sm mb-6">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span> Live AI & Operations Workshop for 1 Executive + 1 Lead
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span> Turnkey deployment of your custom Mobile Field-to-Admin PWA
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span> Complete cloud database architecture & live hosting included
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span> Full coverage under our $10k Bottom-Line Guarantee
                </li>
              </ul>
            </div>
            <button className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition tracking-wide">
              Secure Tier 1
            </button>
          </div>

          {/* Tier 2 (Most Popular Highlight) */}
          <div className="p-8 rounded-2xl bg-slate-900 border-2 border-emerald-500 relative flex flex-col justify-between shadow-2xl shadow-emerald-950/50">
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-slate-950 px-4 py-1 rounded-full text-xs font-black tracking-wider uppercase">
              Most Popular Value
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Tier 2</span>
              <h4 className="text-xl font-bold text-white mt-1 mb-2">The Multi-App Accelerator</h4>
              <div className="text-3xl font-black text-emerald-400 mb-6">$797</div>
              
              <ul className="space-y-3 text-slate-300 text-sm mb-6">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span> Everything included in Tier 1 Core Deployment
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span> <strong>Second Custom App:</strong> Mobile Field-SOP Digital Toolkit
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span> Automate standard operating procedures & data entry instantly
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span> Priority cloud database optimization & extra user seats
                </li>
              </ul>
            </div>
            <button className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition tracking-wide shadow-lg">
              Secure Tier 2 Accelerator
            </button>
          </div>

          {/* Tier 3 */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tier 3</span>
              <h4 className="text-xl font-bold text-white mt-1 mb-2">VIP Deep Integration</h4>
              <div className="text-3xl font-black text-emerald-400 mb-6">$1,997</div>
              
              <ul className="space-y-3 text-slate-300 text-sm mb-6">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span> Everything in Tier 2 Multi-App Accelerator
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span> Skip group sessions: Private 1-on-1 Systems Integration Audit
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span> Custom operational database field mapping for your exact stack
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">✓</span> Direct cloud-to-cloud bridging into your existing internal CRM
                </li>
              </ul>
            </div>
            <button className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition tracking-wide">
              Request VIP Package
            </button>
          </div>

        </div>
      </section>

      {/* 5. VERIFY APP DEVELOPMENT VALUE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-800">
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-center">Verify the Software Value Yourself</h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            Custom serverless mobile app architecture like this has a true development value of $15,000 to $30,000 if hired out to a software agency. Test this claim right now by copying the prompt below and pasting it into ChatGPT or Claude:
          </p>
          
          <div className="p-4 sm:p-6 rounded-xl bg-[#070911] border border-slate-800 font-mono text-xs sm:text-sm text-emerald-400 leading-relaxed overflow-x-auto shadow-inner">
            &quot;Act as a boutique software development estimator for small-to-mid-sized business tools. Calculate the realistic commercial cost and timeline for a boutique agency to build a custom, single-tenant business workflow tool. The application is an installable, mobile-responsive Progressive Web App (PWA) with a real-time serverless database backend (like Firebase), hosted on a cloud network (like Vercel). It includes one streamlined AI-powered operational data-processing workflow and a basic management dashboard. Provide a realistic cost range.&quot;
          </div>
        </div>
      </section>

      {/* 6. PERFORMANCE & ASSET GUARANTEE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16">
        <div className="p-8 sm:p-10 rounded-2xl bg-emerald-950/20 border-2 border-emerald-500/50 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-3">Our Zero-Risk Bottom-Line Guarantee</h3>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            We build and deploy functional technology assets. If we do not successfully pinpoint at least $10,000 in hidden operational waste, administrative bloat, or unbilled labor leaks during your session audit, you will receive an immediate, 100% refund on your registration. <strong>You keep the fully deployed app infrastructure, the live cloud database hosting, and the system access anyway.</strong>
          </p>
        </div>
      </section>

    </div>
  );
}
