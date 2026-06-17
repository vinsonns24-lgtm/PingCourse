import React from 'react';

export default function Billing() {
  return (
    <>
      <header className="flex flex-col gap-base mb-md no-print">
        <h1 className="font-display-lg text-display-lg text-primary tracking-tight">Billing & Invoices</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Manage your tuition and payments.
        </p>
      </header>

      {/* Action Bar (No Print) */}
      <div className="flex justify-between items-center mb-md no-print glass-panel p-md animate-slide-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-background">Invoice Details</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">View and manage #INV-2023-1042</p>
        </div>
        <div className="flex gap-sm">
          <button 
            className="btn-secondary" 
            onClick={() => window.print()}
          >
            <span className="material-symbols-outlined" data-icon="print">print</span>
            Print
          </button>
          <button className="btn-primary shadow-md">
            <span className="material-symbols-outlined" data-icon="download">download</span>
            Download PDF
          </button>
        </div>
      </div>

      {/* Printable Invoice Paper */}
      <div className="bg-surface-container-lowest rounded-xl shadow-[0px_12px_48px_rgba(0,0,0,0.08)] p-xl print-container relative overflow-hidden animate-slide-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
        
        {/* Header Section */}
        <div className="flex justify-between items-start border-b border-outline-variant/30 pb-lg mb-lg">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[32px]" data-icon="language">language</span>
              </div>
              <span className="font-headline-lg text-headline-lg font-bold text-primary tracking-tight">PingCourse</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">123 Education Plaza, Suite 400</p>
            <p className="font-body-md text-body-md text-on-surface-variant">San Francisco, CA 94105</p>
            <p className="font-body-md text-body-md text-on-surface-variant">contact@pingcourse.com</p>
          </div>
          <div className="text-right">
            <h2 className="font-display-lg text-display-lg text-tertiary-container mb-2">INVOICE</h2>
            <p className="font-label-md text-label-md text-on-surface-variant mb-1">Invoice Number</p>
            <p className="font-body-lg text-body-lg font-semibold text-on-background mb-4">#INV-2023-1042</p>
            <p className="font-label-md text-label-md text-on-surface-variant mb-1">Date of Issue</p>
            <p className="font-body-md text-body-md text-on-background">October 24, 2023</p>
          </div>
        </div>

        {/* Billing Details */}
        <div className="grid grid-cols-2 gap-gutter mb-xl">
          <div className="bg-surface-container-low p-md rounded-lg">
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Billed To</p>
            <p className="font-headline-md text-headline-md text-on-background mb-1">Sarah Jenkins</p>
            <p className="font-body-md text-body-md text-on-surface-variant">sarah.jenkins@example.com</p>
            <p className="font-body-md text-body-md text-on-surface-variant">+1 (555) 019-8273</p>
          </div>
          <div className="bg-surface-container-low p-md rounded-lg">
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Tutor Information</p>
            <p className="font-headline-md text-headline-md text-on-background mb-1">Dr. Wei Chen</p>
            <p className="font-body-md text-body-md text-on-surface-variant">Advanced Mandarin Program</p>
            <p className="font-body-md text-body-md text-on-surface-variant">wei.chen@pingcourse.tutor</p>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="mb-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-outline-variant/50">
                <th className="font-label-md text-label-md text-on-surface-variant py-3 px-4">Description</th>
                <th className="font-label-md text-label-md text-on-surface-variant py-3 px-4 text-center">Hours</th>
                <th className="font-label-md text-label-md text-on-surface-variant py-3 px-4 text-right">Rate</th>
                <th className="font-label-md text-label-md text-on-surface-variant py-3 px-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md">
              <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                <td className="py-4 px-4">
                  <p className="font-semibold text-on-background">Conversational Practice (Mandarin)</p>
                  <p className="text-on-surface-variant text-sm mt-1">Focus on business negotiation vocabulary</p>
                </td>
                <td className="py-4 px-4 text-center">4.5</td>
                <td className="py-4 px-4 text-right">$65.00</td>
                <td className="py-4 px-4 text-right font-medium">$292.50</td>
              </tr>
              <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                <td className="py-4 px-4">
                  <p className="font-semibold text-on-background">Grammar Workshop</p>
                  <p className="text-on-surface-variant text-sm mt-1">Advanced sentence structures</p>
                </td>
                <td className="py-4 px-4 text-center">2.0</td>
                <td className="py-4 px-4 text-right">$65.00</td>
                <td className="py-4 px-4 text-right font-medium">$130.00</td>
              </tr>
              <tr className="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors">
                <td className="py-4 px-4">
                  <p className="font-semibold text-on-background">Mock HSK 5 Exam Review</p>
                  <p className="text-on-surface-variant text-sm mt-1">Detailed analysis of reading comprehension</p>
                </td>
                <td className="py-4 px-4 text-center">1.5</td>
                <td className="py-4 px-4 text-right">$75.00</td>
                <td className="py-4 px-4 text-right font-medium">$112.50</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Totals Section */}
        <div className="flex justify-end mb-xl">
          <div className="w-64">
            <div className="flex justify-between py-2 border-b border-outline-variant/20">
              <span className="font-body-md text-body-md text-on-surface-variant">Subtotal</span>
              <span className="font-body-md text-body-md text-on-background font-medium">$535.00</span>
            </div>
            <div className="flex justify-between py-2 border-b border-outline-variant/20">
              <span className="font-body-md text-body-md text-on-surface-variant">Tax (5%)</span>
              <span className="font-body-md text-body-md text-on-background font-medium">$26.75</span>
            </div>
            <div className="flex justify-between py-4 mt-2 bg-primary-container/10 px-4 rounded-lg">
              <span className="font-headline-md text-headline-md text-primary font-bold">Total</span>
              <span className="font-headline-md text-headline-md text-primary font-bold">$561.75</span>
            </div>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="border-t border-outline-variant/30 pt-lg text-center">
          <p className="font-label-md text-label-md text-on-surface-variant mb-2">Thank you for learning with PingCourse.</p>
          <p className="font-label-sm text-label-sm text-outline">Payment is due within 15 days of issue. Please make checks payable to PingCourse Inc. or use the payment portal link provided in your email.</p>
        </div>
      </div>
    </>
  );
}
