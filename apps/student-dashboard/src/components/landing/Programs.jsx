import React from 'react';

export default function Programs() {
  return (
    <section className="py-xl max-w-container-max mx-auto px-margin-mobile md:px-lg animate-slide-up opacity-0 delay-500" style={{ animationFillMode: 'forwards' }}>
      <div className="mb-xl text-center lg:text-left pt-md">
        <h2 className="font-display-lg text-display-lg text-on-surface mb-sm">Master Your Language Journey</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Comprehensive, structured paths for achieving professional and conversational fluency in English and Mandarin. Tailored to your specific goals.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* English Mastery Card */}
        <div className="col-span-12 lg:col-span-6 glass-card rounded-xl p-md flex flex-col h-full relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
          <div className="flex justify-between items-start mb-md">
            <div className="flex items-center gap-sm">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">language_us</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">English Mastery</h3>
                <span className="inline-block bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2 py-1 rounded-full mt-xs">CEFR A1 - C1</span>
              </div>
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
            A rigorous curriculum designed to take you from foundational understanding to professional fluency. Structured around the Common European Framework of Reference.
          </p>
          <div className="space-y-sm mb-lg">
            <div className="flex items-center gap-sm p-sm bg-surface-container-low rounded-lg">
              <span className="material-symbols-outlined text-primary">business_center</span>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface">Business Track</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Focus on corporate communication, negotiations, and presentations.</p>
              </div>
            </div>
            <div className="flex items-center gap-sm p-sm bg-surface-container-low rounded-lg">
              <span className="material-symbols-outlined text-primary">school</span>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface">Academic Track</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Preparation for IELTS/TOEFL, academic writing, and university readiness.</p>
              </div>
            </div>
          </div>
          <button className="w-full py-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-[0_2px_0_rgba(0,0,0,0.2)] hover:opacity-90 transition-opacity active:translate-y-[2px] active:shadow-none">
            Explore Curriculum
          </button>
        </div>

        {/* Mandarin Excellence Card */}
        <div className="col-span-12 lg:col-span-6 glass-card rounded-xl p-md flex flex-col h-full relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
          <div className="flex justify-between items-start mb-md">
            <div className="flex items-center gap-sm">
              <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">translate</span>
              </div>
              <div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">Mandarin Excellence</h3>
                <span className="inline-block bg-surface-variant text-on-surface-variant font-label-sm text-label-sm px-2 py-1 rounded-full mt-xs">HSK 1 - 6</span>
              </div>
            </div>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">
            Master the nuances of Mandarin Chinese with our structured HSK-aligned program. From basic tones to complex cultural idioms.
          </p>
          <div className="space-y-sm mb-lg">
            <div className="flex items-center gap-sm p-sm bg-surface-container-low rounded-lg">
              <span className="material-symbols-outlined text-secondary">forum</span>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface">Conversational Fluency</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Practical speaking and listening for everyday interactions and travel.</p>
              </div>
            </div>
            <div className="flex items-center gap-sm p-sm bg-surface-container-low rounded-lg">
              <span className="material-symbols-outlined text-secondary">menu_book</span>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface">Comprehensive Literacy</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Intensive focus on reading, character writing, and HSK exam preparation.</p>
              </div>
            </div>
          </div>
          <button className="w-full py-sm bg-secondary text-on-secondary font-label-md text-label-md rounded-lg shadow-[0_2px_0_rgba(0,0,0,0.2)] hover:opacity-90 transition-opacity active:translate-y-[2px] active:shadow-none">
            Explore Curriculum
          </button>
        </div>
      </div>
    </section>
  );
}
