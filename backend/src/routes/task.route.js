import {Router} from "express";
import { deleteTasks, getOneTask, getTasks, postTasks, updateTask } from "../controllers/task.controller.js";

const taskRouter = new Router();

taskRouter.get("/tasks",getTasks);
taskRouter.get("/task/:id",getOneTask);
taskRouter.post("/task",postTasks);
taskRouter.delete("/task/:id",deleteTasks);
taskRouter.put("/task/:id",updateTask);


export default taskRouter;
