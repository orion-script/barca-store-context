import React from 'react'
// import { Link } from "react"
import {FcMenu} from "react-icons/fc"
import {BsCart} from "react-icons/bs"

function Navbar() {
  return (
    <>
        <nav className='w-full h-12 border border-gray-500 shadow-lg flex justify-between px-3 md:px-20 items-center'>
            <div className=''>
                <FcMenu className='cursor-pointer' />
            </div>

            {/* <Link href="./" className='hidden md:block'>BARCELONA</Link>
            <Link href="./" className='md:hidden'>BARCA</Link> */}
            
            

            <div className="flex items-center">
                <BsCart />
                <p className='ml-3'>CART</p>
            </div>
        </nav>

        {/* <ul className='flex flex-col'>
            {/* <li><a href='/'>FORWARDS</a></li>
            <li><a href='/'>MIDFIELDERS</a></li>
            <li><a href='/'>DEFENDERS</a></li>
            <li><a href='/'>GOAL KEEPERS</a></li>
        </ul> */}

    </>
  )
}

export default Navbar