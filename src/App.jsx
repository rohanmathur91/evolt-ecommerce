import { useState } from "react";
import { Home } from "./pages";
import { Navbar, Footer, Sidebar } from "./components";
import "./App.css";

function App() {
	const [toggleSidebar, setToggleSidebar] = useState(false);

	return (
		<div className="App">
			<Navbar setToggleSidebar={setToggleSidebar} />
			<Sidebar
				toggleSidebar={toggleSidebar}
				setToggleSidebar={setToggleSidebar}
			/>
			<Home />
			<Footer />
		</div>
	);
}

export default App;
