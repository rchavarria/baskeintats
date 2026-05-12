import type {Venue} from "../model/VenueSchema.ts";

const venuesList: Venue[] = [
  // default venue for teams without a specific venue
  {
    id: "default",
    name: "Pabellón Municipal",
    maps: "https://maps.google.com/?q=Pabell%C3%B3n+Municipal+de+Alcobendas",
  },
  {
    id: "agustin",
    name: "Polideportivo Colegio San Agustín",
    maps: "https://maps.app.goo.gl/DycUZKg8wHNuWAxM7"
  },
  {
    id: "agustiniano",
    name: "Colegio Agustiniano (Canoe)",
    maps: "https://maps.app.goo.gl/7829yTZSpz7DPQWu9"
  },
  {
    id: "alberto-maestro",
    name: "CDM Alberto Maestro, Zaragoza",
    maps: "https://maps.app.goo.gl/esNz3j423BjMt2La6"
  },
  {
    id: "alcala-selva",
    name: "Pabellón Municipal Alcalá de la Selva",
    maps: "https://maps.app.goo.gl/zCaer2Euadh2ZgWv6"
  },
  {
    id: "aljaraque",
    name: "Pabellón Municipal de Aljaraque (Huelva)",
    maps: "https://maps.app.goo.gl/dDMxTLFs2Z8YuQxJ9"
  },
  {
    id: "almendros",
    name: "Pabellón Deportivo Los Almendros",
    maps: "https://maps.app.goo.gl/xPSFDvMuG2M2NvfLA"
  },
  {
    id: "andres-estrada",
    name: "Polideportivo Andrés Estrada",
    maps: "https://maps.app.goo.gl/L5Hdm9CX26WjGzhu8"
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
    id: "caja-magica",
    name: "Caja Mágica, Pabellón Norte",
    maps: "https://maps.app.goo.gl/vXg8X8bE22Vd9PVWA"
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
    id: "criptana",
    name: "Pabellón Municipal de Campo de Criptana",
    maps: "https://maps.app.goo.gl/ngveVvuaJymoQosEA"
  },
  {
    id: "diaz-miguel",
    name: "Polideportivo Antonio Diaz Miguel",
    maps: "https://maps.app.goo.gl/96DUrWd9EPtoDiuR6"
  },
  {
    id: "dme",
    name: "DME Academy",
    maps: "https://maps.app.goo.gl/-"
  },
  {
    id: "espartales",
    name: "Complejo Deportivo Espartales, Alcalá",
    maps: "https://maps.app.goo.gl/F54AvWSC6hcZ3yWr6"
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
    id: "gredos",
    name: "Colegio Gredos San Diego",
    maps: "https://maps.app.goo.gl/zVvuPVerxLL74gDi8"
  },
  {
    id: "miguel-delibes",
    name: "Pabellón C.P. Miguel Delibes",
    maps: "https://maps.app.goo.gl/VLfs7CQiVP7ViAyT7"
  },
  {
    id: "gil-hernandez",
    name: "Polideportivo Antonio Gil Hernández",
    maps: "https://maps.app.goo.gl/R7abEFTb3G8s6K7eA"
  },
  {
    id: "cap-salou",
    name: "Pabelló Cap de Salou",
    maps: "https://maps.app.goo.gl/cZxLiExb8Rag3a247"
  },
  {
    id: "jaume-i",
    name: "Institut Jaume I",
    maps: "https://maps.app.goo.gl/8BTEPGc4CsqCLB3K7"
  },
  {
    id: "juan-cierva",
    name: "Pabellón Juan de la Cierva",
    maps: "https://maps.app.goo.gl/apR6frcXSJFu2sxe6"
  },
  {
    id: "salou",
    name: "Pabelló Municipal de Salou",
    maps: "https://maps.app.goo.gl/4n6iD9NQmDiMWedDA"
  },
  {
    id: "lanuza",
    name: "Pabellón Municipal Juan de Lanuza, Utebo, Zaragoza",
    maps: "https://maps.app.goo.gl/1EAdUL2FMXpADMCF6"
  },
  {
    id: "fuentes",
    name: "Polideportivo Municipal Las Fuentes, Utebo, Zaragoza",
    maps: "https://maps.app.goo.gl/JtjekaN65AM6rsQ67"
  },
  {
    id: "juande",
    name: "Club Baloncesto Juan de Austria",
    maps: "https://maps.app.goo.gl/Fuw5GMYyVRm5NsLp7"
  },
  {
    id: "herencia",
    name: "Pabellón Municipal de Herencia",
    maps: "https://maps.app.goo.gl/szzVTzpt7gBbGPQy5"
  },
  {
    id: "leganes",
    name: "Pabellón Carlos Sastre",
    maps: "https://maps.app.goo.gl/6BLGpmu3GxpZcSSX7"
  },
  {
    id: "limones",
    name: "Polideportivo Javi Limones",
    maps: "https://maps.app.goo.gl/mb741XvChQkkQkiK6"
  },
  {
    id: "linea",
    name: "Polideportivo Municipal de La Línea de la Concepción",
    maps: "https://maps.app.goo.gl/DBmb83Nm6ZC84MNUA"
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
    id: "orange",
    name: "Orange County Convention Center, OCCC",
    maps: "https://maps.app.goo.gl/SpQ3FdLE5ae2pZNF6"
  },
  {
    id: "paco-hernandez",
    name: "Pabellón Paco Hernández",
    maps: "https://maps.app.goo.gl/LSdx5g85nvRf4yye8"
  },
  {
    id: "palos",
    name: "Pabellón Nuevo Frontón, Palos de la Frontera",
    maps: "https://maps.app.goo.gl/UCyS55ZUaJrK6zcCA"
  },
  {
    id: "paraiso",
    name: "Polideportivo José Antonio Paraíso",
    maps: "https://maps.app.goo.gl/tNQ4RDSwCFeK8Yvb6"
  },
  {
    id: "peralada",
    name: "Pabellón Municipal de Deportes de Peralada",
    maps: "https://maps.app.goo.gl/YD8pRpLHfZmYRhrv5"
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
    id: "punto-umbria",
    name: "Pabellón Hernández Albarracín, Punta Umbría",
    maps: "https://maps.app.goo.gl/5o949jVRT1Cdkmrt6"
  },
  {
    id: "roser-llop",
    name: "Polideportivo Municipal Roser Llop",
    maps: "https://maps.app.goo.gl/LJYT4vWdCPpU7MTh6"
  },
  {
    id: "rubielos",
    name: "Pabellón Municipal de Rubielos de Mora",
    maps: "https://maps.app.goo.gl/xJY19tZfk9JZoCtz8"
  },
  {
    id: "san-agustin",
    name: "Polideportivo San Agustín, Zaragoza",
    maps: "https://maps.app.goo.gl/9DTopGuwRh6sRjGw7"
  },
  {
    id: "sba-arena",
    name: "SBA Arena",
    maps: "https://maps.app.goo.gl/VuXT5q4kwEMsbGQL9"
  },
  {
    id: "stella-maris",
    name: "Colegio Stella Maris (La Gavia)",
    maps: "https://maps.app.goo.gl/x3toQogK7WejQiqZ8"
  },
  {
    id: "torrelodones",
    name: "Polideportivo Municipal Torrelodones (José Antonio Mur Capelo)",
    maps: "https://maps.app.goo.gl/iUnZhjReYBsBe4vi9"
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
  },
];

export const venues: Record<string, Venue> = venuesList.reduce((acc, venue) => {
  acc[venue.id] = venue;
  return acc;
}, {} as Record<string, Venue>);
