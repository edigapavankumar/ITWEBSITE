import {Router} from "express";
<<<<<<< HEAD
import { getSalaryAndBonusData, updateSalaryOrBonus } from "../controllers/employee.controller.js";
import { generateLastMonthInvoice } from "../controllers/eInvoice.controller.js";

const empRouter = new Router();

empRouter.route("/updateemppayment").put(updateSalaryOrBonus)

empRouter.route("/emppaymenthistory").get(getSalaryAndBonusData)

empRouter.route("/empinvoice").get(generateLastMonthInvoice)
=======
import { getEmployeePerformance, getSalaryAndBonusData, updateSalaryOrBonus } from "../controllers/employee.controller.js";
import { generateLastMonthInvoice } from "../controllers/eInvoice.controller.js";
import { getTasksForEmployee } from "../controllers/task.controller.js";
import { isAuth } from "../middlewares/isAuth.js";

const empRouter = new Router();

empRouter.route("/update-emp-payment").put(updateSalaryOrBonus)

empRouter.route("/emp-payment-history").get(getSalaryAndBonusData)

empRouter.route("/emp-invoice").get(generateLastMonthInvoice)

empRouter.route("/mytask").get(isAuth, getTasksForEmployee);

empRouter.route("/mytask/performance")
  .get(isAuth, getEmployeePerformance);
>>>>>>> 54ec9031278df9770667e879bed2f7c4e9fe5655

export default empRouter;