import React from "react";
import ReactDOM from "react-dom";
import { ProductProvider } from "./context";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<ProductProvider>
			<App />
		</ProductProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
