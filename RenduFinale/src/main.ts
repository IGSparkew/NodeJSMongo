import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { animRouter } from "./router/animeRouter";
import { userRouter } from "./router/userRouter";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send("Express work in TypeScript");
});

// Swagger documentation options
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Anime API',
            version: '1.0.0',
            description: 'API documentation for Anime',
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1/",
            },0
        ],
        components: {
            schemas: {
                User: {
                    type: "object",
                    properties: {
                        email: {
                            type: "string",
                            description: "Email of the user"
                        },
                        password: {
                            type: "string",
                            description: "Password of the user"
                        }
                    },
                    required: ["email, password"]
                },
                Anime: {
                    type: "object",
                    properties: {
                        anim_id: {
                            type: "integer",
                            format: "int32",
                            description: "Anime ID",
                            nullable: true,
                        },
                        name: {
                            type: "string",
                            description: "Name of the anime",
                        },
                        score: {
                            type: "number",
                            description: "Score of the anime",
                            nullable: true,
                        },
                        genres: {
                            type: "string",
                            description: "Genres of the anime",
                            nullable: true,
                        },
                        english_name: {
                            type: "string",
                            description: "English name of the anime",
                            nullable: true,
                        },
                        japanese_name: {
                            type: "string",
                            description: "Japanese name of the anime",
                            nullable: true,
                        },
                        synopsis: {
                            type: "string",
                            description: "Synopsis of the anime",
                            nullable: true,
                        },
                        type: {
                            type: "string",
                            description: "Type of the anime",
                            nullable: true,
                        },
                        episodes: {
                            type: "integer",
                            format: "int32",
                            description: "Total episodes of the anime",
                            nullable: true,
                        },
                        aired: {
                            type: "string",
                            description: "Aired date of the anime",
                            nullable: true,
                        },
                        premiered: {
                            type: "string",
                            description: "Premiered date of the anime",
                            nullable: true,
                        },
                        producers: {
                            type: "string",
                            description: "Producers of the anime",
                            nullable: true,
                        },
                        licensors: {
                            type: "string",
                            description: "Licensors of the anime",
                            nullable: true,
                        },
                        studios: {
                            type: "string",
                            description: "Studios of the anime",
                            nullable: true,
                        },
                        source: {
                            type: "string",
                            description: "Source of the anime",
                            nullable: true,
                        },
                        duration: {
                            type: "string",
                            description: "Duration of each episode",
                            nullable: true,
                        },
                        rating: {
                            type: "string",
                            description: "Rating of the anime",
                            nullable: true,
                        },
                        ranked: {
                            type: "integer",
                            format: "int32",
                            description: "Ranked position of the anime",
                            nullable: true,
                        },
                        popularity: {
                            type: "integer",
                            format: "int32",
                            description: "Popularity rank of the anime",
                            nullable: true,
                        },
                        members: {
                            type: "integer",
                            format: "int32",
                            description: "Number of members who have watched the anime",
                            nullable: true,
                        },
                        favorites: {
                            type: "integer",
                            format: "int32",
                            description: "Number of users who have favorited the anime",
                            nullable: true,
                        },
                        watching: {
                            type: "integer",
                            format: "int32",
                            description: "Number of users currently watching the anime",
                            nullable: true,
                        },
                        completed: {
                            type: "integer",
                            format: "int32",
                            description: "Number of users who have completed the anime",
                            nullable: true,
                        },
                        on_Hold: {
                            type: "integer",
                            format: "int32",
                            description: "Number of users who have put the anime on hold",
                            nullable: true,
                        },
                        dropped: {
                            type: "integer",
                            format: "int32",
                            description: "Number of users who have dropped the anime",
                            nullable: true,
                        },
                    },
                    required: ["name"],
                },
            },
        },
    },
    apis: ["./dist/router/*.js"]
};

const specs = swaggerJSDoc(options);
app.use(
    "/api/v1/docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);
app.use(bodyParser.json());
// Add your routes here
app.use('/api/v1', animRouter);
app.use('/api/v1', userRouter);

app.listen(port, () => {
    console.log(`First CRUD API running on port: ${port}`);
});
