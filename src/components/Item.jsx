import React from "react";
import { Link } from "react-router-dom";
export const Item = ({ item }) => (
  <article className="card">
    {item.image && (
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          height: 140,
          objectFit: "cover",
          borderRadius: 10,
          marginBottom: 10,
        }}
        loading="lazy"
      />
    )}
    <h3>{item.title}</h3>
    <p className="muted">
      {item.category} · ${item.price}
    </p>
    <Link className="btn" to={`/item/${item.id}`}>
      Ver detalle
    </Link>
  </article>
);
