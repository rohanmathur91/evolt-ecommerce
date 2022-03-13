import { Home, Products, Footer, WishList, Cart } from "./pages";
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
				<Route path="/wishList" element={<WishList />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;
