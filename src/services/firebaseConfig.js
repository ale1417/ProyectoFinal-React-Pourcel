// src/services/firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

let app = null;
let db = null;

export function initFirebase() {
  if (db) return db;

  const cfg = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };

  // Si falta config, usamos mock
  if (!cfg.apiKey || !cfg.projectId) {
    console.warn("[Firebase] Config faltante. Usando mock local.");
    return null;
  }

  app = initializeApp(cfg);
  db = getFirestore(app);
  console.log("[Firebase] Iniciado con proyecto", cfg.projectId);
  return db;
}

// --- Productos --- //
export async function fetchProducts(categoryId) {
  const database = initFirebase();
  if (!database) return null; // mock

  const colRef = collection(database, "products");
  const q = categoryId
    ? query(colRef, where("category", "==", categoryId))
    : colRef;

  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function fetchProductById(id) {
  const database = initFirebase();
  if (!database) return null;

  const ref = doc(database, "products", id);
  const snap = await getDoc(ref);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

// --- Órdenes --- //
export async function createOrder(order) {
  const database = initFirebase();
  if (!database) {
    // Fallback: id simulado
    const fakeId =
      "MOCK-" + Math.random().toString(36).slice(2, 10).toUpperCase();
    console.log("[Firebase] Orden simulada:", fakeId, order);
    return fakeId;
  }

  const ref = await addDoc(collection(database, "orders"), order);
  console.log("[Firebase] Orden creada:", ref.id);
  return ref.id;
}
