// src/components/CartItem.jsx
import React from "react";

export const CartItem = ({ item, onRemove }) => {
  return (
    <tr>
      <td style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            width="48"
            height="48"
            style={{ objectFit: "cover", borderRadius: 8 }}
          />
        )}
        <span>{item.title}</span>
      </td>
      <td>{item.quantity}</td>
      <td>${item.price}</td>
      <td>${item.price * item.quantity}</td>
      <td>
        <button className="btn" type="button" onClick={onRemove}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};
