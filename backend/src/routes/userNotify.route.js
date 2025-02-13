import {Router} from "express";
import { getLastMonthNotifications, sendEmployeeNotification, sendTaskNotification, sendThirdPartyNotification } from "../controllers/notify.controller.js";

const userNotifyRouter = new Router();

userNotifyRouter.route("/employeenotify").post(sendEmployeeNotification)
userNotifyRouter.route("/thirdpartynotify").post(sendThirdPartyNotification)
userNotifyRouter.route("/employeetasknotify").post(sendTaskNotification)
userNotifyRouter.route("/notifyhistory").get(getLastMonthNotifications)

export default userNotifyRouter;
