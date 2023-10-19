import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../contexts/cartContext";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className="w-full flex min-h-[100px] border border-gray-900 py-[15px] text-[20px] items-center">
      <div className="w-[23%] pr-[15px]">
        <img src={imageUrl} alt={`${name}`} className="w-full h-full" />
      </div>
      <span className="w-[23%]"> {name} </span>
      <span className="flex w-[23%]">
        <div className="cursor-pointer" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="mx-[10px]">{quantity}</span>
        <div className="cursor-pointer" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="w-[23%]"> {price}</span>
      <div className="pl-3 cursor-pointer" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  cartItem: PropTypes.string.isRequired,
};

export default CheckoutItem;
