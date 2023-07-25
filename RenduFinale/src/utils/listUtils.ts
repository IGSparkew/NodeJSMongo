export class ListUtils {


    public static filteredString(query: any[]): string[] {
        const filteredQuery: Set<string> = new Set();
        query.forEach((q)=> {
            const splitedGenres: String[] = q.split(', ');
            splitedGenres.forEach((s) => filteredQuery.add(s as string));
        });

        return [...filteredQuery];
    }
}