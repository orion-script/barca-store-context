import ferran1 from "../assets/ferran-1.png";
import ferran2 from "../assets/ferran-2.png";
import lewy1 from "../assets/lewa-1.jpg";
import lewy2 from "../assets/lewa-2.png";
import raph1 from "../assets/raph-1.jpg";
import raph2 from "../assets/raph-2.png";
import felix1 from "../assets/felix-1.jpg";
import felix2 from "../assets/felix-2.jpg";
import yamal1 from "../assets/yamal-1.png";
import yamal2 from "../assets/yamal-3.jpg";
import ansu1 from "../assets/ansu-1.jpg";
import ansu2 from "../assets/ansu-2.jpg";

export type ForwardsTypes = {
  id: number;
  imageUrl: string;
  name?: string;
  price?: number;
};

export const ForwardsData: ForwardsTypes[] = [
  {
    id: 1,
    name: "Ferran Torres",
    imageUrl: ferran1,
    price: 100,
  },
  {
    id: 2,
    name: "Ferran Torres",
    imageUrl: ferran2,
    price: 150,
  },
  {
    id: 3,
    name: "Robert Lewandowski",
    imageUrl: lewy1,
    price: 100,
  },
  {
    id: 4,
    name: "Robert Lewandowski",
    imageUrl: lewy2,
    price: 150,
  },
  {
    id: 5,
    name: "Raphinha",
    imageUrl: raph1,
    price: 100,
  },
  {
    id: 6,
    name: "Raphinha",
    imageUrl: raph2,
    price: 150,
  },
  {
    id: 7,
    name: "Joao Felix",
    imageUrl: felix1,
    price: 100,
  },
  {
    id: 8,
    name: "Joao Felix",
    imageUrl: felix2,
    price: 150,
  },
  {
    id: 9,
    name: "Lamine Yamal",
    imageUrl: yamal1,
    price: 100,
  },
  {
    id: 10,
    name: "Lamine Yamal",
    imageUrl: yamal2,
    price: 150,
  },
  {
    id: 11,
    name: "Ansu Fati",
    imageUrl: ansu1,
    price: 100,
  },
  {
    id: 12,
    name: "Ansu Fati",
    imageUrl: ansu2,
    price: 150,
  },
];
