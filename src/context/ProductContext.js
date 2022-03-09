import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer";
import { data } from "./data";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [{ products, searchQuery, wishlist, productDetail }, productDispatch] =
		useReducer(productReducer, {
			searchQuery: "",
			wishlist: [],
			products: data,
			productDetail: null,
		});

	const search = (word) =>
		data.filter(({ productName }) =>
			searchQuery
				? productName.toLowerCase().includes(word.toLowerCase())
				: true
		);
	const filteredData = search(searchQuery);

	return (
		<ProductContext.Provider
			value={{
				products,
				wishlist,
				searchQuery,
				filteredData,
				productDetail,
				productDispatch,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

const useProduct = () => useContext(ProductContext);
export { useProduct, ProductProvider };
