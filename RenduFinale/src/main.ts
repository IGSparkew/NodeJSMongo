import express, { Express, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { animRouter } from "./router/animeRouter";
import { userRouter } from "./router/userRouter";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import bodyParser from "body-parser";
import logger from "./middleware/logger";
import * as swaggers_option from "./swagger.json";
import { AnimeService } from "./service/animeService";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const initData = process.env.initialise_data || false;

app.use(express.json());

app.use((err: CustomError, req: Request, res: Response, next: NextFunction): void => {
    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(err.status || 500).send('Erreur ! Consulte les logs pour plus d\'informations.');
});

app.get('/', (req: Request, res: Response) => {
    res.send("Express work in TypeScript");
});

interface CustomError extends Error {
    status?: number;
}

// Swagger documentation options
const options = swaggers_option;

const specs = swaggerJSDoc(options);
app.use(
    "/api/v1/docs",
    swaggerUi.serve,
    swaggerUi.setup(specs,{
        swaggerOptions: {
           docExpansions: "none",
           persistAuthorization: true
        }
    })
);
app.use(bodyParser.json());
// Add your routes here
app.use('/api/v1', animRouter);
app.use('/api/v1', userRouter);

app.listen(port, async () => {
    logger.info(`Serveur démarré sur le port ${port}.`);
    if (initData) {
        await AnimeService.initAnim();
    }
    
});
