import express from 'express';
import {AnimeController} from '../controller/animeController';
import { UserController } from '../controller/userController';
const userRouter = express.Router();

const userController:UserController = new UserController();

userRouter.post('/login', userController.login);
userRouter.post('/register', userController.register);



export {userRouter}

