import express from 'express';
import {AnimeController} from '../controller/animeController';
import { handleUserValidation } from '../middleware/securityMiddleware';
const animRouter = express.Router();

const animeController: AnimeController = new AnimeController();

animRouter.get('/animes', handleUserValidation,  animeController.getAnimes);
animRouter.get('/animes/:id', handleUserValidation, animeController.getAnime);
animRouter.post('/animes', handleUserValidation, animeController.postAnime);
animRouter.patch('/animes/:id', handleUserValidation, animeController.patchAnime);
animRouter.put('/animes/:id', handleUserValidation, animeController.putAnime);
animRouter.delete('/animes/:id', handleUserValidation, animeController.deleteAnime);
animRouter.get('/animes/search/:name', handleUserValidation, animeController.searchAnime);
animRouter.get('/genders', handleUserValidation, animeController.getGender);

export {animRouter}

