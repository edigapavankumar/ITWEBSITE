import {Router} from "express";
import { deleteCompanies, getOneCompany, getCompanies, postCompanies, updateCompany } from "../controllers/comp.controller.js";

const companyRouter = new Router();

companyRouter.get("/companies",getCompanies);
companyRouter.get("/company/:id",getOneCompany);
companyRouter.post("/company",postCompanies);
companyRouter.delete("/company/:id",deleteCompanies);
companyRouter.put("/company/:id",updateCompany);
export default companyRouter;
