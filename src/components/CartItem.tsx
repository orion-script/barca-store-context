import React from "react";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="w-full flex h-[80px] mb-[15px]">
      <img src={imageUrl} alt={`${name}`} className="w-[30%]" />
      <div className="w-[70%] flex flex-col items-start justify-center py-[10px] px-[20px]">
        <span className="text-[16px]">{name}</span>
        <span className="text-[16px]">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
