// src/context/CartContext.jsx
import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (product, quantity) => {
    setItems((prev) => {
      const index = prev.findIndex((p) => p.id === product.id);

      if (index >= 0) {
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          quantity: updated[index].quantity + quantity,
        };
        return updated;
      }

      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity,
        },
      ];
    });
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setItems([]);

  const totalQuantity = () =>
    items.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = () =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      clearCart,
      totalQuantity,
      totalPrice,
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
