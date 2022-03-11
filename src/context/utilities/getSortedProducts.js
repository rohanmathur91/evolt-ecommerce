export const getSortedProducts = (products, { sortBy }) => {
	switch (sortBy) {
		case "SORT_BY_LATEST":
			return [...products]
				.sort((a, b) => (a.latest === b.latest ? 0 : a ? -1 : 1))
				.reverse();

		case "SORT_BY_LOW_TO_HIGH":
			return [...products].sort((a, b) => a.price - b.price);

		case "SORT_BY_HIGH_TO_LOW":
			return [...products].sort((a, b) => b.price - a.price);

		default:
			return products;
	}
};
