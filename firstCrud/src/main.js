import express from "express";
import dotenv from "dotenv";
import { router } from "./router/router.js";

const app = express();
const port = process.env.port || 3000;


dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use("/book", router);

app.listen(port, () => {
    console.log(`First CRUD API run on port : ${port}`);
});