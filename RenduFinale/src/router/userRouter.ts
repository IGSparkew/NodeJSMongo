import express from 'express';
import {AnimeController} from '../controller/animeController';
import { UserController } from '../controller/userController';
import { handleErrorValidation, validation } from '../middleware/userInputMiddleware';
const userRouter = express.Router();

const userController:UserController = new UserController();

userRouter.post('/login', validation, handleErrorValidation, userController.login);
userRouter.post('/register', validation, handleErrorValidation, userController.register);



export {userRouter}

