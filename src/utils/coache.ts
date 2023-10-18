import xavi1 from "../assets/xavi-1.jpg";
import xavi2 from "../assets/xavi-2.jpg";
import oscar1 from "../assets/oscar-1.jpg";
import oscar2 from "../assets/oscar-2.webp";

export type CoachesTypes = {
  id: number;
  imageUrl: string;
  name?: string;
  price?: number;
};

export const CoachesData: CoachesTypes[] = [
  {
    id: 1,
    name: "Xavi Hernandez",
    imageUrl: xavi1,
    price: 100,
  },
  {
    id: 2,
    name: "Xavi Hernandez",
    imageUrl: xavi2,
    price: 150,
  },
  {
    id: 3,
    name: "Oscar Hernandez",
    imageUrl: oscar1,
    price: 100,
  },
  {
    id: 4,
    name: "Oscar Hernandez",
    imageUrl: oscar2,
    price: 150,
  },
];
