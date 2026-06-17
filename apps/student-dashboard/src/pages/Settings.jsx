import React from 'react';

export default function Settings() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md mb-lg">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Settings</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Manage your account preferences and notifications.</p>
        </div>
        <button className="px-6 py-3 bg-primary text-on-primary rounded-xl font-label-lg hover:opacity-90 shadow-md transition-all">
          Save Changes
        </button>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        <div className="lg:col-span-1 flex flex-col gap-sm">
          <button className="text-left p-md rounded-xl bg-surface-variant/50 border-l-4 border-primary font-label-lg text-on-surface">
            Profile Information
          </button>
          <button className="text-left p-md rounded-xl hover:bg-surface-variant/30 font-label-lg text-on-surface-variant transition-colors">
            Notifications
          </button>
          <button className="text-left p-md rounded-xl hover:bg-surface-variant/30 font-label-lg text-on-surface-variant transition-colors">
            Security
          </button>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-md">
          <div className="glass-card rounded-xl p-lg flex flex-col gap-md">
            <h3 className="font-headline-md text-on-surface border-b border-outline-variant/30 pb-sm">Profile Details</h3>
            
            <div className="flex items-center gap-md mb-sm">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display-md">
                JS
              </div>
              <div>
                <button className="px-4 py-2 border border-outline text-primary rounded-lg font-label-md hover:bg-surface-variant mb-xs">Change Avatar</button>
                <p className="font-body-sm text-on-surface-variant">JPG, GIF or PNG. Max size of 800K</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-on-surface-variant">First Name</label>
                <input type="text" defaultValue="John" className="p-sm rounded-lg border border-outline bg-surface text-on-surface focus:outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-on-surface-variant">Last Name</label>
                <input type="text" defaultValue="Smith" className="p-sm rounded-lg border border-outline bg-surface text-on-surface focus:outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-xs md:col-span-2">
                <label className="font-label-md text-on-surface-variant">Email Address</label>
                <input type="email" defaultValue="john.smith@example.com" className="p-sm rounded-lg border border-outline bg-surface text-on-surface focus:outline-none focus:border-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
