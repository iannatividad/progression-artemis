/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import {
    createHunter,
    deleteHunter,
    getAllHunters,
    updateHunter,
} from "./Hunters";

const userRouter = Router();

userRouter.get("/all", getAllHunters);
userRouter.post("/create", createHunter);
userRouter.put("/update", updateHunter);
userRouter.delete("/delete/:id", deleteHunter);

const baseRouter = Router();

baseRouter.use("/hunter", userRouter);

export default baseRouter;
