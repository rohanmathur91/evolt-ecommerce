import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  Cart,
  Wishlist,
  Products,
  ProductDetails,
} from "./pages";
import { Navbar, Toast } from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
