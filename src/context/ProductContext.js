import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer";
import { data, brands, types } from "./data";
import {
	getFilteredData,
	getSearchProduct,
	getSortedProduct,
	createFilterObject,
} from "./utilities";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [
		{ products, searchQuery, productDetail, productFilter },
		productDispatch,
	] = useReducer(productReducer, {
		products: data,
		searchQuery: "",
		productDetail: null,
		productFilter: {
			price: 5000,
			sortBy: "",
			inStockOnly: false,
			types: createFilterObject(types),
			brands: createFilterObject(brands),
		},
	});

	const searchProduct = getSearchProduct(data, searchQuery);
	const sortedProduct = getSortedProduct(searchProduct, productFilter);
	const filteredData = getFilteredData(sortedProduct, productFilter);

	return (
		<ProductContext.Provider
			value={{
				products,
				searchQuery,
				filteredData,
				productDetail,
				productFilter,
				productDispatch,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

const useProduct = () => useContext(ProductContext);
export { useProduct, ProductProvider };
