import type {Venue} from "../model/VenueSchema.ts";

const venuesList: Venue[] = [
  // default venue for teams without a specific venue
  {
    id: "default",
    name: "Pabellón Municipal",
    maps: "https://maps.google.com/?q=Pabell%C3%B3n+Municipal+de+Alcobendas",
  },
  {
    id: "alcala-selva",
    name: "Pabellón Municipal Alcalá de la Selva",
    maps: "https://maps.app.goo.gl/zCaer2Euadh2ZgWv6"
  },
  {
    id: "antela",
    name: "Pabellón Antela Parada",
    maps: "https://maps.app.goo.gl/NbqDdrLkJhzSXW1s8"
  },
  {
    id: "arroyo",
    name: "Polideportivo El Arroyo",
    maps: "https://maps.app.goo.gl/kXPkNNQREQmXUcit6"
  },
  {
    id: "canaleja",
    name: "Polideportivo La Canaleja",
    maps: "https://maps.app.goo.gl/NL1Ss1cHx6ePvxAM8"
  },
  {
    id: "ceip-san-jose",
    name: "CEIP San José",
    maps: "https://maps.app.goo.gl/aCQ6brmapSkCopko7"
  },
  {
    id: "circular",
    name: "Pabellón Circular",
    maps: "https://maps.app.goo.gl/iUNpmyC491SGmAdM8"
  },
  {
    id: "diaz-miguel",
    name: "Polideportivo Antonio Diaz Miguel",
    maps: "https://maps.app.goo.gl/96DUrWd9EPtoDiuR6"
  },
  {
    id: "espiniella",
    name: "Pabellón Alfredo Espiniella",
    maps: "https://maps.app.goo.gl/vxTZoM83ScD9AjkU9"
  },
  {
    id: "felipe-reyes",
    name: "Pabellón Felipe Reyes",
    maps: "https://maps.app.goo.gl/sbVMtZWNUpSEAv7V6"
  },
  {
    id: "ferrandiz",
    name: "Pabellón Pedro Ferrándiz",
    maps: "https://maps.app.goo.gl/LSdx5g85nvRf4yye8"
  },
  {
    id: "juan-cierva",
    name: "Pabellón Juan de la Cierva",
    maps: "https://maps.app.goo.gl/apR6frcXSJFu2sxe6"
  },
  {
    id: "juande",
    name: "Club Baloncesto Juan de Austria",
    maps: "https://maps.app.goo.gl/Fuw5GMYyVRm5NsLp7"
  },
  {
    id: "luz",
    name: "Polideportivo de La Luz",
    maps: "https://maps.app.goo.gl/j4SEUyNjvmMtvTmA6"
  },
  {
    id: "manzanera",
    name: "Polideportivo Municipal de Manzanera",
    maps: "https://maps.app.goo.gl/zgkjCxwTECKA3ioA6"
  },
  {
    id: "mora",
    name: "Mora de Rubielos",
    maps: "https://maps.app.goo.gl/NbqDdrLkJhzSXW1s8"
  },
  {
    id: "norte",
    name: "Pabellón Norte",
    maps: "https://maps.app.goo.gl/vXg8X8bE22Vd9PVWA"
  },
  {
    id: "pez-volador",
    name: "Pez Volador",
    maps: "https://maps.app.goo.gl/t9vFF7xsVdt7Ct658"
  },
  {
    id: "plantio",
    name: "Polideportivo El Plantío",
    maps: "https://maps.app.goo.gl/fxf4qD9A851t9SHMA"
  },
  {
    id: "rubielos",
    name: "Pabellón Municipal de Rubielos de Mora",
    maps: "https://maps.app.goo.gl/xJY19tZfk9JZoCtz8"
  },
  {
    id: "triangulo-oro",
    name: "Triángulo de Oro, Madrid",
    maps: "https://maps.app.goo.gl/GeTR1VyHre3BrNwQA"
  },
  {
    id: "valcude",
    name: "Club Deportivo Valcude",
    maps: "https://maps.app.goo.gl/6JpchRmwCPqjvab36"
  },
  {
    id: "valdebebas",
    name: "Ciudad Deportiva Real Madrid",
    maps: "https://maps.app.goo.gl/fFvrcjJjE7FvPuMq8"
  },
  {
    id: "wurzburg",
    name: "Pabellón municipal de Würzburg",
    maps: "https://maps.app.goo.gl/vgHRCJLh93nF5Pqn8"
  }
];

export const venues: Record<string, Venue> = venuesList.reduce((acc, venue) => {
  acc[venue.id] = venue;
  return acc;
}, {} as Record<string, Venue>);
