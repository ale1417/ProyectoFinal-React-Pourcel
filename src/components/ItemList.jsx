import React from "react";
import { Item } from "./Item.jsx";
export const ItemList = ({ items }) => (
  <div className="grid">
    {items.map((p) => (
      <Item key={p.id} item={p} />
    ))}
  </div>
);
