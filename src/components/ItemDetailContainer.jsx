import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products.js";
import { ItemDetail } from "./ItemDetail.jsx";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then(setProduct)
      .catch((err) => console.error("Error cargando detalle", err))
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <section className="container-card">
      {loading ? (
        <p className="muted">Cargando detalle…</p>
      ) : (
        <ItemDetail product={product} />
      )}
    </section>
  );
};
