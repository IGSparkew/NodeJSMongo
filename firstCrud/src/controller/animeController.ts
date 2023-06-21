import { Request, Response, NextFunction } from "express";
import { AnimeService } from "../service/animeService";

export class AnimeController {

    private animeService: AnimeService = new AnimeService();

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

    public async getGender(req:Request, res:Response, next:NextFunction) {
        const results = await this.animeService.getGenders();
        console.log(results);

        // try {
         
        //     res.status(200).json({result: results});
        // } catch (error) {
        //     res.status(403).json({error: 'genders not found !'})
        // }
    }
}