import express from 'express';
import { AnimeController } from '../controller/animeController';
import { UserController } from '../controller/userController';
import { handleErrorValidation, validation } from '../middleware/userInputMiddleware';

const userRouter = express.Router();
const userController = new UserController();

/**
 * @swagger
 * tags:
 *   name: Security
 *   description: API for user authentication and registration
 */

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: Try to login
 *     tags: [Security]
 *     requestBody:
 *       description: User to connect
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/User"
 *     responses:
 *       200:
 *         description: Returns a JWT token
 *       404:
 *         description: Failed to login
 */
userRouter.post('/login', validation, handleErrorValidation, userController.login);

/**
 * @swagger
 * /api/v1/register:
 *   post:
 *     summary: Try to register
 *     tags: [Security]
 *     requestBody:
 *       description: User to insert
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/User"
 *     responses:
 *       200:
 *         description: Returns a message
 *       404:
 *         description: Failed to create account
 */
userRouter.post('/register', validation, handleErrorValidation, userController.register);

export { userRouter };
