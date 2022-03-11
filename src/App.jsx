import { Home, Products, Footer, Wishlist, Cart } from "./pages";
import { Navbar, Address } from "./components";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			{/* <Home /> */}
			<Products />
			{/* <Cart /> */}
			{/* <Wishlist /> */}
			<Address />

			{/* <Footer /> */}
		</div>
	);
}

export default App;
