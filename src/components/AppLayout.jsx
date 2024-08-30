/* eslint-disable react/prop-types */

import { useLocation } from "react-router-dom";
import Header from "./Header";
import Cart from "./Cart";

const AppLayout = ({ children, products, cartItems, handleCartToggle, isCartOpen, handleCartClose }) => {
  const location = useLocation(); 

  

  return (
    <>
      {location.pathname !== '/checkout' && (<>
        <Header onCartToggle={handleCartToggle} products={products} cartItemCount={cartItems.length} />
        <Cart isOpen={isCartOpen} items={cartItems} onClose={handleCartClose} />

      </>
        
      )}
      {children}
    </>
  );
};

export default AppLayout;
