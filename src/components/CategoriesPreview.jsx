import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="flex flex-col mb-[30px]">
      <h2>
        <Link className="text-[28px] mb-[25px] cursor-pointer" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="grid grid-rows-4 gap-x-[20px]">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired, // Add this line
  products: PropTypes.array.isRequired, // Modify the shape as needed
};

export default CategoryPreview;
