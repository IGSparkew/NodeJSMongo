import { Request, Response, NextFunction } from "express";
import { AnimeService } from "../service/animeService";
import { IAnime } from "../model/anime.types";
import { GenderDTO, IGenderDTO } from "../dto/genderDTO";
import { animeService } from "../config/configBean";

export class AnimeController {


    public async getAnimes(req:Request, res:Response, next:NextFunction) {
        let result:IAnime[] = [];
        result = await animeService.findAll();
        if (result.length > 0) {
            res.status(200).json(result);
            return;
        }
        res.status(403).json({error: "Error on found Animes"});
    }

    public async getAnime(req:Request, res:Response, next:NextFunction) {
       try {
        const result = await animeService.findOneByObjectId(req.body.id);
        res.status(200).json({result: result});
       } catch (err) {
            res.status(403).json({error: "Anime not found "})
       }
    }

    public async postAnime(req:Request, res:Response, next:NextFunction) {
        try {
            const result = await animeService.createAnim(req.body);
            res.status(200).json({result: result});
           } catch (err) {
                res.status(403).json({error: "can't create anime "})
           }
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
        let results: IGenderDTO = GenderDTO.default();

        results = await animeService.getGenders();
        if (results.genres.length > 0) {
            res.status(200).json({nbResponse:results.genres.length,response:results});
            return;
        }
        
        res.status(403).json({message: "Error on get genders"});
    }
}