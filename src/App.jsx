import { useState,useEffect } from "react";
import Header from "./components/Header.jsx";
import Product from "./components/Product.jsx";
import SlidingBanner from "./components/SlidingBanner.jsx";
import Cart from "./components/Cart.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DUMMY_PRODUCTS } from "./product.js";



export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setIsCartOpen(true); 
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };


  

const addresses = [
  "Bengaluru",
  "Kolkata",
  "Noida",
  "Chennai",
  "Mumbai"
  
];




function getRandomAddress() {
  return addresses[Math.floor(Math.random() * addresses.length)];
}

function getRandomProduct() {
  const randomProduct = DUMMY_PRODUCTS[Math.floor(Math.random() * DUMMY_PRODUCTS.length)];
  return randomProduct.title; // Assuming 'title' is the product name
}



useEffect(() => {
  const truncateTitle = (title, length) => {
    return title.length > length ? `${title.slice(0, length)}...` : title;
  };

  const interval = setInterval(() => {
    const randomAddress = getRandomAddress();
    const randomProductTitle = getRandomProduct();
    const truncatedTitle = truncateTitle(randomProductTitle, 30); // Adjust the length as needed

    toast(
      <div className="font-thin text-sm text-gray-600">
        Someone from <span className="font-semibold">{randomAddress } </span>
         bought <span className="font-semibold text-ellipsis text-nowrap">{truncatedTitle}</span> </div>,
      {
        position: "bottom-left",
      }
    );
  }, 25000);

  return () => clearInterval(interval);
}, []);


  return (
    <>
    
      <Header onCartToggle={handleCartToggle} cartItemCount={cartItems.length} />
      <SlidingBanner />
      <Product onAddToCart={handleAddToCart}  products={DUMMY_PRODUCTS} />
      <Cart isOpen={isCartOpen} items={cartItems}  onClose={handleCartClose} />
      <ToastContainer/>
    </>
  );
}
