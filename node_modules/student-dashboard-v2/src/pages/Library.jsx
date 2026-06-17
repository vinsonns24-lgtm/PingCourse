import React from 'react';

export default function Library() {
  return (
    <>
      <header className="flex flex-col gap-base mb-md">
        <h1 className="font-display-lg text-display-lg text-primary tracking-tight">Library & Materials</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Explore premium resources for Mandarin and English mastery.
        </p>
      </header>

      {/* Header & Search */}
      <section className="flex flex-col md:flex-row gap-sm items-center justify-between mb-lg animate-slide-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
        <div className="relative w-full md:max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
          <input className="w-full pl-10 pr-4 py-3 rounded-lg border border-outline-variant/50 bg-surface/70 backdrop-blur-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-body-md" placeholder="Search topics, materials, or PDFs..." type="text" />
        </div>
        <div className="flex gap-sm overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
          <button className="px-4 py-2 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md whitespace-nowrap">All Resources</button>
          <button className="px-4 py-2 rounded-full border border-outline-variant/50 hover:bg-surface-variant/50 text-on-surface-variant font-label-md text-label-md whitespace-nowrap transition-colors">English</button>
          <button className="px-4 py-2 rounded-full border border-outline-variant/50 hover:bg-surface-variant/50 text-on-surface-variant font-label-md text-label-md whitespace-nowrap transition-colors">Mandarin</button>
        </div>
      </section>

      {/* Premium Resource Banner */}
      <section className="relative rounded-xl overflow-hidden bg-surface-variant border border-white/20 shadow-md mb-xl animate-slide-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-container opacity-90 z-0"></div>
        <div className="absolute inset-0 opacity-20 z-0 bg-[url('https://images.unsplash.com/photo-1546410531-bea464972175?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 p-lg md:p-xl flex flex-col md:flex-row items-center justify-between gap-lg">
          <div className="text-on-primary max-w-lg">
            <span className="inline-flex items-center gap-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md font-label-sm text-label-sm mb-md">
              <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
              Premium Masterclass
            </span>
            <h2 className="font-display-lg text-display-lg mb-sm">Advanced Business Mandarin</h2>
            <p className="font-body-lg text-body-lg text-on-primary/90 mb-md">Master the nuances of corporate negotiations and formal presentations with our new intensive video series and interactive materials.</p>
            <button className="px-6 py-3 rounded-lg bg-on-primary text-primary font-label-md text-label-md hover:bg-white/90 active:scale-95 transition-all shadow-sm">Explore Course</button>
          </div>
          <div className="hidden md:flex flex-col gap-sm relative">
            <div className="w-64 h-40 bg-surface/10 backdrop-blur-xl rounded-lg border border-white/20 p-4 shadow-lg transform rotate-3 absolute -right-4 top-4">
              <div className="h-full w-full bg-surface-container-lowest/50 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-on-primary">play_circle</span>
              </div>
            </div>
            <div className="w-64 h-40 bg-surface/20 backdrop-blur-xl rounded-lg border border-white/30 p-4 shadow-lg relative z-10 flex flex-col justify-end pb-6">
              <div className="font-headline-md text-headline-md text-on-primary font-bold mb-1">Module 1</div>
              <div className="font-label-sm text-label-sm text-on-primary/80">Formal Introductions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="flex flex-col gap-md animate-slide-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
        <div className="flex items-center justify-between">
          <h3 className="font-headline-md text-headline-md text-on-surface">Recently Added</h3>
          <a className="text-primary font-label-md text-label-md hover:underline" href="#">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {/* Card 1: PDF */}
          <div className="glass-panel p-md flex flex-col gap-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div className="h-12 w-12 rounded-lg bg-error-container text-on-error-container flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
              </div>
              <span className="px-2 py-1 rounded text-xs font-label-sm bg-surface-variant text-on-surface-variant">HSK 4</span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface text-lg mb-1">Essential Grammar Structures</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">A comprehensive guide to complex sentence structures for intermediate learners.</p>
            </div>
            <div className="mt-auto pt-sm border-t border-outline-variant/20 flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-outline">2.4 MB • PDF</span>
              <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">download</span>
              </button>
            </div>
          </div>

          {/* Card 2: Audio */}
          <div className="glass-panel p-md flex flex-col gap-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div className="h-12 w-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">headphones</span>
              </div>
              <span className="px-2 py-1 rounded text-xs font-label-sm bg-surface-variant text-on-surface-variant">B2 English</span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface text-lg mb-1">Daily Listening Practice Vol. 2</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Authentic conversational dialogues recorded in various public settings.</p>
            </div>
            <div className="mt-auto pt-sm border-t border-outline-variant/20 flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-outline">15 Mins • Audio</span>
              <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">play_arrow</span>
              </button>
            </div>
          </div>

          {/* Card 3: Video */}
          <div className="glass-panel p-md flex flex-col gap-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div className="h-12 w-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">smart_display</span>
              </div>
              <span className="px-2 py-1 rounded text-xs font-label-sm bg-surface-variant text-on-surface-variant">General</span>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-on-surface text-lg mb-1">Pronunciation Workshop</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Visual breakdown of mouth mechanics for difficult phonemes.</p>
            </div>
            <div className="mt-auto pt-sm border-t border-outline-variant/20 flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-outline">45 Mins • Video</span>
              <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">play_arrow</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
