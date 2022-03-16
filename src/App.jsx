import { Home, Products, Wishlist } from "./pages";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/Wishlist" element={<Wishlist />} />
				<Route path="/mock" element={<Mockman />} />
			</Routes>
		</div>
	);
}

export default App;
