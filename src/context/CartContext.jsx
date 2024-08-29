/* eslint-disable react/prop-types */

import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  isCartOpen: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        // Update quantity if item exists
        const updatedItems = state.items.map((item, index) => 
          index === existingItemIndex ? { ...item, quantity: item.quantity + action.payload.quantity } : item
        );
        return { ...state, items: updatedItems };
      } else {
        // Add new item if it doesn't exist
        return { ...state, items: [...state.items, action.payload] };
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'TOGGLE_CART':
      return { ...state, isCartOpen: !state.isCartOpen };
    default:
      return state;
  }
};


export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCart = (item) => {
    const updatedItem = { ...item, quantity: 1 };
    dispatch({ type: 'ADD_ITEM', payload: updatedItem });
    if (!state.isCartOpen) {
        dispatch({ type: 'TOGGLE_CART' }); // Open the cart automatically if it's not open
      }
  };

  const removeItemFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        isCartOpen: state.isCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};
