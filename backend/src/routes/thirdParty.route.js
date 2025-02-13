import { Router } from "express";
import { generateThirdPartyInvoice } from "../controllers/tInvoice.controller.js";
import { amountUpdateForThirdParty, getAmountHistoryForThirdParty } from "../controllers/thirdParty.controller.js";

const thirdPartyRouter = new Router();

thirdPartyRouter.post("/tpinvoice",generateThirdPartyInvoice);
thirdPartyRouter.post("/tp",amountUpdateForThirdParty);
thirdPartyRouter.get("/tp",getAmountHistoryForThirdParty);

export default thirdPartyRouter;