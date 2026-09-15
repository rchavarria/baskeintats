import { getEvents } from "../src/data/events";

const games = getEvents();
console.log("Loaded #events:", Object.keys(games).length);
