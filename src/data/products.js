// src/data/products.js
import { fetchProducts, fetchProductById } from "../services/firebaseConfig.js";

// Mock local
const LOCAL = [
  {
    id: "1",
    title: "Papas clásicas",
    category: "snacks",
    price: 1200,
    description: "Papas crocantes tamaño familiar.",
    image: "/images/papas.jpg",
  },
  {
    id: "2",
    title: "Galletitas choco",
    category: "dulces",
    price: 950,
    description: "Galletas con chips de chocolate.",
    image: "/images/galletitas.jpg",
  },
  {
    id: "3",
    title: "Agua mineral 1.5L",
    category: "bebidas",
    price: 800,
    description: "Agua mineral sin gas.",
    image: "/images/agua.jpg",
  },
  {
    id: "4",
    title: "Jugo naranja",
    category: "bebidas",
    price: 1100,
    description: "Jugo 1L sin conservantes.",
    image: "/images/jugo.jpg",
  },
  {
    id: "5",
    title: "Maní salado",
    category: "snacks",
    price: 700,
    description: "Maní tostado salado.",
    image: "/images/mani.jpg",
  },
  {
    id: "6",
    title: "Caramelos mix",
    category: "dulces",
    price: 600,
    description: "Surtido de caramelos.",
    image: "/images/caramelos.jpg",
  },
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function getProducts() {
  // Primero intento Firestore
  const fbProducts = await fetchProducts(null);
  if (fbProducts) return fbProducts;

  // Si no hay Firebase, mock local
  await delay(300);
  return LOCAL;
}

export async function getProductsByCategory(categoryId) {
  const fbProducts = await fetchProducts(categoryId);
  if (fbProducts) return fbProducts;

  await delay(300);
  return LOCAL.filter((p) => p.category === categoryId);
}

export async function getProductById(id) {
  const fbProduct = await fetchProductById(id);
  if (fbProduct !== null) return fbProduct;

  await delay(200);
  return LOCAL.find((p) => p.id === id) || null;
}
