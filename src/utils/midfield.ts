import gund1 from "../assets/gundo-1.png";
import gund2 from "../assets/gundo-2.png";
import dejong1 from "../assets/dejong-1.png";
import dejong2 from "../assets/dejong-2.jpg";
import serg1 from "../assets/roberto-1.png";
import serg2 from "../assets/roberto-2.png";
import oriol1 from "../assets/oriol-1.jpg";
import oriol2 from "../assets/oriol-2.jpeg";
import pedri1 from "../assets/pedri-1.png";
import pedri2 from "../assets/pedri-2.jpg";
import gavi1 from "../assets/gavi-1.jpg";
import gavi2 from "../assets/gavi-2.jpg";
import lopez1 from "../assets/lopez-1.webp";
import lopez2 from "../assets/lopez-2.webp";

export type MidfieldersTypes = {
  id: number;
  imageUrl: string;
  name?: string;
  price?: number;
};

export const MidfieldersData: MidfieldersTypes[] = [
  {
    id: 1,
    name: "Ikay Gundogan",
    imageUrl: gund1,
    price: 100,
  },
  {
    id: 2,
    name: "Ikay Gundogan",
    imageUrl: gund2,
    price: 150,
  },
  {
    id: 3,
    name: "Frenkie De Jong",
    imageUrl: dejong1,
    price: 100,
  },
  {
    id: 4,
    name: "Frenkie De Jong",
    imageUrl: dejong2,
    price: 150,
  },
  {
    id: 5,
    name: "Oriol Romeu",
    imageUrl: oriol1,
    price: 100,
  },
  {
    id: 6,
    name: "Oriol Romeu",
    imageUrl: oriol2,
    price: 150,
  },
  {
    id: 7,
    name: "Pedri",
    imageUrl: pedri1,
    price: 100,
  },
  {
    id: 8,
    name: "Pedri",
    imageUrl: pedri2,
    price: 150,
  },
  {
    id: 9,
    name: "Gavi",
    imageUrl: gavi1,
    price: 100,
  },
  {
    id: 10,
    name: "Gavi",
    imageUrl: gavi2,
    price: 150,
  },
  {
    id: 11,
    name: "Fermi Lopez",
    imageUrl: lopez1,
    price: 100,
  },
  {
    id: 12,
    name: "Fermi Lopez",
    imageUrl: lopez2,
    price: 150,
  },
];
