import express from 'express';
import { AnimeController } from '../controller/animeController';
import { handleUserValidation } from '../middleware/securityMiddleware';

const animRouter = express.Router();
const animeController = new AnimeController();

/**
 * @swagger
 * tags:
 *   name: Animes
 *   description: API for managing animes
 */

/**
 * @swagger
 * /api/v1/animes:
 *   get:
 *     summary: Get all animes
 *     tags: [Animes]
 *     security:
 *      - Authorization: []
 *     responses:
 *       200:
 *         description: Returns an array of animes
 */
animRouter.get("/animes", handleUserValidation, animeController.getAnimes);

/**
 * @swagger
 * /api/v1/animes/search/{name}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: name
 *        schema:
 *          type: string
 *        required: true         
 *     summary: Search Anime by name 
 *     tags: [Animes]
 *     requestBody:
 *       description: Search Animes 
 *     security:
 *       - Authorization: []
 *     responses:
 *       201:
 *         description: search successfully
 *       400:
 *         description: Bad request
 */
animRouter.get("/animes/search/:name", handleUserValidation, animeController.searchAnime);


/**
 * @swagger
 * /api/v1/animes/{id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true   
 *     summary: Get Anime by object id mongo 
 *     tags: [Animes]
 *     requestBody:
 *       description: Get Anim with Object Id
 *     security:
 *       - Authorization: []
 *     responses:
 *       201:
 *         description: Getter successfully
 *       400:
 *         description: Bad request
 */
animRouter.get("/animes/:id", handleUserValidation, animeController.getAnime);

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
 *       - Authorization: []
 *     responses:
 *       201:
 *         description: Created successfully
 *       400:
 *         description: Bad request
 */
animRouter.post("/animes", handleUserValidation, animeController.postAnime);

/**
 * @swagger
 * /api/v1/animes/{id}:
 *   patch:
 *     summary: Update an existing anime partially
 *     tags: [Animes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id of the anime
 *     requestBody:
 *       description: Anime object to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Anime"
 *     security:
 *       - Authorization: []
 *     responses:
 *       200:
 *         description: Updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Anime not found
 */
animRouter.patch("/animes/:id", handleUserValidation, animeController.patchAnime);

/**
 * @swagger
 * /api/v1/animes/{id}:
 *   put:
 *     summary: Update an existing anime completely
 *     tags: [Animes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id of the anime
 *     requestBody:
 *       description: Anime object to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Anime"
 *     security:
 *       - Authorization: []
 *     responses:
 *       200:
 *         description: Updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Anime not found
 */
animRouter.put("/animes/:id", handleUserValidation, animeController.putAnime);

/**
 * @swagger
 * /api/v1/animes/{id}:
 *   delete:
 *     summary: Delete an anime by id
 *     tags: [Animes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id of the anime
 *     security:
 *       - Authorization: []
 *     responses:
 *       204:
 *         description: Deleted successfully
 *       404:
 *         description: Anime not found
 */
animRouter.delete("/animes/:id", handleUserValidation, animeController.deleteAnime);

/**
 * @swagger
 * /api/v1/genders:
 *   get:
 *     summary: Get all genders
 *     tags: [Animes]
 *     security:
 *       - Authorization: []
 *     responses:
 *       200:
 *         description: Returns an array of genders
 */
animRouter.get("/genders", handleUserValidation, animeController.getGender);

export { animRouter };
