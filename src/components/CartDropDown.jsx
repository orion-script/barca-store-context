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
    <div className="fixed w-[90%] md:w-[250px] h-[250px] md:h-[340px] flex flex-col p-[10px] md:p-[20px] border border-[#000] bg-[#fff] top-[55px] right-[5%] md:right-12 z-50 rounded-lg animate-dropdown">
      <div className="flex flex-col h-60 overflow-y-scroll">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="text-lg  my-[50px] mx-auto">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
