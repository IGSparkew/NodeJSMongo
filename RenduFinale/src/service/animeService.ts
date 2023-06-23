import { connectionToDb } from "../config/db";
import { Anime } from "../model/animeModel";
import { GenderDTO, IGenderDTO } from "../dto/genderDTO";
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


    public async getGenders(): Promise<IGenderDTO> {
        await connectionToDb();

        let results: IGenderDTO = GenderDTO.default();

        try {
        const query = await Anime.distinct('genres');
        if (query != null) {
            results = new GenderDTO(this.filteredString(query));
        }   
        } catch (error) {
            console.log("Error on get genders");
        }

        return results;
    }

    private filteredString(query: any[]): string[] {
        const filteredQuery: Set<string> = new Set();
        query.forEach((q)=> {
            const splitedGenres: String[] = q.split(', ');
            splitedGenres.forEach((s) => filteredQuery.add(s as string));
        });

        return [...filteredQuery];
    }

}