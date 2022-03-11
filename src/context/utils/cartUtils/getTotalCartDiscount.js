export const getTotalCartDiscount = (cart, totalPrice) => {
	return cart.length > 0
		? (cart.reduce((total, { discount }) => total + discount, 0) /
				cart.length /
				100) *
				totalPrice
		: 500;
};
