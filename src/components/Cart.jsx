// src/components/Cart.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { CartItem } from "./CartItem.jsx";

export const Cart = () => {
  const { items, removeItem, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <section className="container-card">
        <h1 className="title">Carrito vacío</h1>
        <p className="muted">Agregá productos desde el catálogo.</p>
        <Link className="btn" to="/">
          Ir al catálogo
        </Link>
      </section>
    );
  }

  return (
    <section className="container-card">
      <h1 className="title">Tu carrito</h1>

      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cant.</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={() => removeItem(item.id)}
            />
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan="3">Total</td>
            <td>${totalPrice()}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>

      <div className="right" style={{ marginTop: 16 }}>
        <button className="btn" type="button" onClick={clearCart}>
          Vaciar carrito
        </button>
        <Link className="btn" to="/checkout">
          Finalizar compra
        </Link>
      </div>
    </section>
  );
};
