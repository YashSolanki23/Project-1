import { PgTable,uuid,varchar,timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { pgTable } from "drizzle-orm/pg-core";
import { time } from "console";

export const tasks=pgTable("tasks",{
id:uuid("id").defaultRandom().primaryKey(),
title:varchar("title",{length:255}).notNull(),
description:varchar("description",{length:500}),
status:varchar("status",{length:20}).notNull().default("pending"),
userId:uuid("user_id").notNull().references(()=>users.id,{onDelete:"cascade"}),
createdAt:timestamp("created_At").defaultNow(),
updatedAt:timestamp("updated_At").defaultNow()
});