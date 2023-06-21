export interface IGenderDTO {
    genres: string[]
}

export class GenderDTO implements IGenderDTO {
    genres: string[];

    constructor(genres: string[]) {
            this.genres = genres;
    }

    static default(): GenderDTO {
        return new GenderDTO([]);
    }
}