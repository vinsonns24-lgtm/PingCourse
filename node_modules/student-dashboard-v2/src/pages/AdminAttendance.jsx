import React from 'react';

export default function AdminAttendance() {
  return (
    <>
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Attendance & Grading</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Manage this week's classes and student performance.</p>
        </div>
        <div className="flex gap-sm w-full md:w-auto">
          <button className="flex-1 md:flex-none btn-secondary glass-card py-2 px-6">
            Export Data
          </button>
          <button className="flex-1 md:flex-none btn-primary shadow-lg py-2 px-6">
            Save All
          </button>
        </div>
      </section>

      {/* Filters & Controls (Glassmorphic Bar) */}
      <section className="glass-card rounded-xl p-sm flex flex-col sm:flex-row items-center justify-between gap-sm shadow-[0px_8px_24px_rgba(0,0,0,0.02)] animate-slide-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
        <div className="flex items-center gap-sm w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
          <button className="px-md py-xs rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md whitespace-nowrap border border-outline-variant/30">
            This Week
          </button>
          <button className="px-md py-xs rounded-full bg-transparent text-on-surface-variant font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-low transition-colors">
            Last Week
          </button>
          <div className="w-px h-6 bg-outline-variant/50 mx-xs hidden sm:block"></div>
          <select className="bg-transparent border-none text-on-surface font-label-md text-label-md focus:ring-0 cursor-pointer pl-2 pr-8 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%3E%3Cpath%20fill%3D%22%23434653%22%20d%3D%22M7%2010l5%205%205-5z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-right">
            <option>All Programs</option>
            <option>Mandarin HSK</option>
            <option>English B2</option>
          </select>
        </div>
        <div className="relative w-full sm:w-64">
          <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
          <input className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg pl-10 pr-sm py-2 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 outline-none" placeholder="Search students..." type="text" />
        </div>
      </section>

      {/* Attendance Grid (Bento Style) */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-gutter animate-slide-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
        {/* Class Card 1 */}
        <article className="glass-card rounded-xl p-md shadow-[0px_8px_24px_rgba(0,0,0,0.04)] flex flex-col gap-md relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <header className="flex justify-between items-start z-10">
            <div>
              <div className="flex items-center gap-xs mb-1">
                <span className="px-2 py-0.5 rounded-full bg-secondary-container/10 text-secondary font-label-sm text-label-sm">Mandarin HSK 3</span>
                <span className="font-label-sm text-label-sm text-outline-variant">•</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Mon, 10:00 AM</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Intermediate Spoken</h3>
            </div>
            <button className="text-outline hover:text-primary transition-colors">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </header>
          <div className="flex flex-col gap-sm z-10">
            {/* Student Row 1 */}
            <div className="flex items-center justify-between p-sm rounded-lg bg-surface-container-lowest/50 border border-outline-variant/20 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-sm">
                <img alt="Elena Rodriguez" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://i.pravatar.cc/150?img=5" />
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Elena Rodriguez</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Grade: A-</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-container text-on-primary-container hover:bg-primary-container/80 transition-colors" title="Present">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                </button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface-variant hover:bg-error-container hover:text-on-error-container transition-colors" title="Absent">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
            </div>
            {/* Student Row 2 */}
            <div className="flex items-center justify-between p-sm rounded-lg bg-surface-container-lowest/50 border border-outline-variant/20 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-sm">
                <img alt="James Wilson" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://i.pravatar.cc/150?img=11" />
                <div>
                  <p className="font-label-md text-label-md text-on-surface">James Wilson</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Grade: B+</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-container text-on-primary-container hover:bg-primary-container/80 transition-colors" title="Present">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                </button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface-variant hover:bg-error-container hover:text-on-error-container transition-colors" title="Absent">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
            </div>
            {/* Student Row 3 */}
            <div className="flex items-center justify-between p-sm rounded-lg bg-surface-container-lowest/50 border border-outline-variant/20 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-sm">
                <img alt="Anita Patel" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://i.pravatar.cc/150?img=28" />
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Anita Patel</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Grade: A</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-colors" title="Present">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                </button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center bg-error-container text-on-error-container hover:bg-error-container/80 transition-colors" title="Absent">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Class Card 2 */}
        <article className="glass-card rounded-xl p-md shadow-[0px_8px_24px_rgba(0,0,0,0.04)] flex flex-col gap-md relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <header className="flex justify-between items-start z-10">
            <div>
              <div className="flex items-center gap-xs mb-1">
                <span className="px-2 py-0.5 rounded-full bg-primary-container/10 text-primary font-label-sm text-label-sm">English B2</span>
                <span className="font-label-sm text-label-sm text-outline-variant">•</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Mon, 14:00 PM</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Business English</h3>
            </div>
            <button className="text-outline hover:text-primary transition-colors">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </header>
          <div className="flex flex-col gap-sm z-10">
            {/* Student Row 1 */}
            <div className="flex items-center justify-between p-sm rounded-lg bg-surface-container-lowest/50 border border-outline-variant/20 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-sm">
                <img alt="Michael Chang" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://i.pravatar.cc/150?img=33" />
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Michael Chang</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Grade: B</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-container text-on-primary-container hover:bg-primary-container/80 transition-colors" title="Present">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                </button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface-variant hover:bg-error-container hover:text-on-error-container transition-colors" title="Absent">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
            </div>
            {/* Student Row 2 */}
            <div className="flex items-center justify-between p-sm rounded-lg bg-surface-container-lowest/50 border border-outline-variant/20 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-sm">
                <img alt="Sophia Laurent" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://i.pravatar.cc/150?img=47" />
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Sophia Laurent</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Grade: A</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container transition-colors" title="Present">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                </button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container-high text-on-surface-variant hover:bg-error-container hover:text-on-error-container transition-colors" title="Absent">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
