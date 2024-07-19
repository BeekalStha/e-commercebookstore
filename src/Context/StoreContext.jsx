import React, { createContext, useEffect, useState } from 'react';
import { book_list } from '../assets/assets'; // Adjust path as needed

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});



  const addToCart = (itemId) => {
   
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      if (newCartItems[itemId] > 1) {
        newCartItems[itemId] -= 1;
      } else {
        delete newCartItems[itemId];
      }
      return newCartItems;
    });
  };
 
  useEffect(() => {
    console.log(cartItems);    
    // Handle potential errors during data fetching or updates if applicable
  }, [cartItems] );
  const contextValue = {
    book_list, 
    cartItems,
    addToCart,
    removeFromCart,
  };



  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
