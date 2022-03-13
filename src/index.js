import React from "react";
import ReactDOM from "react-dom";
import { CartProvider, ProductProvider } from "./context";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

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
