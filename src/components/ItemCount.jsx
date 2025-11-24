// src/components/ItemCount.jsx
import React, { useState } from "react";

export const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [qty, setQty] = useState(initial);

  const decrementar = () => {
    setQty((q) => Math.max(1, q - 1));
  };

  const incrementar = () => {
    setQty((q) => Math.min(stock, q + 1));
  };

  const handleAdd = () => {
    if (qty > 0 && onAdd) onAdd(qty);
  };

  return (
    <div className="qty" style={{ marginTop: 16 }}>
      <button onClick={decrementar}>-</button>
      <span>{qty}</span>
      <button onClick={incrementar}>+</button>
      <button className="btn" onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};
