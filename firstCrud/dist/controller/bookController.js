"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
class BookController {
    getBook(req, res, next) {
        res.send('get all the books');
    }
}
exports.BookController = BookController;
