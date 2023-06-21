import { Request, Response, NextFunction } from "express";
import { AnimeService } from "../service/animeService";
import { IAnime } from "../model/anime.types";

export class AnimeController {


    public async getAnimes(req:Request, res:Response, next:NextFunction) {
        const animeService: AnimeService = new AnimeService();
        let result:IAnime[] = [];
        result = await animeService.findAll();
        if (result.length > 0) {
            res.status(200).json(result);
            return;
        }
        res.status(403).json({message: "Error on found Animes"});
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

    public async getGender(req:Request, res:Response) {
        const animeService: AnimeService = new AnimeService();
        let results = []; 
        results = await animeService.getGenders();
        if (results.length > 0) {
            res.status(200).json(results);
            return;
        }
        
        res.status(403).json({message: "Error on get genders"});

        // try {
         
        //     res.status(200).json({result: results});
        // } catch (error) {
        //     res.status(403).json({error: 'genders not found !'})
        // }
    }
}