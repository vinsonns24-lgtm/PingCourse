import { db } from "../db/index.js";
import { user } from "../db/schema.js";
import { eq } from "drizzle-orm";

export class UserService {
  async getUserProfile(userId: string) {
    const result = await db.select().from(user).where(eq(user.id, userId)).limit(1);
    return result[0] || null;
  }

  async getAllStudents() {
    const result = await db.select().from(user).where(eq(user.role, "STUDENT"));
    return result;
  }
}
