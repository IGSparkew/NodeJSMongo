import { Request, Response, NextFunction } from "express";

export class AnimeController {

    public getAnimes(req:Request, res:Response, next:NextFunction) {
        res.send('get all the animes');
    }

    public getAnime(req:Request, res:Response, next:NextFunction) {
        res.send('get an anime');
    }

    public postAnime(req:Request, res:Response, next:NextFunction) {
        res.send('post an anime');
    }

    public patchAnime(req:Request, res:Response, next:NextFunction) {
        res.send('patch an anime');
    }

    public putAnime(req:Request, res:Response, next:NextFunction) {
        res.send('put an anime');
    }

    public deleteAnime(req:Request, res:Response, next:NextFunction) {
        res.send('delete an anime');
    }
}