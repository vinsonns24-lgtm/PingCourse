import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hero from '../components/landing/Hero';
import Method from '../components/landing/Method';
import Programs from '../components/landing/Programs';
import Pricing from '../components/landing/Pricing';

export default function Landing() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col pt-16 md:pt-0 animate-fade-in relative overflow-x-hidden">
      {/* TopAppBar (Web) */}
      <header className="hidden md:flex justify-between items-center px-lg h-16 w-full fixed top-0 z-50 bg-surface/70 dark:bg-surface-dim/70 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm">
        <div className="flex items-center gap-sm cursor-pointer hover:opacity-80 transition-opacity" onClick={scrollTo('home')}>
          <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
          <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">PingCourse</span>
        </div>
        <nav className="flex gap-md">
          <a onClick={scrollTo('home')} className="text-primary font-bold font-label-md text-label-md hover:opacity-80 transition-opacity cursor-pointer">Home</a>
          <a onClick={scrollTo('method')} className="text-on-surface-variant font-label-md text-label-md hover:opacity-80 transition-opacity cursor-pointer">Method</a>
          <a onClick={scrollTo('programs')} className="text-on-surface-variant font-label-md text-label-md hover:opacity-80 transition-opacity cursor-pointer">Programs</a>
          <a onClick={scrollTo('pricing')} className="text-on-surface-variant font-label-md text-label-md hover:opacity-80 transition-opacity cursor-pointer">Pricing</a>
        </nav>
        <div className="flex items-center gap-sm">
          <Link to="/login" className="font-label-md text-label-md text-primary px-4 py-2 hover:bg-surface-variant/50 rounded-lg transition-colors active:scale-95 duration-200">
            Sign In
          </Link>
          <Link to="/login" className="btn-primary">
            Get Started
          </Link>
        </div>
      </header>

      {/* TopAppBar (Mobile) */}
      <header className="md:hidden flex justify-between items-center px-margin-mobile h-16 w-full fixed top-0 z-50 bg-surface/70 dark:bg-surface-dim/70 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm">
        <div className="flex items-center gap-sm cursor-pointer" onClick={scrollTo('home')}>
          <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
          <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">PingCourse</span>
        </div>
        <Link to="/login" className="font-label-md text-label-md text-primary px-3 py-1 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors active:scale-95 duration-200">
          Login
        </Link>
      </header>

      <main className="flex-grow flex flex-col md:pl-0 md:pt-16 pb-24 md:pb-0 relative">
        <div id="home" className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-lg py-xl">
          <Hero />
        </div>
        <div id="method" className="w-full relative">
          <Method />
        </div>
        <div id="programs" className="w-full relative bg-surface-container-low/30 border-y border-outline-variant/10">
          <Programs />
        </div>
        <div id="pricing" className="w-full relative">
          <Pricing />
        </div>
        
        {/* Footer */}
        <footer className="w-full bg-surface-container border-t border-outline-variant/20 py-lg mt-xl">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-lg flex flex-col md:flex-row justify-between items-center gap-md">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              <span className="font-headline-sm text-headline-sm font-bold text-on-surface">PingCourse</span>
            </div>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              © 2026 PingCourse Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
