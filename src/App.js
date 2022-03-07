import "./App.css";
import { Home } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
