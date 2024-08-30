/* eslint-disable react/prop-types */
import Product from "./Product.jsx";
import SlidingBanner from "./SlidingBanner.jsx";

const Home = ({ products, handleAddToCart}) => {

  return (
    <>
      <SlidingBanner />
      <Product onAddToCart={handleAddToCart} products={products} />      
    </>
  );
};

export default Home;


