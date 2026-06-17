import express from "express";
import cors from "cors";
import helmet from "helmet";
import * as dotenv from "dotenv";
import { auth } from "./auth.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());

// Better Auth middleware
app.use("/api/auth/*", (req, res, next) => {
  // Better auth handles the requests on the mount path
  // Since we use the express-like handler (or node handler), we pass it directly
  return auth.handler(req, res);
});

// Basic Health Check Route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Import routers
import { userRouter } from "./routes/user.js";
import { dashboardRouter } from "./routes/dashboard.js";
import { classRouter } from "./routes/classes.js";
import { invoiceRouter } from "./routes/invoices.js";
import { libraryRouter } from "./routes/library.js";

app.use("/api/users", userRouter);
app.use("/api/dashboard", dashboardRouter);
app.use("/api/classes", classRouter);
app.use("/api/invoices", invoiceRouter);
app.use("/api/library", libraryRouter);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
