import React from 'react';

export default function AiSolutions() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-slate-100">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">AI Solutions & Systems Architecture</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Engineering high-performance artificial intelligence systems, custom web utilities, and automated workflows designed for immediate operational ROI.
        </p>
      </div>

      <div className="space-y-12">
        {/* Section 1 */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 lg:p-12 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Rapid Software Prototyping & PWAs</h2>
          <p className="text-slate-300 leading-relaxed">
            We build lightning-fast Progressive Web Apps (PWAs) tailored specifically to your business operations. By leveraging modern frontend architecture and serverless backends, we deliver production-ready tools without traditional agency overhead or delays.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 lg:p-12 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Operational Automation & Data Pipelines</h2>
          <p className="text-slate-300 leading-relaxed">
            Eliminate manual data entry and human error. We connect real-world field inputs directly into automated databases, CRM systems, and live management dashboards to give leadership instant visibility.
          </p>
        </div>

        {/* Section 3: AI-as-a-Service Model */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 lg:p-12 space-y-6 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">The Turnkey AI-as-a-Service Model</h2>
          <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Skip the high cost, steep learning curve, and resource drain of hiring and managing internal AI teams. DBMG manages the entire lifecycle—from architecture and prompt engineering to secure cloud deployment and ongoing maintenance.
          </p>
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-lg text-center cursor-pointer"
            >
              Discuss Your Project
            </a>
          </div>
        </div>

        {/* --- GATEWAY TO EXCLUSIVE WORKSHOPS --- */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 via-emerald-950/30 to-slate-900 border border-emerald-500/40 text-center shadow-2xl max-w-4xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase block mb-2">Limited Availability</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Join One of Our Exclusive AI Workshops</h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Discover how our AI-as-a-Service model eliminates heavy overhead, get your custom mobile operations app built live, and secure your business under our zero-risk guarantee.
          </p>
          <a 
            href="#workshop" 
            className="inline-block px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-wide transition shadow-lg shadow-emerald-500/20"
          >
            Get Access to Workshop
          </a>
        </div>

      </div>
    </div>
  );
}
      
