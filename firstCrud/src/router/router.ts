import express from 'express';
import {BookController} from '../controller/bookController.js';
const router = express.Router();

const bookController: BookController = new BookController();

router.get('/books',bookController.getBook);

export {router}

