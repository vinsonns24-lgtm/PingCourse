import React from 'react';

export default function AdminOverview() {
  return (
    <>
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Tutor Dashboard</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Welcome back, Dr. Wei Chen. Here's your overview for today.</p>
        </div>
      </section>

      {/* Stats Bento */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter animate-slide-up opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
        <div className="glass-card rounded-xl p-md flex flex-col gap-sm">
          <div className="flex items-center gap-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px]">groups</span>
            <span className="font-label-md text-label-md">Total Students</span>
          </div>
          <div className="flex items-baseline gap-sm">
            <span className="font-display-md text-display-md text-on-surface">142</span>
            <span className="font-label-sm text-label-sm text-primary bg-primary/10 px-2 rounded-full">+12 this month</span>
          </div>
        </div>

        <div className="glass-card rounded-xl p-md flex flex-col gap-sm">
          <div className="flex items-center gap-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px]">calendar_clock</span>
            <span className="font-label-md text-label-md">Classes This Week</span>
          </div>
          <div className="flex items-baseline gap-sm">
            <span className="font-display-md text-display-md text-on-surface">24</span>
            <span className="font-label-sm text-label-sm text-outline">18 completed</span>
          </div>
        </div>

        <div className="glass-card rounded-xl p-md flex flex-col gap-sm">
          <div className="flex items-center gap-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px]">receipt_long</span>
            <span className="font-label-md text-label-md">Pending Invoices</span>
          </div>
          <div className="flex items-baseline gap-sm">
            <span className="font-display-md text-display-md text-error">7</span>
            <span className="font-label-sm text-label-sm text-outline">$1,450.00 total</span>
          </div>
        </div>

        <div className="glass-card rounded-xl p-md flex flex-col gap-sm bg-primary text-on-primary">
          <div className="flex items-center gap-xs text-on-primary/80">
            <span className="material-symbols-outlined text-[20px]">trending_up</span>
            <span className="font-label-md text-label-md">Avg. Attendance</span>
          </div>
          <div className="flex items-baseline gap-sm">
            <span className="font-display-md text-display-md">94%</span>
            <span className="font-label-sm text-label-sm bg-white/20 px-2 rounded-full">Great job!</span>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter animate-slide-up opacity-0 delay-200" style={{ animationFillMode: 'forwards' }}>
        {/* Upcoming Classes */}
        <div className="lg:col-span-2 flex flex-col gap-md">
          <div className="glass-card rounded-xl p-md flex flex-col gap-md">
            <div className="flex justify-between items-center border-b border-outline-variant/30 pb-sm">
              <h3 className="font-headline-md text-headline-md text-on-surface">Today's Schedule</h3>
              <button className="text-primary font-label-md text-label-md hover:underline">View All</button>
            </div>
            <div className="flex flex-col gap-sm">
              {/* Class 1 */}
              <div className="flex items-center gap-md p-sm rounded-lg hover:bg-surface-variant/50 transition-colors border border-outline-variant/20">
                <div className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-lg p-2 min-w-[70px]">
                  <span className="font-label-md text-label-md">14:00</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-label-lg text-label-lg text-on-surface">Business English - Cohort A</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">12 Students • Zoom Room 1</p>
                </div>
                <button className="btn-primary">Start</button>
              </div>
              {/* Class 2 */}
              <div className="flex items-center gap-md p-sm rounded-lg hover:bg-surface-variant/50 transition-colors border border-outline-variant/20">
                <div className="flex flex-col items-center justify-center bg-surface-variant text-on-surface-variant rounded-lg p-2 min-w-[70px]">
                  <span className="font-label-md text-label-md">16:30</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-label-lg text-label-lg text-on-surface">Mandarin HSK 4 Prep</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">8 Students • Zoom Room 2</p>
                </div>
                <button className="btn-secondary">Details</button>
              </div>
            </div>
          </div>
        </div>

        {/* Needs Attention */}
        <div className="flex flex-col gap-md">
          <div className="glass-card rounded-xl p-md flex flex-col gap-md h-full">
            <div className="flex justify-between items-center border-b border-outline-variant/30 pb-sm">
              <h3 className="font-headline-md text-headline-md text-on-surface">Action Required</h3>
            </div>
            <div className="flex flex-col gap-sm">
              <div className="flex gap-sm items-start p-sm rounded-lg bg-error-container/30 border border-error/20">
                <span className="material-symbols-outlined text-error">warning</span>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface">Grade 2 Assignments</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Business English cohort essays are due for grading.</p>
                </div>
              </div>
              <div className="flex gap-sm items-start p-sm rounded-lg bg-surface-variant/50 border border-outline-variant/20">
                <span className="material-symbols-outlined text-outline">mark_email_unread</span>
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface">3 Unread Messages</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Students asking about next week's test.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
