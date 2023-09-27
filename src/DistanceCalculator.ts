export class DistanceCalculator {
    public calculateMaxTravelDistance(distance: number, starship: Starship) {
        let timeInHours: number = 0;
        let value = starship.consumables.match(/\d+/);
        if (value === null) {
            starship.number_of_stops = 'unknown';
            return;
        }
        let unit = starship.consumables.match(/hour|day|week|month|year/);
        if (unit === null) {
            starship.number_of_stops = 'unknown';
            return;
        }
        if (starship.MGLT === 'unknown') {
            starship.number_of_stops = 'unknown';
            return;
        }
        switch (unit[0]) {
            case 'hour':
                timeInHours = parseInt(value[0]);
                break;
            case 'day':
                timeInHours = parseInt(value[0]) * 24;
                break;
            case 'week':
                timeInHours = parseInt(value[0]) * 168;
                break;
            case 'month':
                timeInHours = parseInt(value[0]) * 730;
                break;
            case 'year':
                timeInHours = parseInt(value[0]) * 8760;
                break;
            default:
                timeInHours = 0;
                break;
        }
        let mglt = parseInt(starship.MGLT);
        let distanceTraveledTillResupply = timeInHours * mglt;
        starship.number_of_stops = Math.floor(distance / distanceTraveledTillResupply).toString();
    }
}