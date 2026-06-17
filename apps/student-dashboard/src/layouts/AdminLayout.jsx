import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <>
      <nav className="hidden lg:flex flex-col fixed left-0 top-0 h-screen p-md gap-sm bg-surface-container-low w-72 border-r border-outline-variant/20 shadow-md z-40 animate-slide-right">
        {/* Header: Profile */}
        <div className="flex items-center gap-sm mb-lg px-sm">
          <img alt="Tutor Profile" className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2qN-ChR2nXv95Ugw4BHq-HfJ9ue3yEZvmUrIpyzkCnri35CVLdNpqXlwPjh--Idvth0yPrzAZA5ozWxm9xWTxkFrsk6BTt9IgHWvBHrLvKdD8-opaCYDdpOMZJsFjTaMqLO7nqx4-FCLan2yFIE1duB42M5LQ_z0jpwpCGIEilBLTFYtspvjl-WpyUo212Ea2G8S5LNNy-pHHKKVqWQSjj4hxkvWGfiqiVTnbepEAmxeK2XGT08-Cqg8xY5Oa5ELR6WWlhjx3aJQ" />
          <div className="flex flex-col text-left">
            <span className="font-headline-md text-headline-md font-bold text-secondary tracking-tight">Admin Portal</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Tutor Management</span>
            <span className="font-label-sm text-label-sm text-outline mt-1">v1.0.4</span>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-col gap-xs flex-grow">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `flex items-center gap-md px-sm py-sm rounded-lg transition-all duration-200 cursor-pointer active:scale-95 ${
                isActive
                  ? "bg-secondary-container text-on-secondary-container font-bold shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-variant/50 hover:translate-x-1"
              }`
            }
          >
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-label-md text-label-md">Overview</span>
          </NavLink>

          <NavLink
            to="/admin/attendance"
            className={({ isActive }) =>
              `flex items-center gap-md px-sm py-sm rounded-lg transition-all duration-200 cursor-pointer active:scale-95 ${
                isActive
                  ? "bg-secondary-container text-on-secondary-container font-bold shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-variant/50 hover:translate-x-1"
              }`
            }
          >
            <span className="material-symbols-outlined">fact_check</span>
            <span className="font-label-md text-label-md">Attendance</span>
          </NavLink>

          <NavLink
            to="/admin/invoices"
            className={({ isActive }) =>
              `flex items-center gap-md px-sm py-sm rounded-lg transition-all duration-200 cursor-pointer active:scale-95 ${
                isActive
                  ? "bg-secondary-container text-on-secondary-container font-bold shadow-sm"
                  : "text-on-surface-variant hover:bg-surface-variant/50 hover:translate-x-1"
              }`
            }
          >
            <span className="material-symbols-outlined">receipt_long</span>
            <span className="font-label-md text-label-md">Invoices</span>
          </NavLink>

          <div className="my-2 border-t border-outline-variant/20"></div>

          <NavLink
            to="/login"
            className="flex items-center gap-md px-sm py-sm rounded-lg transition-all duration-200 cursor-pointer active:scale-95 text-error hover:bg-error/10 hover:translate-x-1"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-md text-label-md">Logout</span>
          </NavLink>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-20 lg:pt-lg lg:ml-72 px-margin-mobile md:px-lg pb-24 lg:pb-lg max-w-[1280px] mx-auto min-h-screen flex flex-col gap-xl animate-fade-in">
        <Outlet />
      </main>
    </>
  );
}
