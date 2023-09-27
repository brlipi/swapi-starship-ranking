import { StarshipsFetcher } from "./StarshipsFetcher";
import { DistanceCalculator } from "./DistanceCalculator";

const starshipsFetcher = new StarshipsFetcher();
const distanceCalculator = new DistanceCalculator();

let distance = 1000000;

(async () => {
    try {
        const starships = await starshipsFetcher.getAllStarships();
        for (const starship of starships) {
            distanceCalculator.calculateMaxTravelDistance(distance, starship);
        }
        console.log(starships);
    } catch (error) {
        console.log(error)
        throw(error);
    }
})();