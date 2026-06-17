import { Router } from "express";

export const libraryRouter = Router();

libraryRouter.get("/resources", async (req, res) => {
  res.json({ message: "List of resources" });
});

libraryRouter.post("/resources", async (req, res) => {
  res.json({ message: "Resource uploaded" });
});
