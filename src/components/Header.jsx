/* eslint-disable react/prop-types */
import logo from "../assets/rozy-clothing-logo-transparent.png";
import {useCart} from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

import {
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import TopHeader from "./TopHeader";
 
const Header = () => { 
  const { cartItems, toggleCart} = useCart();
  
 

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
            <Link to="/new-arrival">New Arrival</Link>
            </li>
            <li className="cursor-pointer text-sm">
            <Link to="/custom-stitching">Custom Stitching</Link> 
            </li>
            <li className="cursor-pointer text-sm">
            <Link to="/shop">Shop</Link> 
            </li>
            
          </ul>
          <ul className="flex items-center gap-4">
            
            <li className="cursor-pointer text-sm">
            <Link to="/account">LOGIN</Link> 
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
