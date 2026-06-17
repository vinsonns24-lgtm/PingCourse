import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <>
      <nav className="hidden lg:flex flex-col fixed left-0 top-0 h-screen p-md gap-sm bg-surface-container-low border-r border-outline-variant/20 shadow-md w-72 z-40 animate-slide-right">
        {/* Header */}
        <div className="flex items-center gap-sm mb-lg px-sm">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-fixed flex items-center justify-center shrink-0">
            <img alt="Tutor Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBFjf5gChYJGYQgRoxPJowuDXhdvZrpMNTBSX2SN5mchyh289lQffgrkb34Hksuzv60vCx9xetg5U_L840rkID_4n3SdjM9anCqCFSWWwuG62rVYKstBiqpzdUrXBzJHfnt9BUPDqpi0a7wWxn5qUGFLlMhl_QvQ-GGheGcY0LdeVdQJOxZ5YaUEJ9dCwjlXpUNDU7paW3Ts_mRCgE5is5OUXyfPrUYvx6vSQUOhNxh20pRM73ftQuq4u3HHcnEMtd-J_R6f0Kdsc" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-md text-headline-md font-bold text-secondary">Student Portal</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Dashboard</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-xs flex-1">
          <NavLink
            to="/student"
            end
            className={({ isActive }) =>
              `flex items-center gap-md px-md py-sm rounded-lg font-body-md text-body-md transition-all duration-200 cursor-pointer active:scale-95 ${
                isActive
                  ? "bg-secondary-container text-on-secondary-container font-bold shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-variant/50 hover:translate-x-1"
              }`
            }
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            Overview
          </NavLink>
          
          <NavLink
            to="/student/schedule"
            className={({ isActive }) =>
              `flex items-center gap-md px-md py-sm rounded-lg font-body-md text-body-md transition-all duration-200 cursor-pointer active:scale-95 ${
                isActive
                  ? "bg-secondary-container text-on-secondary-container font-bold shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-variant/50 hover:translate-x-1"
              }`
            }
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>fact_check</span>
            My Schedule
          </NavLink>
          
          <NavLink
            to="/student/library"
            className={({ isActive }) =>
              `flex items-center gap-md px-md py-sm rounded-lg font-body-md text-body-md transition-all duration-200 cursor-pointer active:scale-95 ${
                isActive
                  ? "bg-secondary-container text-on-secondary-container font-bold shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-variant/50 hover:translate-x-1"
              }`
            }
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>library_books</span>
            E-Library
          </NavLink>

          <NavLink
            to="/student/billing"
            className={({ isActive }) =>
              `flex items-center gap-md px-md py-sm rounded-lg font-body-md text-body-md transition-all duration-200 cursor-pointer active:scale-95 ${
                isActive
                  ? "bg-secondary-container text-on-secondary-container font-bold shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-variant/50 hover:translate-x-1"
              }`
            }
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
            Billing
          </NavLink>

          <div className="my-2 border-t border-outline-variant/20"></div>

          <NavLink
            to="/login"
            className="flex items-center gap-md px-md py-sm rounded-lg font-body-md text-body-md transition-all duration-200 cursor-pointer active:scale-95 text-error hover:bg-error/10 hover:translate-x-1"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>logout</span>
            Logout
          </NavLink>
        </div>

        {/* Footer / Meta */}
        <div className="mt-auto pt-md border-t border-outline-variant/20 px-sm">
          <span className="font-label-sm text-label-sm text-outline">v1.0.5</span>
        </div>
      </nav>

      {/* Main Canvas Container */}
      <main className="flex-1 w-full lg:pl-[288px] relative overflow-y-auto animate-fade-in">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-primary-fixed/40 to-transparent -z-10 pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-lg py-lg md:py-xl flex flex-col gap-lg md:gap-xl">
          <Outlet />
        </div>
      </main>
    </>
  );
}
