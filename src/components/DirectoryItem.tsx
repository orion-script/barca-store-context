import React, { FC } from "react";

import { useNavigate } from "react-router-dom";
import { DirectoryCategory } from "../types/CategoriesTypes";

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  console.log(category);

  const onNavigateHandler = () => navigate(route);

  return (
    <div
      className="flex min-w-[30%] h-[240px] flex-auto items-center justify-center border border-[#000] m-0.5 overflow-hidden hover:cursor-pointer relative"
      onClick={onNavigateHandler}
    >
      <div
        className="w-full h-full bg-cover bg-center transs "
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="bg-[#fff] h-[90px] px-[25px] absolute flex flex-col items-center justify-center border border-[#000] opacity-70 hover:opacity-90">
        <h2 className="font-bold text-[22px] text-[#4a4a4a] uppercase my-2">
          {title}
        </h2>
        <p className="text-[16px] font-light text-[#000]">Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
