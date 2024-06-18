// CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const updateItemQuantity = (id, quantity) => {
    setCart((prevCart) => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      updateItemQuantity,
      emptyCart,
      isEmpty: cart.length === 0,
      totalUniqueItems: cart.length,
      totalItems: cart.reduce((total, item) => total + item.quantity, 0),
      cartTotal: cart.reduce((total, item) => total + item.price * item.quantity, 0),
    }}>
      {children}
    </CartContext.Provider>
  );
};
