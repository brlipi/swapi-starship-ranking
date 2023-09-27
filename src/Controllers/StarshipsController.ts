import { Get, Route } from "tsoa";
import { StarshipsFetcher } from "../StarshipsFetcher";
import { DistanceCalculator } from "../DistanceCalculator";
import { StarshipInfoFormatter } from "../StarshipInfoFormatter";

interface Placeholder {
    ships: any;
}

@Route("/")
export default class StarshipsController {
    starships: any;
    starshipsFetcher: StarshipsFetcher;
    distanceCalculator: DistanceCalculator;
    starshipInfoFormatter: StarshipInfoFormatter;

    constructor() {
        this.starshipsFetcher = new StarshipsFetcher();
        this.distanceCalculator = new DistanceCalculator();
        this.starshipInfoFormatter = new StarshipInfoFormatter();
    }
    @Get('/:distance')
    public async getStarshipsNumberOfStops(distance: string): Promise<Placeholder> {
        if (distance) {
            this.starships = await this.starshipsFetcher.getAllStarships();
            for (const starship of this.starships) {
                this.distanceCalculator.calculateMaxTravelDistance(parseInt(distance), starship);
            }
            this.starships = this.starshipInfoFormatter.formatArray(this.starships);
        }
        return {
            ships: this.starships
        };
    }
}