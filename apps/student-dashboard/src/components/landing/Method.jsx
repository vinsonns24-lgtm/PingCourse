import React from 'react';

export default function Method() {
  return (
    <section className="py-xl text-center max-w-container-max mx-auto px-margin-mobile md:px-lg animate-slide-up opacity-0 delay-400" style={{ animationFillMode: 'forwards' }}>
      <span className="inline-block px-sm py-xs bg-primary-fixed text-on-primary-fixed rounded-full font-label-sm text-label-sm mb-md tracking-wider uppercase">Our Philosophy</span>
      <h2 className="font-display-lg text-display-lg text-primary mb-md">The Bridge Method</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-xl">
        Accelerate your fluency through a premium, highly-structured environment designed for ambitious learners. Our 1-on-1 methodology builds an unbreakable bridge between comprehension and natural production.
      </p>

      {/* Bento Grid Layout for the 3 Steps */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter text-left">
        {/* Step 1: Custom Curriculum (Spans full width top) */}
        <div className="md:col-span-12 glass-panel rounded-xl p-lg shadow-[0px_8px_24px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-surface-container-high to-transparent opacity-50 z-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-xl">
            <div className="flex-1">
              <div className="w-12 h-12 rounded-lg bg-surface-tint text-on-primary flex items-center justify-center mb-md shadow-md">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-sm">1. Custom Curriculum</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                We don't believe in one-size-fits-all. Every journey begins with a meticulous linguistic audit. We construct a tailored syllabus that targets your specific industry vocabulary, grammatical blind spots, and conversational goals.
              </p>
              <ul className="space-y-sm">
                <li className="flex items-center gap-sm text-on-surface-variant font-label-md text-label-md">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Initial Proficiency Audit
                </li>
                <li className="flex items-center gap-sm text-on-surface-variant font-label-md text-label-md">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Industry-Specific Modules
                </li>
                <li className="flex items-center gap-sm text-on-surface-variant font-label-md text-label-md">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Adaptive Pacing
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full md:w-auto">
              <div className="aspect-video rounded-lg bg-surface-variant overflow-hidden relative">
                <img alt="Curriculum Planning" className="w-full h-full object-cover opacity-90 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqQT_gLR6KllmC4H5zMMVseWJQuYrSAf4uGpzaE0wRRCOZsmP1E6N_Ob9QdPFWZMP02mMx9cC_qSL45q2fctuzoYvTNcj8WyHFkVWfljA2sUQpsaNaWuKJhKwrL86gltYkEvNO6kxGNJusV0L2urRrEJlBZ0AjSwUZUJrm3tNTikIx-RD4Ca7G36grD6hl8QirHYzkc0kj43cS6fcOE9h2CMsR5mYYrYOjUHOlVy9qQURfzS3glWwSFCJWFC3mt_AUcHCe52N9J54" />
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: 1-on-1 Focus (Spans left half) */}
        <div className="md:col-span-6 glass-panel rounded-xl p-lg shadow-[0px_8px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="w-12 h-12 rounded-lg bg-secondary text-on-secondary flex items-center justify-center mb-md shadow-md">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>person_play</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">2. 1-on-1 Focus</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
              Undivided attention accelerates acquisition. Your dedicated tutor acts as a linguistic coach, providing instant correction, nuanced cultural context, and a safe space to make mistakes and refine your pronunciation until it's natural.
            </p>
          </div>
          <div className="bg-surface-container-low rounded-lg p-md border border-outline-variant/20">
            <div className="flex items-center gap-md mb-sm">
              <span className="material-symbols-outlined text-secondary text-[24px]">forum</span>
              <h4 className="font-label-md text-label-md text-on-surface">The Feedback Loop</h4>
            </div>
            <div className="flex gap-xs mt-sm">
              <div className="flex-1 h-2 bg-secondary rounded-full"></div>
              <div className="flex-1 h-2 bg-secondary/60 rounded-full"></div>
              <div className="flex-1 h-2 bg-secondary/30 rounded-full"></div>
            </div>
            <div className="flex justify-between mt-xs px-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Speak</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Correct</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Internalize</span>
            </div>
          </div>
        </div>

        {/* Step 3: Immersive Practice (Spans right half) */}
        <div className="md:col-span-6 glass-panel rounded-xl p-lg shadow-[0px_8px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="w-12 h-12 rounded-lg bg-tertiary text-on-tertiary flex items-center justify-center mb-md shadow-md">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">3. Immersive Practice</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
              Learning doesn't stop when the session ends. Engage with our glassmorphic flashcards, real-world scenario simulators, and spaced repetition algorithms designed to cement vocabulary into your long-term memory.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-sm">
            <div className="bg-surface-container-highest rounded-lg p-sm text-center border border-white/50 shadow-sm">
              <span className="material-symbols-outlined text-primary mb-xs">style</span>
              <div className="font-label-md text-label-md text-on-surface">Smart Flashcards</div>
            </div>
            <div className="bg-surface-container-highest rounded-lg p-sm text-center border border-white/50 shadow-sm">
              <span className="material-symbols-outlined text-primary mb-xs">record_voice_over</span>
              <div className="font-label-md text-label-md text-on-surface">Pronunciation Lab</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
