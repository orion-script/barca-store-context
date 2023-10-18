import stegen1 from "../assets/stegen-1.jpg";
import stegen2 from "../assets/stegen-2.png";
import pena1 from "../assets/pena-1.jpg";
import pena2 from "../assets/pena-2.jpg";

export type KeepersTypes = {
  id: number;
  imageUrl: string;
  name?: string;
  price?: number;
};

export const KeepersData: KeepersTypes[] = [
  {
    id: 1,
    name: "Marc-Andre ter Stegen",
    imageUrl: stegen1,
    price: 100,
  },
  {
    id: 2,
    name: "Marc-Andre ter Stegen",
    imageUrl: stegen2,
    price: 150,
  },
  {
    id: 3,
    name: "Inaki Pena",
    imageUrl: pena1,
    price: 100,
  },
  {
    id: 4,
    name: "Inaki Pena",
    imageUrl: pena2,
    price: 150,
  },
];
