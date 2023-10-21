import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";

import Button from "./button/button.component";
import CartItem from "./CartItem";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const { setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };

  return (
    <div className="absolute w-[240px] h-[340px] flex flex-col p-[20px] border border-[#000] bg-[#fff] top-[90px] right-[9rem] md:right-[40px] z-10">
      <div className="h-[240px] flex flex-col overflow-scroll">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="text-[18px] my-[50px] mx-auto">
            Your cart is empty
          </span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
