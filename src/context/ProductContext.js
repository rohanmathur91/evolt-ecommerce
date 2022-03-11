import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer";
import { data, brands, types } from "../staticData/data";
import {
	getSearchProducts,
	getSortedProducts,
	createFilterObject,
	getFilteredProducts,
} from "./utilities";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [{ products, searchQuery, toast, productFilter }, productDispatch] =
		useReducer(productReducer, {
			products: data,
			searchQuery: "",
			productFilter: {
				sortBy: "",
				price: 5000,
				inStockOnly: false,
				types: createFilterObject(types),
				brands: createFilterObject(brands),
			},
			toast: {
				type: "",
				message: "",
				showToast: false,
			},
		});

	const searchProducts = getSearchProducts(products, searchQuery);
	const filteredProducts = getFilteredProducts(searchProducts, productFilter);
	const sortedProducts = getSortedProducts(filteredProducts, productFilter);

	return (
		<ProductContext.Provider
			value={{
				toast,
				products,
				searchQuery,
				productFilter,
				productDispatch,
				sortedProducts,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

const useProduct = () => useContext(ProductContext);
export { useProduct, ProductProvider };
