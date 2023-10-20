import React from "react";
import ContainerLayout from "../Layouts/ContainerLayout";
import { categories } from "../utils/categories";
import DirectoryItem from "./DirectoryItem";

const Directory = () => {
  return (
    <ContainerLayout>
      <div className="w-11/12 md:w-full m-auto md:m-0 flex flex-wrap justify-between">
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    </ContainerLayout>
  );
};

export default Directory;
