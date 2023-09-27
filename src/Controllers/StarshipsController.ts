interface Placeholder {
    message: string;
}

export default class StarshipsController {
    public async getStarshipsNumberOfStops(distance: string): Promise<Placeholder> {
        return {
            message: `Here be starships ${distance}`
        };
    }
}