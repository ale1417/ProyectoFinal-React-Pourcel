// src/components/ItemDetail.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount.jsx";
import { useCart } from "../context/CartContext.jsx";

export const ItemDetail = ({ product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return <p className="muted">Producto no encontrado.</p>;
  }

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <div>
      {product.image && (
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            maxHeight: 380,
            objectFit: "cover",
            borderRadius: 16,
            marginBottom: 20,
          }}
        />
      )}

      <h1 className="title">{product.title}</h1>
      <p className="muted">Categoría: {product.category}</p>
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>

      {added ? (
        <div className="right" style={{ marginTop: 16 }}>
          <Link className="btn" to="/cart">
            Ir al carrito
          </Link>
          <Link className="btn" to="/">
            Seguir comprando
          </Link>
        </div>
      ) : (
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      )}
    </div>
  );
};
