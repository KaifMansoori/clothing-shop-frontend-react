/* eslint-disable react/prop-types */
import logo from "../assets/rozy-clothing-logo-transparent.png";
import {useCart} from '../context/CartContext.jsx'

import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import TopHeader from "./TopHeader";

const Header = () => {
  const { cartItems, toggleCart} = useCart();


  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

 

  return (
    <>
       <TopHeader />
      <header className="relative top-0 left-0 w-full h-16 bg-white shadow-md p-6">
        <nav className="flex justify-between items-center h-full px-4">
          <a href="/">
            <img src={logo} className="h-36 w-auto object-contain" />
          </a>
          <ul className="flex items-center gap-4 uppercase">
            <li className="cursor-pointer text-sm">
              New Arrival
            </li>
            <li className="cursor-pointer text-sm">
              Custom Stitching
            </li>
            <li className="cursor-pointer text-sm">
              Shop
            </li>
            <li className="cursor-pointer text-sm">
              Track Order
            </li>
          </ul>
          <ul className="flex items-center gap-4">
            <li>
              <button onClick={toggleSearch} className="text-white focus:outline-none">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              </button>
              {isSearchOpen && (
                <div className="absolute top-[3.5rem] right-0 w-64 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full px-2 py-1 border-b text-gray-500 focus:outline-none"
                      autoFocus
                    />
                    <button onClick={toggleSearch} className="text-gray-500 hover:text-gray-700 focus:outline-none ml-2">
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}
            </li>
            <li>
              Wishlist
            </li>
            <li>
              Login
            </li>
            <li>
              <ShoppingBagIcon
                onClick={toggleCart}
                className="cursor-pointer h-6 w-6 text-gray-500"
              />  
                {cartItems.length >= 0 && (
                <span className="absolute top-5 h-5 w-5 right-10 rounded-2xl bg-black text-gray-light inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
