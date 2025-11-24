import React from "react";
import { NavLink, Link } from "react-router-dom";
import { CartWidget } from "./CartWidget.jsx";
import logoUrl from "/foodgo.svg";

const categories = [
  { id: "snacks", label: "Snacks" },
  { id: "bebidas", label: "Bebidas" },
  { id: "dulces", label: "Dulces" },
];

export const NavBar = () => (
  <nav className="nav">
    <div className="nav-inner">
      <div className="brand">
        <Link to="/" className="link" aria-label="Inicio">
          <img src={logoUrl} alt="Food Go logo" />
        </Link>
        <Link to="/" className="link">
          Food Go
        </Link>
      </div>
      <div className="links">
        <NavLink
          to="/"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
        >
          Inicio
        </NavLink>

        {categories.map((c) => (
          <NavLink
            key={c.id}
            to={`/category/${c.id}`}
            className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          >
            {c.label}
          </NavLink>
        ))}

        <Link to="/cart" className="cart-link">
          <CartWidget />
        </Link>
      </div>
    </div>
  </nav>
);
