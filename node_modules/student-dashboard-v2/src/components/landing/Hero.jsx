import React from 'react';

export default function Hero() {
  return (
    <div className="flex flex-col gap-xl">
      {/* Hero Section */}
      <section className="relative rounded-[2rem] overflow-hidden bg-surface-container-low hero-pattern border border-outline-variant/20 shadow-lg min-h-[500px] flex items-center animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low/90 to-transparent z-10"></div>
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-lg p-lg md:p-xl w-full">
          <div className="flex flex-col justify-center gap-md animate-slide-up opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '100ms' }}>
            <div className="inline-flex items-center gap-2 bg-primary-fixed/50 text-on-primary-fixed px-3 py-1 rounded-full w-fit">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>language</span>
              <span className="font-label-sm text-label-sm">Premium Language Education</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface">Master English & Mandarin with Expert Guidance.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">Accelerate your fluency through structured, personalized private lessons designed for ambitious learners. Experience high-performance education tailored to your goals.</p>
            <div className="flex flex-wrap gap-sm mt-sm">
              <button className="bg-[#25D366] text-white font-label-md text-label-md px-6 py-3 rounded-full shadow-[0px_2px_4px_rgba(0,0,0,0.1)] hover:opacity-90 active:scale-95 transition-all flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path>
                </svg>
                Daftar via WhatsApp
              </button>
              <a href="#programs" className="border-2 border-primary/20 text-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary/10 active:scale-95 transition-all flex items-center justify-center">
                View Programs
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-end items-center relative animate-slide-right opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '200ms' }}>
            <img alt="Students learning" className="rounded-2xl shadow-xl w-[400px] h-[400px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDbEQSBOYKpu0dal0VyOmHX6umKnrK4mnluD5PhGce-AzrMod7UF5nmArDSGslEEJbMaQLpSIkFCtExVjX03UWP6jYNZ4iDUXAFIz-Jyt9ueYbCRVLRrRY_zR6BIHuPrEDhurlP8ZD2LxHgc33CQLiycf4sPww8jG7bl6-O_npNBT9cdwTZPgFRwQCGhDd8Wx3jx7--X1lsWLbvAh7pPRV6Hcxouy-eSNcDXna1ZDLavcAfhAcxeznlKu-z7VkrpW4HwTt3lCifeg" />
            <div className="absolute bottom-10 right-10 glass-card p-4 rounded-xl flex items-center gap-3 animate-pulse-slow">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>translate</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface">Fluent in 6 months</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Proven methodology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PingCourse Section */}
      <section className="py-xl animate-slide-up opacity-0 delay-300" style={{ animationFillMode: 'forwards' }}>
        <div className="text-center mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Why Choose PingCourse?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">We provide the structural foundation and expert guidance you need to achieve linguistic fluency efficiently and confidently.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {/* Feature 1 */}
          <div className="glass-card p-lg rounded-2xl flex flex-col items-start hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center mb-md">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>record_voice_over</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Native Tutors</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Learn nuances, pronunciation, and cultural context directly from highly qualified native speakers.</p>
          </div>
          {/* Feature 2 */}
          <div className="glass-card p-lg rounded-2xl flex flex-col items-start hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 rounded-lg bg-surface-tint text-on-primary flex items-center justify-center mb-md">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Flexible Hours</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Schedule your private sessions around your busy professional or academic life with ease.</p>
          </div>
          {/* Feature 3 */}
          <div className="glass-card p-lg rounded-2xl flex flex-col items-start hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center mb-md">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Structured Methodology</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Follow a proven, clear curriculum designed to track progress and guarantee measurable results.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
