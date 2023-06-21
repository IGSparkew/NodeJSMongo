import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { router } from "./router/router.js";
import { connectionToDb } from "./config/db.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.get('/', (req: Request, res: Response) => {
    res.send("Express work in typeScript");
});

app.use('/books', router)

app.listen(port, () => {
    console.log(`First CRUD API run on port : ${port}`);
});



