import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../contexts/cartContext";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="w-full flex h-[100px] md:h-[120px] border-b border-gray-900 py-[15px] text-[10px] md:text-[20px] items-center text-start">
      <div className="w-[23%] md:w-[15%] h-full">
        <img src={imageUrl} alt={`${name}`} className="w-full h-full" />
      </div>
      <span className="w-[20%] md:w-[23%] ml-5">{name}</span>
      <span className="flex w-[23%] md:w-[20%]">
        <div className="cursor-pointer" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="mx-[10px]">{quantity}</span>
        <div className="cursor-pointer" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="w-[15%]">{price}</span>
      <div className="md:pl-10 cursor-pointer" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.string.isRequired,
};

export default CheckoutItem;
