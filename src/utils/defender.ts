import kounde1 from "../assets/kounde-1.png";
import kounde2 from "../assets/kounde-2.jpg";
import alonso1 from "../assets/alonso-1.jpg";
import alonso2 from "../assets/alonso-2.png";
import chris1 from "../assets/chris-1.png";
import chris2 from "../assets/chris-2.png";
import inigo1 from "../assets/inigo-1.jpg";
import inigo2 from "../assets/inigo-2.jpg";
import araujo1 from "../assets/araujo-1.jpg";
import araujo2 from "../assets/araujo-2.jpeg";
import balde1 from "../assets/balde-1.jpg";
import balde2 from "../assets/balde-2.jpg";
import cancelo1 from "../assets/cancelo-1.png";
import cancelo2 from "../assets/cancelo-2.jpg";
import roberto1 from "../assets/roberto-1.png";
import roberto2 from "../assets/roberto-2.png";

export type DefendersTypes = {
  id: number;
  imageUrl: string;
  name?: string;
  price?: number;
};

export const DefendersData: DefendersTypes[] = [
  {
    id: 1,
    name: "Jules Kounde",
    imageUrl: kounde1,
    price: 100,
  },
  {
    id: 2,
    name: "Jules Kounde",
    imageUrl: kounde2,
    price: 150,
  },
  {
    id: 3,
    name: "Marcos Alonso",
    imageUrl: alonso1,
    price: 100,
  },
  {
    id: 4,
    name: "Marcos Alonso",
    imageUrl: alonso2,
    price: 150,
  },
  {
    id: 5,
    name: "Andreas Christensen",
    imageUrl: chris1,
    price: 100,
  },
  {
    id: 6,
    name: "Andreas Christensen",
    imageUrl: chris2,
    price: 150,
  },
  {
    id: 7,
    name: "Inigo Martinez",
    imageUrl: inigo1,
    price: 100,
  },
  {
    id: 8,
    name: "Inigo Martinez",
    imageUrl: inigo2,
    price: 150,
  },
  {
    id: 9,
    name: "Ronald Araujo",
    imageUrl: araujo1,
    price: 100,
  },
  {
    id: 10,
    name: "Ronald Araujo",
    imageUrl: araujo2,
    price: 150,
  },
  {
    id: 11,
    name: "Alejandro Balde",
    imageUrl: balde1,
    price: 100,
  },
  {
    id: 12,
    name: "Alejandro Balde",
    imageUrl: balde2,
    price: 150,
  },
  {
    id: 13,
    name: "Joao Cancelo",
    imageUrl: cancelo1,
    price: 100,
  },
  {
    id: 14,
    name: "Joao Cancelo",
    imageUrl: cancelo2,
    price: 150,
  },
  {
    id: 13,
    name: "Sergi Roberto",
    imageUrl: roberto1,
    price: 100,
  },
  {
    id: 14,
    name: "Sergi Roberto",
    imageUrl: roberto2,
    price: 150,
  },
];
