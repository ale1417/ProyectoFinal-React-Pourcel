import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar.jsx";
import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { ItemDetailContainer } from "./components/ItemDetailContainer.jsx";
import { Cart } from "./components/Cart.jsx";
import { CheckoutForm } from "./components/CheckoutForm.jsx";

const NotFound = () => (
  <main className="container-card">
    <h1 className="title">404 — Página no encontrada</h1>
    <p className="muted">Revisá la URL o volvé al inicio.</p>
  </main>
);

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Catálogo completo" />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting="Filtrado por categoría" />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
