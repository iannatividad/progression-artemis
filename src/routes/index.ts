/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import {
    createHunter,
    deleteHunter,
    getAllHunters,
    updateHunter,
} from "./Hunters";

const hunterRouter = Router();

hunterRouter.get("/all", getAllHunters);
hunterRouter.post("/create", createHunter);
hunterRouter.put("/update", updateHunter);
hunterRouter.delete("/delete/:id", deleteHunter);

export default hunterRouter;
