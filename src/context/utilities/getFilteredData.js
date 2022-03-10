export const getFilteredData = (
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
