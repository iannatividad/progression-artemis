import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";

import express, { Request, Response } from "express";
import StatusCodes from "http-status-codes";
import "express-async-errors";
import swaggerDoc from "../swagger.json";

import logger from "./shared/Logger";
import hunterRouter from "./routes";

const app = express();
const { BAD_REQUEST } = StatusCodes;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
    app.use(helmet());
}

app.use("/hunter", hunterRouter);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use((err: Error, _: Request, res: Response) => {
    logger.err(err, true);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});

export default app;
