import { Home, Products, Wishlist, Cart, Login, Signup } from "./pages";
import { Navbar, Address, AddressList } from "./components";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/Wishlist" element={<Wishlist />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/address" element={<Address />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
