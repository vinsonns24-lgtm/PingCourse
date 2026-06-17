import React from 'react';
import { useStudentDashboard, usePendingInvoices, useTodayClasses } from '../hooks/useDashboard';

export default function Overview() {
  const { data: dashboard, isLoading: loadingDash } = useStudentDashboard();
  const { data: invoices, isLoading: loadingInvoices } = usePendingInvoices();
  const { data: classes, isLoading: loadingClasses } = useTodayClasses();

  if (loadingDash || loadingInvoices || loadingClasses) {
    return <div className="min-h-screen flex items-center justify-center font-headline-md text-primary">Loading your dashboard...</div>;
  }

  const pendingInvoice = invoices?.[0]; // Get first pending invoice for alert
  
  return (
    <>
      {/* Header Section */}
      <header className="flex flex-col gap-base">
        <h1 className="font-display-lg text-display-lg text-primary tracking-tight">Halo, {dashboard?.name || "Student"}!</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          {dashboard?.message}
        </p>
      </header>

      {/* Top Bento Row: Alerts & Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter animate-slide-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
        {/* Pending Invoice Alert */}
        {pendingInvoice ? (
          <div className="glass-panel p-md bg-error-container/40 border-error/20 flex flex-col justify-between gap-md relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors"></div>
            <div className="flex items-start justify-between relative z-10">
              <div className="flex items-center gap-sm text-secondary">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
                <h3 className="font-headline-md text-headline-md">Pending Invoice</h3>
              </div>
            </div>
            <div className="relative z-10">
              <p className="font-body-md text-body-md text-on-surface-variant mb-xs">{pendingInvoice.description}</p>
              <p className="font-display-lg text-display-lg text-on-surface font-bold mb-md">Rp {pendingInvoice.amount.toLocaleString('id-ID')}</p>
              <button className="w-full bg-secondary text-on-secondary font-label-md text-label-md py-2 px-4 rounded-lg shadow-sm transition-all hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 flex justify-center items-center gap-xs">
                Pay Now
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="glass-panel p-md bg-surface-container-low flex flex-col justify-center items-center gap-md text-center">
            <span className="material-symbols-outlined text-[48px] text-primary/30">verified</span>
            <p className="font-label-md text-on-surface-variant">All caught up! No pending invoices.</p>
          </div>
        )}

        {/* Learning Progress */}
        <div className="glass-panel p-lg lg:col-span-2 flex flex-col gap-md">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-md text-headline-md text-on-surface">Learning Progress</h3>
            <span className="material-symbols-outlined text-outline">trending_up</span>
          </div>
          <div className="flex flex-col gap-md mt-sm">
            {dashboard?.progress?.map((prog) => (
              <div key={prog.id} className="flex flex-col gap-base">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-sm">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${prog.language === 'English' ? 'bg-primary-fixed text-primary' : 'bg-secondary-fixed text-secondary'}`}>
                      {prog.code}
                    </div>
                    <span className="font-label-md text-label-md text-on-surface">{prog.level}</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{prog.percentage}%</span>
                </div>
                <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-1000 ease-out ${prog.language === 'English' ? 'bg-primary' : 'bg-secondary'}`} style={{ width: `${prog.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bento Row: Schedule & Feedback */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter animate-slide-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
        {/* Today's Schedule */}
        <div className="glass-panel p-md lg:p-lg lg:col-span-2 flex flex-col gap-md">
          <div className="flex justify-between items-center mb-sm border-b border-outline-variant/30 pb-sm">
            <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              Today's Schedule
            </h3>
            <a className="font-label-md text-label-md text-primary hover:underline" href="/schedule">View Calendar</a>
          </div>
          <div className="flex flex-col gap-sm">
            {classes?.length > 0 ? classes.map((cls) => (
              <div key={cls.id} className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-md flex flex-col md:flex-row justify-between items-start md:items-center gap-md hover:bg-surface-bright transition-colors shadow-sm relative overflow-hidden">
                {cls.status === 'Live' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>}
                <div className="flex items-start gap-md">
                  <div className={`flex flex-col items-center justify-center rounded-lg px-sm py-xs min-w-[70px] ${cls.status === 'Live' ? 'bg-secondary-container/20 text-secondary' : 'bg-surface-variant text-on-surface-variant'}`}>
                    <span className="font-headline-md text-headline-md font-bold">{cls.time}</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-sm mb-xs">
                      <h4 className="font-label-md text-label-md text-on-surface">{cls.title}</h4>
                      {cls.status === 'Live' ? (
                        <span className="bg-secondary text-on-secondary px-2 py-0.5 rounded-full font-label-sm text-[10px] uppercase tracking-wider flex items-center gap-xs animate-pulse">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div> Live
                        </span>
                      ) : (
                        <span className="bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded-full font-label-sm text-[10px] uppercase tracking-wider">
                          {cls.status}
                        </span>
                      )}
                    </div>
                    <span className="font-body-md text-body-md text-on-surface-variant flex items-center gap-xs">
                      <span className="material-symbols-outlined text-[16px]">person</span> {cls.tutor}
                    </span>
                  </div>
                </div>
                <button className={`w-full md:w-auto ${cls.status === 'Live' ? 'btn-primary bg-secondary hover:bg-secondary/90' : 'btn-secondary'}`}>
                  {cls.status === 'Live' ? 'Join Room' : 'Details'}
                </button>
              </div>
            )) : (
              <p className="text-on-surface-variant italic">No classes scheduled for today.</p>
            )}
          </div>
        </div>

        {/* Tutor's Insight */}
        {dashboard?.tutorInsight && (
          <div className="glass-panel p-md lg:p-lg flex flex-col gap-md bg-gradient-to-br from-surface to-surface-container-low">
            <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">chat_bubble</span>
              Tutor's Insight
            </h3>
            <div className="flex flex-col gap-md mt-sm relative">
              <span className="material-symbols-outlined absolute -top-4 -left-2 text-surface-variant text-6xl opacity-30 pointer-events-none">format_quote</span>
              <p className="font-body-md text-body-md text-on-surface-variant italic relative z-10 leading-relaxed">
                "{dashboard.tutorInsight.message}"
              </p>
              <div className="flex items-center gap-sm mt-auto pt-sm border-t border-outline-variant/20">
                <img alt={dashboard.tutorInsight.tutorName} className="w-10 h-10 rounded-full object-cover border-2 border-surface" src={dashboard.tutorInsight.avatarUrl} />
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface">{dashboard.tutorInsight.tutorName}</span>
                  <span className="font-label-sm text-label-sm text-outline">{dashboard.tutorInsight.role}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
