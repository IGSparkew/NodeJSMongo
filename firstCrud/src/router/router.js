import express from 'express';
import { getBook } from '../controller/bookController.js';
const router = express.Router();

router.get('/books',getBook);

export {router}

