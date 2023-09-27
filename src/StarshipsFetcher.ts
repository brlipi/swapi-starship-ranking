import axios from "axios";

export class StarshipsFetcher {
    public async getAllStarships(): Promise<Starship[]> {
        try {
            let count: number;
            let first: string = 'https://swapi.dev/api/starships';
            let next: string | null = '';
            let data: StarshipsData;
            let current: Starship[], starships: Starship[] = [];

            data = await this.fetchData(first);
            next = data.next;
            current = data.results;
            count = data.count - current.length;
            starships = starships.concat(current);

            while (count > 0 && next !== null) {
                data = await this.fetchData(next);
                next = data.next;
                current = data.results;
                count -= current.length;
                starships = starships.concat(current);
            }
            return starships;
        } catch (error) {
            console.log(error);
            throw (error);
        }
    }

    protected async fetchData(url: string): Promise<StarshipsData> {
        try {
            const response = await axios.get(url);
            const data: StarshipsData = response.data;
            return data;
        } catch (error) {
            console.log(error);
            throw(error);
        }
    }
}