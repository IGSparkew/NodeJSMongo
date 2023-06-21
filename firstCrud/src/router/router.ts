import express from 'express';
import {AnimeController} from '../controller/animeController';
const router = express.Router();

const animeController: AnimeController = new AnimeController();

router.get('/animes', animeController.getAnimes);
router.get('/animes/:name', animeController.getAnime);
router.post('/animes', animeController.postAnime);
router.patch('/animes/:name', animeController.patchAnime);
router.put('/animes/:name', animeController.putAnime);
router.delete('/animes/:name', animeController.deleteAnime);
router.get('/genders', animeController.getGender);

export {router}

