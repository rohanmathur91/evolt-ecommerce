import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer";
import { data, brands, types } from "./data";
import {
	getSearchProducts,
	getSortedProducts,
	createFilterObject,
	getFilteredProducts,
} from "./utilities";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [
		{ products, searchQuery, productDetail, productFilter },
		productDispatch,
	] = useReducer(productReducer, {
		products: data,
		searchQuery: "",
		productFilter: {
			sortBy: "",
			price: 5000,
			inStockOnly: false,
			types: createFilterObject(types),
			brands: createFilterObject(brands),
		},
	});

	const searchProducts = getSearchProducts(products, searchQuery);
	const filteredProducts = getFilteredProducts(searchProducts, productFilter);
	const filteredAndSortedProducts = getSortedProducts(
		filteredProducts,
		productFilter
	);

	return (
		<ProductContext.Provider
			value={{
				products,
				searchQuery,
				productFilter,
				productDispatch,
				filteredAndSortedProducts,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

const useProduct = () => useContext(ProductContext);
export { useProduct, ProductProvider };
