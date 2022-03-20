/**
 * Filter the products based on the applied filter
 *
 * @param  {array} products
 * @param  {object} filter object
 * @returns {array} filtered products
 */

export const getFilteredProducts = (
	products,
	{ price: filterPrice, inStockOnly, brands: filterBrands, types }
) => {
	return products
		.filter(({ price }) => Number(price) <= filterPrice)
		.filter(({ inStock }) => (inStockOnly ? inStock : true))
		.filter(({ brand }) => {
			return Object.keys(filterBrands).some((brand) => filterBrands[brand])
				? filterBrands[brand]
				: true;
		})
		.filter(({ type }) => {
			return Object.keys(types).some((type) => types[type])
				? types[type]
				: true;
		});
};
