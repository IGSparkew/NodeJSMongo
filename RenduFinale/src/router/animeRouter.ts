import express from 'express';
import { AnimeController } from '../controller/animeController';
import { handleUserValidation } from '../middleware/securityMiddleware';
const animRouter = express.Router();

const animeController: AnimeController = new AnimeController();

/**
 * @swagger
 * tags:
 *   name: Animes
 *   description: API for managing animes
 */

/**
 * @swagger
 * components:
 *  securitySchemes:
 *   BearerAuth:
 *     type: http
 *     scheme: bearer
 *     bearerFormat: JWT 
 *
 */

/**
 * @swagger
 * /api/v1/animes:
 *   get:
 *     summary: Get all animes
 *     tags: [Animes]
 *     responses:
 *       200:
 *         description: Returns an array of animes
 */
animRouter.get("/animes", handleUserValidation, animeController.getAnimes);

/**
 * @swagger
 * /api/v1/animes/{name}:
 *   get:
 *     summary: Get an anime by name
 *     tags: [Animes]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the anime
 *     security:
 *         BearerAuth: []
 *     responses:
 *       200:
 *         description: Returns a single anime object
 *       404:
 *         description: Anime not found
 */
animRouter.get("/animes/:name", handleUserValidation, animeController.getAnime);

/**
 * @swagger
 * /api/v1/animes:
 *   post:
 *     summary: Create a new anime
 *     tags: [Animes]
 *     requestBody:
 *       description: Anime object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Anime"
 *     security:
 *         BearerAuth: []
 *     responses:
 *       201:
 *         description: Created successfully
 *       400:
 *         description: Bad request
 */
animRouter.post("/animes", handleUserValidation, animeController.postAnime);

/**
 * @swagger
 * /api/v1/animes/{name}:
 *   patch:
 *     summary: Update an existing anime partially
 *     tags: [Animes]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the anime
 *     requestBody:
 *       description: Anime object to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Anime"
 *     security:
 *         BearerAuth: []
 *     responses:
 *       200:
 *         description: Updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Anime not found
 */
animRouter.patch("/animes/:name", handleUserValidation, animeController.patchAnime);

/**
 * @swagger
 * /api/v1/animes/{name}:
 *   put:
 *     summary: Update an existing anime completely
 *     tags: [Animes]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the anime
 *     requestBody:
 *       description: Anime object to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Anime"
 *     security:
 *         BearerAuth: []
 *     responses:
 *       200:
 *         description: Updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Anime not found
 */
animRouter.put("/animes/:name", handleUserValidation, animeController.putAnime);

/**
 * @swagger
 * /api/v1/animes/{name}:
 *   delete:
 *     summary: Delete an anime by name
 *     tags: [Animes]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the anime
 *     security:
 *         BearerAuth: []
 *     responses:
 *       204:
 *         description: Deleted successfully
 *       404:
 *         description: Anime not found
 */
animRouter.delete("/animes/:name", handleUserValidation, animeController.deleteAnime);

/**
 * @swagger
 * /api/v1/genders:
 *   get:
 *     summary: Get all genders
 *     tags: [Animes]
 *     security:
 *         BearerAuth: []
 *     responses:
 *       200:
 *         description: Returns an array of genders
 */
animRouter.get("/genders", handleUserValidation, animeController.getGender);

export { animRouter };
