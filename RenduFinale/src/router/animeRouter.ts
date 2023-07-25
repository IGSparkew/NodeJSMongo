import express from 'express';
import {AnimeController} from '../controller/animeController';
import { handleUserValidation } from '../middleware/securityMiddleware';
const animRouter = express.Router();

const animeController: AnimeController = new AnimeController();

animRouter.get('/animes', handleUserValidation,  animeController.getAnimes);
animRouter.get('/animes/:name', handleUserValidation, animeController.getAnime);
animRouter.post('/animes', handleUserValidation, animeController.postAnime);
animRouter.patch('/animes/:name', handleUserValidation, animeController.patchAnime);
animRouter.put('/animes/:name', handleUserValidation, animeController.putAnime);
animRouter.delete('/animes/:name', handleUserValidation, animeController.deleteAnime);
animRouter.get('/genders', handleUserValidation, animeController.getGender);

export {animRouter}

