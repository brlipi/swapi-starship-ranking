import { Get, Route } from "tsoa";
import { StarshipsFetcher } from "../StarshipsFetcher";
import { DistanceCalculator } from "../DistanceCalculator";
import { StarshipInfoFormatter } from "../StarshipInfoFormatter";

interface StarshipResponse {
    starships: Starship[];
}

@Route("/")
export default class StarshipsController {
    starships: Starship[];
    starshipsFetcher: StarshipsFetcher;
    distanceCalculator: DistanceCalculator;
    starshipInfoFormatter: StarshipInfoFormatter;

    constructor() {
        this.starships = [];
        this.starshipsFetcher = new StarshipsFetcher();
        this.distanceCalculator = new DistanceCalculator();
        this.starshipInfoFormatter = new StarshipInfoFormatter();
    }
    @Get('/:distance')
    public async getStarshipsNumberOfStops(distance: string): Promise<StarshipResponse> {
        if (distance) {
            this.starships = await this.starshipsFetcher.getAllStarships();
            for (const starship of this.starships) {
                this.distanceCalculator.calculateMaxTravelDistance(parseInt(distance), starship);
            }
            this.starships = this.starshipInfoFormatter.formatArray(this.starships);
        }
        return {
            starships: this.starships
        };
    }
}