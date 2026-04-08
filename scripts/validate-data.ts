import {useGames} from "../src/hooks/useGames";

const games = useGames();
console.log('Loaded #games:', Object.keys(games).length);
