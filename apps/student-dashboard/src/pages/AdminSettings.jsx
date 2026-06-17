import React from 'react';

export default function AdminSettings() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md mb-lg">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Admin Settings</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Configure platform preferences and admin accounts.</p>
        </div>
        <button className="px-6 py-3 bg-primary text-on-primary rounded-xl font-label-lg hover:opacity-90 shadow-md transition-all">
          Save Configuration
        </button>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-gutter">
        <div className="lg:col-span-1 flex flex-col gap-sm">
          <button className="text-left p-md rounded-xl bg-surface-variant/50 border-l-4 border-primary font-label-lg text-on-surface">
            General Options
          </button>
          <button className="text-left p-md rounded-xl hover:bg-surface-variant/30 font-label-lg text-on-surface-variant transition-colors">
            User Management
          </button>
          <button className="text-left p-md rounded-xl hover:bg-surface-variant/30 font-label-lg text-on-surface-variant transition-colors">
            Billing Settings
          </button>
          <button className="text-left p-md rounded-xl hover:bg-surface-variant/30 font-label-lg text-on-surface-variant transition-colors text-error">
            Danger Zone
          </button>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-md">
          <div className="glass-card rounded-xl p-lg flex flex-col gap-md">
            <h3 className="font-headline-md text-on-surface border-b border-outline-variant/30 pb-sm">Institute Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs md:col-span-2">
                <label className="font-label-md text-on-surface-variant">Institute Name</label>
                <input type="text" defaultValue="Les Bing dan BMandarin" className="p-sm rounded-lg border border-outline bg-surface text-on-surface focus:outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-xs md:col-span-2">
                <label className="font-label-md text-on-surface-variant">Support Email</label>
                <input type="email" defaultValue="support@lesbing.example.com" className="p-sm rounded-lg border border-outline bg-surface text-on-surface focus:outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-on-surface-variant">Timezone</label>
                <select className="p-sm rounded-lg border border-outline bg-surface text-on-surface focus:outline-none focus:border-primary">
                  <option>Asia/Jakarta (GMT+7)</option>
                  <option>Asia/Singapore (GMT+8)</option>
                </select>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-on-surface-variant">Currency</label>
                <select className="p-sm rounded-lg border border-outline bg-surface text-on-surface focus:outline-none focus:border-primary">
                  <option>IDR - Indonesian Rupiah</option>
                  <option>USD - US Dollar</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-lg flex flex-col gap-md">
            <h3 className="font-headline-md text-on-surface border-b border-outline-variant/30 pb-sm">Features Toggle</h3>
            
            <div className="flex flex-col gap-md">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-label-lg text-on-surface">Enable Student Portal</h4>
                  <p className="font-body-sm text-on-surface-variant">Allow students to log in and view their schedules.</p>
                </div>
                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-label-lg text-on-surface">Automated Invoicing</h4>
                  <p className="font-body-sm text-on-surface-variant">Automatically generate and send invoices every month.</p>
                </div>
                <div className="w-12 h-6 bg-surface-variant border border-outline rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-outline rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
