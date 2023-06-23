import { Request, Response, NextFunction } from "express";

export class BookController {

    public getBook(req:Request, res:Response, next:NextFunction) {
        res.send('get all the books');
    }

}