// src/components/CartWidget.jsx
import React from "react";
import { useCart } from "../context/CartContext.jsx";

export const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <div className="cart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.44c-.16.28-.25.61-.25.96 0 1.11.89 2 2 2h10v-2h-9.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h5.72a2 2 0 0 0 1.79-1.11l3.58-7.16a1 1 0 0 0-.9-1.45h-14.42l-.31-2zm0 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 .001 4.001A2 2 0 0 0 17 20z" />
      </svg>
      <span>Carrito</span>
      <span className="badge">{totalQuantity()}</span>
    </div>
  );
};
