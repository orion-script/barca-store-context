import { useContext } from "react";

import { CartContext } from "../contexts/cartContext";

import CheckoutItem from "../components/CheckoutItem";
import ContainerLayout from "../Layouts/ContainerLayout";
import Navbar from "../components/Navbar";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <ContainerLayout>
      <Navbar />
      <h2 className="text-[32px] mt-20 mb-[25px] text-center">Checkout</h2>

      <div className="w-[55%] min-h-[90vh] flex flex-col items-center m-0 mx-auto mt-50">
        <div className="w-full py-[10px] px-0 flex justify-between border border-gray-900">
          <div className="capitalize w-[23%]">
            <span className="w-[8%]">Product</span>
          </div>
          <div className="capitalize w-[23%]">
            <span className="w-[8%]">Description</span>
          </div>
          <div className="capitalize w-[23%]">
            <span className="w-[8%]">Quantity</span>
          </div>
          <div className="capitalize w-[23%]">
            <span className="w-[8%]">Price</span>
          </div>
          <div className="capitalize w-[23%]">
            <span className="w-[8%]">Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <span className="mt-[30px] ml-auto text-[36px]">
          Total: ${cartTotal}
        </span>
      </div>
    </ContainerLayout>
  );
};

export default Checkout;
