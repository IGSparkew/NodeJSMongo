import { Request, Response, NextFunction } from "express";

export class UserController {

    public login(req:Request, res:Response, next:NextFunction) {
        res.send('get all the books');
    }

    public register(req:Request, res:Response, next:NextFunction) {
        res.send('get all the books');
    }

}