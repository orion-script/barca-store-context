import { useContext, Fragment } from "react";

import { CategoriesContext } from "../contexts/categoriesContext";
import CategoryPreview from "../components/CategoriesPreview";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  console.log(categoriesMap);
  console.log(Object.keys(categoriesMap));

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
