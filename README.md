# 🍔 Proyecto Final — Food Go (E-commerce con React + Firebase)

Food Go es una Single Page Application (SPA) de e-commerce desarrollada con **React**, que permite navegar un catálogo de snacks, bebidas y dulces, ver el detalle de cada producto, agregar unidades al carrito y finalizar la compra generando una orden en **Firestore**.

---

## 🚀 Tecnologías utilizadas

- **React 18 (Vite)** — Renderizado rápido y modular
- **React Router DOM 6** — Navegación SPA sin recargas
- **Context API** — Estado global del carrito
- **Firebase / Firestore** — Base de datos de productos y registro de órdenes
- **CSS** — Estilos custom (dark theme)

---

## 📁 Estructura principal de la aplicación

```
src/
├─ App.jsx
├─ main.jsx
├─ index.css
│
├─ context/
│   └─ CartContext.jsx
│
├─ services/
│   └─ firebaseConfig.js
│
├─ data/
│   └─ products.js
│
├─ components/
│   ├─ NavBar.jsx
│   ├─ CartWidget.jsx
│   ├─ ItemListContainer.jsx
│   ├─ ItemList.jsx
│   ├─ Item.jsx
│   ├─ ItemDetailContainer.jsx
│   ├─ ItemDetail.jsx
│   ├─ ItemCount.jsx
│   ├─ Cart.jsx
│   ├─ CartItem.jsx
│   └─ CheckoutForm.jsx
```

Las imágenes utilizadas se encuentran en:

```
public/images/
```

---

## ⚙️ Instalación del proyecto

Clona el repositorio:

```bash
git clone
```

Entra al proyecto:

```bash
cd ProyectoFinal-Pourcel
```

Instala dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación se ejecutará en:

```
http://localhost:5173
```

---

## 🔑 Configuración de Firebase

Crea un archivo **.env** en la raíz del proyecto y agrega tus credenciales:

```
VITE_FIREBASE_API_KEY=TU_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=TU_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=TU_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=TU_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=TU_SENDER_ID
VITE_FIREBASE_APP_ID=TU_APP_ID
```

---

## 🛒 Características del proyecto

### ✔️ Catálogo dinámico (Firestore)

- Lectura en tiempo real desde la colección **products**
- Listado completo y filtrado por categorías
- Vista en detalle con descripción, precio e imagen

### ✔️ Navegación SPA

- Rutas dinámicas `/item/:id`
- Categorías `/category/:categoryId`
- Sin recargas de página

### ✔️ Carrito de compras (Context API)

- Agregar productos con cantidad seleccionada
- Vista del total de unidades en el **CartWidget**
- Eliminar productos o vaciar carrito
- Cálculo de subtotales y total general

### ✔️ Checkout con Firebase

- Formulario de compra con validación
- Guardado de orden en la colección **orders**
- Visualización del **ID de orden** al usuario

### ✔️ UX mejorada

- Loaders
- Mensajes condicionales (“carrito vacío”, “sin stock”, etc.)

---

## 🗄️ Reglas de Firestore utilizadas

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /products/{docId} {
      allow read: if true;
      allow write: if false;
    }

    match /orders/{docId} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

---

## 🌐 Deploy

👉 El enlace del deploy irá aquí (una vez generado):  
**[]**
