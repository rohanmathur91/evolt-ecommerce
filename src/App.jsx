import { Home, Products, Footer, Wishlist, Cart } from "./pages";
import { Navbar, Address, AddressList } from "./components";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Products />
			<Address />
			<AddressList />
		</div>
	);
}

export default App;
