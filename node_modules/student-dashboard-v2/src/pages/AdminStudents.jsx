import React from 'react';

export default function AdminStudents() {
  const dummyStudents = [
    { id: 'STU-001', name: 'Sarah Johnson', grade: 'Grade 10', course: 'Business English', attendance: '98%' },
    { id: 'STU-002', name: 'Michael Chang', grade: 'Grade 8', course: 'Mandarin HSK 3', attendance: '92%' },
    { id: 'STU-003', name: 'Emily Davis', grade: 'Grade 12', course: 'IELTS Prep', attendance: '85%' },
    { id: 'STU-004', name: 'David Wilson', grade: 'Grade 9', course: 'Conversational English', attendance: '100%' },
    { id: 'STU-005', name: 'Chloe Martinez', grade: 'Grade 11', course: 'Mandarin HSK 4', attendance: '78%' },
  ];

  return (
    <>
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md mb-lg">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">Students</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Manage student records and enrollments.</p>
        </div>
        <button className="px-6 py-3 bg-primary text-on-primary rounded-xl font-label-lg hover:opacity-90 shadow-md transition-all flex items-center gap-xs">
          <span className="material-symbols-outlined">person_add</span>
          Add Student
        </button>
      </section>

      <div className="glass-card rounded-xl overflow-hidden animate-slide-up opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
        <div className="p-md border-b border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-md">
          <div className="relative w-full sm:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input type="text" placeholder="Search students..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-outline bg-surface text-on-surface focus:outline-none focus:border-primary" />
          </div>
          <div className="flex gap-sm w-full sm:w-auto">
            <button className="px-3 py-2 border border-outline rounded-lg text-on-surface hover:bg-surface-variant flex items-center gap-xs w-full sm:w-auto justify-center">
              <span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-variant/30">
                <th className="p-sm font-label-md text-on-surface-variant font-semibold">Student Name</th>
                <th className="p-sm font-label-md text-on-surface-variant font-semibold">ID</th>
                <th className="p-sm font-label-md text-on-surface-variant font-semibold">Grade</th>
                <th className="p-sm font-label-md text-on-surface-variant font-semibold">Primary Course</th>
                <th className="p-sm font-label-md text-on-surface-variant font-semibold">Attendance</th>
                <th className="p-sm font-label-md text-on-surface-variant font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyStudents.map((student) => (
                <tr key={student.id} className="border-b border-outline-variant/20 hover:bg-surface-variant/10">
                  <td className="p-sm flex items-center gap-sm">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-body-md text-on-surface font-medium">{student.name}</span>
                  </td>
                  <td className="p-sm font-body-sm text-on-surface-variant">{student.id}</td>
                  <td className="p-sm font-body-sm text-on-surface-variant">{student.grade}</td>
                  <td className="p-sm font-body-sm text-on-surface">{student.course}</td>
                  <td className="p-sm">
                    <span className={`font-body-sm font-medium ${
                      parseInt(student.attendance) >= 90 ? 'text-primary' : 
                      parseInt(student.attendance) >= 80 ? 'text-outline' : 'text-error'
                    }`}>
                      {student.attendance}
                    </span>
                  </td>
                  <td className="p-sm text-right">
                    <button className="p-1 text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">edit</span>
                    </button>
                    <button className="p-1 text-on-surface-variant hover:text-primary transition-colors ml-1">
                      <span className="material-symbols-outlined text-[20px]">more_vert</span>
                    </button>
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
