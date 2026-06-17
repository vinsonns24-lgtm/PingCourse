import { Router } from "express";

export const dashboardRouter = Router();

dashboardRouter.get("/student", async (req, res) => {
  res.json({ 
    name: "Selamat Belajar!",
    message: "Welcome back to your learning journey. Here is a summary of your upcoming classes and current progress. Let's make today productive.",
    progress: [
      { id: "en", language: "English", level: "General English B2", percentage: 75, code: "EN" },
      { id: "zh", language: "Mandarin", level: "Mandarin HSK 3", percentage: 42, code: "ZH" }
    ],
    tutorInsight: {
      message: "Great progress on your pronunciation exercises yesterday! Keep practicing the rising tones in Mandarin. I've uploaded a few extra audio flashcards for you to review before our next session.",
      tutorName: "Laoshi Wei",
      role: "Mandarin Instructor",
      avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEyYVUJHikrqQ-mUcJC-kRs4JBEBT0X-bbV1i3MKboFi-VkqYfB9x-6JmBCkrR5IFSPDzGgCvOVzq47_0HmNcPtEbq2HRry4qup6Al9zuqLZFfIE8nwh_PL8LAUUcVxTux_EaHFEGPKgNJm5JAF4-O3JXoZ-HvzikorSMpjMNRAd_ftdmQe9UjJKDhoSXScV0dptX4PDDAWYXigWXmlpiTUjs78A837adRhPJrP2IAzW5I7TLZ3-_6d0DmTOTnLzH1coRumcyEin0"
    }
  });
});

dashboardRouter.get("/admin", async (req, res) => {
  res.json({ message: "Admin dashboard data will be here" });
});
