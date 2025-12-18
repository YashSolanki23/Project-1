import { Request,Response } from "express";
import { createTaskService } from "./task.service";

export async function createTaskController(req:Request,res:Response)
{

  const userId=req.user.id;

  const task=await createTaskService(req.body,userId);

  res.status(201).json(task);
}