import express from "express";
import dotenv from "dotenv"; 

const app = express();
const port = process.env.port || 3000;

dotenv.config({ path: '.env.local' });

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`First CRUD API run on port : ${port}`);
});