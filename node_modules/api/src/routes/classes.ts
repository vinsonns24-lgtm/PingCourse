import { Router } from "express";

export const classRouter = Router();

classRouter.get("/", async (req, res) => {
  const { schedule } = req.query;
  if (schedule === "today") {
    res.json([
      {
        id: "cls-1",
        time: "14:00",
        title: "Conversational Mandarin",
        status: "Live",
        tutor: "Laoshi Wei"
      },
      {
        id: "cls-2",
        time: "16:30",
        title: "Academic English Writing",
        status: "Upcoming",
        tutor: "Mr. Smith"
      }
    ]);
  } else {
    res.json([]);
  }
});

classRouter.post("/", async (req, res) => {
  res.json({ message: "Class created" });
});

classRouter.put("/:id/attendance", async (req, res) => {
  res.json({ message: "Attendance marked" });
});
