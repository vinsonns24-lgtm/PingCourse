import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <>
      {/* TopAppBar (Web) */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden md:flex justify-between items-center px-lg h-16 w-full fixed top-0 z-50 bg-surface/70 dark:bg-surface-dim/70 backdrop-blur-xl border-b border-white/10 shadow-[0px_8px_24px_rgba(0,0,0,0.04)]"
      >
        <div className="flex items-center gap-sm cursor-pointer hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-primary text-2xl">school</span>
          <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">PingCourse</span>
        </div>
        <nav className="flex gap-md">
          <a className="text-primary dark:text-primary-fixed-dim font-bold font-label-md text-label-md hover:opacity-80 transition-opacity" href="#">Home</a>
          <a className="text-on-surface-variant dark:text-outline-variant font-label-md text-label-md hover:opacity-80 transition-opacity" href="#programs">Programs</a>
          <a className="text-on-surface-variant dark:text-outline-variant font-label-md text-label-md hover:opacity-80 transition-opacity" href="#method">Method</a>
          <a className="text-on-surface-variant dark:text-outline-variant font-label-md text-label-md hover:opacity-80 transition-opacity" href="#pricing">Pricing</a>
        </nav>
        <div className="flex items-center gap-sm">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="font-label-md text-label-md text-primary px-4 py-2 hover:bg-surface-variant/50 rounded-lg transition-colors">Sign In</motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg shadow-[0_2px_0_0_rgba(0,0,0,0.1)] hover:bg-primary/90 transition-colors">Get Started</motion.button>
        </div>
      </motion.header>

      {/* TopAppBar (Mobile) */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="md:hidden flex justify-between items-center px-margin-mobile h-16 w-full fixed top-0 z-50 bg-surface/70 dark:bg-surface-dim/70 backdrop-blur-xl border-b border-white/10 shadow-[0px_8px_24px_rgba(0,0,0,0.04)]"
      >
        <div className="flex items-center gap-sm">
          <span className="material-symbols-outlined text-on-surface-variant text-2xl cursor-pointer active:scale-95 transition-transform duration-200" data-icon="menu">menu</span>
          <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">PingCourse</span>
        </div>
        <img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant cursor-pointer active:scale-95 transition-transform duration-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtdEOIKy0yEzjHV5u3ypQvIu96AKF-1XqF8GNm_pyeO8FCY0x9FbJYqtK_SDni4VVNcrLZIMUR94cfZQbIzSDrKmvfiiYEgP3Loi9fLYKYNRZwOLFnG44-rbGcbV35zTM1Jrac9gPj6S-JVB7vQujvWRTRhHn8tDSg2CQrX0shUmBT1mJJDykEQFNq_SG_nxGmA0rYRpQO3Ew5wouuSJjREQf_qDHM4WqXJmkhaaX8diBWT9bL64CXX9TE5dDRkQeesjj_Bgy0bok" />
      </motion.header>

      <main className="flex-grow flex flex-col md:pl-0 md:pt-16 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="relative w-full max-w-[1280px] mx-auto px-margin-mobile md:px-lg py-xl flex flex-col lg:flex-row items-center gap-xl min-h-[819px] bg-pattern overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col items-start z-10"
          >
            <span className="inline-flex items-center gap-xs px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm mb-sm glass-card">
              <span className="material-symbols-outlined text-[16px]">translate</span> Trilingual Excellence
            </span>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-md">
              Master <span className="text-primary">English</span> & <span className="text-secondary">Mandarin</span> with Confidence
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-2xl">
              A premium, structured environment designed for ambitious learners. Achieve fluency through high-performance language acquisition methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-sm w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#25D366] text-white font-label-md text-label-md px-6 py-3 rounded-lg shadow-[0_2px_0_0_rgba(0,0,0,0.1)] hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-sm"
              >
                <span className="material-symbols-outlined">chat</span> Daftar via WhatsApp
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-surface/70 text-primary font-label-md text-label-md px-6 py-3 rounded-lg border-[1.5px] border-primary/20 hover:bg-primary/10 transition-colors flex items-center justify-center gap-sm glass-card"
              >
                Take Placement Test
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full relative z-10 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl glass-card p-2 border-white/40">
              <img alt="Students studying together" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc1q6gjw1g_OUGYSfXfQ2mWqd1a8WGF0WV6IxxZ8C5Iw9oRlJftJO_CX_WBjWfn3Qj0-bF5DIW1pZEZ0u0-pFSzR-ZOS34W8_iyUCpd1a8rwVRzpX4MiRzPNL2T-8Ft74uK3GIUHB1_x8tjXnV8IOtEkGeHdYitYQtxos7jCrbMeoZFxxLkVhvO_Ecm3aImMmPd6P37UzIGV7HU3glQwiFETNjumMsyVXCwT05d01FaKwEq0LmYWC-3MObhyZhDq6qam72TvmTcyQ" />
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 glass-card rounded-xl p-4 flex items-center gap-sm animate-pulse-slow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">trending_up</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">HSK 4 & B2 English</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Average student progress in 6 months</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* Abstract background blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        </section>

        {/* Programs Bento Grid */}
        <section className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-lg py-xl" id="programs">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-lg"
          >
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Premium Programs</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Structured pathways for comprehensive linguistic mastery.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {/* English Program Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-md flex flex-col border-l-4 border-l-primary"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-md">
                <span className="material-symbols-outlined text-primary text-2xl">record_voice_over</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">English Mastery</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">Advanced corporate communication, academic preparation (IELTS/TOEFL), and conversational fluency.</p>
              <div className="flex flex-wrap gap-xs mb-md">
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-full">B2-C1 Focus</span>
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-full">Business English</span>
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-full">IELTS Prep</span>
              </div>
              <button className="text-primary font-label-md text-label-md flex items-center gap-xs hover:underline mt-auto">
                View Curriculum <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </motion.div>
            {/* Mandarin Program Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-md flex flex-col border-l-4 border-l-secondary"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-md">
                <span className="material-symbols-outlined text-secondary text-2xl">forum</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Mandarin Excellence</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md flex-grow">Comprehensive character acquisition, tonal mastery, and HSK certification preparation.</p>
              <div className="flex flex-wrap gap-xs mb-md">
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-full">HSK 1-6</span>
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-full">Pinyin Mastery</span>
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-full">Business Chinese</span>
              </div>
              <button className="text-secondary font-label-md text-label-md flex items-center gap-xs hover:underline mt-auto">
                View Curriculum <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* BottomNavBar (Mobile) */}
      <motion.nav 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-xl rounded-t-xl border-t border-white/10 shadow-[0px_-4px_16px_rgba(0,0,0,0.04)] shadow-lg"
      >
        <a className="flex flex-col items-center justify-center bg-primary-fixed dark:bg-primary-container text-on-primary-fixed dark:text-on-primary-container rounded-full px-4 py-1 hover:bg-surface-variant/50 active:scale-90 transition-all duration-300" href="#">
          <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
          <span className="font-label-sm text-label-sm mt-xs">Dashboard</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant/50 active:scale-90 transition-all duration-300" href="#">
          <span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
          <span className="font-label-sm text-label-sm mt-xs">Schedule</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant/50 active:scale-90 transition-all duration-300" href="#">
          <span className="material-symbols-outlined" data-icon="style">style</span>
          <span className="font-label-sm text-label-sm mt-xs">Flashcards</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant/50 active:scale-90 transition-all duration-300" href="#">
          <span className="material-symbols-outlined" data-icon="quiz">quiz</span>
          <span className="font-label-sm text-label-sm mt-xs">Quizzes</span>
        </a>
      </motion.nav>
    </>
  );
}

export default App;
