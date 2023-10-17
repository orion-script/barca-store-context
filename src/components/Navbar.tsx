import React, { useState } from "react";
import NavLayout from "../Layouts/NavLayout";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { BsCart } from "react-icons/bs";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleMenu = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <NavLayout>
      <nav className="bg-[#fff] w-full h-14 flex justify-between items-center fixed top-0 px-10 z-50">
        <Link to="/home" className="">
          BARCA
        </Link>

        <ul className="md:flex items-center hidden">
          <li className="">
            <a href="#">SHOP</a>
          </li>
          <li className="mx-10">
            <a href="#">SIGN OUT</a>
          </li>
          <li className="flex items-center">
            <BsCart />
            <a href="#" className="ml-2">
              CART
            </a>
          </li>
        </ul>
        <span onClick={handleToggleMenu} className="md:hidden">
          {sidebarOpen ? <MdClose /> : <FcMenu />}
        </span>

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
