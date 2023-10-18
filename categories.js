import forwards from "./src/assets/forward.webp";
import midfielders from "./src/assets/mid.webp";
import defenders from "./src/assets/defenders.jpg";
import keepers from "./src/assets/keeper.jpg";
import coaches from "./src/assets/coaches.webp";

export const Categories = [
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
    title: "keepers",
    imageUrl: keepers,
    route: "/shop/keepers",
  },
  {
    id: 5,
    title: "coaches",
    imageUrl: coaches,
    route: "/shop/coaches",
  },
];
