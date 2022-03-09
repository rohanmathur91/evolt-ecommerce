export const productReducer = (state, { type, payload }) => {
	console.log(`${type} :: ${typeof payload} :: ${payload}`);

	switch (type) {
		case "SEARCH":
			return { ...state, searchQuery: payload };

		case "SORT":
			return {
				...state,
				productFilter: { ...state.productFilter, sortBy: payload },
			};

		case "FILTER_BY_PRICE":
			return {
				...state,
				productFilter: {
					...state.productFilter,
					price: payload,
				},
			};

		case "FILTER_BY_BRAND":
			return {
				...state,
				productFilter: {
					...state.productFilter,
					brands: {
						...state.productFilter.brands,
						[payload]: !state.productFilter.brands[payload],
					},
				},
			};

		case "FILTER_BY_TYPE":
			return {
				...state,
				productFilter: {
					...state.productFilter,
					types: {
						...state.productFilter.types,
						[payload]: !state.productFilter.types[payload],
					},
				},
			};
		case "FILTER_BY_IN_STOCK_ONLY":
			return {
				...state,
				productFilter: {
					...state.productFilter,
					inStockOnly: !state.productFilter.inStockOnly,
				},
			};

		case "CLEAR_FILTER":
			return {
				...state,
				productFilter: {
					price: 2500,
					sortBy: null,
					inStockOnly: false,
					types: {},
					brands: {},
				},
			};

		default:
			return state;
	}
};
