import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../contexts/cartContext";
import { SHOP_DATA } from "../utils/db";
import Button, { BUTTON_TYPE_CLASSES } from "./button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  console.log(SHOP_DATA);
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="w-full flex flex-col h-[350px] items-center relative mb-10">
      <img
        src={imageUrl}
        alt={`${name}`}
        className="w-full h-[95%] object-cover mb-[5px] hover:opacity-80"
      />
      <div className="w-full h-[5%] flex justify-between text-[18px]">
        <span className="w-[90%] mb-[15px]">{name}</span>
        <span className="w-[10%]">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
        className="absolute w-[80%] opacity-70 top-[255px] hidden hover:opacity-90 hover:flex"
      >
        Add to cart
      </Button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
