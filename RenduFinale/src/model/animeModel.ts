import mongoose, { Model, Schema, model } from "mongoose";
import { IAnime } from "./anime.types";

const animeSchema: Schema = new Schema<IAnime>({
    anim_id: {type: Number, required: false },
    name: {type: String, required: true},
    score: {type: Number, required: false},
    genres: {type: String, required: false},
    english_name: {type: String, required: false},
    japanese_name: {type: String, required: false},
    synopsis: {type: String, required: false},
    type: {type: String, required: false},
    episodes: {type: Number, required: false},
    aired: {type: String, required: false},
    premiered: {type: String, required: false},
    producers: {type: String, required: false},
    licensors: {type: String, required: false},
    studios: {type: String, required: false},
    source: {type: String, required: false},
    duration: {type: String, required: false},
    rating: {type: String, required: false},
    ranked: {type: Number, required: false},
    popularity: {type: Number, required: false},
    members: {type: Number, required: false},
    favorites: {type: Number, required: false},
    watching: {type: Number, required: false},
    completed: {type: Number, required: false},
    on_Hold: {type: Number, required: false},
    dropped: {type: Number, required: false}
});

export const Anime: Model<IAnime> = model<IAnime>('animes',animeSchema);

