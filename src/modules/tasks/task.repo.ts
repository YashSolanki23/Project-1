import { db } from "../../config/db/db";
import { eq } from "drizzle-orm";
import { tasks } from "../../config/db/schema/tasks";

export async function createTask(data:{
  title:string,
  description?:string,
  userId:string
}){
return db.insert(tasks).values(data).returning();
}

export async function findByUserId(userId:string) {
  return db.select().from(tasks).where(eq(tasks.userId,userId));
}