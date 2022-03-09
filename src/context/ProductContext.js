import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer";
import { data, brands, types } from "./data";

const ProductContext = createContext();

const createFilterObject = (array) => {
	return array.reduce((acc, item) => ({ ...acc, [item]: false }), {});
};

const ProductProvider = ({ children }) => {
	const [
		{ products, searchQuery, productDetail, productFilter },
		productDispatch,
	] = useReducer(productReducer, {
		productFilter: {
			price: 2500,
			sortBy: null,
			inStockOnly: false,
			types: createFilterObject(types),
			brands: createFilterObject(brands),
		},
		searchQuery: "",
		products: data,
		productDetail: null,
	});

	const getSearchProduct = (word) => {
		return data.filter(({ productName }) =>
			searchQuery
				? productName.toLowerCase().includes(word.toLowerCase())
				: true
		);
	};

	const searchProduct = getSearchProduct(searchQuery);

	const getFilteredData = (products) => {
		return products
			.filter(({ price }) => Number(price) <= productFilter.price)
			.filter(({ inStock }) => (productFilter.inStockOnly ? inStock : true));
	};

	const filteredData = getFilteredData(searchProduct);

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
