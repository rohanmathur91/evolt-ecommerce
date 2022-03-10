import { Home, Products, Footer, Wishlist, Cart } from "./pages";
import { Navbar } from "./components";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			{/* <Home /> */}
			<Products />
			<Cart />
			{/* <Wishlist /> */}

			{/* <Footer /> */}
		</div>
	);
}

export default App;
