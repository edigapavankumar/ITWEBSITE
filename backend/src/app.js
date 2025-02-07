import express from "express";
import cors from "cors"
import userRouter from "./routes/user.route.js";
import "./database/dbconfig.js";
import dotenv from "dotenv";
import companyRouter from "./routes/comp.route.js";
dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());
app.use("v1/api",userRouter);
app.use("v1/api",companyRouter);
app.listen(process.env.PORT,()=>{
    console.log("server is running on port 4000");
});
