import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/products.js";
import { ItemList } from "./ItemList.jsx";

export const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const request = categoryId
      ? getProductsByCategory(categoryId)
      : getProducts();

    request
      .then((result) => {
        setItems(result);
      })
      .catch((error) => {
        console.error("Error cargando productos", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <section className="container-card">
      <h1 className="title">{greeting}</h1>
      {loading ? (
        <p className="muted">Cargando productos…</p>
      ) : (
        <ItemList items={items} />
      )}
    </section>
  );
};
