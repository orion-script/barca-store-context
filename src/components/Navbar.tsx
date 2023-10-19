import React, { useState, useContext } from "react";
import NavLayout from "../Layouts/NavLayout";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { BsCart } from "react-icons/bs";
import CartIcon from "./CartIcon";
import { MdClose } from "react-icons/md";
import CartDropdown from "./CartDropDown";
import { signOutUser } from "../utils/firebase";
import { UserContext } from "../contexts/userContext";
import { CartContext } from "../contexts/cartContext";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const handleToggleMenu = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <NavLayout>
      <nav className="bg-[#fff] w-full h-14 flex justify-between items-center fixed top-0 px-10 z-50">
        <Link to="/" className="">
          BARCA
        </Link>

        <ul className="md:flex items-center hidden">
          <li className="">
            <a href="/shop">SHOP</a>
          </li>
          {currentUser ? (
            <Link to="" onClick={signOutUser} className="mx-10">
              SIGN OUT
            </Link>
          ) : (
            <Link to="/login">SIGN IN</Link>
          )}
          <CartIcon />
          {/* <li className="flex items-center bg-red-00 w-10 relative cursor-pointer">
            <BsCart className="h-6 w-6" />
            <span className="absolute top-[-10px] right-3 text-red-900">0</span>
          </li> */}
        </ul>
        <span onClick={handleToggleMenu} className="md:hidden">
          {sidebarOpen ? <MdClose /> : <FcMenu />}
        </span>

        {isCartOpen && <CartDropdown />}

        {sidebarOpen && (
          <ul className="w-11/12 h-screen bg-slate-200 text-[#000] absolute top-12 py-10 left-0 pl-10">
            <li className="my-5">SHOP</li>
            <li className="my-5">SIGN OUT</li>
            <li className="my-5">CART</li>
          </ul>
        )}
      </nav>
    </NavLayout>
  );
}

export default Navbar;
