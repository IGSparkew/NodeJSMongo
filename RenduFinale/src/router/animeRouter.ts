import express from 'express';
import {AnimeController} from '../controller/animeController';
const animRouter = express.Router();

const animeController: AnimeController = new AnimeController();

animRouter.get('/animes', animeController.getAnimes);
animRouter.get('/animes/:name', animeController.getAnime);
animRouter.post('/animes', animeController.postAnime);
animRouter.patch('/animes/:name', animeController.patchAnime);
animRouter.put('/animes/:name', animeController.putAnime);
animRouter.delete('/animes/:name', animeController.deleteAnime);
animRouter.get('/genders', animeController.getGender);

export {animRouter}

