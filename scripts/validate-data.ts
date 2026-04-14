import {useEvents} from "../src/hooks/useEvents";

const games = useEvents();
console.log('Loaded #events:', Object.keys(games).length);
