import { Home, Products, Wishlist, Login, Signup } from "./pages";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/wishlist" element={<Wishlist />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
