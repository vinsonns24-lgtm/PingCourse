import { Router } from "express";
import { UserService } from "../services/user.js";
import { auth } from "../auth.js";

export const userRouter = Router();
const userService = new UserService();

// Middleware to protect routes (just as example, better to extract to a shared middleware file)
userRouter.use(async (req, res, next) => {
  const session = await auth.api.getSession({
    headers: req.headers,
  });
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  // Attach user to req
  (req as any).user = session.user;
  next();
});

userRouter.get("/me", async (req, res) => {
  try {
    const user = (req as any).user;
    const profile = await userService.getUserProfile(user.id);
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

userRouter.get("/students", async (req, res) => {
  try {
    const user = (req as any).user;
    // Basic role check
    if (user.role !== "ADMIN") {
      return res.status(403).json({ error: "Forbidden" });
    }
    const students = await userService.getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
