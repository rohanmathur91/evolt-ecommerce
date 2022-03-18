import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Products, Wishlist, Cart, Login, Signup } from "./pages";
import { Navbar } from "./components";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/wishlist" element={<Wishlist />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
