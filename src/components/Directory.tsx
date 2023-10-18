import React from "react";
import ContainerLayout from "../Layouts/ContainerLayout";
import { categories } from "../utils/categories";
import DirectoryItem from "./DirectoryItem";

function Directory() {
  return (
    <ContainerLayout>
      <div className="w-full flex justify-between flex-wrap">
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    </ContainerLayout>
  );
}

export default Directory;
