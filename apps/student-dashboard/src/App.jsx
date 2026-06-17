import React from 'react';

function App() {
  return (
    <>
      {/* TopAppBar for Mobile */}
      <header className="fixed top-0 w-full z-50 bg-surface/70 dark:bg-surface-dim/70 backdrop-blur-xl border-b border-white/10 shadow-[0px_8px_24px_rgba(0,0,0,0.04)] md:hidden">
        <div className="flex justify-between items-center px-margin-mobile h-16 w-full">
          <button aria-label="Menu" className="text-on-surface-variant dark:text-outline-variant hover:opacity-80 transition-opacity active:scale-95 duration-200">
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
          <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">PingCourse</h1>
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/20">
            <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtuC_huTYcYCoxnKbTr0BRthZSlmf_JMM3Gc6RznccDe5-ZjTlyXHHHzlRht6LE2-PUfqZiGMqYJzaMIbSTVpWLkRCMmBWsxoBc5sKiC6iEGBL0lUW98s9hnponuRNYW1ALRgR7vUYn6KM35m6j0u26mmVV0fwZR7M3L3mVacH7MQhC5K0WciMQ3rz2WnslVeiZkhH7DEmyapTaIjHFQkCNbvwC-VfFKyalh4T6Xjwc5bRU_bLZyezM9SuNCc3uHUCo3f0ah3q5Uk" />
          </div>
        </div>
      </header>

      {/* NavigationDrawer for Desktop */}
      <nav className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-72 bg-surface-container-low dark:bg-surface-container-highest border-r border-outline-variant/20 shadow-md p-md gap-sm z-40">
        <div className="flex items-center gap-4 mb-xl">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm shrink-0">
            <img alt="Student Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCzljTd7R0E0tUfKRvCHPVa1G-zc5uzqdy3JNCGFZK6uwhrVCk31W4cuto0ETJMXXD7E7XUrDvNqU_QpcPRb0HbBkE0i-o9FNi8HYiQUV_D_Ib9RIRiqdR8k9cChh9KRPVWAFgXqgA5vv9w3wtSvocUtvqYOgx2K_-isjVDalMFq07TCeKGQq3pRkpbaZSveeoJA2DUfdw-cfvdR5LPgI3uLDJCLg2EuhTzTh_FD0b1NNNPPZSyklw1OMKnMLsu37XXjUaEXx5xic" />
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md font-bold text-secondary dark:text-secondary-fixed-dim line-clamp-1">Alex Chen</h2>
            <p className="font-label-sm text-label-sm text-on-surface-variant line-clamp-1">Premium Student</p>
          </div>
        </div>
        <ul className="flex flex-col gap-2 flex-grow">
          <li className="">
            <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-lg font-bold cursor-pointer active:opacity-70 transition-all duration-200" href="#">
              <span className="material-symbols-outlined filled" data-icon="analytics">analytics</span>
              <span className="font-body-md text-body-md">Overview</span>
            </a>
          </li>
          <li className="">
            <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant/30 hover:pl-5 rounded-lg cursor-pointer active:opacity-70 transition-all duration-200" href="#">
              <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
              <span className="font-body-md text-body-md">Attendance</span>
            </a>
          </li>
          <li className="">
            <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant/30 hover:pl-5 rounded-lg cursor-pointer active:opacity-70 transition-all duration-200" href="#">
              <span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
              <span className="font-body-md text-body-md">Invoices</span>
            </a>
          </li>
          <li className="">
            <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant/30 hover:pl-5 rounded-lg cursor-pointer active:opacity-70 transition-all duration-200" href="#">
              <span className="material-symbols-outlined" data-icon="group">group</span>
              <span className="font-body-md text-body-md">Students</span>
            </a>
          </li>
        </ul>
        <div className="mt-auto pt-4 border-t border-outline-variant/20">
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant/30 hover:pl-5 rounded-lg cursor-pointer active:opacity-70 transition-all duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="font-body-md text-body-md">Settings</span>
          </a>
          <p className="font-label-sm text-label-sm text-outline px-4 mt-2">v1.0.4</p>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-1 w-full lg:ml-72 pt-20 md:pt-md px-margin-mobile md:px-lg pb-32 lg:pb-md flex flex-col gap-xl">
        {/* Welcome Hero Section */}
        <section className="glass-card rounded-xl p-md md:p-lg relative overflow-hidden flex flex-col justify-end min-h-[200px]">
          {/* decorative background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-secondary-container/10 -z-10 pointer-events-none"></div>
          {/* abstract pattern overlay */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <h2 className="font-display-lg text-display-lg text-on-surface mb-2">Halo, Selamat Belajar!</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Your personalized learning hub. Let's make progress today.</p>
        </section>
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter">
          {/* Left Column: Schedule & Progress */}
          <div className="xl:col-span-8 flex flex-col gap-lg">
            {/* Today's Schedule */}
            <section>
              <div className="flex justify-between items-end mb-md">
                <h3 className="font-headline-lg text-headline-lg text-on-surface">Today's Schedule</h3>
                <a className="font-label-md text-label-md text-primary hover:underline" href="#">View Full Calendar</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                {/* Class Card 1 */}
                <div className="glass-card rounded-lg p-sm flex items-start gap-sm relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary group-hover:w-2 transition-all duration-300"></div>
                  <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center shrink-0 text-on-primary-fixed">
                    <span className="material-symbols-outlined" data-icon="translate">translate</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-label-md text-label-md text-on-surface">Mandarin B1</h4>
                      <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">10:00 AM</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-2">Business Vocabulary & Negotiation</p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full overflow-hidden shrink-0">
                        <img alt="Tutor" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYVCkwB1nBhcUBTyf_wbXoDoJE1IElL9L4IvjgiGQakuGBqISj_53acLHke-VcwR_Hg8dmh4JuMSALRcEAHIs_q9b2L5fE-uJm8gjiBfkQqKPrCQObJ5nlBKxRBFPuCUMrgg5SqqB6WTVjKmbUaKLNyhxBSO60A5hlHE0f50dJDpKmCNvS-6vttOyU2hMWC9rLAwx7elh9yvW_ptjC8AcKjlgI-DRFw9bcnZvLLPozF82ubRHrn8mAbGTWdi63YtT9nXIe9mnjZRw" />
                      </div>
                      <span className="font-label-sm text-label-sm text-outline">Li Wei</span>
                    </div>
                  </div>
                  <button aria-label="Join Class" className="shrink-0 p-2 rounded-full hover:bg-surface-variant transition-colors text-primary">
                    <span className="material-symbols-outlined" data-icon="videocam">videocam</span>
                  </button>
                </div>
                {/* Class Card 2 */}
                <div className="glass-card rounded-lg p-sm flex items-start gap-sm relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary group-hover:w-2 transition-all duration-300"></div>
                  <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center shrink-0 text-on-secondary-fixed">
                    <span className="material-symbols-outlined" data-icon="school">school</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-label-md text-label-md text-on-surface">English IELTS Prep</h4>
                      <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">2:30 PM</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-2">Speaking Section Practice</p>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full overflow-hidden shrink-0">
                        <img alt="Tutor" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa0CTwJxoH75dVeH3h2h_CGetaCuV1htT6JMD60LXlIfPnUjOQTRqaA1DPJ79PZ8muFJ5dUF24HtVh22OQbwXqrRMlW6VtkEY1l4tX7OOos69NJsO8G1GFb9TghqWuEHXJ587Ro4Gbp0SHhhJv42Ibn8Mj9uRqNzmsc_TWko_CgQDi3pEBcG8gVOfnldFZ-v5gV21D4B29xbWVFf3Chh2971nnYzPe-rZqgeWHPEyzd4gPdzQJQ98BNY7QIFGtxlY7yO5Phfr4OzM" />
                      </div>
                      <span className="font-label-sm text-label-sm text-outline">Sarah Jenkins</span>
                    </div>
                  </div>
                  <button aria-label="Join Class" className="shrink-0 p-2 rounded-full hover:bg-surface-variant transition-colors text-primary">
                    <span className="material-symbols-outlined" data-icon="videocam">videocam</span>
                  </button>
                </div>
              </div>
            </section>
            
            {/* Learning Progress */}
            <section>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-md">Learning Progress</h3>
              <div className="glass-card rounded-xl p-md flex flex-col gap-md">
                {/* English Progress */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md text-on-surface bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full">EN</span>
                      <h4 className="font-body-lg text-body-lg text-on-surface">Advanced English (C1)</h4>
                    </div>
                    <span className="font-label-md text-label-md text-primary">68%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: '68%' }}></div>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mt-2 text-right">Unit 8 of 12 Completed</p>
                </div>
                {/* Mandarin Progress */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md text-on-surface bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded-full">ZH</span>
                      <h4 className="font-body-lg text-body-lg text-on-surface">Intermediate Mandarin (HSK 3)</h4>
                    </div>
                    <span className="font-label-md text-label-md text-secondary">42%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full transition-all duration-1000 ease-out" style={{ width: '42%' }}></div>
                  </div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mt-2 text-right">Unit 5 of 12 Completed</p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Right Column: Quick Actions & Flashcards */}
          <div className="xl:col-span-4 flex flex-col gap-lg">
            {/* Upcoming Quiz Prompt */}
            <section className="glass-card rounded-xl p-md bg-gradient-to-br from-surface-container to-primary-fixed border-none relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-20 transform rotate-12">
                <span className="material-symbols-outlined text-9xl" data-icon="quiz">quiz</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-primary-container mb-2 relative z-10">Weekly Quiz</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4 relative z-10">Test your knowledge on Units 4 & 5.</p>
              <button className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all w-full relative z-10">
                Start Quiz
              </button>
            </section>
          </div>
        </div>
      </main>

      {/* BottomNavBar for Mobile */}
      <nav className="fixed bottom-0 w-full rounded-t-xl z-50 bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-xl shadow-lg border-t border-white/10 md:hidden">
        <div className="flex justify-around items-center px-4 py-3 pb-safe">
          {/* Active Tab: Dashboard (Mapped to Overview intent) */}
          <button className="flex flex-col items-center justify-center bg-primary-fixed dark:bg-primary-container text-on-primary-fixed dark:text-on-primary-container rounded-full px-4 py-1 hover:bg-surface-variant/50 active:scale-90 transition-all duration-300">
            <span className="material-symbols-outlined filled" data-icon="dashboard">dashboard</span>
            <span className="font-label-sm text-label-sm mt-1">Dashboard</span>
          </button>
          <button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant/50 active:scale-90 transition-all duration-300 px-2">
            <span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
            <span className="font-label-sm text-label-sm mt-1">Schedule</span>
          </button>

          <button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant/50 active:scale-90 transition-all duration-300 px-2">
            <span className="material-symbols-outlined" data-icon="quiz">quiz</span>
            <span className="font-label-sm text-label-sm mt-1">Quizzes</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default App;
