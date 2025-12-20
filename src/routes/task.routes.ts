import { Router } from "express";
import { requireAuth } from "../core/middlewares/auth.middleware";
import { createTaskSchema } from "../modules/tasks/tasks.schema";
import { validate } from "../core/middlewares/validate.middleware";
import { createTaskController, getTasksController } from "../modules/tasks/task.controller";

const TaskRouter=Router();

TaskRouter.use(requireAuth)
TaskRouter.post("/",validate(createTaskSchema),createTaskController);
TaskRouter.get("/",getTasksController)


export default TaskRouter