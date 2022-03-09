export const getFilteredData = (
	products,
	{ price: productPrice, inStockOnly }
) => {
	return products
		.filter(({ price }) => Number(price) <= productPrice)
		.filter(({ inStock }) => (inStockOnly ? inStock : true));
};
