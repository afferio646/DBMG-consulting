import React from 'react';

export const AiSolutions = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Engineering Custom AI & <span className="text-blue-600 dark:text-blue-400">Micro-Utilities</span> for Modern Enterprise
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Transforming complex operational friction into streamlined, automated workflows through proprietary architecture and rapid development frameworks.
        </p>
      </section>

      {/* Proprietary Development & PWAs */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Proprietary Development & Progressive Web Utilities</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We rapidly prototype and deploy custom Progressive Web Utilities (PWAs) tailored to your exact operational workflows. Our architecture prioritizes speed, cross-platform accessibility, and seamless integration with your existing business tech stack.
              </p>
              <ul className="space-y-3">
                {['High-Performance Architecture', 'Cross-Platform Accessibility', 'Seamless Tech Stack Integration'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 dark:text-gray-200">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Placeholder for PWA diagram/graphic */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center min-h-[250px]">
                 <span className="text-gray-400 dark:text-gray-500 font-semibold">PWA Architecture Diagram</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Areas & Operational Efficiency */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Solution Areas & Operational Efficiency</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Business Development & Growth</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Automated lead intelligence, targeted prospecting systems, and streamlined qualification workflows to scale your outreach.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg transition-shadow duration-300">
             <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Operations & Workflow Automation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Intelligent micro-utilities designed to eliminate manual bottlenecks, reduce overhead, and optimize day-to-day execution.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg transition-shadow duration-300">
             <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Financial & Transactional Tools</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Custom calculators, automated reporting engines, and streamlined financial data processing tools tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* The AI-as-a-Service (ITaaS) Model */}
      <section className="py-20 bg-blue-600 dark:bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Turnkey AI-as-a-Service Model</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
            Skip the high cost, steep learning curve, and resource drain of hiring and managing internal AI teams. DBMG manages the entire lifecycle—from architecture and programming to full integration and ongoing management—allowing you to leverage advanced AI capabilities effortlessly.
          </p>
          <div className="inline-flex items-center justify-center space-x-4">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors shadow-lg">
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

