/**
 * Gives products based on the user search
 * @param  {array} products
 * @param  {string} searchQuery
 * @returns {array} searched products
 */
export const getSearchProducts = (products, searchQuery) => {
	return products.filter(({ productName }) =>
		searchQuery
			? productName.toLowerCase().includes(searchQuery.toLowerCase())
			: true
	);
};
