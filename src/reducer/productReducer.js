export const productReducer = (state, { type, payload }) => {
	switch (type) {
		case "SEARCH":
			return { ...state, searchQuery: payload };

		default:
			return state;
	}
};
