import { Router } from "express";
import {Login} from "../controllers/auth.controller.js";

const authRoutes = new Router();

authRoutes.route("/login").post(Login)


export default authRoutes