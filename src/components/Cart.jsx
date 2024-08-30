/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCart } from '../context/CartContext'; // Corrected import

const Cart = () => {
  const { cartItems, toggleCart, isCartOpen, removeItemFromCart } = useCart();

  const navigate = useNavigate();

  const buttonBg = "bg-slate-700 hover:bg-slate-900 w-full text-white py-2 px-4 rounded-lg transition duration-200";
  const buttonBgDisable = "bg-slate-500 w-full text-white py-2 px-4 rounded-lg transition duration-200";
  let buttonCart;

  if (cartItems.length === 0) {
    buttonCart = buttonBgDisable;
  } else {
    buttonCart = buttonBg;
  }
 

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);


  function handleClick() {

    
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add items to the cart before proceeding.');
    } else {
      navigate('/checkout', { state: { cartItems } });
    }
 
    
  }

  return (
    <div
      style={{ backgroundColor: "white" }}
      className={`fixed top-0 right-0 w-[30%] h-full bg-white shadow-lg transform transition-transform duration-500 z-50 flex flex-col ${
        isCartOpen ? "translate-x-0 scale-100 opacity-100" : "translate-x-full scale-95 opacity-0"
      }`}
    >
      <div className="flex justify-between items-center bg-white p-4">
        <h2 className="text-base">Shopping Bag ({cartItems.length})</h2>
        <button onClick={toggleCart} className="text-gray-600 hover:text-gray-800">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Scrollable Cart Items */}
      <div className="flex-1 p-4 overflow-y-auto transition-all duration-500">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 transition-transform duration-300"
              style={{ transform: isCartOpen ? "translateY(0)" : "translateY(10px)" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 object-cover"
              />
              <div className="flex-1 ml-4">
                <h4 className="text-sm translate-x-1 font-thin uppercase">
                  {item.title}
                </h4>
                <p className="text-sm font-thin text-gray-500">
                  ₹{item.price} x {item.quantity}
                </p>
                
              </div>
              <XMarkIcon onClick={() => removeItemFromCart(item.id)} className="h-5 w-5 cursor-pointer" />
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <div className="p-4 border-t">
      <p className="text-lg font-bold">Subtotal: ₹{subtotal}</p>
        <button
          className={buttonCart}
          onClick={handleClick}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
