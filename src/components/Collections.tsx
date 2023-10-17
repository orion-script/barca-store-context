import React from "react";
import ContainerLayout from "../Layouts/ContainerLayout";
import { categories } from "../utils/categories";
import DirectoryItem from "./DirectoryItem";

console.log(categories);

function Collections() {
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

export default Collections;
