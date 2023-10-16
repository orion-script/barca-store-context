import React from "react";
// import { Link } from "react";
import { FcMenu } from "react-icons/fc";
import { BsCart } from "react-icons/bs";
import NavLayout from "../Layouts/NavLayout";

function Navbar() {
  return (
    <NavLayout>
      <nav className="bg-[#fff] w-full h-full shadow-lg flex justify-between items-center">
        <div className="">
          <FcMenu className="cursor-pointer" />
        </div>

        <p className="hidden md:block">BARCELONA</p>
        <p className="md:hidden">BARCA</p>

        <div className="flex items-center">
          <BsCart />
          <p className="ml-3">CART</p>
        </div>
      </nav>

      {/* <ul className='flex flex-col'>
            {/* <li><a href='/'>FORWARDS</a></li>
            <li><a href='/'>MIDFIELDERS</a></li>
            <li><a href='/'>DEFENDERS</a></li>
            <li><a href='/'>GOAL KEEPERS</a></li>
        </ul> */}
    </NavLayout>
  );
}

export default Navbar;
