import { connectionToDb } from "../config/db";
import { Anime } from "../model/animeModel";
import { GenderDTO, IGenderDTO } from "../dto/genderDTO";
import { IAnime } from "../model/anime.types";
import { ListUtils } from "../utils/listUtils";
import { Error } from "mongoose";

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

    public async findOneByObjectId(id:string):Promise<IAnime> {
            try {
                await connectionToDb();

                if(!id) {
                    throw new Error("");
                }
                const result = await Anime.findById(id);
                if (!result) {
                    throw new Error("");
                }

                return result;
            } catch(err) {
                if (err instanceof Error) {
                    console.error(err.message);
                }
                throw new Error("");
            }
    }

    public async createAnim(input: IAnime): Promise<IAnime> {
        try {
            await connectionToDb();

            const animeTocreate = await new Anime(input).save();

            return await animeTocreate;
        } catch(err) {
            if (err instanceof Error) {
                console.error(err.message);
            }
            throw new Error("");
        }

    }

    public async searchAnim(name: string): Promise<IAnime[]> {
        try {
            await connectionToDb();
            let result = []
            result = await Anime.find({name: {$regex: name}});
            return result;
        } catch (err) {
            console.log(err);
            if (err instanceof Error) {
                console.error(err.message);
            }
            throw new Error("");
        }
    }


    public async getGenders(): Promise<IGenderDTO> {
        await connectionToDb();

        let results: IGenderDTO = GenderDTO.default();

        try {
        const query = await Anime.distinct('genres');
        if (query != null) {
            results = new GenderDTO(ListUtils.filteredString(query));
        }   
        } catch (error) {
            console.log("Error on get genders");
        }

        return results;
    }



}