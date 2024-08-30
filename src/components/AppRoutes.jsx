import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { CartProvider } from "../context/CartContext";
import Checkout from "./Checkout";
import ProductDetail from "./ProductDetails";
import { DUMMY_PRODUCTS } from "../product";
import Home from "./Home";
import NewArrival from "./NewArrival";
import Shop from "./Shop";
import CustomStitching from "./CustomStitching";
import AppLayout from "./AppLayout";
import Account from "./Account.jsx";
import Footer from "./Footer.jsx";

const AppRoutes = () => {
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

  return (
    <CartProvider>
      <Router>
        <AppLayout
          cartItems={cartItems}
          handleCartToggle={handleCartToggle}
          isCartOpen={isCartOpen}
          products={DUMMY_PRODUCTS}
          handleCartClose={handleCartClose}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={DUMMY_PRODUCTS}
                  handleAddToCart={handleAddToCart}
                />
              }
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/new-arrival"
              element={
                <NewArrival
                  products={DUMMY_PRODUCTS}
                  handleAddToCart={handleAddToCart}
                />
              }
            />
            <Route
              path="/shop"
              element={
                <Shop
                  products={DUMMY_PRODUCTS}
                  handleAddToCart={handleAddToCart}
                />
              }
            />

            <Route
              path="/account"
              element={
               <Account/>
              }
            />
            <Route
              path="/custom-stitching"
              element={
                <CustomStitching
                  products={DUMMY_PRODUCTS}
                  handleAddToCart={handleAddToCart}
                />
              }
            />
            <Route
              path="/details/:id"
              element={<ProductDetail products={DUMMY_PRODUCTS} />}
            />
          </Routes>
          <Footer/>
        </AppLayout>
      </Router>
    </CartProvider>
  );
};

export default AppRoutes;
