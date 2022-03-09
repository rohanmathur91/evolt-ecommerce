export const getSearchProduct = (products, searchQuery) => {
	return products.filter(({ productName }) =>
		searchQuery
			? productName.toLowerCase().includes(searchQuery.toLowerCase())
			: true
	);
};
