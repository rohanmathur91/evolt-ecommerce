import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  Cart,
  Wishlist,
  Profile,
  Products,
  ProductDetails,
  Checkout,
  PageNotFound,
} from "./pages";
import {
  Navbar,
  Toast,
  Address,
  UserProfile,
  Orders,
  AccountSettings,
  PrivateRoute,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<UserProfile />} />
            <Route path="addresses" element={<Address />} />
            <Route path="orders" element={<Orders />} />
            <Route path="settings" element={<AccountSettings />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
