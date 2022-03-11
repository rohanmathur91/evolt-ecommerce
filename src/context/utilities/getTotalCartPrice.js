export const getTotalCartPrice = (cart) => {
	return cart.reduce(
		(total, { price, quantity }) => total + Number(price) * quantity,
		0
	);
};
