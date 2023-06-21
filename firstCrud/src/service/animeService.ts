import { connectionToDb } from "../config/db";
import { Anime } from "../model/animeModel";
import { IGender } from "../dto/genderDTO";
import { IAnime } from "../model/anime.types";

export class AnimeService {

    public async findAll(): Promise<IAnime[]> {
        await connectionToDb();
        const results:IAnime[] = []
        try {
            const query = await Anime.find();
            if (query.length > 0) {
                query.forEach((q)=> {
                    results.push(q);
                })  
            }
        } catch (error) {
            console.log("Error on find in db");
        }

        return results;
    }


    public async getGenders(): Promise<IGender[]> {
        await connectionToDb();

        const results: IGender[] = [];
        try {
        const query = await Anime.distinct('genres');
        if (query != null) {
            for(let r of query) {
                results.push({
                    gender: r
                });
            }
        }   
        } catch (error) {
            console.log("Error on get genders");
        }

        return results;
    }

}