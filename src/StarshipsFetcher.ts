import axios from "axios";

export class StarshipsFetcher {
    public async getAllStarships(): Promise<Starship[]> {
        try {
            let count: number = await this.getStarshipsCount();
            let next: string | null = 'https://swapi.dev/api/starships';
            let current: Starship[], starships: Starship[] = [];
            do {
                current = await this.getStarships(next);
                count -= current.length;
                starships = starships.concat(current);
                next = await this.getStarshipsNext(next);
            } while (count > 0 && next !== null);
            return starships;
        } catch (error) {
            console.log(error);
            throw (error);
        }
    }

    protected async getStarshipsCount(): Promise<number> {
        try {
            const response = await axios.get('https://swapi.dev/api/starships');
            const data: StarshipsData = response.data;
            const count: number = data.count;
            return count;
        } catch (error) {
            console.log(error);
            throw (error);
        }
    }

    protected async getStarshipsNext(current: string): Promise<string | null> {
        try {
            const response = await axios.get(current);
            const data: StarshipsData = response.data;
            const next = data.next;
            return next;
        } catch (error) {
            console.log(error);
            throw (error);
        }
    }

    protected async getStarships(url: string): Promise<Starship[]> {
        try {
            const response = await axios.get(url);
            const data: StarshipsData = response.data;
            const starships: Starship[] = data.results;
            return starships;
        } catch (error) {
            console.log(error);
            throw (error);
        }
    }
}