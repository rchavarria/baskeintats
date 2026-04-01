import type {Venue} from "../model/VenueSchema.ts";

const venuesList: Venue[] = [
  // default venue for teams without a specific venue
  {
    id: "default",
    name: "Pabellón Municipal",
    maps: "https://maps.google.com/?q=Pabell%C3%B3n+Municipal+de+Alcobendas",
  },
  {
    id: "antela",
    name: "Pabellón Antela Parada",
    maps: "https://maps.google.com/?q=Pabell%C3%B3n+Municipal+de+Alcobendas",
  },
  {
    id: "circular",
    name: "Pabellón Circular",
    maps: "https://maps.app.goo.gl/iUNpmyC491SGmAdM8",
  },
];

export const venues: Record<string, Venue> = venuesList.reduce((acc, venue) => {
  acc[venue.id] = venue;
  return acc;
}, {} as Record<string, Venue>);
