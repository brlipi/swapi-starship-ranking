# swapi-starship-ranking
This application fetches information about starships from https://swapi.dev and calculates the number of stops needed for each starship based on a distance given by the user.

## Requirements
- Node.js
- Yarn

## Installation
- Once in the project root directory install with `yarn`
- Then run the build commands
    - `yarn prebuild` for swagger documentation building
    - `yarn build` to build the application
- Once built, run with `yarn start`.
- Open `http://localhost:8000/docs/` on the browser.
- Click on the `/{distance}` endpoint. Then click on "Try it out".
- Give it a distance and the application will fetch from https://swapi.dev and calculate the number of stops necessary for each starship to complete the journey with the distance given.