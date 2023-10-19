import forwards from "../assets/forward.webp";
import midfielders from "../assets/mid.webp";
import defenders from "../assets/defenders.jpg";
import goalkeepers from "../assets/keeper.jpg";
import coaches from "../assets/coaches.webp";

export type DirectoryCategory = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
};

export const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: "forwards",
    imageUrl: forwards,
    route: "/shop/forwards",
  },
  {
    id: 2,
    title: "midfielders",
    imageUrl: midfielders,
    route: "/shop/midfielders",
  },
  {
    id: 3,
    title: "defenders",
    imageUrl: defenders,
    route: "/shop/defenders",
  },
  {
    id: 4,
    title: "Goalkeepers",
    imageUrl: goalkeepers,
    route: "/shop/goalkeepers",
  },
  {
    id: 5,
    title: "coaches",
    imageUrl: coaches,
    route: "/shop/coaches",
  },
];
