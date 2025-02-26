import React, { useState, useContext } from "react";
import NavLayout from "../Layouts/NavLayout";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropDown";
import { signOutUser } from "../utils/firebase";
import { UserContext } from "../contexts/userContext";
import { CartContext } from "../contexts/cartContext";

function Navbar() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <nav className="bg-[#fff] w-full h-14 flex justify-between items-center fixed top-0 px-5 md:px-10 z-50">
        <Link to="/" className="">
          BARCA
        </Link>

        <ul className="flex items-center">
          <li className="">
            <a href="/shop">SHOP</a>
          </li>
          {currentUser ? (
            <Link to="" onClick={signOutUser} className="mx-5 md:mx-10">
              SIGN OUT
            </Link>
          ) : (
            <Link to="/login" className="mx-5 md:mx-10">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </ul>

        {isCartOpen && <CartDropdown />}
      </nav>
    </>
  );
}

export default Navbar;
