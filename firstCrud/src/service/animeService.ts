import { connectionToDb } from "../config/db";
import { Anime } from "../model/animeModel";
import { IGender } from "../dto/genderDTO";

export class AnimeService {

    public async getGenders(): Promise<IGender[]> {
        await connectionToDb();
        console.log("test");

        const results: IGender[] = [];
        try {
        const query = await Anime.distinct('genres');
        const resultQuery = await query;
        if (resultQuery != null) {
            for(let r in resultQuery) {
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