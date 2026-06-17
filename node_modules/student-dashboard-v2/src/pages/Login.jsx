import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // In a real app, authentication logic goes here.
    // We are directly navigating based on role.
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/student');
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-md bg-pattern relative overflow-hidden animate-fade-in">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="w-full max-w-md z-10 animate-slide-up opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
        {/* Header / Logo */}
        <div className="text-center mb-xl">
          <div className="flex items-center justify-center gap-sm mb-md">
            <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
          </div>
          <h1 className="font-display-md text-display-md text-on-surface mb-xs font-bold tracking-tight">Welcome to PingCourse</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Select your portal to continue.</p>
        </div>

        {/* Login Selection */}
        <div className="glass-panel p-lg flex flex-col gap-md">
          <button 
            onClick={() => handleLogin('student')}
            className="w-full flex items-center gap-md p-md rounded-xl border border-outline-variant/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 group text-left active:scale-95"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined">face</span>
            </div>
            <div className="flex-1">
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Student Portal</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Access your dashboard and classes</p>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors group-hover:translate-x-1">arrow_forward</span>
          </button>

          <button 
            onClick={() => handleLogin('admin')}
            className="w-full flex items-center gap-md p-md rounded-xl border border-outline-variant/30 hover:border-secondary hover:bg-secondary/5 transition-all duration-300 group text-left active:scale-95"
          >
            <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
              <span className="material-symbols-outlined">shield_person</span>
            </div>
            <div className="flex-1">
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Admin / Tutor Portal</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Manage students, schedule, and invoices</p>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-secondary transition-colors group-hover:translate-x-1">arrow_forward</span>
          </button>
        </div>
        
        <div className="text-center mt-xl">
          <Link to="/" className="text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center gap-xs hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
