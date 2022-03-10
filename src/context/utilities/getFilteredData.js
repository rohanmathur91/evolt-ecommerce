export const getFilteredData = (
	products,
	{ price: filterPrice, inStockOnly, brands: filterBrands, types }
) => {
	return products
		.filter(({ price }) => Number(price) <= filterPrice)
		.filter(({ inStock }) => (inStockOnly ? inStock : true))
		.filter(({ brand }) => (filterBrands[brand] ? brand : true));
};
