import React from "react";
import ReactDOM from "react-dom";
import { CartProvider, ProductProvider } from "./context";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<ProductProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</ProductProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
