import {Router} from "express";
import { getSalaryAndBonusData, updateSalaryOrBonus } from "../controllers/employee.controller.js";
import { generateLastMonthInvoice } from "../controllers/eInvoice.controller.js";

const empRouter = new Router();

empRouter.route("/updateemppayment").put(updateSalaryOrBonus)

empRouter.route("/emppaymenthistory").get(getSalaryAndBonusData)

empRouter.route("/empinvoice").get(generateLastMonthInvoice)

export default empRouter;