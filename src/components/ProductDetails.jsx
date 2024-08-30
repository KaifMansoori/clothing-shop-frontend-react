/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from '../context/CartContext.jsx';

const ProductDetail = ({ products }) => {
  const { addItemToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const product = products.find((p) => p.id.toString() === id);

  const handleAddToCart = () => {
    addItemToCart(product, quantity);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-2 p-10">
      
      <div className="md:w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="md:w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      
      
      <div className="md:w-1/2 p-4">
        <h1 className="text-2xl font-normal mb-2 uppercase">{product.title}</h1>
        <h2 className="text-2xl font-thin mb-2">₹ {product.price}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="quantity-selector mb-5">
          <button 
            onClick={handleDecrease} 
            disabled={quantity <= 1} 
            className="bg-gray-300 px-3 py-1 rounded"
          >
            -
          </button>
          <span className="mx-3">{quantity}</span>
          <button 
            onClick={handleIncrease} 
            className="bg-gray-300 px-3 py-1 rounded"
          >
            +
          </button>
        </div>
        <div className="mb-4"></div>
        <button onClick={handleAddToCart} className=" bg-slate-700 hover:bg-slate-900 font-normal text-white py-2 px-4 rounded w-full uppercase">
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
