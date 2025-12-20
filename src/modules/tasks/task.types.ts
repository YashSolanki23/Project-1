

export interface tasks{
  title:string,
  description:string,
  priority: "low" | "medium" | "high",
  status:  "in_progress" | "done",
  userId:string,
  createdAt:string
}