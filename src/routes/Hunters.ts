import StatusCodes from "http-status-codes";
import { Request, Response } from "express";

import Hunters from "src/services/hunters";
import { paramMissingError } from "@shared/constants";
import { hunterCreateType, hunterUpdateType } from "src/types/hunter.type";

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export async function getAllHunters(req: Request, res: Response) {
    try {
        const { page } = (req.query as unknown) as { page: number };
        const HuntersData = await Hunters.getMultiple(page);
        return res.status(OK).json({ HuntersData });
    } catch (e) {
        console.error(e, e.message);

        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
}

export async function createHunter(req: Request, res: Response) {
    try {
        const hunter = (req.query as unknown) as hunterCreateType;
        console.log("hunter: ", hunter);

        if (!hunter) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }

        const hunterData = await Hunters.create(hunter);

        return res.status(CREATED).json({ hunterData });
    } catch (e) {
        console.error(e, e.message);

        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
}

export async function updateHunter(req: Request, res: Response) {
    try {
        const hunter = req.query as hunterUpdateType;

        if (!hunter) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }

        const hunterData = await Hunters.update(hunter);

        return res.status(OK).json({ hunterData });
    } catch (e) {
        console.error(e, e.message);

        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
}

export async function deleteHunter(req: Request, res: Response) {
    try {
        const { id } = (req.params as unknown) as { id: number };

        if (!id) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }

        const data = await Hunters.deleteOne(id);

        return res.status(OK).json({ data });
    } catch (e) {
        console.error(e, e.message);

        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
}
