// src/components/CheckoutForm.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { createOrder } from "../services/firebaseConfig.js";

export const CheckoutForm = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (items.length === 0) return;

    setSending(true);

    const order = {
      buyer,
      items,
      total: totalPrice(),
      createdAt: new Date().toISOString(),
    };

    try {
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (error) {
      console.error("Error creando orden", error);
    } finally {
      setSending(false);
    }
  };

  if (orderId) {
    return (
      <section className="container-card">
        <h1 className="title">¡Gracias por tu compra!</h1>
        <p>
          Tu número de orden es: <strong>{orderId}</strong>
        </p>
        <p className="muted">
          Guardá este código para cualquier consulta sobre tu pedido.
        </p>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="container-card">
        <h1 className="title">Checkout</h1>
        <p className="muted">No hay productos en el carrito.</p>
      </section>
    );
  }

  return (
    <section className="container-card">
      <h1 className="title">Checkout</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 12, maxWidth: 420 }}
      >
        <input
          required
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
        />
        <input
          required
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
        />
        <button className="btn" type="submit" disabled={sending}>
          {sending ? "Generando orden…" : "Confirmar compra"}
        </button>
      </form>
    </section>
  );
};
