import { Home, Products, Wishlist, Cart, Login } from "./pages";
import { Navbar, Address, AddressList } from "./components";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/Wishlist" element={<Wishlist />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			<Address />
		</div>
	);
}

export default App;
