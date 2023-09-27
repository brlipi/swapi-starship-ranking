export class StarshipInfoFormatter {

    public formatArray(starships: any) {
        let formattedArray = [];
        for (let starship of starships) {
            starship = (({ name, consumables, MGLT, number_of_stops, url }) => ({ name, consumables, MGLT, number_of_stops, url }))(starship);
            formattedArray.push(starship);
        }
        return formattedArray;
    }

}