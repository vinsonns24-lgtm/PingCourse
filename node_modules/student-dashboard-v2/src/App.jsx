import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import Landing from './pages/Landing';
import Login from './pages/Login';

// Student Pages
import Overview from './pages/Overview';
import Schedule from './pages/Schedule';
import Library from './pages/Library';
import Billing from './pages/Billing';
import Settings from './pages/Settings';

// Admin Pages
import AdminOverview from './pages/AdminOverview';
import AdminAttendance from './pages/AdminAttendance';
import AdminInvoices from './pages/AdminInvoices';
import AdminStudents from './pages/AdminStudents';
import AdminSettings from './pages/AdminSettings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* Student Portal Routes */}
        <Route path="/student" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="library" element={<Library />} />
          <Route path="billing" element={<Billing />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Admin Portal Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminOverview />} />
          <Route path="attendance" element={<AdminAttendance />} />
          <Route path="invoices" element={<AdminInvoices />} />
          <Route path="students" element={<AdminStudents />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
