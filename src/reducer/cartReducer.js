export const cartReducer = (cart, { type, payload }) => {
	switch (type) {
		case "ADD_TO_CART":
			return cart.cartProducts.length &&
				cart.cartProducts.some(({ id }) => id === payload.id)
				? { ...cart, toastMessage: "Item already present" }
				: {
						...cart,
						cartProducts: [payload, ...cart.cartProducts],
				  };

		case "REMOVE_FROM_CART":
			return {
				...cart,
				cartProducts: cart.cartProducts.filter(({ id }) => id !== payload),
			};

		case "ADD_TO_WISHLIST":
			return cart.wishlist.length &&
				cart.wishlist.some(({ id }) => id === payload.id)
				? { ...cart, toastMessage: "Item already present" }
				: {
						...cart,
						wishlist: [payload, ...cart.wishlist],
				  };

		case "REMOVE_FROM_WISHLIST":
			return {
				...cart,
				wishlist: cart.wishlist.filter(({ id }) => id !== payload),
			};

		default:
			return cart;
	}
};
