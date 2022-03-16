import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CartProvider, ProductProvider } from "./context";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ProductProvider>
				<CartProvider>
					<App />
				</CartProvider>
			</ProductProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
