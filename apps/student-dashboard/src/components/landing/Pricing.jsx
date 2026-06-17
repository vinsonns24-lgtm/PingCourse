import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <section className="py-xl max-w-container-max mx-auto px-margin-mobile md:px-lg animate-slide-up opacity-0 delay-500 w-full flex flex-col items-center" style={{ animationFillMode: 'forwards' }}>
      {/* Header Section */}
      <div className="text-center mb-xl max-w-2xl mt-md">
        <h2 className="font-display-lg text-display-lg text-primary mb-4">Invest in Your Fluency</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Simple, transparent pricing designed to fit your learning pace. Choose the plan that aligns with your goals.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter w-full max-w-5xl mb-xl">
        {/* Per Session */}
        <div className="glass-card rounded-xl p-md flex flex-col shadow-[0px_8px_24px_rgba(0,0,0,0.04)] relative transition-transform hover:-translate-y-1 duration-300">
          <div className="mb-sm">
            <h3 className="font-headline-md text-headline-md text-on-surface">Per Session</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Flexible, pay-as-you-go.</p>
          </div>
          <div className="mb-md">
            <span className="font-display-lg text-display-lg text-primary">$45</span>
            <span className="font-body-md text-body-md text-on-surface-variant">/session</span>
          </div>
          <ul className="flex flex-col gap-sm mb-lg flex-grow">
            <li className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              <span className="font-body-md text-body-md text-on-surface">1-on-1 Tutoring</span>
            </li>
            <li className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              <span className="font-body-md text-body-md text-on-surface">Flexible Scheduling</span>
            </li>
            <li className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              <span className="font-body-md text-body-md text-on-surface">Basic Materials</span>
            </li>
          </ul>
          <Link to="/login" className="w-full py-3 rounded-lg border-[1.5px] border-primary text-primary font-label-md text-label-md hover:bg-primary/10 transition-colors flex justify-center">
            Start Flexibly
          </Link>
        </div>

        {/* Monthly Bundle (Highlighted) */}
        <div className="glass-card-active rounded-xl p-md flex flex-col relative transform md:scale-105 z-10">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-on-secondary font-label-sm text-label-sm px-4 py-1 rounded-full whitespace-nowrap shadow-md">
            Most Popular
          </div>
          <div className="mb-sm mt-xs">
            <h3 className="font-headline-md text-headline-md text-primary">Monthly Bundle</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Consistent progress.</p>
          </div>
          <div className="mb-xs">
            <span className="font-display-lg text-display-lg text-primary">$320</span>
            <span className="font-body-md text-body-md text-on-surface-variant">/mo</span>
          </div>
          <div className="mb-md">
            <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/20 px-2 py-1 rounded-md">
              Save $40 compared to single sessions
            </span>
          </div>
          <ul className="flex flex-col gap-sm mb-lg flex-grow">
            <li className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              <span className="font-body-md text-body-md text-on-surface">8 Sessions per month</span>
            </li>
            <li className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              <span className="font-body-md text-body-md text-on-surface">Priority Scheduling</span>
            </li>
            <li className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              <span className="font-body-md text-body-md text-on-surface">Full Material Access</span>
            </li>
            <li className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              <span className="font-body-md text-body-md text-on-surface">Progress Tracking</span>
            </li>
          </ul>
          <Link to="/login" className="w-full py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:opacity-90 active:scale-95 transition-all flex justify-center">
            Subscribe Now
          </Link>
        </div>

        {/* Intensive */}
        <div className="glass-card rounded-xl p-md flex flex-col shadow-[0px_8px_24px_rgba(0,0,0,0.04)] relative transition-transform hover:-translate-y-1 duration-300">
          <div className="mb-sm">
            <h3 className="font-headline-md text-headline-md text-on-surface">Intensive</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Rapid language acquisition.</p>
          </div>
          <div className="mb-xs">
            <span className="font-display-lg text-display-lg text-primary">$720</span>
          </div>
          <div className="mb-md">
            <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/20 px-2 py-1 rounded-md">
              Best Value: Save $180
            </span>
          </div>
          <ul className="flex flex-col gap-sm mb-lg flex-grow">
            <li className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              <span className="font-body-md text-body-md text-on-surface">20 Sessions (valid 3 mos)</span>
            </li>
            <li className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              <span className="font-body-md text-body-md text-on-surface">Dedicated Tutor</span>
            </li>
            <li className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              <span className="font-body-md text-body-md text-on-surface">Custom Curriculum</span>
            </li>
            <li className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
              <span className="font-body-md text-body-md text-on-surface">24/7 Chat Support</span>
            </li>
          </ul>
          <Link to="/login" className="w-full py-3 rounded-lg border-[1.5px] border-primary text-primary font-label-md text-label-md hover:bg-primary/10 transition-colors flex justify-center">
            Get Intensive Plan
          </Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="glass-card rounded-xl p-lg w-full max-w-3xl flex flex-col items-center text-center shadow-[0px_8px_24px_rgba(0,0,0,0.04)] mt-md mb-xl">
        <span className="material-symbols-outlined text-primary text-[48px] mb-sm" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Not sure where to start?</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-md max-w-lg">
          Take our comprehensive placement test to determine your current level and get a personalized learning plan recommendation.
        </p>
        <Link to="/login" className="bg-primary text-on-primary font-label-md text-label-md px-xl py-3 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:opacity-90 active:scale-95 transition-all flex items-center gap-xs">
          Free Placement Test
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
