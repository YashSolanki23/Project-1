import { createTask } from "./task.repo";

export async function createTaskService(
  input:{title:string,description?:string},
  userId:string
){
  return createTask({
    ...input,userId,
  });
}