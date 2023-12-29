import { useContext, useState, useEffect, Fragment } from "react";
import ContainerLayout from "../Layouts/ContainerLayout";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import { CategoriesContext } from "../contexts/categoriesContext";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  console.log("Products", products);

  return (
    <Fragment>
      <Navbar />
      <ContainerLayout>
        <h2 className="text-[32px] mt-20 mb-[25px] text-center">
          {category.toUpperCase()}
        </h2>
        <div className="    ">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </ContainerLayout>
    </Fragment>
  );
};

export default Category;
