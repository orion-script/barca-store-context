import React from "react";
import ContainerLayout from "../Layouts/ContainerLayout";
import { categories } from "../utils/categories";
import DirectoryItem from "./DirectoryItem";

const Directory = () => {
  console.log(categories);
  return (
    <ContainerLayout>
      <div className="w-full flex flex-wrap justify-between">
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    </ContainerLayout>
  );
};

export default Directory;
