export function useStudentDashboard() {
  return {
    data: {
      name: "John",
      message: "Here is your learning overview for today. Keep up the good work!",
      progress: [
        { id: 1, language: 'English', code: 'EN', level: 'Intermediate', percentage: 75 },
        { id: 2, language: 'Mandarin', code: 'ZH', level: 'Beginner', percentage: 40 }
      ],
      tutorInsight: {
        message: "You are making excellent progress with your Mandarin tones. Don't forget to practice the assigned vocabulary this week!",
        tutorName: "Dr. Wei Chen",
        role: "Senior Mandarin Tutor",
        avatarUrl: "https://i.pravatar.cc/150?img=11"
      }
    },
    isLoading: false
  };
}

export function usePendingInvoices() {
  return {
    data: [
      { id: 'INV-001', description: 'Tuition Fee - October 2023', amount: 450000 }
    ],
    isLoading: false
  };
}

export function useTodayClasses() {
  return {
    data: [
      { id: 1, time: '14:00', title: 'Business English - Cohort A', tutor: 'Sarah Connor', status: 'Live' },
      { id: 2, time: '16:30', title: 'Mandarin HSK 4 Prep', tutor: 'Dr. Wei Chen', status: 'Upcoming' },
      { id: 3, time: '18:00', title: 'English Grammar Focus', tutor: 'John Smith', status: 'Upcoming' },
      { id: 4, time: '19:30', title: 'Mandarin Conversational', tutor: 'Li Wei', status: 'Upcoming' },
      { id: 5, time: '10:00', title: 'IELTS Speaking Practice', tutor: 'Emma Brown', status: 'Completed' }
    ],
    isLoading: false
  };
}

