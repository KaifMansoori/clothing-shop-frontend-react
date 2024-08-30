/* eslint-disable react/prop-types */
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import {useCart} from '../context/CartContext.jsx'
import { Link } from 'react-router-dom';


const ProductCard = ({ item }) => {
  const { addItemToCart } = useCart();

  const handleAddToCart = () => {
    addItemToCart(item, 1);
  };

  

  const {image, title, price, id}=item;
  return (<>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
       <Link to={`/details/${id}`}><img className="w-full h-auto object-contain" src={image} alt={title} /></Link>
      <div className="px-3 py-2">
      <Link to={`/details/${item.id}`}><div className="text-sm font-light mb-2 h-10 hover:underline uppercase">
          {title}
        </div></Link>
        <div className="flex items-center	 justify-between">
          <p className="text-gray-700 font-bold text-base text-lg p-2">
            ₹{price}
          </p>
          <p>
            
            <button onClick={handleAddToCart} className="bg-gradient-to-r from-[#fac3da] to-[#d0cdfd]  text-white py-2 px-4 rounded-lg flex items-center space-x-2">
              <ShoppingBagIcon className="h-5 w-5  text-gray-950" />
              <span className=" text-gray-950">ADD</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  </>
    
  );
};


export default ProductCard;
