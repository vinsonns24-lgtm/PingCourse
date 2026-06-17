import { pgTable, text, timestamp, boolean, integer, uuid } from "drizzle-orm/pg-core";

// --- Better Auth Default Schema (extended with role) ---
export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull(),
  image: text("image"),
  createdAt: timestamp("createdAt").notNull(),
  updatedAt: timestamp("updatedAt").notNull(),
  role: text("role").$type<"ADMIN" | "TUTOR" | "STUDENT">().default("STUDENT"),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expiresAt").notNull(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId").notNull().references(() => user.id),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId").notNull().references(() => user.id),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  expiresAt: timestamp("expiresAt"),
  password: text("password"),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
});

// --- PingCourse Specific Schema ---

export const programs = pgTable("programs", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(), // e.g. "General English"
  language: text("language").notNull(), // "English" or "Mandarin"
  level: text("level").notNull(), // "B2", "HSK 4"
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const enrollments = pgTable("enrollments", {
  id: uuid("id").primaryKey().defaultRandom(),
  studentId: text("studentId").notNull().references(() => user.id),
  programId: uuid("programId").notNull().references(() => programs.id),
  progressPercentage: integer("progressPercentage").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const classes = pgTable("classes", {
  id: uuid("id").primaryKey().defaultRandom(),
  programId: uuid("programId").notNull().references(() => programs.id),
  tutorId: text("tutorId").notNull().references(() => user.id),
  title: text("title").notNull(),
  startTime: timestamp("startTime").notNull(),
  endTime: timestamp("endTime").notNull(),
  meetingLink: text("meetingLink"),
  status: text("status").$type<"Scheduled" | "Live" | "Completed">().default("Scheduled"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const attendance = pgTable("attendance", {
  id: uuid("id").primaryKey().defaultRandom(),
  classId: uuid("classId").notNull().references(() => classes.id),
  studentId: text("studentId").notNull().references(() => user.id),
  status: text("status").$type<"Present" | "Absent" | "Excused">().notNull(),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const invoices = pgTable("invoices", {
  id: uuid("id").primaryKey().defaultRandom(),
  studentId: text("studentId").notNull().references(() => user.id),
  amount: integer("amount").notNull(), // stored in smallest currency unit (e.g. cents, or full IDR since no decimals)
  status: text("status").$type<"Pending" | "Paid" | "Overdue">().default("Pending"),
  dueDate: timestamp("dueDate").notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const payments = pgTable("payments", {
  id: uuid("id").primaryKey().defaultRandom(),
  invoiceId: uuid("invoiceId").notNull().references(() => invoices.id),
  amountPaid: integer("amountPaid").notNull(),
  paymentDate: timestamp("paymentDate").defaultNow().notNull(),
  method: text("method").$type<"Transfer" | "Credit Card" | "Cash">().notNull(),
});

export const resources = pgTable("resources", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  type: text("type").$type<"PDF" | "Audio" | "Video">().notNull(),
  url: text("url").notNull(),
  programId: uuid("programId").references(() => programs.id),
  tags: text("tags"), // comma-separated or jsonb
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
