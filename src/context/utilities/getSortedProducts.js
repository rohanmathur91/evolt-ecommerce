export const getSortedProducts = (products, { sortBy }) => {
	if (sortBy === "SORT_BY_LATEST") {
		return [...products]
			.sort((a, b) => (a.latest === b.latest ? 0 : a ? -1 : 1))
			.reverse();
	} else if (sortBy === "SORT_BY_LOW_TO_HIGH") {
		return [...products].sort((a, b) => a.price - b.price);
	} else if (sortBy === "SORT_BY_HIGH_TO_LOW") {
		return [...products].sort((a, b) => b.price - a.price);
	}
	return products;
};
