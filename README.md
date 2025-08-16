### 🎯 Overview
A simple E-commerce Cart Application built with React, Material-UI, and React Router.
This app fetches products from FakeStore API, allows users to add/remove products to cart, update quantities, and view price details with discounts.

## 🚀 Features

✅ Fetch products from FakeStore API.

✅ Display product list with images, description, and price.

✅ Add / Remove products to cart.

✅ Update product quantity in cart.

✅ Show cart summary (Price, Discount, Final Total).

✅ React Router for navigation (/ for Products, /cart for Cart).

✅ Responsive UI using Material-UI.

## 📁 File Structure

src/
 ├── components/
 │    └── AddToCart.jsx
 │    └── ProductsCard.jsx
 ├── pages/
 │    ├── Products.jsx
 │    ├── Cart.jsx
 │    ├── Navbar.jsx
 ├── App.jsx
 ├── index.jsx
 ├── App.css
 └── index.css

## 🚀 Components

✅ App.jsx: Main component with state management and routing

✅ Navbar.jsx: Navigation bar with cart counter

✅ Products.jsx: Product listing page

✅ ProductsCard.jsx: Individual product card component

✅ Cart.jsx: Cart page component (wrapper)

✅ AddToCart.jsx: Core cart functionality with:

        👉 Quantity adjustment (+/- buttons)

        👉 Item removal

        👉 Price calculations

        👉 Discount application

        👉 Cart item display


## 🚀 API Used
The application uses the FakeStoreAPI to fetch product data.

## 🚀 Routing

1. /: Products page

2. /cart: Cart page (renders AddToCart component)

## 🚀 State Management

1. products: Stores the list of products fetched from API

2. cart: Stores items added to cart with their quantities

## 🚀 Installation
     Clone the repository:
```bash
    git clone https://github.com/arunjo96/Cart-Router.git

    Install dependencies: npm install

    Run the application: npm run dev
