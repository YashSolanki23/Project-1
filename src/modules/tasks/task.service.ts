import { createTask ,findByUserId} from "./task.repo";
import { AppError} from "../../core/errors/Apperror";


interface createTaskInput{
  title:string,
  description:string,
  priority?:string;
}

export async function createTaskService(
  userId:string,
  data:createTaskInput
){
  if(!data.title || !data.description)
  {
    throw new AppError("Validation error","Title and Description required",400);
  }
  return await createTask({
    ...data,
    userId
  })
}

export async function getTasksService(userId:string){

  return await findByUserId(userId);
}

export async function getTaskByIdService(taskiId:string,userId:string)
{
  const task=await findByUserId(userId);

  if(!task || task.userId !== userId)
  {
  throw new AppError("Forbidden","Task not found",403);
  }

  return task;
}