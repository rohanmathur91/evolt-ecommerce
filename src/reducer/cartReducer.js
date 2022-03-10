export const cartReducer = (cart, { type, payload }) => {
	switch (type) {
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
