import { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import ContainerLayout from "../Layouts/ContainerLayout";
import Navbar from "./Navbar";

const CategoryPreview = ({ title, products }) => {
  return (
    <Fragment>
      <Navbar />
      <ContainerLayout>
        <div className="w-11/12 md:w-full m-auto md:m-0 flex flex-col mb-[30px] mt-20">
          <h2>
            <Link className="text-[28px] mb-[25px] cursor-pointer" to={title}>
              {title.toUpperCase()}
            </Link>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-[20px]">
            {products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </ContainerLayout>
    </Fragment>
  );
};

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired, // Add this line
  products: PropTypes.array.isRequired, // Modify the shape as needed
};

export default CategoryPreview;
