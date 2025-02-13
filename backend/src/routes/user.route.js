import {Router} from "express";
import { deleteUsers, getOneUser, getUsers, postUsers, updateUser } from "../controllers/user.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const UserRouter = new Router();

<<<<<<< HEAD
UserRouter.get("/users",isAuth, getUsers);
UserRouter.get("/user/:id",isAuth, getOneUser);
UserRouter.post("/user",isAuth, postUsers);
UserRouter.delete("/user/:id",isAuth, deleteUsers);
UserRouter.put("/user/:id",isAuth, updateUser);
=======
<<<<<<< HEAD
employeeRouter.get("/users",isAuth, getUsers);
employeeRouter.get("/user/:id",isAuth, getOneUser);
employeeRouter.post("/user",isAuth, postUsers);
employeeRouter.delete("/user/:id",isAuth, deleteUsers);
employeeRouter.put("/user/:id",isAuth, updateUser);
=======
UserRouter.route("/users").get( isAuth, getUsers);
UserRouter.route("/user/:id").get( isAuth, getOneUser);
UserRouter.route("/user").post( isAuth, postUsers);
UserRouter.route("/user/:id").delete( isAuth, deleteUsers);
UserRouter.route("/user/:id").put( isAuth, updateUser);
>>>>>>> fb68908f05537bc58cf71935f078312e67779036
>>>>>>> 54ec9031278df9770667e879bed2f7c4e9fe5655


export default UserRouter;
