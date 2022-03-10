export const getTotalCartPrice = (cart) => {
	return cart.reduce((total, { price }) => total + Number(price), 0);
};
