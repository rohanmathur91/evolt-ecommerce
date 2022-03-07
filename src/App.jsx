import { Home } from "./pages";
import { Navbar, Footer } from "./components";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			{/* productlisting */}
			{/* wishlist */}
			{/* cart */}
			<Footer />
		</div>
	);
}

export default App;
