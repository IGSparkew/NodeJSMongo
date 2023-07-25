import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { animRouter } from "./router/animeRouter.js";
import { userRouter } from "./router/userRouter.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send("Express work in typeScript");
});

app.use('/api/v1', animRouter);
app.use('/api/v1', userRouter);



app.listen(port, () => {
    console.log(`First CRUD API run on port : ${port}`);
});



