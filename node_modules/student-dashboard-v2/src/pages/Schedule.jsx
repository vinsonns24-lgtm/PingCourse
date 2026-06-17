import React from 'react';
import { useTodayClasses } from '../hooks/useDashboard';

export default function Schedule() {
  const { data: classes, isLoading: loadingClasses } = useTodayClasses();

  if (loadingClasses) {
    return <div className="min-h-screen flex items-center justify-center font-headline-md text-primary">Loading schedule...</div>;
  }

  return (
    <>
      <header className="flex flex-col gap-base mb-md">
        <h1 className="font-display-lg text-display-lg text-primary tracking-tight">My Schedule</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          View all your upcoming and past classes.
        </p>
      </header>

      <div className="glass-panel p-lg flex flex-col gap-md animate-slide-up opacity-0" style={{ animationFillMode: 'forwards' }}>
        <div className="flex justify-between items-center border-b border-outline-variant/30 pb-sm mb-sm">
          <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary">event_upcoming</span>
            Upcoming Classes
          </h3>
          <div className="flex items-center gap-sm text-on-surface-variant font-label-md text-label-md">
            <span>Filter:</span>
            <select className="bg-surface-container border border-outline-variant rounded px-2 py-1 focus:outline-none">
              <option>All Languages</option>
              <option>English</option>
              <option>Mandarin</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          {classes?.length > 0 ? classes.map((cls) => (
            <div key={cls.id} className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-md flex flex-col gap-md hover:bg-surface-bright transition-colors shadow-sm relative overflow-hidden group">
              {cls.status === 'Live' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>}
              
              <div className="flex justify-between items-start">
                 <div className={`flex flex-col items-center justify-center rounded-lg px-md py-sm ${cls.status === 'Live' ? 'bg-secondary-container/20 text-secondary' : 'bg-surface-variant text-on-surface-variant'}`}>
                  <span className="font-headline-md text-headline-md font-bold">{cls.time}</span>
                </div>
                {cls.status === 'Live' ? (
                  <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-md text-label-md uppercase tracking-wider flex items-center gap-xs animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full"></div> Live Now
                  </span>
                ) : (
                  <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-label-md text-label-md uppercase tracking-wider">
                    {cls.status}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <h4 className="font-title-lg text-title-lg text-on-surface mb-xs">{cls.title}</h4>
                <div className="flex items-center gap-md text-on-surface-variant font-body-md text-body-md mt-sm">
                  <span className="flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[18px]">person</span> {cls.tutor}
                  </span>
                  <span className="flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[18px]">videocam</span> Zoom Link Ready
                  </span>
                </div>
              </div>

              <div className="mt-sm pt-sm border-t border-outline-variant/20 flex gap-sm">
                 <button className={`flex-1 ${cls.status === 'Live' ? 'btn-primary bg-secondary hover:bg-secondary/90' : 'btn-secondary'}`}>
                  {cls.status === 'Live' ? 'Join Class Room' : 'View Details'}
                </button>
                <button className="px-3 bg-surface-container border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-variant hover:shadow-md transition-all active:scale-95 flex items-center justify-center" title="Reschedule">
                  <span className="material-symbols-outlined text-[20px]">edit_calendar</span>
                </button>
              </div>
            </div>
          )) : (
            <p className="text-on-surface-variant italic col-span-2">No upcoming classes scheduled.</p>
          )}
        </div>
      </div>
    </>
  );
}
