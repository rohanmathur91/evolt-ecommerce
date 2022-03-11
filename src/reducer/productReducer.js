export const productReducer = (state, { type, payload }) => {
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
					price: 5000,
					sortBy: "",
					inStockOnly: false,
					types: {
						wired: false,
						wireless: false,
						speaker: false,
						noiseCancelling: false,
					},
					brands: {
						bose: false,
						boat: false,
						marshall: false,
						sony: false,
						jbl: false,
					},
				},
			};

		case "TOAST":
			return state.toast.showToast
				? { ...state, toast: payload }
				: {
						...state,
						toast: {
							...state.toast,
							showToast: payload.showToast,
							message: payload.message,
							type: payload.type,
						},
				  };

		default:
			return state;
	}
};
