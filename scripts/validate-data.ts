import {useEvents} from "../src/hooks/useEvents";

const games = useEvents();
console.log('Loaded #games:', Object.keys(games).length);
