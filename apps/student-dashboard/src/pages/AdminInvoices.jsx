import React from 'react';

export default function AdminInvoices() {
  const dummyInvoices = [
    { id: 'INV-2023-001', student: 'Sarah Johnson', date: '2023-10-15', amount: '$450.00', status: 'Paid' },
    { id: 'INV-2023-002', student: 'Michael Chang', date: '2023-10-18', amount: '$320.00', status: 'Pending' },
    { id: 'INV-2023-003', student: 'Emily Davis', date: '2023-10-20', amount: '$600.00', status: 'Overdue' },
    { id: 'INV-2023-004', student: 'David Wilson', date: '2023-10-22', amount: '$450.00', status: 'Paid' },
    { id: 'INV-2023-005', student: 'Chloe Martinez', date: '2023-10-25', amount: '$320.00', status: 'Pending' },
  ];

  return (
    <>
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md mb-lg">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Invoices</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Manage billing and student payments.</p>
        </div>
        <button className="btn-primary shadow-md py-3 px-6">
          <span className="material-symbols-outlined">add</span>
          Create Invoice
        </button>
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-lg animate-slide-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
        <div className="glass-card rounded-xl p-md flex flex-col gap-sm">
          <span className="font-label-md text-on-surface-variant">Total Collected (This Month)</span>
          <span className="font-display-md text-primary">$12,450</span>
        </div>
        <div className="glass-card rounded-xl p-md flex flex-col gap-sm">
          <span className="font-label-md text-on-surface-variant">Pending Payments</span>
          <span className="font-display-md text-outline">$3,240</span>
        </div>
        <div className="glass-card rounded-xl p-md flex flex-col gap-sm">
          <span className="font-label-md text-on-surface-variant">Overdue</span>
          <span className="font-display-md text-error">$600</span>
        </div>
      </section>

      {/* Invoices Table */}
      <div className="glass-card rounded-xl overflow-hidden animate-slide-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
        <div className="p-md border-b border-outline-variant/30 flex justify-between items-center">
          <h3 className="font-headline-md text-on-surface">Recent Invoices</h3>
          <div className="flex gap-sm">
            <button className="px-3 py-1 border border-outline rounded-lg text-on-surface hover:bg-surface-variant flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-variant/30">
                <th className="p-sm font-label-md text-on-surface-variant font-semibold">Invoice ID</th>
                <th className="p-sm font-label-md text-on-surface-variant font-semibold">Student</th>
                <th className="p-sm font-label-md text-on-surface-variant font-semibold">Date</th>
                <th className="p-sm font-label-md text-on-surface-variant font-semibold">Amount</th>
                <th className="p-sm font-label-md text-on-surface-variant font-semibold">Status</th>
                <th className="p-sm font-label-md text-on-surface-variant font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-outline-variant/20 hover:bg-surface-variant/10">
                  <td className="p-sm font-body-md text-on-surface">{invoice.id}</td>
                  <td className="p-sm font-body-md text-on-surface">{invoice.student}</td>
                  <td className="p-sm font-body-md text-on-surface-variant">{invoice.date}</td>
                  <td className="p-sm font-body-md text-on-surface font-medium">{invoice.amount}</td>
                  <td className="p-sm">
                    <span className={`px-2 py-1 rounded-full text-[12px] font-bold ${
                      invoice.status === 'Paid' ? 'bg-primary/20 text-primary' :
                      invoice.status === 'Pending' ? 'bg-outline/20 text-outline' :
                      'bg-error/20 text-error'
                    }`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="p-sm text-right">
                    <button className="text-primary hover:underline font-label-sm">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
