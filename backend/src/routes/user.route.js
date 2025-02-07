import {Router} from "express";
import { deleteUsers, getOneUser, getUsers, postUsers, updateUser } from "../controllers/user.controller.js";

const userRouter = new Router();

userRouter.get("/users",getUsers);
userRouter.get("/user/:id",getOneUser);
userRouter.post("/user",postUsers);
userRouter.delete("/user/:id",deleteUsers);
userRouter.put("/user/:id",updateUser);


export default userRouter;
