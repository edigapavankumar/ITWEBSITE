import {Router} from "express";
import { deleteContents, getOneContent, getContents, postContents, updateContent } from "../controllers/content.controller.js";

const contentRouter = new Router();

contentRouter.get("/contents",getContents);
contentRouter.get("/content/:id",getOneContent);
contentRouter.post("/content",postContents);
contentRouter.delete("/content/:id",deleteContents);
contentRouter.put("/content/:id",updateContent);


export default contentRouter;
